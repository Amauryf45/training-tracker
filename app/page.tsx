"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { SessionLog, SkillTag } from "@/lib/types";
import { templates } from "@/lib/templates";
import { blockFor, blockWeek, plannedFor, PlannedSession, PROGRAM_END, PROGRAM_START } from "@/lib/program";
import { addDays, formatDayLabel, formatLong, formatShort, mondayOf, sessionDate, todayStr } from "@/lib/dates";

const tagStyle: Partial<Record<SkillTag, { label: string; cls: string }>> = {
  fl: { label: "FL", cls: "bg-[var(--green-bg)] text-[var(--green)]" },
  hspu: { label: "HSPU", cls: "bg-[var(--blue-bg)] text-[var(--blue)]" },
  flag: { label: "FLAG", cls: "bg-[var(--orange-bg)] text-[var(--orange)]" },
  acc: { label: "FORCE", cls: "bg-[var(--accent)]/10 text-[var(--accent)]" },
};

function rpeColor(rpe?: number): string {
  if (!rpe) return "text-[var(--text-dim)]";
  if (rpe <= 7) return "text-[var(--green)]";
  if (rpe <= 8) return "text-[var(--orange)]";
  return "text-[var(--red)]";
}

function shortLabel(label: string): string {
  return label.startsWith("Jour ") && label.includes(" — ") ? label.split(" — ")[1] : label;
}

function sessionTags(s: SessionLog): SkillTag[] {
  if (s.dayRoutine) return s.dayRoutine.tags;
  const skills = [...new Set(s.exercises.map((e) => e.tag))].filter((t) => t === "fl" || t === "hspu" || t === "flag");
  return skills.length > 0 ? skills : ["acc"];
}

function Tags({ tags, extra }: { tags: SkillTag[]; extra?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 mt-1">
      {tags.map((t) => tagStyle[t] && (
        <span key={t} className={`text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-md ${tagStyle[t]!.cls}`}>{tagStyle[t]!.label}</span>
      ))}
      {extra}
    </div>
  );
}

function DoneCard({ session }: { session: SessionLog }) {
  return (
    <Link href={`/session?id=${encodeURIComponent(session.id)}`}
      className="block rounded-xl border border-[var(--green)]/50 bg-[var(--green-bg)]/20 p-2.5 active:scale-[0.98] transition-all">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm">{shortLabel(session.dayLabel)}</span>
        <span className="text-[0.65rem] font-bold text-[var(--green)] bg-[var(--green-bg)] px-1.5 py-0.5 rounded-full">✓</span>
      </div>
      <Tags tags={sessionTags(session)} extra={session.sessionRpe ? (
        <span className={`text-[0.65rem] font-bold ml-auto ${rpeColor(session.sessionRpe)}`}>RPE {session.sessionRpe}</span>
      ) : null} />
    </Link>
  );
}

function PlannedCard({ planned, date, isToday, isPast }: { planned: PlannedSession; date: string; isToday: boolean; isPast: boolean }) {
  const startable = !!planned.template && templates.some((t) => t.id === planned.template);
  let tone = "border-dashed border-[var(--border)] bg-white";
  if (isToday) tone = "border-[var(--accent)] bg-gradient-to-br from-[#fff9f5] to-white shadow-sm";
  else if (isPast) tone = "border-[var(--border)] bg-[var(--surface2)]/50 opacity-50";
  const cls = `block rounded-xl border p-2.5 ${tone}`;
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm">{planned.label}</span>
        {isToday && <span className="text-[0.65rem] font-bold text-[var(--accent)]">PRÉVU AUJOURD&apos;HUI</span>}
        {isPast && <span className="text-[0.65rem] text-[var(--text-dim)]">non faite</span>}
      </div>
      <Tags tags={planned.tags} />
    </>
  );
  if (!startable) return <div className={cls}>{body}</div>;
  return (
    <Link href={`/session?template=${planned.template}&date=${date}`} className={`${cls} active:scale-[0.98] transition-all`}>
      {body}
    </Link>
  );
}

function DayRow({ date, sessions, onAdd }: { date: string; sessions: SessionLog[]; onAdd: (date: string) => void }) {
  const today = todayStr();
  const isToday = date === today;
  const planned = sessions.length === 0 ? plannedFor(date) : undefined;
  const empty = sessions.length === 0 && !planned;

  return (
    <div className="flex items-start gap-2">
      <div className={`w-12 shrink-0 pt-2.5 text-xs font-bold ${isToday ? "text-[var(--accent)]" : "text-[var(--text-dim)]"}`}>
        {formatDayLabel(date)}
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        {sessions.map((s) => <DoneCard key={s.id} session={s} />)}
        {planned && <PlannedCard planned={planned} date={date} isToday={isToday} isPast={date < today} />}
        {empty && (
          <div className={`h-9 rounded-xl ${isToday ? "border border-[var(--accent)]/30 bg-[var(--surface)]" : ""}`} />
        )}
      </div>
      <button onClick={() => onAdd(date)} aria-label={`Ajouter une séance le ${date}`}
        className="w-8 h-9 shrink-0 rounded-lg text-[var(--text-dim)] active:bg-[var(--surface2)] text-lg leading-none">
        +
      </button>
    </div>
  );
}

function WeekBlock({ monday, sessionsByDate, onAdd }: {
  monday: string;
  sessionsByDate: Map<string, SessionLog[]>;
  onAdd: (date: string) => void;
}) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(monday, i));
  const isCurrentWeek = monday === mondayOf(todayStr());
  const weekBlocks = [...new Set(days.map((d) => blockFor(d)).filter((b) => b !== undefined))];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 px-1">
        <h2 className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-wider">
          {formatShort(days[0])} — {formatShort(days[6])}
        </h2>
        {weekBlocks.map((b) => (
          <span key={b.name} className="text-[0.65rem] font-bold text-[var(--text-dim)]">
            {b.short}{b.end > addDays(b.start, 6) ? ` S${blockWeek(b, monday)}` : ""}
          </span>
        ))}
        {isCurrentWeek && <span className="text-[0.65rem] font-bold text-[var(--accent)] ml-auto">← Cette semaine</span>}
      </div>
      <div className="space-y-1.5">
        {days.map((d) => <DayRow key={d} date={d} sessions={sessionsByDate.get(d) ?? []} onAdd={onAdd} />)}
      </div>
    </div>
  );
}

function TemplatePicker({ date, onClose }: { date: string; onClose: () => void }) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl max-w-lg w-full p-5 pb-8 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-bold text-base mb-1">Nouvelle séance</h3>
        <p className="text-xs text-[var(--text-dim)] mb-4">{formatLong(date)}</p>
        <div className="space-y-2">
          {templates.map((t) => (
            <button key={t.id} onClick={() => router.push(`/session?template=${t.id}&date=${date}`)}
              className="w-full text-left rounded-xl border border-[var(--border)] p-3 active:scale-[0.98] transition-all">
              <div className="font-semibold text-sm">{t.label}</div>
              <div className="text-xs text-[var(--text-dim)]">{t.focus}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [sessions, setSessions] = useState<SessionLog[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [pickerDate, setPickerDate] = useState<string | null>(null);
  const currentWeekRef = useRef<HTMLDivElement>(null);

  const today = todayStr();
  const currentMonday = mondayOf(today);

  useEffect(() => {
    fetch("/api/sessions")
      .then((r) => r.json())
      .then((data) => setSessions(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) currentWeekRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
  }, [loaded]);

  const sessionsByDate = useMemo(() => {
    const map = new Map<string, SessionLog[]>();
    for (const s of [...sessions].sort((a, b) => a.startedAt.localeCompare(b.startedAt))) {
      const d = sessionDate(s);
      map.set(d, [...(map.get(d) ?? []), s]);
    }
    return map;
  }, [sessions]);

  const lastPlanned = mondayOf(PROGRAM_END);
  const ahead = addDays(currentMonday, 14);
  const lastMonday = lastPlanned > ahead ? lastPlanned : ahead;
  const mondays: string[] = [];
  for (let m = mondayOf(PROGRAM_START); m <= lastMonday; m = addDays(m, 7)) mondays.push(m);

  // Date-dependent text waits for the client: the page is prerendered at build time
  const currentBlock = loaded ? blockFor(today) : undefined;

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4">
      <div className="sticky top-0 z-20 bg-[var(--background)] pt-4 pb-3 border-b border-[var(--border)] mb-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 mr-2">
            <h1 className="text-xl font-extrabold text-[var(--foreground)]">Entraînement</h1>
            <p className="text-xs text-[var(--text-dim)] min-h-4 truncate">{loaded && (currentBlock?.name ?? "Hors bloc")}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => setPickerDate(today)}
              className="text-xs font-bold text-white bg-[var(--accent)] px-3 py-1.5 rounded-lg whitespace-nowrap active:opacity-90">
              + Séance
            </button>
            <button onClick={() => currentWeekRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1.5 rounded-lg active:bg-[var(--accent)]/20">
              Aujourd&apos;hui
            </button>
          </div>
        </div>
      </div>

      {!loaded && <p className="text-sm text-[var(--text-dim)] text-center py-12">Chargement...</p>}
      {error && <p className="text-sm text-[var(--red)] text-center mb-4">Impossible de charger les séances. Vérifie ta connexion.</p>}

      {loaded && mondays.map((m) => (
        <div key={m} ref={m === currentMonday ? currentWeekRef : undefined} className="scroll-mt-24">
          <WeekBlock monday={m} sessionsByDate={sessionsByDate} onAdd={setPickerDate} />
        </div>
      ))}

      {pickerDate && <TemplatePicker date={pickerDate} onClose={() => setPickerDate(null)} />}
    </main>
  );
}
