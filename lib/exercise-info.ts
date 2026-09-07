/** Exercise descriptions, cues, and common mistakes */
export interface ExerciseInfo {
  description: string;
  cues: string[];
  mistakes: string[];
}

const exerciseInfoMap: Record<string, ExerciseInfo> = {
  // ── FL ──
  "Band-assisted full FL holds": {
    description: "Full front lever position with a resistance band around the hips to reduce the load. The goal is to hold a straight horizontal body for 8-12 seconds at controlled quality — NOT maximal effort.",
    cues: [
      "Retract and depress scapulae — pull shoulder blades together and down",
      "Squeeze glutes hard to maintain posterior pelvic tilt",
      "Straight body line from shoulders to toes — no hip sag",
      "Arms fully locked out, push the bar/rings away",
      "Breathe — short, controlled exhales during the hold",
    ],
    mistakes: [
      "Hip sag — the #1 issue. If hips drop, use a thicker band",
      "Bent arms — changes the exercise entirely, must be straight-arm",
      "Head forward/looking up — keep neutral neck",
      "Training to failure — stop at 60-75% of max hold, never grind",
      "Using too thin a band — you should be able to hold 8-12s comfortably",
    ],
  },
  "Eccentric FL lowers": {
    description: "Start from an inverted hang (body vertical, feet up), then slowly lower your body to horizontal front lever position. The eccentric (lowering) phase builds strength through the full range of motion and transfers to isometric hold strength better than concentric work.",
    cues: [
      "Start fully inverted — feet directly above the bar",
      "Lower AS SLOWLY as you can control — target 5-8 seconds",
      "Maintain scapular retraction throughout the lower",
      "Stop at horizontal, don't go past — reset at the top each rep",
      "Keep arms straight — if they bend, you've gone past your level",
    ],
    mistakes: [
      "Dropping too fast — if you can't do 5s, use a band",
      "Bent arms during the lower",
      "Not resetting between reps — go fully back to inverted each time",
      "Doing too many reps — 3 per set max, it's neurally expensive",
    ],
  },
  "Unassisted full FL attempts": {
    description: "Full front lever without band assistance. This is your testing/neural drive exercise — full effort, perfect form, limited sets. Only done on intensity days.",
    cues: [
      "Pull into position from inverted hang or dead hang",
      "Full scapular retraction, glutes squeezed, toes pointed",
      "Hold as long as form is perfect — bail the moment hips sag",
      "Quality over duration — a clean 2s beat a shaky 4s",
    ],
    mistakes: [
      "Grinding past failure — if hips sag, it's done, let go",
      "Too many sets — 3 max on intensity day, CNS fatigue accumulates fast",
      "Doing this every session — volume days should use bands",
    ],
  },
  "FL raises (dead hang → FL → back)": {
    description: "From a dead hang, raise your straight body to horizontal front lever position, hold 1 second, then lower back to dead hang. Dynamic version of the front lever that builds pulling-into-position strength.",
    cues: [
      "Start from a full dead hang, arms extended",
      "Initiate by depressing and retracting scapulae",
      "Keep arms straight throughout — this is a straight-arm pull",
      "Pause 1s at horizontal before lowering",
      "Control the descent — don't just drop",
    ],
    mistakes: [
      "Bent arms — this becomes a pull-up variation if arms bend",
      "Kipping or swinging to get up",
      "Skipping the pause at the top — the 1s hold is the point",
      "Going too fast — control both phases",
    ],
  },

  // ── Flag ──
  "Near-horizontal flag holds (each side)": {
    description: "Human flag at or near horizontal. Top arm pulls (lat/bicep), bottom arm pushes (deltoid/tricep). Both sides every session to prevent asymmetry.",
    cues: [
      "Top hand: overhand grip, pull hard toward the pole",
      "Bottom hand: push the pole away — this is the harder arm",
      "Engage obliques hard — think side plank on steroids",
      "Legs together, toes pointed for clean line",
      "Track time per side — always do both",
    ],
    mistakes: [
      "Only training one side — creates dangerous asymmetry",
      "Neglecting the bottom arm push — most under-train this",
      "Holding breath — breathe through the hold",
      "Sagging at the hips — if you can't hold horizontal, do 45°",
    ],
  },
  "Tuck flag holds (each side)": {
    description: "Human flag with knees tucked to chest. Shorter lever = easier. Builds the motor pattern and oblique endurance for longer durations than full flag.",
    cues: [
      "Same grip and arm mechanics as full flag",
      "Tuck knees tight to chest to shorten the lever",
      "Focus on hold duration: 12-15s per set",
      "Both sides, every set",
    ],
    mistakes: [
      "Letting knees drift away from chest — keep tight tuck",
      "Rushing to full flag before tuck is solid (3×15s)",
    ],
  },
  "Straddle/tuck flag holds (each side)": {
    description: "Intermediate flag progression — legs straddled wide or tucked. Builds time under tension at a moderate difficulty between tuck and full horizontal.",
    cues: [
      "Straddle: legs wide apart for a shorter effective lever",
      "Maintain horizontal body line despite the easier leverage",
      "Target 10-15s holds per side",
    ],
    mistakes: [
      "Going horizontal too early — hold the straddle/tuck until 3×15s",
      "Asymmetric straddle — keep legs evenly spread",
    ],
  },

  // ── HSPU ──
  "Freestanding HSPU attempts": {
    description: "Handstand push-ups without wall support. This is SKILL practice, not strength training. Quality only — bail if balance is off. The goal is motor learning: consistent kick-up, controlled descent, press with balance.",
    cues: [
      "Consistent kick-up — same entry every time",
      "Hands slightly wider than shoulder width",
      "Lower slowly — control the descent before worrying about the press",
      "Eyes between hands, slight forward lean",
      "If balance is off, bail clean — don't save bad reps",
    ],
    mistakes: [
      "Grinding through bad balance — this trains bad patterns",
      "Too many attempts when tired — skill practice must be fresh",
      "Hands too close together — reduces stability",
      "Arching the back — maintain hollow body throughout",
    ],
  },
  "Freestanding HSPU singles": {
    description: "Single-rep freestanding HSPUs with full rest between attempts. Intensity day version — maximize quality of each individual rep.",
    cues: [
      "One rep, full reset, one rep — no rushing",
      "Each rep should be your best possible technique",
      "90s rest between singles to be fully focused",
    ],
    mistakes: [
      "Turning singles into sets — if rep 2 is worse than rep 1, stop",
      "Rushing the rest between attempts",
    ],
  },
  "Wall HSPU (full ROM)": {
    description: "Handstand push-ups against a wall (chest facing wall for better line). Full range of motion — head touches ground. Primary pressing strength builder.",
    cues: [
      "Chest toward wall (not back to wall) for proper alignment",
      "Full ROM — head to ground, full lockout at top",
      "2-3 reps in reserve — don't train to failure",
      "Control the eccentric (lowering) for 2-3s",
    ],
    mistakes: [
      "Back-to-wall position — worse shoulder mechanics, promotes arching",
      "Partial reps — if you can't do full ROM, elevate hands on plates",
      "Training to failure — kills quality of subsequent sets",
    ],
  },
  "Wall HSPU (deficit if ready)": {
    description: "Wall HSPUs with hands elevated on parallettes or plates for deeper range of motion. Progression from flat wall HSPUs — only start when you can do 4×10 flat.",
    cues: [
      "3-5cm deficit to start — don't go too deep too fast",
      "Same form as flat: controlled descent, full lockout",
      "Heavier than flat — reduce reps accordingly",
    ],
    mistakes: [
      "Too much deficit too soon — 3-5cm is enough to start",
      "Losing head-to-ground contact at bottom — control the depth",
    ],
  },
  "HSPU negatives (freestanding)": {
    description: "Kick up to handstand, lower as slowly as possible (4-5 seconds), bail at the bottom. Builds bottom-range pressing strength and balance during the eccentric phase — the two hardest parts of a freestanding HSPU.",
    cues: [
      "Clean kick-up, find balance before starting the lower",
      "4-5 seconds on the way down — COUNT it",
      "Fight for balance the entire time — that's the training stimulus",
      "Bail safely at the bottom, don't try to press up",
    ],
    mistakes: [
      "Dropping fast — if you can't do 4s, do wall negatives first",
      "Trying to press up at the bottom — these are NEGATIVES only",
    ],
  },
  "Wall HSPU bottom hold": {
    description: "Isometric hold at the bottom of a wall HSPU (nose/head near ground). Builds sticking-point strength at the hardest part of the press.",
    cues: [
      "Lower to the bottom position, then HOLD",
      "Keep pressing intent — push against the ground",
      "8-12 second holds",
      "Breathe — short controlled exhales",
    ],
    mistakes: [
      "Resting at the bottom instead of actively pressing",
      "Head too far from the ground — get to true bottom position",
    ],
  },

  // ── Accessories ──
  "Weighted pull-ups (maintenance)": {
    description: "Pull-ups with added weight. At maintenance volume — not the primary driver. Just enough to maintain your pulling strength base while the focus is on FL-specific work.",
    cues: [
      "Full dead hang start, full chin-over-bar finish",
      "No kipping — strict form",
      "~70% of 1RM when fatigued",
    ],
    mistakes: [
      "Going too heavy post-fatigue — this is maintenance, not max effort",
      "Half reps — full ROM or reduce weight",
    ],
  },
  "Dragon flags": {
    description: "Lying on a bench, grip behind head, raise body to vertical then lower to horizontal while keeping body straight. THE key core exercise for front lever — directly trains anti-extension under a long lever arm.",
    cues: [
      "Grip bench behind head firmly",
      "Raise to vertical, then lower with STRAIGHT body",
      "Only go as low as you can maintain a straight line",
      "Posterior pelvic tilt — squeeze glutes, tuck tailbone",
      "3-5 second eccentric on each rep",
    ],
    mistakes: [
      "Hip pike — body bends at the hips on the way down",
      "Going too low — stop before form breaks, build range over time",
      "No posterior pelvic tilt — lower back arches = not working correctly",
    ],
  },
  "Dragon flags / ab wheel": {
    description: "Dragon flags or ab wheel rollouts — both train anti-extension, which is the #1 core demand for front lever. Pick whichever you can do with better form that day.",
    cues: [
      "Dragon flag: straight body, slow lower, posterior pelvic tilt",
      "Ab wheel: arms straight, go as far as you can control, squeeze back",
      "Both: the goal is resisting extension under load",
    ],
    mistakes: [
      "Ab wheel: lower back collapse at full extension — stop before this",
      "Dragon flag: hip pike instead of straight body",
    ],
  },
  "Hanging leg raises": {
    description: "Hanging from a bar, raise straight legs to horizontal (L-sit) or to the bar. Builds core strength in the exact hanging position used for front lever.",
    cues: [
      "Minimize swing — initiate from the core, not momentum",
      "Posterior pelvic tilt at the top — round the lower back slightly",
      "Control the descent — 2-3s lowering",
      "Progress: knees bent → straight legs → toes to bar",
    ],
    mistakes: [
      "Swinging/kipping — use a slower tempo",
      "Only lifting to 90° — go higher for full core activation",
      "Dropping the legs down — control the negative",
    ],
  },
  "Rows": {
    description: "Barbell or dumbbell rows. General pulling strength for upper back thickness. Supports front lever by building lat and mid-back volume.",
    cues: [
      "Pull to lower chest/upper abdomen",
      "Squeeze shoulder blades together at the top",
      "Control the eccentric — don't just drop the weight",
    ],
    mistakes: [
      "Using momentum — reduce weight if you need to heave",
      "Pulling to the neck — lower chest is the target",
    ],
  },
  "Archer pull-ups": {
    description: "Wide-grip pull-up where one arm does most of the work while the other assists on the bar. Builds unilateral pulling strength — helps flag (top arm) and front lever pulling power.",
    cues: [
      "One arm pulls, other arm stays straight and assists",
      "Full ROM — dead hang to chin over the pulling hand",
      "Alternate sides each rep or each set",
    ],
    mistakes: [
      "Assisting arm bending too much — keep it as straight as possible",
      "Not going through full ROM",
    ],
  },
  "Weighted dips": {
    description: "Parallel bar or ring dips with added weight. Primary pressing strength builder for HSPU — builds tricep and anterior deltoid strength.",
    cues: [
      "Full depth — shoulders below elbows",
      "Full lockout at top",
      "Slight forward lean for more chest/shoulder activation",
      "Control the descent — 2-3s eccentric",
    ],
    mistakes: [
      "Partial reps — if you can't go full depth, reduce weight",
      "Flaring elbows out excessively",
      "Bouncing out of the bottom",
    ],
  },
  "Weighted dips (heavy)": {
    description: "Heavy weighted dips — intensity day. Lower reps, more weight than volume day. Builds max pressing strength that transfers to HSPU.",
    cues: [
      "Same form as regular weighted dips",
      "4-6 rep range, 3 min rest",
      "If form breaks, the weight is too heavy",
    ],
    mistakes: [
      "Ego loading — quality reps only",
      "Cutting depth to move more weight",
    ],
  },
  "Pike push-ups (elevated, deficit)": {
    description: "Push-ups with feet elevated and hips piked high. Mimics HSPU pressing angle. Adding a deficit (hands on blocks) increases range of motion.",
    cues: [
      "Feet on bench/box, hips as high as possible",
      "Head between hands at the bottom",
      "The more vertical your torso, the more it transfers to HSPU",
    ],
    mistakes: [
      "Not elevating feet enough — the flatter you are, the less HSPU transfer",
      "Elbows flaring wide — keep them at ~45°",
    ],
  },
  "Face pulls / reverse flies": {
    description: "Light shoulder prehab and rear delt work. Balances all the pressing and overhead work. Essential for long-term shoulder health.",
    cues: [
      "Light weight, high reps — this is prehab, not strength",
      "Squeeze shoulder blades together at the end",
      "External rotation at the end of face pulls",
    ],
    mistakes: [
      "Going too heavy — this should feel easy",
      "Rushing through reps — slow and controlled",
    ],
  },
  "Lateral raises": {
    description: "Side deltoid isolation. Supports flag (bottom arm push requires lateral deltoid endurance) and overall shoulder health.",
    cues: [
      "Slight bend in elbows, raise to shoulder height",
      "Control both up and down — don't swing",
      "Light weight, feel the muscle work",
    ],
    mistakes: [
      "Using momentum/swinging — reduce weight",
      "Raising above shoulder height — unnecessary stress",
    ],
  },
  "Freestanding handstand hold": {
    description: "Balance practice for HSPU. The longer you can hold a handstand, the more neural budget is available for pressing during HSPU.",
    cues: [
      "Fingers spread wide, grip the floor",
      "Squeeze everything — glutes, core, legs together",
      "Breathe — short exhales, don't hold breath",
      "Eyes between hands",
    ],
    mistakes: [
      "Arching the back — maintain hollow body",
      "Holding breath — kills endurance",
      "Training handstands tired — balance is neural, must be fresh",
    ],
  },

  // ── Warm-up ──
  "Band pull-aparts": {
    description: "Hold a light band at arm's length, pull apart by squeezing shoulder blades together. Warm-up for scapular retraction used in front lever.",
    cues: ["Shoulder blades together, hold 1s at the end", "Light band, focus on squeeze"],
    mistakes: ["Using arms instead of back muscles", "Going too fast"],
  },
  "Scapular pull-ups": {
    description: "Hang from the bar with straight arms, then retract/depress scapulae to raise your body slightly without bending arms. Activates the exact muscles used in front lever.",
    cues: ["Straight arms throughout", "Pull shoulder blades together and DOWN", "2s hold at the top"],
    mistakes: ["Bending arms — this is NOT a pull-up", "Not holding at the top"],
  },
  "Wrist circles + stretches": {
    description: "Wrist mobility warm-up. Essential before any handstand or HSPU work to prevent wrist strain.",
    cues: ["Full circles in both directions", "Include finger/wrist flexor stretches on the floor"],
    mistakes: ["Skipping this — wrist injuries are the most common HSPU problem"],
  },
  "Shoulder dislocates": {
    description: "Hold a band or stick wide, pass it overhead and behind your back in a full circle. Warms up the full range of shoulder motion.",
    cues: ["Go as wide as needed to keep arms straight", "Slow and controlled — not a ballistic swing"],
    mistakes: ["Going too narrow too fast — ease into it", "Bending elbows to get around"],
  },
  "Wrist warm-up": {
    description: "Flexion/extension circles, loaded stretches on the floor. Prepares wrists for HSPU load.",
    cues: ["Include finger extensions", "30s in each position"],
    mistakes: ["Rushing through — wrists need time to warm up"],
  },
  "Shoulder CARs": {
    description: "Controlled Articular Rotations — slow, maximal-range circles at the shoulder joint. Maps the full range of motion and warms up the joint capsule.",
    cues: ["As slow as possible", "Maximum range in every direction", "Keep the rest of the body still"],
    mistakes: ["Going fast", "Compensating with trunk movement"],
  },
  "Pike push-ups (warm-up)": {
    description: "Light pike push-ups to warm up the pressing pattern before heavier HSPU work.",
    cues: ["Light effort — just getting blood flowing", "Full range of motion"],
    mistakes: ["Going to failure — this is a warm-up"],
  },
  "Wall handstand hold": {
    description: "Handstand against the wall to warm up shoulders for overhead pressing. Also builds shoulder stability.",
    cues: ["Chest toward wall", "Full lockout, push through shoulders", "Breathe normally"],
    mistakes: ["Back to wall — less transfer to freestanding"],
  },
};

export function getExerciseInfo(name: string): ExerciseInfo | null {
  return exerciseInfoMap[name] || null;
}
