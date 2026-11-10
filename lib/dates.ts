import { SessionLog } from "./types";

/** YYYY-MM-DD in local time (no UTC shift) */
export function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Noon avoids DST edge cases when doing day arithmetic */
export function parseDateStr(s: string): Date {
  return new Date(`${s}T12:00:00`);
}

export function todayStr(): string {
  return toDateStr(new Date());
}

export function addDays(s: string, n: number): string {
  const d = parseDateStr(s);
  d.setDate(d.getDate() + n);
  return toDateStr(d);
}

export function mondayOf(s: string): string {
  const dow = parseDateStr(s).getDay();
  return addDays(s, dow === 0 ? -6 : 1 - dow);
}

export function weekdayOf(s: string): number {
  return parseDateStr(s).getDay();
}

/** Sessions saved before the `date` field existed fall back to their start time */
export function sessionDate(s: SessionLog): string {
  return s.date ?? toDateStr(new Date(s.startedAt));
}

const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const monthNames = ["jan", "fév", "mar", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];

export function formatShort(s: string): string {
  const d = parseDateStr(s);
  return `${d.getDate()} ${monthNames[d.getMonth()]}`;
}

export function formatDayLabel(s: string): string {
  const d = parseDateStr(s);
  return `${dayNames[d.getDay()]} ${d.getDate()}`;
}

export function formatLong(s: string): string {
  const d = parseDateStr(s);
  return `${dayNames[d.getDay()]} ${d.getDate()} ${monthNames[d.getMonth()]}`;
}
