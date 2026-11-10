import { kv } from "@vercel/kv";
import { SessionLog } from "./types";

const SESSION_PREFIX = "session:";
const SESSION_LIST_KEY = "sessions";

export async function saveSession(session: SessionLog): Promise<void> {
  const key = `${SESSION_PREFIX}${session.id}`;
  const exists = await kv.exists(key);
  await kv.set(key, session);
  if (!exists) {
    await kv.lpush(SESSION_LIST_KEY, session.id);
  }
}

export async function getSession(id: string): Promise<SessionLog | null> {
  return kv.get<SessionLog>(`${SESSION_PREFIX}${id}`);
}

export async function deleteSession(id: string): Promise<void> {
  await kv.del(`${SESSION_PREFIX}${id}`);
  await kv.lrem(SESSION_LIST_KEY, 0, id);
}

/** Newest first, by session date then start time */
export async function getSessions(count?: number): Promise<SessionLog[]> {
  const ids = await kv.lrange<string>(SESSION_LIST_KEY, 0, -1);
  if (!ids || ids.length === 0) return [];

  const sessions = await Promise.all(
    [...new Set(ids)].map((id) => kv.get<SessionLog>(`${SESSION_PREFIX}${id}`))
  );
  const sorted = sessions
    .filter((s): s is SessionLog => s !== null)
    .sort((a, b) => {
      const da = a.date ?? a.startedAt.slice(0, 10);
      const db = b.date ?? b.startedAt.slice(0, 10);
      return db.localeCompare(da) || b.startedAt.localeCompare(a.startedAt);
    });
  return count ? sorted.slice(0, count) : sorted;
}

/** Clean duplicate IDs from the session list */
export async function deduplicateSessionList(): Promise<number> {
  const ids = await kv.lrange<string>(SESSION_LIST_KEY, 0, -1);
  if (!ids || ids.length === 0) return 0;

  const uniqueIds = [...new Set(ids)];
  if (uniqueIds.length === ids.length) return 0;

  await kv.del(SESSION_LIST_KEY);
  await kv.rpush(SESSION_LIST_KEY, ...uniqueIds);
  return ids.length - uniqueIds.length;
}
