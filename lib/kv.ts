import { kv } from "@vercel/kv";
import { SessionLog, Routine } from "./types";
import { currentRoutine } from "./routine";

const SESSION_PREFIX = "session:";
const SESSION_LIST_KEY = "sessions";
const ROUTINE_KEY = "routine";

export async function saveSession(session: SessionLog): Promise<void> {
  const key = `${SESSION_PREFIX}${session.id}`;
  const exists = await kv.exists(key);
  await kv.set(key, session);
  // Only add to list if it's a new session (prevents duplicates on re-save)
  if (!exists) {
    await kv.lpush(SESSION_LIST_KEY, session.id);
  }
}

export async function getSession(id: string): Promise<SessionLog | null> {
  return kv.get<SessionLog>(`${SESSION_PREFIX}${id}`);
}

export async function getLatestSessions(count: number = 50): Promise<SessionLog[]> {
  const ids = await kv.lrange(SESSION_LIST_KEY, 0, count - 1);
  if (!ids || ids.length === 0) return [];

  // Deduplicate IDs
  const uniqueIds = [...new Set(ids)];

  const sessions = await Promise.all(
    uniqueIds.map((id) => kv.get<SessionLog>(`${SESSION_PREFIX}${id}`))
  );
  return sessions
    .filter((s): s is SessionLog => s !== null)
    .sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
}

export async function getRoutine(): Promise<Routine> {
  const stored = await kv.get<Routine>(ROUTINE_KEY);
  if (stored) return stored;
  await kv.set(ROUTINE_KEY, currentRoutine);
  return currentRoutine;
}

export async function updateRoutine(routine: Routine): Promise<void> {
  await kv.set(ROUTINE_KEY, routine);
}

/** Clean duplicate IDs from the session list */
export async function deduplicateSessionList(): Promise<number> {
  const ids = await kv.lrange(SESSION_LIST_KEY, 0, -1);
  if (!ids || ids.length === 0) return 0;

  const uniqueIds = [...new Set(ids)];
  if (uniqueIds.length === ids.length) return 0;

  // Rebuild the list without duplicates
  await kv.del(SESSION_LIST_KEY);
  if (uniqueIds.length > 0) {
    await kv.rpush(SESSION_LIST_KEY, ...uniqueIds);
  }
  return ids.length - uniqueIds.length;
}
