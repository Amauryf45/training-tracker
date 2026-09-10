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
const restDayLabels: Record<number, string> = { 0: "Course", 3: "Course", 6: "Repos" };

// Program start date — no weeks shown before this
const PROGRAM_START = new Date(2026, 8, 7); // 7 sept 2026 (month is 0-indexed)

/** Local date string YYYY-MM-DD (no UTC shift) */
function toLocalDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

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

function weekKey(monday: Date): string { return toLocalDateStr(monday); }

function rpeColor(rpe?: number): string {
  if (!rpe) return "text-[var(--text-dim)]";
  if (rpe <= 7) return "text-[var(--green)]";
  if (rpe <= 8) return "text-[var(--orange)]";
  return "text-[var(--red)]";
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/** Get week number since program start */
function getWeekNumber(monday: Date): number {
  const startMonday = getMonday(PROGRAM_START);
  const diff = monday.getTime() - startMonday.getTime();
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function getMesoAndWeek(weekNum: number): { meso: number; week: number } {
  if (weekNum < 1) return { meso: 0, week: 0 };
  const meso = Math.ceil(weekNum / 5);
  const week = ((weekNum - 1) % 5) + 1;
  return { meso, week };
}

interface WeekData { monday: Date; days: Date[]; }

function TrainingDayCard({ date, routineDay, session }: {
  date: Date;
  routineDay: typeof currentRoutine.days[0];
  session?: SessionLog;
}) {
  const today = new Date();
  const isToday = isSameDay(date, today);
  const isPast = date < today && !isToday;
  const hasSession = !!session;
  const dateStr = toLocalDateStr(date);

  return (
    <Link
      href={hasSession ? `/session?day=${routineDay.id}&date=${dateStr}&view=true` : `/session?day=${routineDay.id}&date=${dateStr}`}
      className={`block rounded-xl border p-3 transition-all active:scale-[0.98] ${
        isToday
          ? "border-[var(--accent)] bg-gradient-to-br from-[#fff9f5] to-white shadow-sm"
          : hasSession
          ? "border-[var(--green)]/50 bg-[var(--green-bg)]/20"
          : isPast
          ? "border-[var(--border)] bg-[var(--surface2)]/50 opacity-50"
          : "border-[var(--border)] bg-white shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--text-dim)]">{frenchDayNames[date.getDay()]} {date.getDate()}</span>
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
              ✓
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
    <div className={`rounded-xl border p-2.5 ${
      isToday ? "border-[var(--accent)]/30 bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface2)]/30"
    }`}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-[var(--text-dim)]">{frenchDayNames[date.getDay()]} {date.getDate()}</span>
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

function WeekBlock({ week, sessions, weekNum }: { week: WeekData; sessions: SessionLog[]; weekNum: number }) {
  const today = new Date();
  const isCurrentWeek = isSameDay(getMonday(today), week.monday);
  const weekStart = formatDateShort(week.days[0]);
  const weekEnd = formatDateShort(week.days[6]);
  const { meso, week: wk } = getMesoAndWeek(weekNum);
  const isDeload = wk === 5;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 px-1">
        <h2 className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-wider">
          {weekStart} — {weekEnd}
        </h2>
        {weekNum > 0 && (
          <span className={`text-[0.65rem] font-bold ${isDeload ? "text-[var(--green)]" : "text-[var(--text-dim)]"}`}>
            M{meso}S{wk}{isDeload ? " · Deload" : ""}
          </span>
        )}
        {isCurrentWeek && (
          <span className="text-[0.65rem] font-bold text-[var(--accent)] ml-auto">← Cette semaine</span>
        )}
      </div>
      <div className="space-y-1.5">
        {week.days.map((date) => {
          const dow = date.getDay();
          const routineDayId = dayOfWeekToRoutine[dow];
          const routineDay = routineDayId ? currentRoutine.days.find((d) => d.id === routineDayId) : null;

          if (routineDay) {
            const dateStr = toLocalDateStr(date);
            const session = sessions.find((s) => {
              const sDate = toLocalDateStr(new Date(s.startedAt));
              return sDate === dateStr && s.dayType === routineDay.id;
            });
            return <TrainingDayCard key={dow} date={date} routineDay={routineDay} session={session} />;
          }

          const restLabel = restDayLabels[dow];
          if (restLabel) return <RestDayCard key={dow} date={date} label={restLabel} />;
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

  useEffect(() => {
    const today = new Date();
    const currentMonday = getMonday(today);
    const programMonday = getMonday(PROGRAM_START);
    const allWeeks: WeekData[] = [];

    // Start from program start, go up to 4 weeks in the future
    const startMonday = programMonday;
    const endMonday = new Date(currentMonday);
    endMonday.setDate(currentMonday.getDate() + 4 * 7);

    const cursor = new Date(startMonday);
    while (cursor <= endMonday) {
      allWeeks.push({ monday: new Date(cursor), days: getWeekDays(new Date(cursor)) });
      cursor.setDate(cursor.getDate() + 7);
    }
    setWeeks(allWeeks);

    fetch("/api/sessions?count=50")
      .then((r) => r.json())
      .then((data) => {
        setSessions(Array.isArray(data) ? data : []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded && currentWeekRef.current) {
      currentWeekRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [loaded]);

  const today = new Date();
  const currentMondayStr = weekKey(getMonday(today));
  const programMonday = getMonday(PROGRAM_START);

  const scrollToToday = () => {
    currentWeekRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-[var(--background)] pt-4 pb-3 border-b border-[var(--border)] mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-[var(--foreground)]">Entraînement</h1>
            <p className="text-xs text-[var(--text-dim)]">
              Mésocycle {currentRoutine.mesocycle} · Bloc 1 — Reset fondation
            </p>
          </div>
          <button
            onClick={scrollToToday}
            className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1.5 rounded-lg active:bg-[var(--accent)]/20"
          >
            Aujourd&apos;hui
          </button>
        </div>
      </div>

      {/* Weeks — only render after sessions are loaded to avoid layout shift */}
      {!loaded && (
        <div className="flex items-center justify-center py-12">
          <p className="text-sm text-[var(--text-dim)]">Chargement...</p>
        </div>
      )}
      {loaded && weeks.map((week) => {
        const wkStr = weekKey(week.monday);
        const isCurrentWeek = wkStr === currentMondayStr;
        const weekNum = getWeekNumber(week.monday);

        return (
          <div key={wkStr} ref={isCurrentWeek ? currentWeekRef : undefined}>
            <WeekBlock week={week} sessions={sessions} weekNum={weekNum} />
          </div>
        );
      })}
    </main>
  );
}
