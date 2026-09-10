"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { currentRoutine } from "@/lib/routine";
import { SessionLog } from "@/lib/types";

const tagColors: Record<string, string> = {
  fl: "bg-[var(--green-bg)] text-[var(--green)]",
  hspu: "bg-[var(--blue-bg)] text-[var(--blue)]",
  flag: "bg-[var(--orange-bg)] text-[var(--orange)]",
};

const dayOfWeekToRoutine: Record<number, string> = { 1: "day1", 2: "day2", 4: "day4", 5: "day5" };
const frenchDayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const frenchMonths = ["jan", "fév", "mar", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];

const restDayLabels: Record<number, string> = {
  0: "Course",
  3: "Course",
  6: "Repos",
};

function getMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateShort(d: Date): string {
  return `${d.getDate()} ${frenchMonths[d.getMonth()]}`;
}

function getWeekDays(monday: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function weekId(monday: Date): string {
  return monday.toISOString().split("T")[0];
}

function rpeColor(rpe?: number): string {
  if (!rpe) return "text-[var(--text-dim)]";
  if (rpe <= 7) return "text-[var(--green)]";
  if (rpe <= 8) return "text-[var(--orange)]";
  return "text-[var(--red)]";
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

interface WeekData {
  monday: Date;
  days: Date[];
}

function TrainingDayCard({ date, routineDay, session }: {
  date: Date;
  routineDay: typeof currentRoutine.days[0];
  session?: SessionLog;
}) {
  const today = new Date();
  const isToday = isSameDay(date, today);
  const isPast = date < today && !isToday;
  const hasSession = !!session;
  const totalSets = session?.exercises.reduce((n, e) => n + e.sets.length, 0) || 0;

  return (
    <Link
      href={hasSession ? `/session?day=${routineDay.id}&date=${date.toISOString().split("T")[0]}&view=true` : `/session?day=${routineDay.id}&date=${date.toISOString().split("T")[0]}`}
      className={`block rounded-xl border p-3 transition-all active:scale-[0.98] ${
        isToday
          ? "border-[var(--accent)] bg-gradient-to-br from-[#fff9f5] to-white shadow-sm"
          : hasSession
          ? "border-[var(--green)] bg-[var(--green-bg)]/30"
          : isPast
          ? "border-[var(--border)] bg-[var(--surface2)]/50 opacity-60"
          : "border-[var(--border)] bg-white shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--text-dim)]">{frenchDayNames[date.getDay()]}</span>
          <span className="font-semibold text-sm">{routineDay.label.split(" — ")[1]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {isToday && (
            <span className="text-[0.65rem] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-1.5 py-0.5 rounded-full">
              AUJOURD&apos;HUI
            </span>
          )}
          {hasSession && (
            <span className="text-[0.65rem] font-bold text-[var(--green)] bg-[var(--green-bg)] px-1.5 py-0.5 rounded-full">
              ✓ {totalSets} séries
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {routineDay.tags.map((tag) => (
          <span key={tag} className={`text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-md ${tagColors[tag] || ""}`}>
            {tag.toUpperCase()}
          </span>
        ))}
        {session?.sessionRpe && (
          <span className={`text-[0.65rem] font-bold ml-auto ${rpeColor(session.sessionRpe)}`}>
            RPE {session.sessionRpe}
          </span>
        )}
      </div>
    </Link>
  );
}

function RestDayCard({ date, label }: { date: Date; label: string }) {
  const isToday = isSameDay(date, new Date());
  return (
    <div className={`rounded-xl border p-3 ${
      isToday ? "border-[var(--accent)]/30 bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface2)]/30"
    }`}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-[var(--text-dim)]">{frenchDayNames[date.getDay()]}</span>
        <span className="text-sm text-[var(--text-dim)]">{label}</span>
        {isToday && (
          <span className="text-[0.65rem] font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-1.5 py-0.5 rounded-full ml-auto">
            AUJOURD&apos;HUI
          </span>
        )}
      </div>
    </div>
  );
}

function WeekBlock({ week, sessions }: { week: WeekData; sessions: SessionLog[] }) {
  const today = new Date();
  const isCurrentWeek = isSameDay(getMonday(today), week.monday);
  const weekStart = formatDateShort(week.days[0]);
  const weekEnd = formatDateShort(week.days[6]);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 px-1">
        <h2 className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-wider">
          {weekStart} — {weekEnd}
        </h2>
        {isCurrentWeek && (
          <span className="text-[0.65rem] font-bold text-[var(--accent)]">Cette semaine</span>
        )}
      </div>
      <div className="space-y-1.5">
        {week.days.map((date) => {
          const dow = date.getDay();
          const routineDayId = dayOfWeekToRoutine[dow];
          const routineDay = routineDayId ? currentRoutine.days.find((d) => d.id === routineDayId) : null;

          if (routineDay) {
            const dateStr = date.toISOString().split("T")[0];
            const session = sessions.find((s) => {
              const sDate = new Date(s.startedAt).toISOString().split("T")[0];
              return sDate === dateStr && s.dayType === routineDay.id;
            });
            return <TrainingDayCard key={dow} date={date} routineDay={routineDay} session={session} />;
          }

          const restLabel = restDayLabels[dow];
          if (restLabel) {
            return <RestDayCard key={dow} date={date} label={restLabel} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const [sessions, setSessions] = useState<SessionLog[]>([]);
  const [weeks, setWeeks] = useState<WeekData[]>([]);
  const currentWeekRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Generate weeks: 4 past + current + 4 future
  useEffect(() => {
    const today = new Date();
    const currentMonday = getMonday(today);
    const allWeeks: WeekData[] = [];

    for (let i = -4; i <= 4; i++) {
      const monday = new Date(currentMonday);
      monday.setDate(currentMonday.getDate() + i * 7);
      allWeeks.push({ monday, days: getWeekDays(monday) });
    }
    setWeeks(allWeeks);

    // Fetch sessions
    fetch("/api/sessions?count=50")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setSessions(list);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Scroll to current week on load
  useEffect(() => {
    if (loaded && currentWeekRef.current) {
      currentWeekRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [loaded]);

  const today = new Date();
  const currentMondayStr = weekId(getMonday(today));

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-0.5">Entraînement</h1>
        <p className="text-sm text-[var(--text-dim)]">
          Mésocycle {currentRoutine.mesocycle} · Semaine {currentRoutine.week}
        </p>
      </div>

      {weeks.map((week) => {
        const isCurrentWeek = weekId(week.monday) === currentMondayStr;
        return (
          <div key={weekId(week.monday)} ref={isCurrentWeek ? currentWeekRef : undefined}>
            <WeekBlock week={week} sessions={sessions} />
          </div>
        );
      })}
    </main>
  );
}
