"use client";

import { useState } from "react";

type Tab = "plan" | "science" | "lifestyle";

function PlanTab() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <section>
        <h2 className="text-lg font-bold mb-3">Vue d&apos;ensemble</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-xs text-[var(--text-dim)] font-medium">Structure</div>
              <div className="font-semibold">4 jours / semaine</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)] font-medium">Split</div>
              <div className="font-semibold">Push / Pull + DUP</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)] font-medium">Mesocycle</div>
              <div className="font-semibold">5 semaines (4+1 deload)</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)] font-medium">Duree totale</div>
              <div className="font-semibold">15 semaines (3 blocs)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly schedule */}
      <section>
        <h2 className="text-lg font-bold mb-3">Semaine type</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
          {[
            { day: "Lun", focus: "Tirage + Flag", type: "Volume", color: "var(--green)" },
            { day: "Mar", focus: "Poussee + HSPU", type: "Volume", color: "var(--blue)" },
            { day: "Mer", focus: "Course", type: "", color: "var(--text-dim)" },
            { day: "Jeu", focus: "Tirage + Flag", type: "Intensite", color: "var(--green)" },
            { day: "Ven", focus: "Poussee + HSPU", type: "Intensite", color: "var(--blue)" },
            { day: "Sam", focus: "Repos", type: "", color: "var(--text-dim)" },
            { day: "Dim", focus: "Course", type: "", color: "var(--text-dim)" },
          ].map((d, i) => (
            <div key={i} className={`flex items-center px-4 py-2.5 ${i > 0 ? "border-t border-[var(--border)]" : ""}`}>
              <span className="w-10 text-xs font-bold text-[var(--text-dim)]">{d.day}</span>
              <span className="flex-1 text-sm font-medium" style={{ color: d.color }}>{d.focus}</span>
              {d.type && <span className="text-xs text-[var(--text-dim)]">{d.type}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Targets */}
      <section>
        <h2 className="text-lg font-bold mb-3">Objectifs (15 semaines)</h2>
        <div className="space-y-2">
          {[
            { skill: "Front Lever", from: "2s", to: "5-8s", color: "var(--green)", pct: 55 },
            { skill: "HSPU libre", from: "2-4 reps", to: "5-8 reps", color: "var(--blue)", pct: 60 },
            { skill: "Human Flag", from: "2s", to: "6-10s", color: "var(--orange)", pct: 65 },
          ].map((t) => (
            <div key={t.skill} className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-semibold">{t.skill}</span>
                <span className="text-xs text-[var(--text-dim)]">{t.from} &rarr; {t.to}</span>
              </div>
              <div className="h-2 bg-[var(--surface2)] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.color }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnosis */}
      <section>
        <h2 className="text-lg font-bold mb-3">Diagnostic</h2>
        <div className="space-y-2">
          <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--green)]">
            <div className="text-sm font-bold mb-1">Front Lever — Plateau &gt;1 an</div>
            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              La force de tirage est deja au niveau requis (+72% PDC). Le probleme n&apos;est pas la force brute mais
              l&apos;<strong className="text-[var(--foreground)]">endurance isometrique angulaire</strong> et le
              <strong className="text-[var(--foreground)]"> gainage anti-extension</strong> (accentue a 183cm).
              Arreter les tentatives max de 2s, passer aux maintiens assistes de 8-12s + excentriques.
            </p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--blue)]">
            <div className="text-sm font-bold mb-1">HSPU — Probleme technique</div>
            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              80% technique/equilibre, 20% force. 8 HSPU au mur = base solide.
              Double approche : <strong className="text-[var(--foreground)]">volume mur</strong> (8 &rarr; 15 reps) +
              <strong className="text-[var(--foreground)]"> skill libre en GTG</strong> (singles qualite).
            </p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--orange)]">
            <div className="text-sm font-bold mb-1">Human Flag — Nouveau, gains rapides</div>
            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              2s presque horizontal sans entrainement specifique = bonne base.
              La progression sera rapide avec un travail regulier 1-2x/semaine.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy keys */}
      <section>
        <h2 className="text-lg font-bold mb-3">Principes cles</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-3">
          {[
            { title: "Jamais de tentatives max en FL", desc: "Maintiens assistes 8-12s au lieu de grinds de 2s" },
            { title: "Dragon flags = exercice #1", desc: "Anti-extension sous levier long — cle du FL a 183cm" },
            { title: "Ecarts de duree = DUP", desc: "Lun/Mar volume (plus de sets, effort modere), Jeu/Ven intensite (charges lourdes, max)" },
            { title: "Deload toutes les 5 semaines", desc: "50% du volume, meme intensite, tester les holds pendant le deload" },
            { title: "Pull-ups lestes = maintenance", desc: "+72% PDC deja acquis, inutile d'en rajouter — focus isometrique" },
            { title: "Mercredi : course moderee", desc: "Protege la seance FL intensite du jeudi" },
          ].map((p, i) => (
            <div key={i}>
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="text-xs text-[var(--text-dim)]">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mesocycle blocks */}
      <section>
        <h2 className="text-lg font-bold mb-3">Les 3 blocs</h2>
        <div className="space-y-2">
          {[
            { num: 1, title: "Reset fondation", weeks: "Sem. 1-5", desc: "Apprentissage des maintiens bandes, excentriques FL, volume mur HSPU" },
            { num: 2, title: "Montee en intensite", weeks: "Sem. 6-10", desc: "Reduction bandes, plus de tentatives libres, deficit HSPU" },
            { num: 3, title: "Consolidation", weeks: "Sem. 11-15", desc: "Retrait des bandes, clusters isometriques, HSPU libres en sets" },
          ].map((b) => (
            <div key={b.num} className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center">{b.num}</span>
                <span className="text-sm font-bold">{b.title}</span>
                <span className="text-xs text-[var(--text-dim)] ml-auto">{b.weeks}</span>
              </div>
              <p className="text-xs text-[var(--text-dim)]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ScienceTab() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-bold mb-3">Pourquoi c&apos;est long</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-[var(--foreground)] leading-relaxed mb-3">
            Trois systemes biologiques doivent converger, chacun a une vitesse differente.
            Le plus lent dicte le rythme.
          </p>
          <div className="space-y-2">
            {[
              { label: "Neural", time: "1-8 sem.", pct: 90, color: "var(--accent)" },
              { label: "Fibre musculaire", time: "6-16 sem.", pct: 70, color: "var(--green)" },
              { label: "Hypertrophie", time: "2-24 mois", pct: 50, color: "var(--green)" },
              { label: "Tendon (rigidite)", time: "3-12 mois", pct: 30, color: "var(--orange)" },
              { label: "Tendon (morpho)", time: "6 mois - annees", pct: 15, color: "var(--red)" },
            ].map((a) => (
              <div key={a.label} className="flex items-center gap-2">
                <span className="text-xs font-medium w-28 shrink-0">{a.label}</span>
                <div className="flex-1 h-2 bg-[var(--surface2)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
                <span className="text-xs text-[var(--text-dim)] w-20 text-right shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Le decalage muscle-tendon</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm border-l-[3px] border-l-[var(--red)]">
          <p className="text-sm leading-relaxed">
            Les muscles s&apos;adaptent en <strong>semaines</strong>, les tendons en <strong>mois a annees</strong>.
            Il y a toujours une fenetre ou tes muscles peuvent generer plus de force que tes tendons ne peuvent supporter.
            C&apos;est la cause #1 de tendinopathie en calisthenics avance.
          </p>
          <p className="text-xs text-[var(--text-dim)] mt-2">
            Zones a risque : coude (FL), poignet (HSPU), epaule (les trois).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Isometrique vs Dynamique</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th className="text-left px-3 py-2 font-bold text-[var(--text-dim)]">Dimension</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Iso</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Conc.</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Exc.</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Force", "Haute", "Basse", "Max"],
                ["Recrutement", "Haut", "Moyen", "Haut"],
                ["DOMS", "Min.", "Min.", "Fort"],
                ["Transfert iso", "Best", "Mod.", "Bon"],
              ].map(([dim, iso, con, ecc], i) => (
                <tr key={i} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2 font-medium">{dim}</td>
                  <td className="px-2 py-2 text-center">{iso}</td>
                  <td className="px-2 py-2 text-center">{con}</td>
                  <td className="px-2 py-2 text-center">{ecc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--text-dim)] mt-2">
          L&apos;excentrique est le meilleur pont vers la force isometrique (Scharer et al., 2022 : +8.7% swallow en 4 semaines).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Specificite angulaire</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm">
          <p className="text-sm leading-relaxed">
            L&apos;entrainement isometrique produit des gains de force <strong>specifiques a +/-15 degres</strong> de l&apos;angle entraine
            (Oranchuk et al., 2019). Un tuck planche construit de la force principalement a cet angle precis.
          </p>
          <p className="text-xs text-[var(--text-dim)] mt-2">
            C&apos;est pourquoi le programme combine maintiens, excentriques (plage complete) et raises dynamiques.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Volume optimal (Prilepin)</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th className="text-left px-3 py-2 font-bold text-[var(--text-dim)]">Intensite</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Sec/seance</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Series</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["55-65%", "100-150s", "4-6"],
                ["70-80%", "60-100s", "4-5"],
                ["85-90%", "30-60s", "3-4"],
              ].map(([int, sec, sets], i) => (
                <tr key={i} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2 font-medium">{int}</td>
                  <td className="px-2 py-2 text-center">{sec}</td>
                  <td className="px-2 py-2 text-center">{sets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--text-dim)] mt-2">
          Regle : entraine-toi a 60-75% de ton maintien max. Ne jamais aller a l&apos;echec sur les isometriques.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Recuperation</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-2">
          {[
            { label: "Seance lourde (85-90%)", value: "48-72h" },
            { label: "Effort maximal (95%+)", value: "72-96h" },
            { label: "Fatigue accumulee", value: "1-2 sem. allegees" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between text-sm">
              <span>{r.label}</span>
              <span className="font-semibold">{r.value}</span>
            </div>
          ))}
          <p className="text-xs text-[var(--text-dim)] mt-2">
            Sommeil 7-9h non negociable. La recuperation du SNC est disproportionnellement dependante du sommeil.
          </p>
        </div>
      </section>
    </div>
  );
}

function LifestyleTab() {
  return (
    <div className="space-y-6">
      {/* Impact ranking */}
      <section>
        <h2 className="text-lg font-bold mb-3">Classement par impact</h2>
        <p className="text-xs text-[var(--text-dim)] mb-3">Ce qui te fait progresser et ce qui te ralentit, classe par taille d&apos;effet mesuree en recherche.</p>
        <div className="space-y-1.5">
          {[
            { label: "Sommeil 8h+", impact: "+15-25%", type: "boost", color: "var(--green)" },
            { label: "Proteines 1.6-2g/kg", impact: "+10-20%", type: "boost", color: "var(--green)" },
            { label: "Creatine 5g/jour", impact: "+5-10%", type: "boost", color: "var(--green)" },
            { label: "Collagene + vit C", impact: "Tendons", type: "boost", color: "var(--blue)" },
            { label: "Cafe jours intensite", impact: "+5-8%", type: "boost", color: "var(--green)" },
            { label: "Manque de sommeil", impact: "-15-25%", type: "risk", color: "var(--red)" },
            { label: "Surentrainement", impact: "Blessure", type: "risk", color: "var(--red)" },
            { label: "Nicotine (vape/clope)", impact: "-20% tendon", type: "risk", color: "var(--red)" },
            { label: "AINS chroniques", impact: "Bloque collagene", type: "risk", color: "var(--red)" },
            { label: "Alcool binge (5+)", impact: "-24-37% MPS", type: "risk", color: "var(--orange)" },
            { label: "Stress chronique", impact: "-5-15%", type: "risk", color: "var(--orange)" },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-[var(--border)] rounded-lg px-3 py-2 shadow-sm flex items-center gap-2">
              <span className={`w-1.5 h-8 rounded-full shrink-0`} style={{ background: item.color }} />
              <span className="text-sm font-medium flex-1">{item.label}</span>
              <span className="text-xs font-bold shrink-0" style={{ color: item.color }}>{item.impact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sleep */}
      <section>
        <h2 className="text-lg font-bold mb-3">Sommeil — Facteur #1</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm border-l-[3px] border-l-[var(--red)]">
          <p className="text-sm leading-relaxed mb-2">
            <strong>Une seule nuit blanche</strong> suffit a reduire la synthese proteique de 18%, la testosterone de 24% et augmenter le cortisol de 21% (Lamon et al., 2021, biopsies musculaires).
          </p>
          <p className="text-sm leading-relaxed mb-2">
            La <strong>technique et la coordination</strong> sont les domaines les plus touches (effet x3.5 par rapport a la force max). Pour du FL et du HSPU, le sommeil affecte directement la qualite du skill.
          </p>
          <p className="text-sm leading-relaxed">
            Risque de blessure : <strong>+34-58%</strong> avec un sommeil insuffisant (meta-analyse 2025).
          </p>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm mt-2">
          <div className="text-xs font-bold text-[var(--text-dim)] mb-1">Rattraper le weekend ?</div>
          <p className="text-xs text-[var(--text-dim)]">Partiellement : 3 nuits de 10h restaurent la testosterone mais pas le cortisol. C&apos;est un pansement, pas une solution.</p>
        </div>
      </section>

      {/* Nutrition essentials */}
      <section>
        <h2 className="text-lg font-bold mb-3">Nutrition — L&apos;essentiel</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm">
          <div className="space-y-3">
            <div>
              <div className="text-sm font-semibold">Proteines : 1.6-2g/kg/jour</div>
              <div className="text-xs text-[var(--text-dim)]">= 120-150g pour 76kg. 4 repas de 25-40g. La leucine declenche la synthese — chaque repas doit contenir 1-3g (25g de whey ou 150g de viande suffit).</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Glucides : 4-5g/kg/jour</div>
              <div className="text-xs text-[var(--text-dim)]">Le SNC tourne au glucose. Ne jamais s&apos;entrainer a jeun pour du travail technique. Sinon, pas d&apos;urgence particuliere sur le timing.</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Lipides : jamais en dessous de 20% des calories</div>
              <div className="text-xs text-[var(--text-dim)]">La testosterone est synthetisee a partir du cholesterol. En dessous de 20% des calories en lipides, chute de 10-15% de la testo (meta-analyse Whittaker 2021).</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Deficit calorique modere : pas de probleme</div>
              <div className="text-xs text-[var(--text-dim)]">Un deficit de 300-500 kcal ne bloque pas les gains de force (meta-analyse Murphy 2022). Le risque commence sous 22 kcal/kg de masse maigre/jour.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements stack */}
      <section>
        <h2 className="text-lg font-bold mb-3">Supplements — Le minimum efficace</h2>
        <div className="space-y-2">
          <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm border-l-[3px] border-l-[var(--green)]">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">Creatine 5g/jour</div>
              <div className="text-xs font-bold text-[var(--green)]">+5-10% force</div>
            </div>
            <p className="text-xs text-[var(--text-dim)] mt-1">Le supplement le plus etudie (500+ essais). Alimente le systeme phosphocreatine (les 10-15 premieres secondes d&apos;effort max). +1-2kg d&apos;eau intracellulaire au debut, mais le ratio force/poids s&apos;ameliore.</p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm border-l-[3px] border-l-[var(--blue)]">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">Collagene 15-20g + vit C</div>
              <div className="text-xs font-bold text-[var(--blue)]">Tendons</div>
            </div>
            <p className="text-xs text-[var(--text-dim)] mt-1">45-60 min avant l&apos;entrainement avec un kiwi ou orange. Double la synthese de collagene tendineux (Shaw et al. 2017). GRADE A pour la section transversale du tendon. Pas d&apos;effet sur la force — c&apos;est une assurance pour ton facteur limitant.</p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm border-l-[3px] border-l-[var(--orange)]">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">Vitamine D (oct-mars)</div>
              <div className="text-xs font-bold text-[var(--orange)]">Si deficient</div>
            </div>
            <p className="text-xs text-[var(--text-dim)] mt-1">56% des athletes sont insuffisants. Corrige directement la taille des fibres Type II (force explosive). 2000 IU/jour en hiver. En ete, 15-20 min de soleil bras/jambes entre 11h-15h suffit. Faire un bilan sanguin.</p>
          </div>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm mt-2">
          <div className="text-xs font-bold mb-1">Omega-3 par l&apos;alimentation</div>
          <p className="text-xs text-[var(--text-dim)]">1 boite de maquereau 1 jour sur 2 = ~1300 mg EPA+DHA/jour en moyenne. Suffisant pour l&apos;anti-inflammatoire et la recuperation (impact direct sur la force : ~1-3%, pas prioritaire en supplement).</p>
        </div>
      </section>

      {/* What hurts */}
      <section>
        <h2 className="text-lg font-bold mb-3">Ce qui ralentit la progression</h2>

        <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--red)] mb-2">
          <div className="text-sm font-bold mb-1">Nicotine (vape et cigarette)</div>
          <p className="text-xs text-[var(--text-dim)] leading-relaxed">
            La resistance a la traction des tendons chute de <strong className="text-[var(--foreground)]">21%</strong> sous nicotine (modele animal). La vape est <strong className="text-[var(--foreground)]">pire que la cigarette</strong> dans les etudes sur la reparation tendineuse. La nicotine cause une vasoconstriction qui reduit le flux sanguin vers les tendons — le tissu qui est deja ton facteur limitant.
          </p>
        </div>

        <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--red)] mb-2">
          <div className="text-sm font-bold mb-1">Ibuprofene / AINS en usage chronique</div>
          <p className="text-xs text-[var(--text-dim)] leading-relaxed">
            L&apos;indometacine <strong className="text-[var(--foreground)]">abolit completement</strong> la synthese de collagene tendineux induite par l&apos;exercice. 1200mg/jour pendant 8 semaines bloque l&apos;hypertrophie musculaire. Usage court (3-5 jours) pour une blessure aigue = ok. Usage regulier autour de l&apos;entrainement = contre-productif.
          </p>
        </div>

        <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--orange)] mb-2">
          <div className="text-sm font-bold mb-1">Stress chronique</div>
          <p className="text-xs text-[var(--text-dim)] leading-relaxed">
            Le cortisol du stress de vie s&apos;additionne au cortisol d&apos;entrainement. Effet sur les tendons : le cortisol active les metalloproteinases matricielles (MMP) qui degradent le collagene. Mecanisme solide, mais l&apos;impact precis sur les gains de force au quotidien n&apos;est pas quantifie.
          </p>
        </div>
      </section>

      {/* Alcohol */}
      <section>
        <h2 className="text-lg font-bold mb-3">Alcool — Les vrais chiffres</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th className="text-left px-3 py-2 font-bold text-[var(--text-dim)]">Dose</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">MPS</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Testo</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">GH nuit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1-2 verres", "?", "OK", "Peu etudie"],
                ["3-5 verres", "Limite", "T/C baisse", "-70%"],
                ["6+ verres", "-24-37%", "Chute 24h", "Severe"],
              ].map(([dose, mps, testo, gh], i) => (
                <tr key={i} className="border-t border-[var(--border)]">
                  <td className="px-3 py-2 font-medium">{dose}</td>
                  <td className="px-2 py-2 text-center">{mps}</td>
                  <td className="px-2 py-2 text-center">{testo}</td>
                  <td className="px-2 py-2 text-center">{gh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-xl p-3 shadow-sm mt-2 space-y-1.5">
          <p className="text-xs text-[var(--text-dim)]"><strong className="text-[var(--foreground)]">Important :</strong> les titres alarmistes extrapolent du binge (10-12 verres). Aucun essai humain n&apos;a mesure l&apos;impact de 1-3 verres sur la MPS.</p>
          <p className="text-xs text-[var(--text-dim)]"><strong className="text-[var(--foreground)]">Regles :</strong> jamais post-entrainement (4-6h), jamais la veille d&apos;une seance technique, 2-3 verres max en soiree sociale.</p>
        </div>
      </section>

      {/* Overestimated */}
      <section>
        <h2 className="text-lg font-bold mb-3">Ce qui est surestime</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-3">
          {[
            { title: "Course 2x/semaine", desc: "Interference quasi nulle sur le haut du corps (meta-analyse). L'interference est surtout sur les jambes et les fibres Type I." },
            { title: "Lumiere bleue le soir", desc: "Effet reel mais modeste : ~10 min de delai d'endormissement. Le vrai probleme est comportemental (stimulation, temps de sommeil vole)." },
            { title: "Fenetre anabolique post-entrainement", desc: "Largement surfaite. La MPS reste elevee 24h+. Si tu as mange 1-2h avant, pas d'urgence. Total quotidien > timing." },
            { title: "BCAA / glutamine", desc: "Completement redondant si tu manges assez de proteines. Le leucine dans 25g de whey couvre tout." },
            { title: "Boosters de testosterone", desc: "Tribulus, DAA : zero evidence d'efficacite chez l'humain entraine. Meta-analyses negatives." },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs text-[var(--text-dim)]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick daily checklist */}
      <section>
        <h2 className="text-lg font-bold mb-3">Checklist quotidienne</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-2">
          {[
            "7-9h de sommeil (priorite #1)",
            "120-150g de proteines reparties en 4 repas",
            "5g de creatine (tous les jours)",
            "Ne pas s'entrainer a jeun",
            "Collagene + kiwi 45-60 min avant la seance",
            "Pas d'ibuprofene autour de l'entrainement",
            "Boite de maquereau ou sardines ~1j/2",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[var(--surface2)] flex items-center justify-center shrink-0 mt-0.5 text-xs text-[var(--text-dim)]">{i + 1}</span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function PlanPage() {
  const [tab, setTab] = useState<Tab>("plan");

  return (
    <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
      <h1 className="text-2xl font-extrabold text-[var(--foreground)] mb-4">Programme</h1>

      <div className="flex gap-1 bg-[var(--surface2)] rounded-xl p-1 mb-6">
        {[
          { key: "plan" as Tab, label: "Plan" },
          { key: "science" as Tab, label: "Science" },
          { key: "lifestyle" as Tab, label: "Nutrition" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === t.key ? "bg-white text-[var(--foreground)] shadow-sm" : "text-[var(--text-dim)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "plan" && <PlanTab />}
      {tab === "science" && <ScienceTab />}
      {tab === "lifestyle" && <LifestyleTab />}
    </main>
  );
}
