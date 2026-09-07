"use client";

import { useState } from "react";

type Tab = "plan" | "science";

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
              <div className="text-xs text-[var(--text-dim)] font-medium">Mésocycle</div>
              <div className="font-semibold">5 semaines (4+1 deload)</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)] font-medium">Durée totale</div>
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
            { day: "Mar", focus: "Poussée + HSPU", type: "Volume", color: "var(--blue)" },
            { day: "Mer", focus: "Course", type: "", color: "var(--text-dim)" },
            { day: "Jeu", focus: "Tirage + Flag", type: "Intensité", color: "var(--green)" },
            { day: "Ven", focus: "Poussée + HSPU", type: "Intensité", color: "var(--blue)" },
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
              La force de tirage est déjà au niveau requis (+72% PDC). Le problème n&apos;est pas la force brute mais
              l&apos;<strong className="text-[var(--foreground)]">endurance isométrique angulaire</strong> et le
              <strong className="text-[var(--foreground)]"> gainage anti-extension</strong> (accentué à 183cm).
              Arrêter les tentatives max de 2s, passer aux maintiens assistés de 8-12s + excentriques.
            </p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--blue)]">
            <div className="text-sm font-bold mb-1">HSPU — Problème technique</div>
            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              80% technique/équilibre, 20% force. 8 HSPU au mur = base solide.
              Double approche : <strong className="text-[var(--foreground)]">volume mur</strong> (8 &rarr; 15 reps) +
              <strong className="text-[var(--foreground)]"> skill libre en GTG</strong> (singles qualité).
            </p>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm border-l-[3px] border-l-[var(--orange)]">
            <div className="text-sm font-bold mb-1">Human Flag — Nouveau, gains rapides</div>
            <p className="text-xs text-[var(--text-dim)] leading-relaxed">
              2s presque horizontal sans entraînement spécifique = bonne base.
              La progression sera rapide avec un travail régulier 1-2x/semaine.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy keys */}
      <section>
        <h2 className="text-lg font-bold mb-3">Principes clés</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-3">
          {[
            { title: "Jamais de tentatives max en FL", desc: "Maintiens assistés 8-12s au lieu de grinds de 2s" },
            { title: "Dragon flags = exercice #1", desc: "Anti-extension sous levier long — clé du FL à 183cm" },
            { title: "Écarts de durée = DUP", desc: "Lun/Mar volume (plus de sets, effort modéré), Jeu/Ven intensité (charges lourdes, max)" },
            { title: "Deload toutes les 5 semaines", desc: "50% du volume, même intensité, tester les holds pendant le deload" },
            { title: "Pull-ups lestés = maintenance", desc: "+72% PDC déjà acquis, inutile d’en rajouter — focus isométrique" },
            { title: "Mercredi : course modérée", desc: "Protège la séance FL intensité du jeudi" },
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
            { num: 1, title: "Reset fondation", weeks: "Sem. 1-5", desc: "Apprentissage des maintiens bandés, excentriques FL, volume mur HSPU" },
            { num: 2, title: "Montée en intensité", weeks: "Sem. 6-10", desc: "Réduction bandes, plus de tentatives libres, déficit HSPU" },
            { num: 3, title: "Consolidation", weeks: "Sem. 11-15", desc: "Retrait des bandes, clusters isométriques, HSPU libres en sets" },
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
            Trois systèmes biologiques doivent converger, chacun à une vitesse différente.
            Le plus lent dicte le rythme.
          </p>
          <div className="space-y-2">
            {[
              { label: "Neural", time: "1-8 sem.", pct: 90, color: "var(--accent)" },
              { label: "Fibre musculaire", time: "6-16 sem.", pct: 70, color: "var(--green)" },
              { label: "Hypertrophie", time: "2-24 mois", pct: 50, color: "var(--green)" },
              { label: "Tendon (rigidité)", time: "3-12 mois", pct: 30, color: "var(--orange)" },
              { label: "Tendon (morpho)", time: "6 mois - années", pct: 15, color: "var(--red)" },
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
        <h2 className="text-lg font-bold mb-3">Le décalage muscle-tendon</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm border-l-[3px] border-l-[var(--red)]">
          <p className="text-sm leading-relaxed">
            Les muscles s&apos;adaptent en <strong>semaines</strong>, les tendons en <strong>mois à années</strong>.
            Il y a toujours une fenêtre où tes muscles peuvent générer plus de force que tes tendons ne peuvent supporter.
            C&apos;est la cause #1 de tendinopathie en calisthenics avancé.
          </p>
          <p className="text-xs text-[var(--text-dim)] mt-2">
            Zones à risque : coude (FL), poignet (HSPU), épaule (les trois).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Isométrique vs Dynamique</h2>
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
          L&apos;excentrique est le meilleur pont vers la force isométrique (Schärer et al., 2022 : +8.7% swallow en 4 semaines).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Spécificité angulaire</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm">
          <p className="text-sm leading-relaxed">
            L&apos;entraînement isométrique produit des gains de force <strong>spécifiques à &plusmn;15°</strong> de l&apos;angle entraîné
            (Oranchuk et al., 2019). Un tuck planche construit de la force principalement à cet angle précis.
          </p>
          <p className="text-xs text-[var(--text-dim)] mt-2">
            C&apos;est pourquoi le programme combine maintiens, excentriques (plage complète) et raises dynamiques.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Volume optimal (Prilepin)</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[var(--surface2)]">
                <th className="text-left px-3 py-2 font-bold text-[var(--text-dim)]">Intensité</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Sec/séance</th>
                <th className="text-center px-2 py-2 font-bold text-[var(--text-dim)]">Séries</th>
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
          Règle : entraîne-toi à 60-75% de ton maintien max. Ne jamais aller à l&apos;échec sur les isométriques.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Récupération</h2>
        <div className="bg-white border border-[var(--border)] rounded-2xl p-4 shadow-sm space-y-2">
          {[
            { label: "Séance lourde (85-90%)", value: "48-72h" },
            { label: "Effort maximal (95%+)", value: "72-96h" },
            { label: "Fatigue accumulée", value: "1-2 sem. allégées" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between text-sm">
              <span>{r.label}</span>
              <span className="font-semibold">{r.value}</span>
            </div>
          ))}
          <p className="text-xs text-[var(--text-dim)] mt-2">
            Sommeil 7-9h non négociable. La récupération du SNC est disproportionnellement dépendante du sommeil.
          </p>
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
        <button
          onClick={() => setTab("plan")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "plan" ? "bg-white text-[var(--foreground)] shadow-sm" : "text-[var(--text-dim)]"
          }`}
        >
          Plan
        </button>
        <button
          onClick={() => setTab("science")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            tab === "science" ? "bg-white text-[var(--foreground)] shadow-sm" : "text-[var(--text-dim)]"
          }`}
        >
          Science
        </button>
      </div>

      {tab === "plan" ? <PlanTab /> : <ScienceTab />}
    </main>
  );
}
