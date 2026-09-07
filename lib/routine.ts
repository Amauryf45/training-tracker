import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 1,
  updatedAt: new Date().toISOString(),
  mesocycle: 1,
  week: 1,
  days: [
    {
      id: "day1",
      label: "Jour 1 — Tirage + Flag (Volume)",
      focus: "Front lever volume + Human flag",
      tags: ["fl", "flag"],
      sections: [
        {
          title: "Échauffement",
          tag: "prehab",
          exercises: [
            { id: "d1-warmup-1", name: "Écartés élastique", tag: "prehab", prescription: "2 × 15", rest: "", type: "reps" },
            { id: "d1-warmup-2", name: "Tractions scapulaires", tag: "prehab", prescription: "2 × 10", rest: "", type: "reps" },
            { id: "d1-warmup-3", name: "Cercles + étirements poignets", tag: "prehab", prescription: "2 min", rest: "", type: "time" },
            { id: "d1-warmup-4", name: "Dislocations épaules", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
          ],
        },
        {
          title: "Front Lever — Skill",
          tag: "fl",
          exercises: [
            { id: "d1-fl-1", name: "FL assisté élastique (maintien)", tag: "fl", prescription: "4 × 8-12s", rest: "2.5 min", note: "Élastique pour ~60-70% d'effort. Corps droit, omoplates rétractées.", type: "hold" },
            { id: "d1-fl-2", name: "FL excentriques (descente lente)", tag: "fl", prescription: "3 × 3 reps (5-8s)", rest: "2.5 min", note: "Depuis la position inversée, descendre à l'horizontale le plus lentement possible.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d1-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "3 × max (2-5s)", rest: "2 min", type: "hold" },
            { id: "d1-flag-2", name: "Flag groupé (chaque côté)", tag: "flag", prescription: "2 × 12-15s", rest: "90s", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d1-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "2 × 5 à ~70% 1RM", rest: "3 min", note: "Maintenance — adapter le poids à ton niveau.", type: "reps" },
            { id: "d1-acc-2", name: "Rowing", tag: "acc", prescription: "3 × 8-10", rest: "90s", type: "reps" },
            { id: "d1-acc-3", name: "Dragon flags", tag: "core", prescription: "3 × 5-6", rest: "90s", note: "Exercice clé pour le FL — travaille l'anti-extension sous long levier.", type: "reps" },
            { id: "d1-acc-4", name: "Relevés de jambes suspendus", tag: "core", prescription: "3 × 8-10", rest: "90s", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day2",
      label: "Jour 2 — Poussée + Équilibre (Volume)",
      focus: "HSPU volume + équilibre",
      tags: ["hspu"],
      sections: [
        {
          title: "Échauffement",
          tag: "prehab",
          exercises: [
            { id: "d2-warmup-1", name: "Échauffement poignets", tag: "prehab", prescription: "3 min", rest: "", type: "time" },
            { id: "d2-warmup-2", name: "CARs épaules", tag: "prehab", prescription: "2 × 5 chaque sens", rest: "", type: "reps" },
            { id: "d2-warmup-3", name: "Pike push-ups (échauffement)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d2-warmup-4", name: "Équilibre au mur", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "HSPU libre — Skill",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-1", name: "Tentatives HSPU libres", tag: "hspu", prescription: "5 × 1-2 reps", rest: "2 min", note: "Qualité uniquement. Abandonner si l'équilibre est mauvais.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Force",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-2", name: "HSPU au mur (amplitude complète)", tag: "hspu", prescription: "4 × 6-8", rest: "2.5 min", note: "2-3 reps en réserve. Ajouter un déficit à 4×10.", type: "reps" },
            { id: "d2-hspu-3", name: "Négatives HSPU (libres)", tag: "hspu", prescription: "3 × 3 (4-5s descente)", rest: "2 min", note: "Excentrique lent, abandonner en bas.", type: "reps" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d2-acc-1", name: "Dips lestés", tag: "acc", prescription: "3 × 6-8", rest: "2.5 min", type: "reps" },
            { id: "d2-acc-2", name: "Pike push-ups (pieds surélevés, déficit)", tag: "acc", prescription: "3 × 8-10", rest: "90s", type: "reps" },
            { id: "d2-acc-3", name: "Face pulls / élévations inversées", tag: "acc", prescription: "3 × 12-15", rest: "60s", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day4",
      label: "Jour 4 — Tirage + Flag (Intensité)",
      focus: "Front lever intensité + Human flag",
      tags: ["fl", "flag"],
      sections: [
        {
          title: "Échauffement",
          tag: "prehab",
          exercises: [
            { id: "d4-warmup-1", name: "Écartés élastique", tag: "prehab", prescription: "2 × 15", rest: "", type: "reps" },
            { id: "d4-warmup-2", name: "Tractions scapulaires", tag: "prehab", prescription: "2 × 10", rest: "", type: "reps" },
            { id: "d4-warmup-3", name: "Cercles + étirements poignets", tag: "prehab", prescription: "2 min", rest: "", type: "time" },
            { id: "d4-warmup-4", name: "Dislocations épaules", tag: "prehab", prescription: "2 × 12", rest: "", type: "reps" },
          ],
        },
        {
          title: "Front Lever — Intensité",
          tag: "fl",
          exercises: [
            { id: "d4-fl-1", name: "FL complet sans assistance", tag: "fl", prescription: "3 × max (2-4s)", rest: "3 min", note: "Effort max, forme parfaite. 3 séries max.", type: "hold" },
            { id: "d4-fl-2", name: "FL assisté élastique (bande légère)", tag: "fl", prescription: "3 × 6-8s", rest: "2.5 min", type: "hold" },
            { id: "d4-fl-3", name: "FL raises (suspension → FL → retour)", tag: "fl", prescription: "3 × 3-5", rest: "2.5 min", note: "Depuis la suspension, monter le corps droit à l'horizontale, tenir 1s, redescendre.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d4-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "3 × max chaque côté", rest: "2 min", type: "hold" },
            { id: "d4-flag-2", name: "Flag écarté/groupé (chaque côté)", tag: "flag", prescription: "2 × 10-15s", rest: "90s", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d4-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "3 × 3 à ~75% 1RM", rest: "3 min", note: "Maintenance — adapter le poids à ton niveau.", type: "reps" },
            { id: "d4-acc-2", name: "Tractions archer", tag: "acc", prescription: "3 × 4-6 chaque bras", rest: "2 min", type: "reps" },
            { id: "d4-acc-3", name: "Dragon flags / roue abdominale", tag: "core", prescription: "4 × 6-8", rest: "90s", note: "Volume gainage supplémentaire — point faible FL.", type: "reps" },
          ],
        },
      ],
    },
    {
      id: "day5",
      label: "Jour 5 — Poussée (Intensité)",
      focus: "HSPU intensité + force",
      tags: ["hspu"],
      sections: [
        {
          title: "Échauffement",
          tag: "prehab",
          exercises: [
            { id: "d5-warmup-1", name: "Échauffement poignets", tag: "prehab", prescription: "3 min", rest: "", type: "time" },
            { id: "d5-warmup-2", name: "CARs épaules", tag: "prehab", prescription: "2 × 5 chaque sens", rest: "", type: "reps" },
            { id: "d5-warmup-3", name: "Pike push-ups (échauffement)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d5-warmup-4", name: "Équilibre au mur", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "HSPU libre — Skill",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-1", name: "HSPU libres (singles)", tag: "hspu", prescription: "4-6 × 1 rep", rest: "90s", note: "Singles uniquement. Qualité maximale.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Intensité",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-2", name: "HSPU mur (déficit si prêt)", tag: "hspu", prescription: "5 × 4-5", rest: "3 min", type: "reps" },
            { id: "d5-hspu-3", name: "HSPU mur — maintien bas", tag: "hspu", prescription: "3 × 8-12s", rest: "2 min", note: "Isométrique au point de blocage.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d5-acc-1", name: "Dips lestés (lourd)", tag: "acc", prescription: "4 × 4-6", rest: "3 min", type: "reps" },
            { id: "d5-acc-2", name: "Élévations latérales", tag: "acc", prescription: "3 × 12-15", rest: "60s", type: "reps" },
            { id: "d5-acc-3", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", type: "hold" },
          ],
        },
      ],
    },
  ],
};
