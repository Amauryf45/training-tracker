import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 6,
  updatedAt: new Date().toISOString(),
  mesocycle: 2,
  week: 0,
  days: [
    {
      id: "force",
      label: "Force lestée",
      focus: "Tractions + Dips lestés — progression linéaire",
      tags: ["acc"],
      sections: [
        {
          title: "Échauffement",
          tag: "prehab",
          exercises: [
            { id: "f-warmup-1", name: "Mobilité cervicale (rotations, chin tucks)", tag: "prehab", prescription: "2 min", rest: "", note: "Nuque pas 100%, prendre le temps.", type: "time" },
            { id: "f-warmup-2", name: "Dislocations épaules", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
            { id: "f-warmup-3", name: "Tractions scapulaires", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "f-warmup-4", name: "Tractions bodyweight (échauffement)", tag: "prehab", prescription: "1 × 5", rest: "", type: "reps" },
            { id: "f-warmup-5", name: "Dips bodyweight (échauffement)", tag: "prehab", prescription: "1 × 8", rest: "", type: "reps" },
          ],
        },
        {
          title: "Tractions lestées",
          tag: "acc",
          exercises: [
            { id: "f-pull-1", name: "Tractions lestées", tag: "acc", prescription: "4 × 3-5", rest: "3 min", note: "Si 4 reps à la 4ème série → +1 kg prochaine séance. Descente contrôlée 2s.", type: "reps" },
          ],
        },
        {
          title: "Dips lestés",
          tag: "acc",
          exercises: [
            { id: "f-push-1", name: "Dips lestés", tag: "acc", prescription: "4 × 3-5", rest: "3 min", note: "Si 4 reps à la 4ème série → +1 kg prochaine séance. Amplitude complète.", type: "reps" },
          ],
        },
        {
          title: "Finisher (10-15 min)",
          tag: "acc",
          exercises: [
            { id: "f-fin-1", name: "Rowing (haltère ou barre)", tag: "acc", prescription: "2 × 8-10", rest: "90s", note: "Élastique un bras si pas de poids.", type: "reps" },
            { id: "f-fin-2", name: "Pike push-ups (pieds surélevés)", tag: "acc", prescription: "2 × 8-10", rest: "90s", type: "reps" },
            { id: "f-fin-3", name: "Face pulls / élévations inversées", tag: "acc", prescription: "2 × 12-15", rest: "60s", note: "Poids léger. Santé des épaules.", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "bonus",
      label: "Bonus — Skill & Mobilité",
      focus: "Maintien FL/HSPU + mobilité — selon la motiv",
      tags: ["fl", "hspu"],
      sections: [
        {
          title: "Mobilité (10 min)",
          tag: "prehab",
          exercises: [
            { id: "b-mob-1", name: "Mobilité cervicale + thoracique", tag: "prehab", prescription: "5 min", rest: "", note: "Rotations, chin tucks, extensions thoraciques. Foam roller si dispo.", type: "time" },
            { id: "b-mob-2", name: "Étirements épaules (german hang, skin the cat)", tag: "prehab", prescription: "3 min", rest: "", note: "Doucement, amplitude progressive.", type: "time" },
            { id: "b-mob-3", name: "Échauffement poignets", tag: "prehab", prescription: "2 min", rest: "", type: "time" },
          ],
        },
        {
          title: "Front Lever — Maintien",
          tag: "fl",
          exercises: [
            { id: "b-fl-1", name: "FL complet sans assistance", tag: "fl", prescription: "3 × max", rest: "3 min", note: "Pas de record, juste maintenir le pattern. Lâche proprement.", type: "hold" },
            { id: "b-fl-2", name: "FL assisté élastique épais", tag: "fl", prescription: "2 × 10s", rest: "2 min", note: "Facile. Omoplates rétractées, corps droit.", type: "hold" },
          ],
        },
        {
          title: "HSPU — Maintien",
          tag: "hspu",
          exercises: [
            { id: "b-hspu-1", name: "HSPU libres (tentatives)", tag: "hspu", prescription: "5 × 1", rest: "2 min", note: "Retrouver le groove. Kick-up propre, descente contrôlée.", type: "reps" },
            { id: "b-hspu-2", name: "Équilibre libre", tag: "hspu", prescription: "3 × max", rest: "90s", note: "Tranquille, travail de balance.", type: "hold" },
          ],
        },
      ],
    },
  ],
};
