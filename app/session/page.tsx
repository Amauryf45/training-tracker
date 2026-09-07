"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useCallback } from "react";
import { currentRoutine } from "@/lib/routine";
import { DayRoutine, ExerciseDef, SetLog, ExerciseLog, SessionLog } from "@/lib/types";

const tagColors: Record<string, string> = {
  fl: "border-green-800 bg-green-900/20",
  hspu: "border-blue-800 bg-blue-900/20",
  flag: "border-yellow-800 bg-yellow-900/20",
  prehab: "border-pink-800 bg-pink-900/20",
  acc: "border-purple-800 bg-purple-900/20",
  core: "border-cyan-800 bg-cyan-900/20",
};

const tagLabels: Record<string, string> = {
  fl: "FL",
  hspu: "HSPU",
  flag: "FLAG",
  prehab: "PREHAB",
  acc: "ACC",
  core: "CORE",
};

function SetInput({
  exercise,
  setIndex,
  set,
  onUpdate,
}: {
  exercise: ExerciseDef;
  setIndex: number;
  set: SetLog;
  onUpdate: (set: SetLog) => void;
}) {
  const isHold = exercise.type === "hold";

  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className="text-xs text-[var(--text-dim)] w-6 shrink-0">#{setIndex + 1}</span>
      <div className="flex-1 flex gap-2">
        <div className="flex-1">
          <input
            type="number"
            inputMode="decimal"
            placeholder={isHold ? "sec" : "reps"}
            value={set.value || ""}
            onChange={(e) => onUpdate({ ...set, value: parseFloat(e.target.value) || 0 })}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-center"
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
              className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-center"
            />
          </div>
        )}
        <div className="w-14">
          <select
            value={set.rpe || ""}
            onChange={(e) => onUpdate({ ...set, rpe: parseInt(e.target.value) || 0 })}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-1 py-2 text-center appearance-none"
          >
            <option value="">RPE</option>
            {[5, 6, 7, 8, 9, 10].map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function ExerciseCard({
  exercise,
  log,
  onLogUpdate,
}: {
  exercise: ExerciseDef;
  log: ExerciseLog;
  onLogUpdate: (log: ExerciseLog) => void;
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

  const completedSets = log.sets.filter((s) => s.value > 0).length;
  const isHold = exercise.type === "hold";

  return (
    <div className={`border rounded-xl p-3 mb-2 ${tagColors[exercise.tag] || "border-[var(--border)] bg-[var(--surface)]"}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm truncate">{exercise.name}</div>
            <div className="text-xs text-[var(--text-dim)] mt-0.5">
              {exercise.prescription}
              {exercise.rest && ` · ${exercise.rest} rest`}
            </div>
          </div>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            {completedSets > 0 && (
              <span className="text-xs font-bold text-[var(--green)]">
                {completedSets} {isHold ? "holds" : "sets"}
              </span>
            )}
            <span className="text-[var(--text-dim)] text-xs">{expanded ? "▲" : "▼"}</span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-[var(--border)]/50">
          {exercise.note && (
            <p className="text-xs text-[var(--text-dim)] italic mb-2">{exercise.note}</p>
          )}

          {/* Column headers */}
          <div className="flex items-center gap-2 mb-1 text-xs text-[var(--text-dim)]">
            <span className="w-6"></span>
            <div className="flex-1 flex gap-2">
              <span className="flex-1 text-center">{isHold ? "Seconds" : "Reps"}</span>
              {exercise.tag !== "prehab" && <span className="w-16 text-center">kg</span>}
              <span className="w-14 text-center">RPE</span>
            </div>
          </div>

          {log.sets.map((set, i) => (
            <SetInput
              key={i}
              exercise={exercise}
              setIndex={i}
              set={set}
              onUpdate={(s) => updateSet(i, s)}
            />
          ))}

          <div className="flex gap-2 mt-2">
            <button
              onClick={addSet}
              className="flex-1 text-xs font-semibold py-2 rounded-lg bg-[var(--accent)]/20 text-[var(--accent2)] active:bg-[var(--accent)]/30"
            >
              + Add Set
            </button>
            {log.sets.length > 0 && (
              <button
                onClick={removeLastSet}
                className="text-xs font-semibold py-2 px-3 rounded-lg bg-[var(--red)]/10 text-[var(--red)] active:bg-[var(--red)]/20"
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

  // Initialize exercise logs
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
          <button onClick={() => router.push("/")} className="mt-4 text-[var(--accent2)] underline">
            Back
          </button>
        </div>
      </main>
    );
  }

  if (saved) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">&#10003;</div>
          <p className="text-[var(--green)] font-bold text-lg">Session saved!</p>
        </div>
      </main>
    );
  }

  const totalSets = Object.values(exerciseLogs).reduce((n, l) => n + l.sets.filter((s) => s.value > 0).length, 0);

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 pb-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push("/")} className="text-[var(--text-dim)] text-sm">
          ← Back
        </button>
        <span className="text-xs text-[var(--text-dim)]">
          {totalSets} sets logged
        </span>
      </div>

      <h1 className="text-xl font-bold mb-1">{day.label}</h1>
      <p className="text-sm text-[var(--text-dim)] mb-6">{day.focus}</p>

      {/* Exercise sections */}
      {day.sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h2 className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-wider mb-2">
            {section.title}
          </h2>
          {section.exercises.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              log={exerciseLogs[ex.id]}
              onLogUpdate={(log) => updateExerciseLog(ex.id, log)}
            />
          ))}
        </div>
      ))}

      {/* Session wrap-up */}
      <div className="border border-[var(--border)] rounded-xl p-4 bg-[var(--surface)] mt-6">
        <h3 className="font-semibold text-sm mb-3">Session Wrap-Up</h3>

        <div className="mb-3">
          <label className="text-xs text-[var(--text-dim)] block mb-1">Overall RPE</label>
          <div className="flex gap-1">
            {[5, 6, 7, 8, 9, 10].map((v) => (
              <button
                key={v}
                onClick={() => setSessionRpe(v)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
                  sessionRpe === v
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--surface2)] text-[var(--text-dim)]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="text-xs text-[var(--text-dim)] block mb-1">Notes</label>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder="How did it feel? Any pain? Breakthroughs?"
            rows={3}
            className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm resize-none"
          />
        </div>

        <button
          onClick={saveSession}
          disabled={saving || totalSets === 0}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${
            totalSets === 0
              ? "bg-[var(--surface2)] text-[var(--text-dim)] cursor-not-allowed"
              : "bg-[var(--accent)] text-white active:bg-[var(--accent)]/80"
          }`}
        >
          {saving ? "Saving..." : `Save Session (${totalSets} sets)`}
        </button>
      </div>
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
