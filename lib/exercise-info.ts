export interface ExerciseInfo {
  description: string;
  cues: string[];
  mistakes: string[];
}

const exerciseInfoMap: Record<string, ExerciseInfo> = {
  // ── FL ──
  "FL assisté élastique (maintien)": {
    description: "Front lever complet avec un élastique autour des hanches pour réduire la charge. L'objectif est de tenir un corps horizontal droit pendant 8-12 secondes à effort contrôlé — PAS à effort maximal.",
    cues: [
      "Rétracter et abaisser les omoplates — les tirer ensemble et vers le bas",
      "Serrer les fessiers pour maintenir la rétroversion du bassin",
      "Ligne droite des épaules aux orteils — pas de chute des hanches",
      "Bras complètement verrouillés, pousser la barre loin de toi",
      "Respirer — expirations courtes et contrôlées pendant le maintien",
    ],
    mistakes: [
      "Chute des hanches — problème #1. Si les hanches tombent, prendre un élastique plus épais",
      "Bras pliés — change complètement l'exercice, doit être bras tendus",
      "Tête en avant / regarder en haut — garder le cou neutre",
      "S'entraîner à l'échec — s'arrêter à 60-75% du maintien max",
      "Élastique trop fin — tu dois pouvoir tenir 8-12s confortablement",
    ],
  },
  "FL excentriques (descente lente)": {
    description: "Partir de la position inversée (pieds en haut), puis descendre lentement le corps jusqu'à l'horizontale. La phase excentrique construit de la force sur toute l'amplitude et se transfère mieux vers la force isométrique que le travail concentrique.",
    cues: [
      "Partir complètement inversé — pieds directement au-dessus de la barre",
      "Descendre AUSSI LENTEMENT que possible — viser 5-8 secondes",
      "Maintenir la rétraction scapulaire tout au long de la descente",
      "S'arrêter à l'horizontale — remonter en haut entre chaque rep",
      "Bras tendus — s'ils plient, tu as dépassé ton niveau",
    ],
    mistakes: [
      "Descendre trop vite — si tu ne peux pas faire 5s, utiliser un élastique",
      "Bras pliés pendant la descente",
      "Ne pas remonter entre les reps — revenir complètement en position inversée",
      "Trop de reps — 3 par série max, c'est coûteux pour le système nerveux",
    ],
  },
  "FL complet sans assistance": {
    description: "Front lever complet sans élastique. C'est ton exercice de test / drive neural — effort total, forme parfaite, séries limitées. Uniquement les jours d'intensité.",
    cues: [
      "Tirer jusqu'à la position depuis la suspension inversée ou la suspension",
      "Rétraction scapulaire complète, fessiers serrés, pointes de pieds",
      "Tenir tant que la forme est parfaite — lâcher dès que les hanches tombent",
      "La qualité prime sur la durée — un 2s propre bat un 4s tremblant",
    ],
    mistakes: [
      "Forcer au-delà de l'échec — si les hanches tombent, c'est fini, lâcher",
      "Trop de séries — 3 max en jour d'intensité, la fatigue du SNC s'accumule vite",
      "Faire ça à chaque séance — les jours volume doivent utiliser l'élastique",
    ],
  },
  "FL raises (suspension → FL → retour)": {
    description: "Depuis une suspension bras tendus, monter le corps droit jusqu'à la position front lever horizontale, tenir 1 seconde, puis redescendre. Version dynamique du FL qui construit la force de tirage vers la position.",
    cues: [
      "Partir d'une suspension complète, bras tendus",
      "Initier en abaissant et rétractant les omoplates",
      "Bras tendus tout au long — c'est un tirage bras tendus",
      "Pause 1s à l'horizontale avant de redescendre",
      "Contrôler la descente — ne pas juste tomber",
    ],
    mistakes: [
      "Bras pliés — ça devient une variante de traction si les bras se plient",
      "Kipping ou balancement pour monter",
      "Sauter la pause en haut — le maintien de 1s est le but",
      "Aller trop vite — contrôler les deux phases",
    ],
  },
  "FL assisté élastique (bande légère)": {
    description: "Même exercice que le FL assisté, mais avec un élastique plus léger (moins d'assistance). Progression par rapport au jour volume.",
    cues: [
      "Même technique que le FL assisté standard",
      "L'élastique doit être plus fin qu'en jour volume",
      "Viser 6-8s de maintien propre",
    ],
    mistakes: [
      "Utiliser le même élastique qu'en volume — le jour intensité doit être plus dur",
      "Compenser avec les bras pliés quand l'assistance diminue",
    ],
  },

  // ── Flag ──
  "Flag horizontal (chaque côté)": {
    description: "Human flag à l'horizontale ou presque. Le bras du haut tire (grand dorsal/biceps), le bras du bas pousse (deltoïde/triceps). Les deux côtés à chaque séance pour éviter l'asymétrie.",
    cues: [
      "Main du haut : prise pronation, tirer fort vers le poteau",
      "Main du bas : pousser le poteau loin — c'est le bras le plus dur",
      "Engager les obliques à fond — comme une planche latérale sous stéroïdes",
      "Jambes serrées, pointes de pieds pour une ligne propre",
      "Chronométrer chaque côté — toujours faire les deux",
    ],
    mistakes: [
      "Ne travailler qu'un seul côté — crée une asymétrie dangereuse",
      "Négliger la poussée du bras bas — la plupart sous-entraînent ça",
      "Bloquer la respiration — respirer pendant le maintien",
      "Hanches qui tombent — si tu ne tiens pas l'horizontale, faire 45°",
    ],
  },
  "Flag groupé (chaque côté)": {
    description: "Human flag avec les genoux repliés vers la poitrine. Levier plus court = plus facile. Construit le schéma moteur et l'endurance des obliques pour des durées plus longues que le flag complet.",
    cues: [
      "Même prise et mécanique des bras que le flag complet",
      "Genoux serrés contre la poitrine pour raccourcir le levier",
      "Focus sur la durée : 12-15s par série",
      "Les deux côtés, chaque série",
    ],
    mistakes: [
      "Laisser les genoux s'éloigner de la poitrine — garder un groupé serré",
      "Passer au flag complet avant que le groupé soit solide (3×15s)",
    ],
  },
  "Flag écarté/groupé (chaque côté)": {
    description: "Progression intermédiaire — jambes écartées ou groupées. Construit du temps sous tension à une difficulté modérée entre le groupé et l'horizontal complet.",
    cues: [
      "Écarté : jambes larges pour un levier effectif plus court",
      "Maintenir la ligne horizontale malgré la facilité du levier",
      "Viser 10-15s de maintien par côté",
    ],
    mistakes: [
      "Passer à l'horizontal trop tôt — tenir l'écarté/groupé jusqu'à 3×15s",
      "Écarté asymétrique — garder les jambes uniformément écartées",
    ],
  },

  // ── HSPU ──
  "Tentatives HSPU libres": {
    description: "Handstand push-ups sans mur. C'est du travail de SKILL, pas de force. Qualité uniquement — abandonner si l'équilibre est mauvais. L'objectif est l'apprentissage moteur : entrée consistante, descente contrôlée, poussée avec équilibre.",
    cues: [
      "Entrée en ATR consistante — même montée à chaque fois",
      "Mains légèrement plus larges que les épaules",
      "Descendre lentement — contrôler la descente avant de se soucier de la poussée",
      "Yeux entre les mains, légère inclinaison vers l'avant",
      "Si l'équilibre est mauvais, abandonner proprement — ne pas sauver les mauvaises reps",
    ],
    mistakes: [
      "Forcer malgré un mauvais équilibre — ça entraîne des mauvais schémas",
      "Trop de tentatives quand on est fatigué — le travail de skill doit être frais",
      "Mains trop rapprochées — réduit la stabilité",
      "Dos cambré — maintenir un corps creux",
    ],
  },
  "HSPU libres (singles)": {
    description: "HSPU libres en répétitions uniques avec repos complet entre chaque tentative. Version jour d'intensité — maximiser la qualité de chaque rep individuelle.",
    cues: [
      "Une rep, reset complet, une rep — ne pas enchaîner",
      "Chaque rep doit être ta meilleure technique possible",
      "90s de repos entre les singles pour être pleinement concentré",
    ],
    mistakes: [
      "Transformer les singles en séries — si la rep 2 est moins bien que la rep 1, arrêter",
      "Écourter le repos entre les tentatives",
    ],
  },
  "HSPU au mur (amplitude complète)": {
    description: "Handstand push-ups contre le mur (poitrine face au mur pour un meilleur alignement). Amplitude complète — tête au sol, extension totale en haut. Principal exercice de force en poussée.",
    cues: [
      "Poitrine vers le mur (pas le dos) pour un bon alignement",
      "Amplitude complète — tête au sol, verrouillage complet en haut",
      "2-3 reps en réserve — ne pas s'entraîner à l'échec",
      "Contrôler la descente pendant 2-3s",
    ],
    mistakes: [
      "Dos au mur — moins bon pour les épaules, favorise la cambrure",
      "Reps partielles — si l'amplitude complète est impossible, surélever les mains",
      "S'entraîner à l'échec — tue la qualité des séries suivantes",
    ],
  },
  "HSPU mur (déficit si prêt)": {
    description: "HSPU au mur avec les mains surélevées sur des parallettes ou des cales pour une amplitude plus profonde. Progression depuis le HSPU mur plat — commencer seulement quand tu peux faire 4×10 à plat.",
    cues: [
      "3-5cm de déficit pour commencer — ne pas aller trop profond trop vite",
      "Même forme qu'à plat : descente contrôlée, verrouillage complet",
      "Plus dur qu'à plat — réduire les reps en conséquence",
    ],
    mistakes: [
      "Trop de déficit trop tôt — 3-5cm suffisent pour commencer",
      "Perdre le contact tête-sol en bas — contrôler la profondeur",
    ],
  },
  "Négatives HSPU (libres)": {
    description: "Monter en ATR, descendre le plus lentement possible (4-5 secondes), abandonner en bas. Construit la force en bas de mouvement et l'équilibre pendant la phase excentrique — les deux parties les plus dures du HSPU libre.",
    cues: [
      "Montée propre en ATR, trouver l'équilibre avant de commencer la descente",
      "4-5 secondes de descente — COMPTER",
      "Lutter pour l'équilibre tout du long — c'est le stimulus d'entraînement",
      "Abandonner proprement en bas, ne pas essayer de remonter",
    ],
    mistakes: [
      "Descendre vite — si tu ne peux pas faire 4s, faire des négatives au mur d'abord",
      "Essayer de remonter en bas — ce sont des NÉGATIVES uniquement",
    ],
  },
  "HSPU mur — maintien bas": {
    description: "Maintien isométrique en bas du HSPU au mur (nez/tête près du sol). Construit la force au point de blocage, la partie la plus dure de la poussée.",
    cues: [
      "Descendre jusqu'en bas, puis TENIR",
      "Garder l'intention de pousser — pousser contre le sol",
      "Maintiens de 8-12 secondes",
      "Respirer — expirations courtes et contrôlées",
    ],
    mistakes: [
      "Se reposer en bas au lieu de pousser activement",
      "Tête trop loin du sol — aller jusqu'à la vraie position basse",
    ],
  },

  // ── Accessoires ──
  "Tractions lestées (maintenance)": {
    description: "Tractions avec poids ajouté. En volume de maintenance — pas le driver principal. Juste assez pour maintenir ta base de force de tirage pendant que le focus est sur le travail spécifique FL.",
    cues: [
      "Départ bras tendus complet, menton au-dessus de la barre",
      "Pas de kipping — forme stricte",
      "~70% du 1RM quand fatigué",
    ],
    mistakes: [
      "Trop lourd après la fatigue — c'est de la maintenance, pas du max",
      "Demi-reps — amplitude complète ou réduire le poids",
    ],
  },
  "Dragon flags": {
    description: "Allongé sur un banc, prise derrière la tête, monter le corps à la verticale puis descendre à l'horizontale en gardant le corps droit. L'EXERCICE CLÉ de gainage pour le front lever — travaille l'anti-extension sous un long levier.",
    cues: [
      "Bien saisir le banc derrière la tête",
      "Monter à la verticale, puis descendre avec un corps DROIT",
      "Ne descendre que jusqu'où tu peux maintenir une ligne droite",
      "Rétroversion du bassin — serrer les fessiers, rentrer le coccyx",
      "3-5 secondes d'excentrique sur chaque rep",
    ],
    mistakes: [
      "Pliure aux hanches — le corps se plie à la descente",
      "Aller trop bas — s'arrêter avant que la forme se dégrade",
      "Pas de rétroversion du bassin — le bas du dos se cambre = pas bon",
    ],
  },
  "Dragon flags / roue abdominale": {
    description: "Dragon flags ou roue abdominale — les deux travaillent l'anti-extension, la demande #1 du gainage pour le front lever. Choisir celui que tu exécutes avec la meilleure forme ce jour-là.",
    cues: [
      "Dragon flag : corps droit, descente lente, rétroversion du bassin",
      "Roue : bras tendus, aller aussi loin que tu contrôles, serrer le dos",
      "Les deux : l'objectif est de résister à l'extension sous charge",
    ],
    mistakes: [
      "Roue : effondrement du bas du dos en extension complète — s'arrêter avant",
      "Dragon flag : pliure aux hanches au lieu d'un corps droit",
    ],
  },
  "Relevés de jambes suspendus": {
    description: "Suspendu à une barre, lever les jambes tendues à l'horizontale (L-sit) ou jusqu'à la barre. Construit la force du gainage dans la position exacte de suspension utilisée pour le front lever.",
    cues: [
      "Minimiser le balancement — initier depuis le core, pas avec l'élan",
      "Rétroversion du bassin en haut — arrondir légèrement le bas du dos",
      "Contrôler la descente — 2-3s pour redescendre",
      "Progression : genoux pliés → jambes tendues → orteils à la barre",
    ],
    mistakes: [
      "Balancement / kipping — utiliser un tempo plus lent",
      "Lever seulement à 90° — monter plus haut pour une activation complète",
      "Laisser tomber les jambes — contrôler la phase négative",
    ],
  },
  "Rowing": {
    description: "Rowing barre ou haltères. Force de tirage générale pour l'épaisseur du dos. Soutient le front lever en construisant du volume pour les dorsaux et le milieu du dos.",
    cues: [
      "Tirer vers le bas de la poitrine / haut de l'abdomen",
      "Serrer les omoplates ensemble en haut",
      "Contrôler l'excentrique — ne pas juste lâcher le poids",
    ],
    mistakes: [
      "Utiliser l'élan — réduire le poids si tu dois tricher",
      "Tirer vers le cou — le bas de la poitrine est la cible",
    ],
  },
  "Tractions archer": {
    description: "Traction large où un bras fait la majorité du travail pendant que l'autre assiste sur la barre. Construit la force unilatérale — aide le flag (bras du haut) et la puissance de tirage pour le FL.",
    cues: [
      "Un bras tire, l'autre reste tendu et assiste",
      "Amplitude complète — suspension bras tendus au menton au-dessus",
      "Alterner les côtés à chaque rep ou chaque série",
    ],
    mistakes: [
      "Le bras d'assistance se plie trop — le garder aussi tendu que possible",
      "Amplitude incomplète",
    ],
  },
  "Dips lestés": {
    description: "Dips aux barres parallèles ou anneaux avec poids ajouté. Principal exercice de force en poussée pour le HSPU — construit la force des triceps et du deltoïde antérieur.",
    cues: [
      "Profondeur complète — épaules sous les coudes",
      "Verrouillage complet en haut",
      "Légère inclinaison vers l'avant pour plus d'activation poitrine/épaules",
      "Contrôler la descente — 2-3s d'excentrique",
    ],
    mistakes: [
      "Reps partielles — si la profondeur complète est impossible, réduire le poids",
      "Coudes trop écartés",
      "Rebondir en bas",
    ],
  },
  "Dips lestés (lourd)": {
    description: "Dips lestés lourds — jour d'intensité. Moins de reps, plus de poids. Construit la force maximale en poussée qui se transfère au HSPU.",
    cues: [
      "Même forme que les dips lestés classiques",
      "4-6 reps, 3 min de repos",
      "Si la forme se dégrade, le poids est trop lourd",
    ],
    mistakes: [
      "Charge ego — uniquement des reps de qualité",
      "Couper la profondeur pour mettre plus de poids",
    ],
  },
  "Pike push-ups (pieds surélevés, déficit)": {
    description: "Pompes avec les pieds surélevés et les hanches en pike. Reproduit l'angle de poussée du HSPU. Ajouter un déficit (mains sur des cales) augmente l'amplitude.",
    cues: [
      "Pieds sur banc/box, hanches le plus haut possible",
      "Tête entre les mains en bas",
      "Plus le torse est vertical, plus ça transfère au HSPU",
    ],
    mistakes: [
      "Pieds pas assez haut — plus tu es à plat, moins ça transfère",
      "Coudes trop écartés — les garder à ~45°",
    ],
  },
  "Face pulls / élévations inversées": {
    description: "Travail léger de préhab épaule et deltoïde postérieur. Équilibre tout le travail de poussée et overhead. Essentiel pour la santé des épaules à long terme.",
    cues: [
      "Poids léger, reps élevées — c'est de la préhab, pas de la force",
      "Serrer les omoplates ensemble à la fin",
      "Rotation externe à la fin des face pulls",
    ],
    mistakes: [
      "Trop lourd — ça doit être facile",
      "Aller trop vite — lent et contrôlé",
    ],
  },
  "Élévations latérales": {
    description: "Isolation du deltoïde latéral. Soutient le flag (le bras du bas pousse et nécessite de l'endurance du deltoïde latéral) et la santé générale des épaules.",
    cues: [
      "Légère flexion du coude, monter à hauteur d'épaule",
      "Contrôler la montée et la descente — ne pas balancer",
      "Poids léger, sentir le muscle travailler",
    ],
    mistakes: [
      "Utiliser l'élan / balancer — réduire le poids",
      "Monter au-dessus de l'épaule — stress inutile",
    ],
  },
  "Équilibre libre (maintien)": {
    description: "Pratique d'équilibre pour le HSPU. Plus tu tiens l'équilibre longtemps, plus tu as de budget neural disponible pour la poussée pendant le HSPU.",
    cues: [
      "Doigts écartés, agripper le sol",
      "Tout serrer — fessiers, core, jambes ensemble",
      "Respirer — expirations courtes, ne pas bloquer",
      "Yeux entre les mains",
    ],
    mistakes: [
      "Dos cambré — maintenir un corps creux",
      "Bloquer la respiration — tue l'endurance",
      "S'entraîner fatigué — l'équilibre est neural, doit être frais",
    ],
  },

  // ── Échauffement ──
  "Écartés élastique": {
    description: "Tenir un élastique léger à bout de bras, écarter en serrant les omoplates. Échauffement pour la rétraction scapulaire utilisée dans le front lever.",
    cues: ["Omoplates ensemble, tenir 1s à la fin", "Élastique léger, focus sur la contraction"],
    mistakes: ["Utiliser les bras au lieu des muscles du dos", "Aller trop vite"],
  },
  "Tractions scapulaires": {
    description: "Suspendu à la barre bras tendus, rétracter/abaisser les omoplates pour soulever légèrement le corps sans plier les bras. Active exactement les muscles utilisés dans le front lever.",
    cues: ["Bras tendus tout au long", "Tirer les omoplates ensemble et VERS LE BAS", "Maintien 2s en haut"],
    mistakes: ["Plier les bras — ce n'est PAS une traction", "Ne pas tenir en haut"],
  },
  "Cercles + étirements poignets": {
    description: "Mobilité des poignets. Essentiel avant tout travail d'ATR ou HSPU pour prévenir les douleurs aux poignets.",
    cues: ["Cercles complets dans les deux sens", "Inclure des étirements fléchisseurs/poignets au sol"],
    mistakes: ["Sauter cet exercice — les blessures aux poignets sont le problème #1 en HSPU"],
  },
  "Dislocations épaules": {
    description: "Tenir un élastique ou bâton large, le passer au-dessus de la tête et derrière le dos en cercle complet. Échauffe toute l'amplitude de mouvement de l'épaule.",
    cues: ["Aller aussi large que nécessaire pour garder les bras tendus", "Lent et contrôlé — pas de balancement balistique"],
    mistakes: ["Aller trop serré trop vite — y aller progressivement", "Plier les coudes pour passer"],
  },
  "Échauffement poignets": {
    description: "Cercles flexion/extension, étirements en charge au sol. Prépare les poignets pour la charge du HSPU.",
    cues: ["Inclure les extensions de doigts", "30s dans chaque position"],
    mistakes: ["Aller trop vite — les poignets ont besoin de temps pour s'échauffer"],
  },
  "CARs épaules": {
    description: "Controlled Articular Rotations — cercles lents à amplitude maximale à l'articulation de l'épaule. Cartographie toute l'amplitude de mouvement et échauffe la capsule articulaire.",
    cues: ["Le plus lentement possible", "Amplitude maximale dans chaque direction", "Garder le reste du corps immobile"],
    mistakes: ["Aller vite", "Compenser avec le tronc"],
  },
  "Pike push-ups (échauffement)": {
    description: "Pike push-ups légers pour échauffer le schéma de poussée avant le travail HSPU plus lourd.",
    cues: ["Effort léger — juste pour faire circuler le sang", "Amplitude complète"],
    mistakes: ["Aller à l'échec — c'est un échauffement"],
  },
  "Équilibre au mur": {
    description: "ATR contre le mur pour échauffer les épaules en position overhead. Construit aussi la stabilité de l'épaule.",
    cues: ["Poitrine vers le mur", "Verrouillage complet, pousser à travers les épaules", "Respirer normalement"],
    mistakes: ["Dos au mur — moins de transfert vers le libre"],
  },
};

export function getExerciseInfo(name: string): ExerciseInfo | null {
  return exerciseInfoMap[name] || null;
}
