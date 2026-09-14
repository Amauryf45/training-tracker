import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 2,
  updatedAt: new Date().toISOString(),
  mesocycle: 1,
  week: 2,
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
            { id: "d1-fl-1", name: "FL assisté élastique (maintien)", tag: "fl", prescription: "4 × 8-12s", rest: "2.5 min", note: "ÉLASTIQUE PLUS ÉPAIS que S1. Cible RPE 6-7, pas 8-10. Corps droit, omoplates rétractées.", type: "hold" },
            { id: "d1-fl-2", name: "FL excentriques advanced tuck", tag: "fl", prescription: "3 × 3 reps (3-5s)", rest: "2.5 min", note: "En advanced tuck (jambes pliées, dos horizontal). Descente lente et contrôlée.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d1-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "3 × max (2-5s)", rest: "2 min", note: "Alterner le côté de départ. Bras du haut TENDU.", type: "hold" },
            { id: "d1-flag-2", name: "Flag groupé (chaque côté)", tag: "flag", prescription: "2 × 12-15s", rest: "90s", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d1-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "2 × 5 à ~70% 1RM", rest: "3 min", note: "Avec ceinture de lest si dispo. Sinon 25kg entre les jambes, reps propres.", type: "reps" },
            { id: "d1-acc-2", name: "Rowing", tag: "acc", prescription: "3 × 8-10", rest: "90s", note: "Ne pas sauter — renforce le dos pour le FL.", type: "reps" },
            { id: "d1-acc-3", name: "Dragon flags (négatifs, advanced tuck)", tag: "core", prescription: "2 × 4", rest: "90s", note: "Négatifs uniquement. Jambes pliées. Descente contrôlée 3-5s. 2 séries max.", type: "reps" },
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
            { id: "d2-warmup-1", name: "Échauffement poignets", tag: "prehab", prescription: "5 min", rest: "", note: "5 min (pas 3). Si douleur aux poignets, utiliser des parallettes.", type: "time" },
            { id: "d2-warmup-2", name: "Rotations articulaires épaules", tag: "prehab", prescription: "2 × 5 chaque sens", rest: "", type: "reps" },
            { id: "d2-warmup-3", name: "Étirements ischio-jambiers", tag: "prehab", prescription: "2 × 30s", rest: "", note: "Améliore le kick-up HSPU. Toucher les orteils, pike stretch.", type: "time" },
            { id: "d2-warmup-4", name: "Pike push-ups (échauffement)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d2-warmup-5", name: "Équilibre au mur", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "HSPU libre — Skill",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-1", name: "Tentatives HSPU libres", tag: "hspu", prescription: "5 × 1-2 reps", rest: "2 min", note: "Qualité uniquement. Kick-up consistant, descente contrôlée.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Force",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-2", name: "HSPU au mur (amplitude complète)", tag: "hspu", prescription: "4 × 6-8", rest: "2.5 min", note: "Viser 6 reps cette semaine (vs 5 en S1). 2 reps en réserve.", type: "reps" },
            { id: "d2-hspu-3", name: "Négatives HSPU (libres)", tag: "hspu", prescription: "3 × 3 (4-5s descente)", rest: "2 min", note: "Excentrique lent. Si trop fatigué pour se stabiliser, faire au mur.", type: "reps" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d2-acc-0", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", note: "Placé ici (avant les dips) pour être plus frais. Rester gainé au point d'équilibre.", type: "hold" },
            { id: "d2-acc-1", name: "Dips lestés", tag: "acc", prescription: "3 × 6-8", rest: "2.5 min", note: "Avec ceinture si dispo, sinon 25kg propre.", type: "reps" },
            { id: "d2-acc-2", name: "Pike push-ups (pieds surélevés, déficit)", tag: "acc", prescription: "3 × 8-10", rest: "90s", type: "reps" },
            { id: "d2-acc-3", name: "Face pulls / élévations inversées", tag: "acc", prescription: "3 × 12-15", rest: "60s", note: "Poids léger. Si pas de poids léger, élastique léger.", type: "reps" },
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
            { id: "d4-fl-1", name: "FL complet sans assistance", tag: "fl", prescription: "3 × max (2-4s)", rest: "3 min", note: "Effort max, forme parfaite. Lâcher dès que les hanches tombent.", type: "hold" },
            { id: "d4-fl-2", name: "FL assisté élastique (bande légère)", tag: "fl", prescription: "3 × 6-8s", rest: "2.5 min", note: "Bande plus épaisse qu'en S1. Cible RPE 7-8.", type: "hold" },
            { id: "d4-fl-3", name: "FL raises (suspension → FL → retour)", tag: "fl", prescription: "3 × 4-5", rest: "2.5 min", note: "Même si pas de hold 1s, c'est OK. Reps propres bras tendus.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d4-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "2 × max chaque côté", rest: "2 min", note: "Réduit à 2 séries (vs 3) pour gérer la fatigue. Bras du haut TENDU.", type: "hold" },
            { id: "d4-flag-2", name: "Flag écarté/groupé (chaque côté)", tag: "flag", prescription: "2 × 10-15s", rest: "90s", note: "Écarté ou groupé selon la fatigue. Bien placer les mains avant de monter.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d4-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "3 × 3 à ~75% 1RM", rest: "3 min", note: "Pas de muscle-ups ici — les tractions lestées transfèrent mieux au FL.", type: "reps" },
            { id: "d4-acc-2", name: "Tractions archer", tag: "acc", prescription: "3 × 4 chaque bras", rest: "2 min", note: "Garder 1 rep en réserve comme en S1. Bien joué.", type: "reps" },
            { id: "d4-acc-3", name: "Dragon flags (négatifs, advanced tuck)", tag: "core", prescription: "2 × 4", rest: "90s", note: "Négatifs uniquement. 2 séries, pas plus. La descente contrôlée est le but.", type: "reps" },
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
            { id: "d5-warmup-1", name: "Échauffement poignets", tag: "prehab", prescription: "5 min", rest: "", note: "5 min. Si douleur, parallettes pour les HSPU.", type: "time" },
            { id: "d5-warmup-2", name: "Rotations articulaires épaules", tag: "prehab", prescription: "2 × 5 chaque sens", rest: "", type: "reps" },
            { id: "d5-warmup-3", name: "Étirements ischio-jambiers", tag: "prehab", prescription: "2 × 30s", rest: "", note: "Toucher les orteils, pike stretch.", type: "time" },
            { id: "d5-warmup-4", name: "Pike push-ups (échauffement)", tag: "prehab", prescription: "2 × 8", rest: "", type: "reps" },
            { id: "d5-warmup-5", name: "Équilibre au mur", tag: "prehab", prescription: "2 × 20s", rest: "", type: "hold" },
          ],
        },
        {
          title: "HSPU libre — Skill",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-1", name: "HSPU libres (singles)", tag: "hspu", prescription: "5 × 1 rep", rest: "90s", note: "5 singles (vs 4-6 en S1). Chaque rep = ta meilleure technique.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Intensité",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-2", name: "HSPU mur (déficit si prêt)", tag: "hspu", prescription: "5 × 5", rest: "3 min", note: "5×5 très bien passé en S1. Garder ce volume. Déficit pas encore.", type: "reps" },
            { id: "d5-hspu-3", name: "HSPU mur — maintien bas", tag: "hspu", prescription: "3 × 10-12s", rest: "2 min", note: "Bien en S1 (10s, 10s, 12s). Pousser activement, pas juste tenir.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d5-acc-0", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", note: "Déplacé ici pour être plus frais. Rester gainé, pas de cambrure.", type: "hold" },
            { id: "d5-acc-1", name: "Dips lestés (lourd)", tag: "acc", prescription: "4 × 4-6", rest: "3 min", note: "Avec ceinture si dispo.", type: "reps" },
            { id: "d5-acc-2", name: "Élévations latérales", tag: "acc", prescription: "3 × 12-15", rest: "60s", note: "Utilise ce que tu as. Même des bouteilles d'eau.", type: "reps" },
          ],
        },
      ],
    },
  ],
};
