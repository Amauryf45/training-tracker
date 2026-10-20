import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 5,
  updatedAt: new Date().toISOString(),
  mesocycle: 1,
  week: 5,
  days: [
    {
      id: "day1",
      label: "Jour 1 — Deload Tirage (Repos)",
      focus: "Deload — repos ou mobilité légère",
      tags: ["fl"],
      sections: [
        {
          title: "Mobilité (optionnel)",
          tag: "prehab",
          exercises: [
            { id: "d5w-d1-1", name: "Mobilité cervicale + thoracique", tag: "prehab", prescription: "5 min", rest: "", note: "Optionnel. Rotations douces, chin tucks, extensions thoraciques.", type: "time" },
            { id: "d5w-d1-2", name: "Étirements épaules + dos", tag: "prehab", prescription: "5 min", rest: "", type: "time" },
          ],
        },
      ],
    },
    {
      id: "day2",
      label: "Jour 2 — Deload Test (FL + HSPU)",
      focus: "Tests max FL & HSPU + mobilité",
      tags: ["fl", "hspu"],
      sections: [
        {
          title: "Échauffement + Mobilité",
          tag: "prehab",
          exercises: [
            { id: "d5w-warmup-1", name: "Mobilité cervicale (rotations, chin tucks)", tag: "prehab", prescription: "3 min", rest: "", note: "Doucement. Si douleur, rester sur les mouvements indolores.", type: "time" },
            { id: "d5w-warmup-2", name: "Mobilité thoracique (rotations, extensions)", tag: "prehab", prescription: "3 min", rest: "", note: "Ouvrir la cage thoracique. Foam roller si dispo.", type: "time" },
            { id: "d5w-warmup-3", name: "Échauffement poignets", tag: "prehab", prescription: "5 min", rest: "", type: "time" },
            { id: "d5w-warmup-4", name: "Dislocations épaules", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
            { id: "d5w-warmup-5", name: "Tractions scapulaires", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d5w-warmup-6", name: "Pike push-ups (léger)", tag: "prehab", prescription: "2 × 5", rest: "", type: "reps" },
            { id: "d5w-warmup-7", name: "Équilibre au mur", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "Test — Front Lever",
          tag: "fl",
          exercises: [
            { id: "d5w-fl-1", name: "FL complet sans assistance (TEST MAX)", tag: "fl", prescription: "3 × max", rest: "3-4 min", note: "3 tentatives, repos complet entre chaque. Lâche dès que les hanches tombent. Record le meilleur temps.", type: "hold" },
          ],
        },
        {
          title: "Test — HSPU",
          tag: "hspu",
          exercises: [
            { id: "d5w-hspu-1", name: "HSPU libres (TEST MAX reps)", tag: "hspu", prescription: "5 × 1-2 reps", rest: "2 min", note: "5 tentatives singles. Compte combien passent proprement (descente ET remontée contrôlées).", type: "reps" },
          ],
        },
        {
          title: "Équilibre + Accessoires light",
          tag: "acc",
          exercises: [
            { id: "d5w-acc-1", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", note: "Tranquille. Focus sur le point d'équilibre.", type: "hold" },
            { id: "d5w-acc-2", name: "Dips (léger, pas lesté)", tag: "acc", prescription: "2 × 6", rest: "2 min", note: "Bodyweight seulement. Juste pour bouger.", type: "reps" },
            { id: "d5w-acc-3", name: "Pike push-ups (pieds surélevés)", tag: "acc", prescription: "2 × 8", rest: "90s", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day4",
      label: "Jour 4 — Deload Tirage (Repos)",
      focus: "Deload — repos ou mobilité légère",
      tags: ["fl"],
      sections: [
        {
          title: "Mobilité (optionnel)",
          tag: "prehab",
          exercises: [
            { id: "d5w-d4-1", name: "Mobilité cervicale + thoracique", tag: "prehab", prescription: "5 min", rest: "", note: "Optionnel. Rotations douces, chin tucks, extensions thoraciques.", type: "time" },
            { id: "d5w-d4-2", name: "Étirements épaules + dos", tag: "prehab", prescription: "5 min", rest: "", type: "time" },
          ],
        },
      ],
    },
    {
      id: "day5",
      label: "Jour 5 — Deload Poussée (Repos)",
      focus: "Deload — repos ou mobilité légère",
      tags: ["hspu"],
      sections: [
        {
          title: "Mobilité (optionnel)",
          tag: "prehab",
          exercises: [
            { id: "d5w-d5-1", name: "Mobilité cervicale + thoracique", tag: "prehab", prescription: "5 min", rest: "", note: "Optionnel. Rotations douces, chin tucks, extensions thoraciques.", type: "time" },
            { id: "d5w-d5-2", name: "Échauffement poignets", tag: "prehab", prescription: "5 min", rest: "", type: "time" },
          ],
        },
      ],
    },
  ],
};
