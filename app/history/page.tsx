"use client";

import { useState, useEffect } from "react";
import { SessionLog } from "@/lib/types";

const tagColors: Record<string, string> = {
  fl: "text-[var(--green)]",
  hspu: "text-[var(--blue)]",
  flag: "text-[var(--orange)]",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
}

function formatDuration(start: string, end?: string): string {
  if (!end) return "";
  const ms = new Date(end).getTime() - new Date(start).getTime();
  const min = Math.round(ms / 60000);
  return `${min} min`;
}

function rpeColor(rpe?: number): string {
  if (!rpe) return "text-[var(--text-dim)]";
  if (rpe <= 6) return "text-[var(--green)]";
  if (rpe <= 8) return "text-[var(--orange)]";
  return "text-[var(--red)]";
}

export default function HistoryPage() {
  const [sessions, setSessions] = useState<SessionLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/sessions?count=20")
      .then((r) => r.json())
      .then((data) => {
        setSessions(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-4">Historique</h1>
        <p className="text-sm text-[var(--text-dim)]">Chargement...</p>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
      <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-1">Historique</h1>
      <p className="text-sm text-[var(--text-dim)] mb-6">
        {sessions.length} s\u00e9ance{sessions.length !== 1 ? "s" : ""} enregistr\u00e9e{sessions.length !== 1 ? "s" : ""}
      </p>

      {sessions.length === 0 ? (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm text-center">
          <p className="text-3xl mb-3">&#128170;</p>
          <p className="text-sm text-[var(--text-dim)]">Pas encore de s\u00e9ances enregistr\u00e9es.<br />Commence un entra\u00eenement !</p>
        </div>
      ) : (
        <div className="space-y-2">
          {sessions.map((session) => {
            const isExpanded = expanded === session.id;
            const totalSets = session.exercises.reduce((n, e) => n + e.sets.length, 0);
            const skills = [...new Set(session.exercises.map((e) => e.tag).filter((t) => ["fl", "hspu", "flag"].includes(t)))];

            return (
              <div key={session.id} className="bg-white border border-[var(--border)] rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpanded(isExpanded ? null : session.id)}
                  className="w-full text-left p-4"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold">{formatDate(session.startedAt)}</span>
                    <div className="flex items-center gap-2">
                      {session.sessionRpe && (
                        <span className={`text-xs font-bold ${rpeColor(session.sessionRpe)}`}>
                          RPE {session.sessionRpe}
                        </span>
                      )}
                      <span className="text-xs text-[var(--text-dim)]">{isExpanded ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--text-dim)]">{session.dayLabel}</span>
                    <span className="text-xs text-[var(--text-dim)]">&middot;</span>
                    <span className="text-xs text-[var(--text-dim)]">{totalSets} s\u00e9ries</span>
                    {session.completedAt && (
                      <>
                        <span className="text-xs text-[var(--text-dim)]">&middot;</span>
                        <span className="text-xs text-[var(--text-dim)]">{formatDuration(session.startedAt, session.completedAt)}</span>
                      </>
                    )}
                  </div>
                  <div className="flex gap-1.5 mt-1.5">
                    {skills.map((tag) => (
                      <span key={tag} className={`text-xs font-semibold ${tagColors[tag] || ""}`}>
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-[var(--border)] px-4 py-3 space-y-3">
                    {session.exercises.filter((e) => e.sets.length > 0).map((ex) => (
                      <div key={ex.exerciseId}>
                        <div className="text-xs font-semibold text-[var(--foreground)] mb-1">{ex.exerciseName}</div>
                        <div className="flex flex-wrap gap-1.5">
                          {ex.sets.map((set, i) => (
                            <div key={i} className="bg-[var(--surface2)] rounded-lg px-2.5 py-1 text-xs">
                              <span className="font-semibold">{set.value}</span>
                              <span className="text-[var(--text-dim)]">{ex.tag === "fl" || ex.tag === "flag" ? "s" : "r"}</span>
                              {set.weight > 0 && <span className="text-[var(--text-dim)]"> +{set.weight}kg</span>}
                              {set.rpe > 0 && <span className={`ml-1 ${rpeColor(set.rpe)}`}>@{set.rpe}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {session.notes && (
                      <div className="pt-2 border-t border-[var(--border)]">
                        <p className="text-xs text-[var(--text-dim)] italic">{session.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
