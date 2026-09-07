export type SkillTag = "fl" | "hspu" | "flag" | "prehab" | "acc" | "core";

export interface ExerciseDef {
  id: string;
  name: string;
  tag: SkillTag;
  /** e.g. "4 × 8-12s" */
  prescription: string;
  rest: string;
  note?: string;
  /** "hold" = timed hold, "reps" = rep-based, "time" = timed set */
  type: "hold" | "reps" | "time";
}

export interface SetLog {
  /** For holds: seconds held. For reps: number of reps. */
  value: number;
  /** Weight added in kg (0 for bodyweight) */
  weight: number;
  /** Rate of perceived exertion 1-10 */
  rpe: number;
  note?: string;
  completedAt: string;
}

export interface ExerciseLog {
  exerciseId: string;
  exerciseName: string;
  tag: SkillTag;
  sets: SetLog[];
}

export interface SessionLog {
  id: string;
  /** e.g. "day1", "day2", "day4", "day5" */
  dayType: string;
  dayLabel: string;
  startedAt: string;
  completedAt?: string;
  exercises: ExerciseLog[];
  /** Overall session notes */
  notes?: string;
  /** Overall session RPE */
  sessionRpe?: number;
}

export interface DayRoutine {
  id: string;
  label: string;
  focus: string;
  tags: SkillTag[];
  sections: {
    title: string;
    tag: SkillTag;
    exercises: ExerciseDef[];
  }[];
}

export interface Routine {
  version: number;
  updatedAt: string;
  mesocycle: number;
  week: number;
  days: DayRoutine[];
}
