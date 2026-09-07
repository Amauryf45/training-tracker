import { kv } from "@vercel/kv";
import { SessionLog, Routine } from "./types";
import { currentRoutine } from "./routine";

const SESSION_PREFIX = "session:";
const SESSION_LIST_KEY = "sessions";
const ROUTINE_KEY = "routine";

export async function saveSession(session: SessionLog): Promise<void> {
  await kv.set(`${SESSION_PREFIX}${session.id}`, session);
  await kv.lpush(SESSION_LIST_KEY, session.id);
}

export async function getSession(id: string): Promise<SessionLog | null> {
  return kv.get<SessionLog>(`${SESSION_PREFIX}${id}`);
}

export async function getLatestSessions(count: number = 10): Promise<SessionLog[]> {
  const ids = await kv.lrange(SESSION_LIST_KEY, 0, count - 1);
  if (!ids || ids.length === 0) return [];

  const sessions = await Promise.all(
    ids.map((id) => kv.get<SessionLog>(`${SESSION_PREFIX}${id}`))
  );
  return sessions.filter((s): s is SessionLog => s !== null);
}

export async function getRoutine(): Promise<Routine> {
  const stored = await kv.get<Routine>(ROUTINE_KEY);
  if (stored) return stored;
  // Initialize with current routine
  await kv.set(ROUTINE_KEY, currentRoutine);
  return currentRoutine;
}

export async function updateRoutine(routine: Routine): Promise<void> {
  await kv.set(ROUTINE_KEY, routine);
}

export async function getAllSessionIds(): Promise<string[]> {
  return kv.lrange(SESSION_LIST_KEY, 0, -1);
}
