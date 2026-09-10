"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const presets = [
  { label: "30s", seconds: 30 },
  { label: "1:00", seconds: 60 },
  { label: "1:30", seconds: 90 },
  { label: "2:00", seconds: 120 },
  { label: "2:30", seconds: 150 },
  { label: "3:00", seconds: 180 },
  { label: "5:00", seconds: 300 },
];

type Mode = "countdown" | "stopwatch";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TimerPage() {
  const [mode, setMode] = useState<Mode>("countdown");
  const [duration, setDuration] = useState(150); // 2:30 default
  const [remaining, setRemaining] = useState(150);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);

  const clear = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!running || mode !== "countdown") { clear(); return; }
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clear();
          setRunning(false);
          if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return clear;
  }, [running, mode, clear]);

  // Stopwatch logic
  useEffect(() => {
    if (!running || mode !== "stopwatch") { clear(); return; }
    startTimeRef.current = Date.now() - elapsed * 1000;
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 100);
    return clear;
  }, [running, mode, clear, elapsed]);

  const handleStart = () => {
    if (mode === "countdown" && remaining === 0) setRemaining(duration);
    setRunning(true);
  };

  const handlePause = () => setRunning(false);

  const handleReset = () => {
    clear();
    setRunning(false);
    if (mode === "countdown") setRemaining(duration);
    else setElapsed(0);
  };

  const selectPreset = (seconds: number) => {
    setDuration(seconds);
    setRemaining(seconds);
    setRunning(false);
    clear();
  };

  const switchMode = (m: Mode) => {
    clear();
    setRunning(false);
    setMode(m);
    if (m === "countdown") setRemaining(duration);
    else setElapsed(0);
  };

  const progress = mode === "countdown" && duration > 0
    ? (duration - remaining) / duration
    : 0;

  const displayTime = mode === "countdown" ? remaining : elapsed;
  const done = mode === "countdown" && remaining === 0 && !running;

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 flex flex-col">
      <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-4">Chrono</h1>

      {/* Mode toggle */}
      <div className="flex gap-1 bg-[var(--surface2)] rounded-xl p-1 mb-8">
        <button
          onClick={() => switchMode("countdown")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            mode === "countdown" ? "bg-white text-[var(--foreground)] shadow-sm" : "text-[var(--text-dim)]"
          }`}
        >
          Minuteur
        </button>
        <button
          onClick={() => switchMode("stopwatch")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            mode === "stopwatch" ? "bg-white text-[var(--foreground)] shadow-sm" : "text-[var(--text-dim)]"
          }`}
        >
          Chrono
        </button>
      </div>

      {/* Timer display */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-52 h-52 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="4" />
            {mode === "countdown" && (
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke={done ? "var(--green)" : running ? "var(--accent)" : "var(--text-dim)"}
                strokeWidth="4"
                strokeDasharray={`${progress * 282.74} 282.74`}
                strokeLinecap="round"
              />
            )}
            {mode === "stopwatch" && running && (
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke="var(--accent)"
                strokeWidth="4"
                strokeDasharray="8 4"
                className="animate-spin"
                style={{ animationDuration: "8s" }}
              />
            )}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-extrabold tabular-nums ${done ? "text-[var(--green)]" : "text-[var(--foreground)]"}`}>
              {done ? "Terminé !" : formatTime(displayTime)}
            </span>
            {mode === "countdown" && !running && !done && (
              <span className="text-xs text-[var(--text-dim)] mt-1">/ {formatTime(duration)}</span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 mb-8">
          {!running ? (
            <button
              onClick={handleStart}
              className="w-16 h-16 rounded-full bg-[var(--accent)] text-white text-sm font-bold shadow-md active:opacity-90 flex items-center justify-center"
            >
              ▶
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="w-16 h-16 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] text-[var(--accent)] text-sm font-bold shadow-md active:opacity-90 flex items-center justify-center"
            >
              ⏸
            </button>
          )}
          <button
            onClick={handleReset}
            className="w-16 h-16 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-[var(--text-dim)] text-xs font-bold active:bg-[var(--border)] flex items-center justify-center"
          >
            RAZ
          </button>
        </div>

        {/* Presets (countdown only) */}
        {mode === "countdown" && (
          <div className="flex flex-wrap gap-2 justify-center">
            {presets.map((p) => (
              <button
                key={p.seconds}
                onClick={() => selectPreset(p.seconds)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  duration === p.seconds && !running
                    ? "bg-[var(--accent)] text-white"
                    : "bg-white border border-[var(--border)] text-[var(--foreground)]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
