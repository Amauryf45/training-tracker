import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 1,
  updatedAt: new Date().toISOString(),
  mesocycle: 1,
  week: 1,
  days: [
    {
      id: "day1",
      label: "Day 1 — Pull + Flag (Volume)",
      focus: "FL volume + Flag",
      tags: ["fl", "flag"],
      sections: [
        {
          title: "Warm-Up",
          tag: "prehab",
          exercises: [
            { id: "d1-warmup-1", name: "Band pull-aparts", tag: "prehab", prescription: "2 × 15", rest: "", type: "reps" },
            { id: "d1-warmup-2", name: "Scapular pull-ups", tag: "prehab", prescription: "2 × 10", rest: "", type: "reps" },
            { id: "d1-warmup-3", name: "Wrist circles + stretches", tag: "prehab", prescription: "2 min", rest: "", type: "time" },
            { id: "d1-warmup-4", name: "Shoulder dislocates", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
          ],
        },
        {
          title: "Front Lever Skill",
          tag: "fl",
          exercises: [
            { id: "d1-fl-1", name: "Band-assisted full FL holds", tag: "fl", prescription: "4 × 8-12s", rest: "2.5 min", note: "Band for ~60-70% effort. Body straight, scaps retracted.", type: "hold" },
            { id: "d1-fl-2", name: "Eccentric FL lowers", tag: "fl", prescription: "3 × 3 reps (5-8s each)", rest: "2.5 min", note: "Inverted hang → horizontal, as slow as possible.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d1-flag-1", name: "Near-horizontal flag holds (each side)", tag: "flag", prescription: "3 × max (2-5s)", rest: "2 min", type: "hold" },
            { id: "d1-flag-2", name: "Tuck flag holds (each side)", tag: "flag", prescription: "2 × 12-15s", rest: "90s", type: "hold" },
          ],
        },
        {
          title: "Accessories",
          tag: "acc",
          exercises: [
            { id: "d1-acc-1", name: "Weighted pull-ups (maintenance)", tag: "acc", prescription: "2 × 5 at ~70% 1RM", rest: "3 min", note: "Maintenance only — adjust weight to your level.", type: "reps" },
            { id: "d1-acc-2", name: "Rows", tag: "acc", prescription: "3 × 8-10", rest: "90s", type: "reps" },
            { id: "d1-acc-3", name: "Dragon flags", tag: "core", prescription: "3 × 5-6", rest: "90s", note: "Key FL accessory — trains anti-extension under long lever.", type: "reps" },
            { id: "d1-acc-4", name: "Hanging leg raises", tag: "core", prescription: "3 × 8-10", rest: "90s", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day2",
      label: "Day 2 — Push + Balance (Volume)",
      focus: "HSPU volume",
      tags: ["hspu"],
      sections: [
        {
          title: "Warm-Up",
          tag: "prehab",
          exercises: [
            { id: "d2-warmup-1", name: "Wrist warm-up", tag: "prehab", prescription: "3 min", rest: "", type: "time" },
            { id: "d2-warmup-2", name: "Shoulder CARs", tag: "prehab", prescription: "2 × 5 each", rest: "", type: "reps" },
            { id: "d2-warmup-3", name: "Pike push-ups (warm-up)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d2-warmup-4", name: "Wall handstand hold", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "Freestanding HSPU Skill",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-1", name: "Freestanding HSPU attempts", tag: "hspu", prescription: "5 × 1-2 reps", rest: "2 min", note: "Quality only. Bail if balance is off.", type: "reps" },
          ],
        },
        {
          title: "Wall HSPU Strength",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-2", name: "Wall HSPU (full ROM)", tag: "hspu", prescription: "4 × 6-8", rest: "2.5 min", note: "2-3 RIR. Add deficit at 4×10.", type: "reps" },
            { id: "d2-hspu-3", name: "HSPU negatives (freestanding)", tag: "hspu", prescription: "3 × 3 (4-5s lower)", rest: "2 min", note: "Slow eccentric, bail at bottom.", type: "reps" },
          ],
        },
        {
          title: "Accessories",
          tag: "acc",
          exercises: [
            { id: "d2-acc-1", name: "Weighted dips", tag: "acc", prescription: "3 × 6-8", rest: "2.5 min", type: "reps" },
            { id: "d2-acc-2", name: "Pike push-ups (elevated, deficit)", tag: "acc", prescription: "3 × 8-10", rest: "90s", type: "reps" },
            { id: "d2-acc-3", name: "Face pulls / reverse flies", tag: "acc", prescription: "3 × 12-15", rest: "60s", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day4",
      label: "Day 4 — Pull + Flag (Intensity)",
      focus: "FL intensity + Flag",
      tags: ["fl", "flag"],
      sections: [
        {
          title: "Warm-Up",
          tag: "prehab",
          exercises: [
            { id: "d4-warmup-1", name: "Band pull-aparts", tag: "prehab", prescription: "2 × 15", rest: "", type: "reps" },
            { id: "d4-warmup-2", name: "Scapular pull-ups", tag: "prehab", prescription: "2 × 10", rest: "", type: "reps" },
            { id: "d4-warmup-3", name: "Wrist circles + stretches", tag: "prehab", prescription: "2 min", rest: "", type: "time" },
            { id: "d4-warmup-4", name: "Shoulder dislocates", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
          ],
        },
        {
          title: "Front Lever Intensity",
          tag: "fl",
          exercises: [
            { id: "d4-fl-1", name: "Unassisted full FL attempts", tag: "fl", prescription: "3 × max (2-4s)", rest: "3 min", note: "Full effort, perfect form. Only 3 sets.", type: "hold" },
            { id: "d4-fl-2", name: "Band-assisted FL holds (lighter band)", tag: "fl", prescription: "3 × 6-8s", rest: "2.5 min", type: "hold" },
            { id: "d4-fl-3", name: "FL raises (dead hang → FL → back)", tag: "fl", prescription: "3 × 3-5", rest: "2.5 min", note: "Raise straight body to horizontal, hold 1s, lower.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d4-flag-1", name: "Near-horizontal flag holds (each side)", tag: "flag", prescription: "3 × max each side", rest: "2 min", type: "hold" },
            { id: "d4-flag-2", name: "Straddle/tuck flag holds (each side)", tag: "flag", prescription: "2 × 10-15s", rest: "90s", type: "hold" },
          ],
        },
        {
          title: "Accessories",
          tag: "acc",
          exercises: [
            { id: "d4-acc-1", name: "Weighted pull-ups (maintenance)", tag: "acc", prescription: "3 × 3 at ~75% 1RM", rest: "3 min", note: "Maintenance — adjust weight to your level.", type: "reps" },
            { id: "d4-acc-2", name: "Archer pull-ups", tag: "acc", prescription: "3 × 4-6 each", rest: "2 min", type: "reps" },
            { id: "d4-acc-3", name: "Dragon flags / ab wheel", tag: "core", prescription: "4 × 6-8", rest: "90s", note: "Extra core — FL bottleneck.", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day5",
      label: "Day 5 — Push (Intensity)",
      focus: "HSPU intensity",
      tags: ["hspu"],
      sections: [
        {
          title: "Warm-Up",
          tag: "prehab",
          exercises: [
            { id: "d5-warmup-1", name: "Wrist warm-up", tag: "prehab", prescription: "3 min", rest: "", type: "time" },
            { id: "d5-warmup-2", name: "Shoulder CARs", tag: "prehab", prescription: "2 × 5 each", rest: "", type: "reps" },
            { id: "d5-warmup-3", name: "Pike push-ups (warm-up)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d5-warmup-4", name: "Wall handstand hold", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "Freestanding HSPU Skill",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-1", name: "Freestanding HSPU singles", tag: "hspu", prescription: "4-6 × 1 rep", rest: "90s", note: "Singles only. Max quality.", type: "reps" },
          ],
        },
        {
          title: "Wall HSPU Intensity",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-2", name: "Wall HSPU (deficit if ready)", tag: "hspu", prescription: "5 × 4-5", rest: "3 min", type: "reps" },
            { id: "d5-hspu-3", name: "Wall HSPU bottom hold", tag: "hspu", prescription: "3 × 8-12s", rest: "2 min", note: "Isometric at sticking point.", type: "hold" },
          ],
        },
        {
          title: "Accessories",
          tag: "acc",
          exercises: [
            { id: "d5-acc-1", name: "Weighted dips (heavy)", tag: "acc", prescription: "4 × 4-6", rest: "3 min", type: "reps" },
            { id: "d5-acc-2", name: "Lateral raises", tag: "acc", prescription: "3 × 12-15", rest: "60s", type: "reps" },
            { id: "d5-acc-3", name: "Freestanding handstand hold", tag: "acc", prescription: "3 × max hold", rest: "90s", type: "hold" },
          ],
        },
      ],
    },
  ],
};
