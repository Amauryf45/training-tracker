"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useCallback, useEffect, useRef } from "react";
import { currentRoutine } from "@/lib/routine";
import { ExerciseDef, SetLog, ExerciseLog, SessionLog } from "@/lib/types";

const borderColors: Record<string, string> = {
  fl: "border-l-[var(--green)]",
  hspu: "border-l-[var(--blue)]",
  flag: "border-l-[var(--orange)]",
  prehab: "border-l-[var(--text-dim)]",
  acc: "border-l-[var(--accent)]",
  core: "border-l-[var(--accent)]",
};

/** Parse rest string like "2.5 min" or "90s" into seconds */
function parseRestSeconds(rest: string): number {
  if (!rest) return 0;
  const minMatch = rest.match(/([\d.]+)\s*min/);
  if (minMatch) return Math.round(parseFloat(minMatch[1]) * 60);
  const secMatch = rest.match(/([\d.]+)\s*s/);
  if (secMatch) return Math.round(parseFloat(secMatch[1]));
  return 0;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ─── Rest Timer ─── */
function RestTimer({
  duration,
  exerciseName,
  onDismiss,
}: {
  duration: number;
  exerciseName: string;
  onDismiss: () => void;
}) {
  const [remaining, setRemaining] = useState(duration);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setRemaining(duration);
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          // Vibrate if available
          if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [duration]);

  const progress = duration > 0 ? (duration - remaining) / duration : 0;
  const done = remaining === 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
        {/* Timer ring */}
        <div className="relative w-11 h-11 shrink-0">
          <svg viewBox="0 0 36 36" className="w-11 h-11 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15" fill="none"
              stroke={done ? "var(--green)" : "var(--accent)"}
              strokeWidth="3"
              strokeDasharray={`${progress * 94.25} 94.25`}
              strokeLinecap="round"
            />
          </svg>
          <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${done ? "text-[var(--green)]" : "text-[var(--accent)]"}`}>
            {done ? "GO" : formatTime(remaining)}
          </span>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[var(--foreground)]">
            {done ? "Rest complete!" : "Rest"}
          </div>
          <div className="text-xs text-[var(--text-dim)] truncate">
            {exerciseName} &middot; {formatTime(duration)}
          </div>
        </div>
        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            done
              ? "bg-[var(--green)] text-white"
              : "bg-[var(--surface2)] text-[var(--text-dim)]"
          }`}
        >
          {done ? "Done" : "Skip"}
        </button>
      </div>
    </div>
  );
}

/* ─── Set Input Row ─── */
function SetInput({
  exercise,
  setIndex,
  set,
  onUpdate,
  onComplete,
}: {
  exercise: ExerciseDef;
  setIndex: number;
  set: SetLog;
  onUpdate: (set: SetLog) => void;
  onComplete: () => void;
}) {
  const isHold = exercise.type === "hold";
  const filled = set.value > 0;

  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className="text-xs text-[var(--text-dim)] w-6 shrink-0 font-medium">#{setIndex + 1}</span>
      <div className="flex-1 flex gap-2">
        <div className="flex-1">
          <input
            type="number"
            inputMode="decimal"
            placeholder={isHold ? "sec" : "reps"}
            value={set.value || ""}
            onChange={(e) => onUpdate({ ...set, value: parseFloat(e.target.value) || 0 })}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-center text-[var(--foreground)]"
          />
        </div>
        {exercise.tag !== "prehab" && (
          <div className="w-16">
            <input
              type="number"
              inputMode="decimal"
              placeholder="kg"
              value={set.weight || ""}
              onChange={(e) => onUpdate({ ...set, weight: parseFloat(e.target.value) || 0 })}
              className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-center text-[var(--foreground)]"
            />
          </div>
        )}
        <div className="w-14">
          <select
            value={set.rpe || ""}
            onChange={(e) => onUpdate({ ...set, rpe: parseInt(e.target.value) || 0 })}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-1 py-2.5 text-center appearance-none text-[var(--foreground)]"
          >
            <option value="">RPE</option>
            {[5, 6, 7, 8, 9, 10].map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Check / timer trigger */}
      {filled && (
        <button
          onClick={onComplete}
          className="w-8 h-8 rounded-full bg-[var(--green-bg)] text-[var(--green)] flex items-center justify-center text-sm font-bold shrink-0"
          title="Start rest timer"
        >
          &#10003;
        </button>
      )}
    </div>
  );
}

/* ─── Exercise Card ─── */
function ExerciseCard({
  exercise,
  log,
  onLogUpdate,
  onStartTimer,
}: {
  exercise: ExerciseDef;
  log: ExerciseLog;
  onLogUpdate: (log: ExerciseLog) => void;
  onStartTimer: (seconds: number, name: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const addSet = () => {
    const newSet: SetLog = { value: 0, weight: 0, rpe: 0, completedAt: new Date().toISOString() };
    onLogUpdate({ ...log, sets: [...log.sets, newSet] });
    if (!expanded) setExpanded(true);
  };

  const updateSet = (index: number, set: SetLog) => {
    const sets = [...log.sets];
    sets[index] = { ...set, completedAt: new Date().toISOString() };
    onLogUpdate({ ...log, sets });
  };

  const removeLastSet = () => {
    if (log.sets.length === 0) return;
    onLogUpdate({ ...log, sets: log.sets.slice(0, -1) });
  };

  const handleSetComplete = () => {
    const restSec = parseRestSeconds(exercise.rest);
    if (restSec > 0) {
      onStartTimer(restSec, exercise.name);
    }
  };

  const completedSets = log.sets.filter((s) => s.value > 0).length;
  const isHold = exercise.type === "hold";
  const borderColor = borderColors[exercise.tag] || "border-l-[var(--border)]";

  return (
    <div className={`bg-white border border-[var(--border)] border-l-[3px] ${borderColor} rounded-xl p-3 mb-2 shadow-sm`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-[var(--foreground)] truncate">{exercise.name}</div>
            <div className="text-xs text-[var(--text-dim)] mt-0.5">
              {exercise.prescription}
              {exercise.rest && ` · ${exercise.rest} rest`}
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            {completedSets > 0 && (
              <span className="text-xs font-bold text-[var(--green)] bg-[var(--green-bg)] px-2 py-0.5 rounded-md">
                {completedSets} {isHold ? "holds" : "sets"}
              </span>
            )}
            <span className="text-[var(--text-dim)] text-xs">{expanded ? "▲" : "▼"}</span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-[var(--border)]">
          {exercise.note && (
            <p className="text-xs text-[var(--text-dim)] italic mb-2">{exercise.note}</p>
          )}

          {/* Column headers */}
          <div className="flex items-center gap-2 mb-1 text-xs text-[var(--text-dim)] font-medium">
            <span className="w-6"></span>
            <div className="flex-1 flex gap-2">
              <span className="flex-1 text-center">{isHold ? "Seconds" : "Reps"}</span>
              {exercise.tag !== "prehab" && <span className="w-16 text-center">kg</span>}
              <span className="w-14 text-center">RPE</span>
            </div>
            <span className="w-8"></span>
          </div>

          {log.sets.map((set, i) => (
            <SetInput
              key={i}
              exercise={exercise}
              setIndex={i}
              set={set}
              onUpdate={(s) => updateSet(i, s)}
              onComplete={handleSetComplete}
            />
          ))}

          <div className="flex gap-2 mt-3">
            <button
              onClick={addSet}
              className="flex-1 text-xs font-semibold py-2.5 rounded-xl bg-[var(--surface2)] text-[var(--accent)] border border-[var(--border)] active:bg-[var(--border)]"
            >
              + Add Set
            </button>
            {log.sets.length > 0 && (
              <button
                onClick={removeLastSet}
                className="text-xs font-semibold py-2.5 px-4 rounded-xl text-[var(--red)] bg-red-50 active:bg-red-100"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Session Page ─── */
function SessionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dayId = searchParams.get("day");

  const day = currentRoutine.days.find((d) => d.id === dayId);

  const [sessionStarted] = useState(() => new Date().toISOString());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [sessionNotes, setSessionNotes] = useState("");
  const [sessionRpe, setSessionRpe] = useState(0);

  // Timer state
  const [timerActive, setTimerActive] = useState(false);
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerExercise, setTimerExercise] = useState("");

  const startTimer = (seconds: number, exerciseName: string) => {
    setTimerDuration(seconds);
    setTimerExercise(exerciseName);
    setTimerActive(true);
  };

  // Exercise logs
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, ExerciseLog>>(() => {
    if (!day) return {};
    const logs: Record<string, ExerciseLog> = {};
    for (const section of day.sections) {
      for (const ex of section.exercises) {
        logs[ex.id] = {
          exerciseId: ex.id,
          exerciseName: ex.name,
          tag: ex.tag,
          sets: [],
        };
      }
    }
    return logs;
  });

  const updateExerciseLog = useCallback((exerciseId: string, log: ExerciseLog) => {
    setExerciseLogs((prev) => ({ ...prev, [exerciseId]: log }));
  }, []);

  const saveSession = async () => {
    if (!day) return;
    setSaving(true);

    const session: SessionLog = {
      id: `${dayId}-${Date.now()}`,
      dayType: dayId!,
      dayLabel: day.label,
      startedAt: sessionStarted,
      completedAt: new Date().toISOString(),
      exercises: Object.values(exerciseLogs).filter((l) => l.sets.length > 0),
      notes: sessionNotes || undefined,
      sessionRpe: sessionRpe || undefined,
    };

    try {
      const res = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(session),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => router.push("/"), 1500);
      }
    } catch {
      alert("Failed to save. Check connection.");
    } finally {
      setSaving(false);
    }
  };

  if (!day) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--text-dim)]">Day not found</p>
          <button onClick={() => router.push("/")} className="mt-4 text-[var(--accent)] underline">
            Back
          </button>
        </div>
      </main>
    );
  }

  if (saved) {
    return (
      <main className="flex-1 flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--green-bg)] text-[var(--green)] flex items-center justify-center text-3xl mx-auto mb-4">&#10003;</div>
          <p className="text-[var(--green)] font-bold text-lg">Session saved!</p>
        </div>
      </main>
    );
  }

  const totalSets = Object.values(exerciseLogs).reduce((n, l) => n + l.sets.filter((s) => s.value > 0).length, 0);

  return (
    <main className={`flex-1 max-w-lg mx-auto w-full px-4 py-6 ${timerActive ? "pb-36" : "pb-8"}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push("/")} className="text-[var(--accent)] text-sm font-medium">
          ← Back
        </button>
        <span className="text-xs text-[var(--text-dim)] font-medium">
          {totalSets} sets logged
        </span>
      </div>

      <h1 className="text-xl font-extrabold text-[var(--foreground)] mb-0.5">{day.label}</h1>
      <p className="text-sm text-[var(--text-dim)] mb-6">{day.focus}</p>

      {/* Exercise sections */}
      {day.sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h2 className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest mb-2">
            {section.title}
          </h2>
          {section.exercises.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              log={exerciseLogs[ex.id]}
              onLogUpdate={(log) => updateExerciseLog(ex.id, log)}
              onStartTimer={startTimer}
            />
          ))}
        </div>
      ))}

      {/* Session wrap-up */}
      <div className="border border-[var(--border)] rounded-2xl p-4 bg-white shadow-sm mt-6">
        <h3 className="font-bold text-sm mb-3 text-[var(--foreground)]">Session Wrap-Up</h3>

        <div className="mb-3">
          <label className="text-xs text-[var(--text-dim)] block mb-1.5 font-medium">Overall RPE</label>
          <div className="flex gap-1.5">
            {[5, 6, 7, 8, 9, 10].map((v) => (
              <button
                key={v}
                onClick={() => setSessionRpe(v)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  sessionRpe === v
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "bg-[var(--surface2)] text-[var(--text-dim)] border border-[var(--border)]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-xs text-[var(--text-dim)] block mb-1.5 font-medium">Notes</label>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder="How did it feel? Any pain? Breakthroughs?"
            rows={3}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm resize-none text-[var(--foreground)]"
          />
        </div>

        <button
          onClick={saveSession}
          disabled={saving || totalSets === 0}
          className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-colors ${
            totalSets === 0
              ? "bg-[var(--surface2)] text-[var(--text-dim)] border border-[var(--border)] cursor-not-allowed"
              : "bg-[var(--accent)] text-white shadow-sm active:opacity-90"
          }`}
        >
          {saving ? "Saving..." : `Save Session (${totalSets} sets)`}
        </button>
      </div>

      {/* Rest Timer */}
      {timerActive && (
        <RestTimer
          duration={timerDuration}
          exerciseName={timerExercise}
          onDismiss={() => setTimerActive(false)}
        />
      )}
    </main>
  );
}

export default function SessionPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-[var(--text-dim)]">Loading...</div>}>
      <SessionContent />
    </Suspense>
  );
}
