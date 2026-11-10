import { NextRequest, NextResponse } from "next/server";
import { getSessions } from "@/lib/kv";

/** Compact feed of recent sessions for coaching reviews (warm-ups left out) */
export async function GET(req: NextRequest) {
  const count = Number.parseInt(req.nextUrl.searchParams.get("count") || "5", 10);
  const sessions = await getSessions(count);

  const summary = sessions.map((s) => ({
    id: s.id,
    date: s.date ?? s.startedAt.slice(0, 10),
    template: s.dayType,
    label: s.dayLabel,
    sessionRpe: s.sessionRpe,
    notes: s.notes,
    exercises: s.exercises
      .filter((e) => e.tag !== "prehab" && e.sets.length > 0)
      .map((e) => ({
        name: e.exerciseName,
        tag: e.tag,
        sets: e.sets.map((set) => ({ value: set.value, weight: set.weight, rpe: set.rpe })),
      })),
  }));

  return NextResponse.json({ sessions: summary, count: sessions.length });
}
