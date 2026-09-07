"use client";

import Link from "next/link";
import { currentRoutine } from "@/lib/routine";

const tagColors: Record<string, string> = {
  fl: "bg-[var(--green-bg)] text-[var(--green)]",
  hspu: "bg-[var(--blue-bg)] text-[var(--blue)]",
  flag: "bg-[var(--orange-bg)] text-[var(--orange)]",
};

const frenchDayLabels: Record<string, string> = {
  day1: "Jour 1 — Tirage + Flag (Volume)",
  day2: "Jour 2 — Poussée + Équilibre (Volume)",
  day4: "Jour 4 — Tirage + Flag (Intensité)",
  day5: "Jour 5 — Poussée (Intensité)",
};

const frenchFocus: Record<string, string> = {
  day1: "Front lever volume + Human flag",
  day2: "HSPU volume + équilibre",
  day4: "Front lever intensité + Human flag",
  day5: "HSPU intensité + force",
};

export default function Home() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayMap: Record<number, string> = { 1: "day1", 2: "day2", 4: "day4", 5: "day5" };
  const suggestedDay = dayMap[dayOfWeek];

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-0.5">Entraînement</h1>
      <p className="text-sm text-[var(--text-dim)] mb-8">
        Mésocycle {currentRoutine.mesocycle} &middot; Semaine {currentRoutine.week}
      </p>

      <div className="space-y-3">
        {currentRoutine.days.map((day) => {
          const isSuggested = day.id === suggestedDay;
          return (
            <Link
              key={day.id}
              href={`/session?day=${day.id}`}
              className={`block rounded-2xl border p-4 transition-all active:scale-[0.98] shadow-sm ${
                isSuggested
                  ? "border-[var(--accent)] bg-gradient-to-br from-[#fff9f5] to-white"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[0.95rem]">{frenchDayLabels[day.id] || day.label}</span>
                {isSuggested && (
                  <span className="text-xs font-bold text-[var(--accent)]">
                    AUJOURD&apos;HUI
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {day.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${tagColors[tag] || "bg-gray-100 text-gray-500"}`}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[var(--text-dim)] mt-1">{frenchFocus[day.id] || day.focus}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-dim)] text-center">
          Mer : Course &middot; Sam : Repos &middot; Dim : Course
        </p>
      </div>
    </main>
  );
}
