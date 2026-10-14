import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/marches")({
  head: () => ({
    meta: [
      { title: "Marchés internationaux — Dawliya Group" },
      { name: "description", content: "Exportation depuis l'Égypte vers le monde entier : Côte d'Ivoire, Sénégal, Cameroun, Maroc, Maurice et plus." },
      { property: "og:title", content: "International markets — Dawliya Group" },
      { property: "og:description", content: "Exports from Egypt to destinations worldwide." },
    ],
  }),
  component: Markets,
});

function Markets() {
  const { t } = useTranslation();
  const list = t("markets.list", { returnObjects: true }) as string[];
  const steps = t("marketsPage.steps", { returnObjects: true }) as { t: string; d: string }[];
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
              <div className="text-xs uppercase tracking-wider text-gold">{t("marketsPage.active")}</div>
              <div className="mt-1 font-display text-xl text-emerald-deep">{m}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl text-emerald-deep">{t("marketsPage.howto")}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((st, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-deep font-display text-lg text-gold">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-display text-xl text-emerald-deep">{st.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{st.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href={waLink(t("cta_band.button"))} target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-emerald-deep shadow-luxe">
            {t("hero.cta_quote")} →
          </a>
        </div>
      </section>
    </div>
  );
}
