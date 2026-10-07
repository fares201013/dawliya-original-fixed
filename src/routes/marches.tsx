import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/marches")({
  head: () => ({
    meta: [
      { title: "Marchés africains — Dawliya Group" },
      { name: "description", content: "Routes maritimes depuis l'Égypte vers la Côte d'Ivoire, le Sénégal, le Cameroun, le Maroc, Maurice et plus." },
      { property: "og:title", content: "African markets — Dawliya Group" },
      { property: "og:description", content: "Shipping lanes from Egypt to Francophone Africa." },
    ],
  }),
  component: Markets,
});

const LANES = [
  { from: "Alexandria", to: "Abidjan (CI)", days: "16-20" },
  { from: "Damietta", to: "Dakar (SN)", days: "12-16" },
  { from: "Alexandria", to: "Douala (CM)", days: "20-24" },
  { from: "Port Said", to: "Casablanca (MA)", days: "5-7" },
  { from: "Damietta", to: "Port Louis (MU)", days: "22-28" },
  { from: "Alexandria", to: "Lomé (TG)", days: "18-22" },
  { from: "Alexandria", to: "Cotonou (BJ)", days: "18-22" },
  { from: "Alexandria", to: "Pointe-Noire (CG)", days: "22-26" },
];

function Markets() {
  const { t } = useTranslation();
  const list = t("markets.list", { returnObjects: true }) as string[];
  return (
    <div>
      <section className="border-b border-border bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.markets")}</div>
          <h1 className="mt-2 font-display text-4xl text-emerald-deep lg:text-6xl">{t("marketsPage.title")}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("marketsPage.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((m) => (
            <div key={m} className="rounded-lg border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-gold">Marché actif</div>
              <div className="mt-1 font-display text-xl text-emerald-deep">{m}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl text-emerald-deep">{t("marketsPage.lanes")}</h2>
        <div className="mt-6 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-emerald-deep text-cream">
              <tr>
                <th className="px-4 py-3 text-start font-medium">Port d'origine</th>
                <th className="px-4 py-3 text-start font-medium">Port d'arrivée</th>
                <th className="px-4 py-3 text-start font-medium">Délai (jours)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {LANES.map((l, i) => (
                <tr key={i} className="hover:bg-cream/40">
                  <td className="px-4 py-3">{l.from}</td>
                  <td className="px-4 py-3 font-medium text-emerald-deep">{l.to}</td>
                  <td className="px-4 py-3">{l.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
