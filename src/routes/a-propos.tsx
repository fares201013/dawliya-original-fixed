import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Dawliya Group" },
      { name: "description", content: "Exportateur égyptien de produits frais et épicerie pour l'Afrique. Certifications GLOBAL G.A.P., HACCP, ISO 22000, Halal." },
      { property: "og:title", content: "About — Dawliya Group" },
      { property: "og:description", content: "Egyptian exporter, Francophone Africa B2B." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as { t: string; d: string }[];
  const certs = t("about.certs", { returnObjects: true }) as string[];

  return (
    <div>
      <section className="relative overflow-hidden bg-emerald-deep text-cream">
        <img src={hero} alt="" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-emerald-deep/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.about")}</div>
          <h1 className="mt-2 max-w-4xl font-display text-4xl lg:text-6xl">{t("about.title")}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/85">{t("about.lead")}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl text-emerald-deep">{t("about.story_t")}</h2>
          <p className="mt-4 text-foreground/85">{t("about.story")}</p>
        </div>
        <div className="grid gap-4">
          {values.map((v, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="font-display text-xl text-emerald-deep">{v.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl text-emerald-deep">{t("about.certs_t")}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {certs.map((c) => (
              <span key={c} className="rounded-full border border-gold/60 bg-card px-5 py-2.5 text-sm font-medium text-emerald-deep">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
