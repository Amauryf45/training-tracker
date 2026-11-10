import { SkillTag } from "./types";
import { parseDateStr } from "./dates";

/** What the calendar suggests for a day. `template` makes the card startable. */
export interface PlannedSession {
  label: string;
  tags: SkillTag[];
  template?: string;
}

export interface Block {
  name: string;
  short: string;
  /** Inclusive YYYY-MM-DD */
  start: string;
  end: string;
  /** Recurring plan by weekday (0 = Sunday) */
  byWeekday?: Record<number, PlannedSession>;
  /** One-off plan by date, wins over byWeekday */
  byDate?: Record<string, PlannedSession>;
}

const force: PlannedSession = { label: "Force lestée", tags: ["acc"], template: "force" };

export const blocks: Block[] = [
  {
    name: "Bloc 1 — Reset fondation",
    short: "Bloc 1",
    start: "2026-09-07",
    end: "2026-10-19",
    byWeekday: {
      1: { label: "Tirage + Flag (Volume)", tags: ["fl", "flag"] },
      2: { label: "Poussée + Équilibre (Volume)", tags: ["hspu"] },
      4: { label: "Tirage + Flag (Intensité)", tags: ["fl", "flag"] },
      5: { label: "Poussée (Intensité)", tags: ["hspu"] },
    },
  },
  {
    name: "Deload — Tests",
    short: "Deload",
    start: "2026-10-20",
    end: "2026-10-21",
    byDate: {
      "2026-10-20": { label: "Deload Test (FL + HSPU)", tags: ["fl", "hspu"] },
    },
  },
  {
    name: "Bloc Force — Tractions & Dips lestés",
    short: "Force",
    start: "2026-10-22",
    end: "2026-11-12",
    byDate: {
      "2026-10-22": force,
      "2026-10-23": force,
      "2026-10-26": force,
      "2026-10-28": force,
      "2026-10-30": force,
      "2026-11-02": force,
      "2026-11-05": force,
      "2026-11-09": force,
      "2026-11-11": force,
    },
  },
];

export const PROGRAM_START = blocks[0].start;
export const PROGRAM_END = blocks[blocks.length - 1].end;

export function blockFor(date: string): Block | undefined {
  return blocks.find((b) => date >= b.start && date <= b.end);
}

export function plannedFor(date: string): PlannedSession | undefined {
  const block = blockFor(date);
  if (!block) return undefined;
  return block.byDate?.[date] ?? block.byWeekday?.[parseDateStr(date).getDay()];
}

/** 1-based week index of `monday` within the block */
export function blockWeek(block: Block, monday: string): number {
  const ms = parseDateStr(monday).getTime() - parseDateStr(block.start).getTime();
  return Math.max(1, Math.floor(ms / (7 * 24 * 3600 * 1000)) + 1);
}
