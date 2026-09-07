"use client";

import Link from "next/link";
import { currentRoutine } from "@/lib/routine";

const tagColors: Record<string, string> = {
  fl: "bg-green-900/40 text-green-400",
  hspu: "bg-blue-900/40 text-blue-400",
  flag: "bg-yellow-900/40 text-yellow-400",
};

export default function Home() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sun
  const dayMap: Record<number, string> = { 1: "day1", 2: "day2", 4: "day4", 5: "day5" };
  const suggestedDay = dayMap[dayOfWeek];

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold mb-1">Training Tracker</h1>
      <p className="text-[var(--text-dim)] text-sm mb-8">
        Mesocycle {currentRoutine.mesocycle} &middot; Week {currentRoutine.week}
      </p>

      <div className="space-y-3">
        {currentRoutine.days.map((day) => {
          const isSuggested = day.id === suggestedDay;
          return (
            <Link
              key={day.id}
              href={`/session?day=${day.id}`}
              className={`block rounded-xl border p-4 transition-all active:scale-[0.98] ${
                isSuggested
                  ? "border-[var(--accent)] bg-[var(--accent)]/5"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{day.label}</span>
                {isSuggested && (
                  <span className="text-xs font-bold text-[var(--accent2)] bg-[var(--accent)]/20 px-2 py-0.5 rounded-full">
                    TODAY
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {day.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-gray-800 text-gray-400"}`}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[var(--text-dim)] mt-1">{day.focus}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-dim)] text-center">
          Wed: Run &middot; Sat: Rest &middot; Sun: Run
        </p>
      </div>
    </main>
  );
}
