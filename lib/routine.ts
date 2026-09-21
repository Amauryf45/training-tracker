import { Routine } from "./types";

export const currentRoutine: Routine = {
  version: 3,
  updatedAt: new Date().toISOString(),
  mesocycle: 1,
  week: 3,
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
            { id: "d1-fl-1", name: "FL assisté élastique (maintien)", tag: "fl", prescription: "4 × 10-14s", rest: "2.5 min", note: "Même élastique épais. Tu tiens 10s, pousse vers 12-14s. RPE 7-8. Corps droit, omoplates rétractées.", type: "hold" },
            { id: "d1-fl-2", name: "FL excentriques advanced tuck", tag: "fl", prescription: "3 × 3 reps (5s + hold 1-2s)", rest: "2.5 min", note: "Descente 5s contrôlée + hold 1-2s en bas avant de remonter. Tu le fais déjà naturellement.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d1-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "3 × max (2-5s)", rest: "2 min", note: "Alterner le côté de départ à chaque séance. Bras du haut TOUJOURS tendu.", type: "hold" },
            { id: "d1-flag-2", name: "Flag groupé (chaque côté)", tag: "flag", prescription: "2 × 12-15s", rest: "90s", note: "Bras du haut tendu. Si spot sans espalier, adapter en tenant plus longtemps en position haute.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d1-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "2 × 5 à ~70% 1RM", rest: "3 min", note: "Avec ceinture si dispo. Sinon tractions archer 2×5/bras.", type: "reps" },
            { id: "d1-acc-2", name: "Rowing", tag: "acc", prescription: "3 × 8-10", rest: "90s", note: "Haltère ou barre. Élastique un bras si pas de poids (deux bras trop facile).", type: "reps" },
            { id: "d1-acc-3", name: "Dragon flags (montée/descente)", tag: "core", prescription: "2 × 4", rest: "90s", note: "Jambes tendues. Montée ET descente contrôlées 3-5s. 2 séries max.", type: "reps" },
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
            { id: "d2-hspu-1", name: "Tentatives HSPU libres", tag: "hspu", prescription: "5 × 1-2 reps", rest: "2 min", note: "Objectif : contrôle sur chaque rep. Kick-up consistant, descente ET remontée contrôlées.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Force",
          tag: "hspu",
          exercises: [
            { id: "d2-hspu-2", name: "HSPU au mur (amplitude complète)", tag: "hspu", prescription: "4 × 6-8", rest: "2.5 min", note: "Cible 6 reps sur toutes les séries. Descente en 3s. Poignées si douleur poignets.", type: "reps" },
            { id: "d2-hspu-3", name: "Négatives HSPU (libres)", tag: "hspu", prescription: "3 × 3 (5s descente)", rest: "2 min", note: "Micro-pause 5s entre reps (ça avait bien marché en S2). Excentrique lent.", type: "reps" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d2-acc-0", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", note: "Placé ici (avant les dips) pour être plus frais. Rester gainé au point d'équilibre.", type: "hold" },
            { id: "d2-acc-1", name: "Dips lestés", tag: "acc", prescription: "3 × 6-8", rest: "2.5 min", note: "Cible 35-40kg. Avec ceinture si dispo, sinon poids entre jambes.", type: "reps" },
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
            { id: "d4-fl-2", name: "FL assisté élastique (bande légère)", tag: "fl", prescription: "3 × 8-10s", rest: "2.5 min", note: "Même bande légère. RPE en baisse en S2, on pousse le temps. Cible RPE 7-8.", type: "hold" },
            { id: "d4-fl-3", name: "FL raises (suspension → FL → retour)", tag: "fl", prescription: "3 × 5-6", rest: "2.5 min", note: "Tu as fait 5,4,5 en S2. Cible 5-6 reps propres bras tendus.", type: "reps" },
          ],
        },
        {
          title: "Human Flag",
          tag: "flag",
          exercises: [
            { id: "d4-flag-1", name: "Flag horizontal (chaque côté)", tag: "flag", prescription: "2 × max chaque côté", rest: "2 min", note: "Alterner côté de départ. Bras du haut TOUJOURS tendu.", type: "hold" },
            { id: "d4-flag-2", name: "Flag écarté/groupé (chaque côté)", tag: "flag", prescription: "2 × 10-15s", rest: "90s", note: "Bras du haut tendu. Bien placer les mains avant de monter.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d4-acc-1", name: "Tractions lestées (maintenance)", tag: "acc", prescription: "3 × 3 à ~75% 1RM", rest: "3 min", note: "Avec ceinture si dispo. Sinon tractions archer 2×5/bras.", type: "reps" },
            { id: "d4-acc-2", name: "Tractions archer", tag: "acc", prescription: "3 × 4 chaque bras", rest: "2 min", note: "Garder 1 rep en réserve.", type: "reps" },
            { id: "d4-acc-3", name: "Dragon flags (montée/descente)", tag: "core", prescription: "2 × 4", rest: "90s", note: "Jambes tendues. Montée ET descente contrôlées. 2 séries max.", type: "reps" },
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
            { id: "d5-hspu-1", name: "HSPU libres (singles)", tag: "hspu", prescription: "5 × 1 rep", rest: "90s", note: "Objectif 5/5 contrôlées (4/5 en S2). Chaque rep = descente ET remontée maîtrisées.", type: "reps" },
          ],
        },
        {
          title: "HSPU mur — Intensité",
          tag: "hspu",
          exercises: [
            { id: "d5-hspu-2", name: "HSPU mur (déficit si prêt)", tag: "hspu", prescription: "5 × 5", rest: "3 min", note: "Garder 5×5. Déficit pas encore.", type: "reps" },
            { id: "d5-hspu-3", name: "HSPU mur — maintien bas", tag: "hspu", prescription: "3 × 12-15s", rest: "2 min", note: "12s atteint en S2. Pousser vers 15s. Pousser activement, pas juste tenir.", type: "hold" },
          ],
        },
        {
          title: "Accessoires",
          tag: "acc",
          exercises: [
            { id: "d5-acc-0", name: "Équilibre libre (maintien)", tag: "acc", prescription: "3 × max", rest: "90s", note: "Déplacé ici pour être plus frais. Rester gainé, pas de cambrure.", type: "hold" },
            { id: "d5-acc-1", name: "Dips lestés (lourd)", tag: "acc", prescription: "4 × 4-6", rest: "3 min", note: "Cible 50kg. Bonne charge trouvée en S2.", type: "reps" },
            { id: "d5-acc-2", name: "Élévations latérales", tag: "acc", prescription: "3 × 12-15", rest: "60s", note: "Utilise ce que tu as. Même des bouteilles d'eau.", type: "reps" },
          ],
        },
      ],
    },
  ],
};
