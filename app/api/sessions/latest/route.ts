import { NextRequest, NextResponse } from "next/server";
import { getLatestSessions } from "@/lib/kv";

/** Convenience endpoint for Claude to fetch recent sessions */
export async function GET(req: NextRequest) {
  const count = parseInt(req.nextUrl.searchParams.get("count") || "5");
  const sessions = await getLatestSessions(count);

  // Compute summary stats for quick coaching overview
  const summary = sessions.map((s) => {
    const flExercises = s.exercises.filter((e) => e.tag === "fl");
    const hspuExercises = s.exercises.filter((e) => e.tag === "hspu");
    const flagExercises = s.exercises.filter((e) => e.tag === "flag");

    const computeTUT = (exercises: typeof flExercises) =>
      exercises.reduce(
        (total, ex) =>
          total + ex.sets.reduce((sum, set) => sum + set.value, 0),
        0
      );

    return {
      id: s.id,
      dayType: s.dayType,
      dayLabel: s.dayLabel,
      date: s.startedAt,
      sessionRpe: s.sessionRpe,
      notes: s.notes,
      fl: {
        totalTUT: computeTUT(flExercises),
        sets: flExercises.reduce((n, e) => n + e.sets.length, 0),
        exercises: flExercises.map((e) => ({
          name: e.exerciseName,
          sets: e.sets.map((s) => ({ value: s.value, weight: s.weight, rpe: s.rpe })),
        })),
      },
      hspu: {
        totalReps: computeTUT(hspuExercises),
        sets: hspuExercises.reduce((n, e) => n + e.sets.length, 0),
        exercises: hspuExercises.map((e) => ({
          name: e.exerciseName,
          sets: e.sets.map((s) => ({ value: s.value, weight: s.weight, rpe: s.rpe })),
        })),
      },
      flag: {
        totalTUT: computeTUT(flagExercises),
        sets: flagExercises.reduce((n, e) => n + e.sets.length, 0),
      },
    };
  });

  return NextResponse.json({ sessions: summary, count: sessions.length });
}
