import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catVeg from "@/assets/cat-vegetables.jpg";
import catGroc from "@/assets/cat-groceries.jpg";
import catFrozen from "@/assets/cat-frozen.jpg";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dawliya Group — Produits frais d'Égypte vers l'Afrique" },
      { name: "description", content: "Exportateur premium égyptien : fruits, légumes, épicerie, surgelés. Devis WhatsApp en moins de 2 heures." },
      { property: "og:title", content: "Dawliya Group — Premium Egyptian Produce" },
      { property: "og:description", content: "B2B exporter for Francophone African hotels, hypermarkets and wholesalers." },
    ],
  }),
  component: Home,
});

const CATS = [
  { key: "fruits", img: catFruits, to: "/produits", search: { cat: "fruits" } },
  { key: "vegetables", img: catVeg, to: "/produits", search: { cat: "vegetables" } },
  { key: "groceries", img: catGroc, to: "/produits", search: { cat: "groceries" } },
  { key: "frozen", img: catFrozen, to: "/produits", search: { cat: "frozen" } },
] as const;

function Home() {
  const { t } = useTranslation();
  const caps = t("capabilities.items", { returnObjects: true }) as { t: string; d: string }[];
  const markets = t("markets.list", { returnObjects: true }) as string[];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-emerald-deep text-cream">
        <img src={hero} alt="" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/40 via-emerald-deep/60 to-emerald-deep/95" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-12 lg:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-emerald-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t("hero.eyebrow")}
            </div>
            <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-cream/85 lg:text-lg">{t("hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={waLink(t("cta_band.button"))} target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-emerald-deep shadow-luxe transition hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
                {t("hero.cta_quote")}
              </a>
              <Link to="/produits" className="inline-flex items-center gap-2 rounded-md border border-cream/30 px-6 py-3.5 text-sm text-cream hover:bg-cream/10">
                {t("hero.cta_catalog")} →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* TRUST BAR */}
        <div className="relative border-t border-cream/10 bg-emerald-deep/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-cream/10 px-4 py-6 text-center md:grid-cols-4 md:divide-x md:px-8 [&>div]:px-2 [&>div]:py-2">
            <div><div className="font-display text-3xl text-gold">12+</div><div className="mt-1 text-xs uppercase tracking-wider text-cream/70">{t("trust.years")}</div></div>
            <div><div className="font-display text-3xl text-gold">15</div><div className="mt-1 text-xs uppercase tracking-wider text-cream/70">{t("trust.countries")}</div></div>
            <div><div className="font-display text-3xl text-gold">25K</div><div className="mt-1 text-xs uppercase tracking-wider text-cream/70">{t("trust.tons")}</div></div>
            <div><div className="font-display text-3xl text-gold">5</div><div className="mt-1 text-xs uppercase tracking-wider text-cream/70">{t("trust.certs")}</div></div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.products")}</div>
            <h2 className="mt-2 font-display text-3xl text-emerald-deep lg:text-5xl">{t("categories.title")}</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t("categories.subtitle")}</p>
          </div>
          <Link to="/produits" className="text-sm text-emerald-deep underline-offset-4 hover:underline">{t("common.view_all")} →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATS.map((c) => (
            <Link key={c.key} to={c.to} search={c.search} className="lift group relative overflow-hidden rounded-lg bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={t(`categories.${c.key}.name`)} loading="lazy" width={1024} height={1024}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/70 to-transparent p-5 text-cream">
                <div className="text-xs uppercase tracking-wider text-gold">{t("common.from_egypt")}</div>
                <h3 className="mt-1 font-display text-2xl">{t(`categories.${c.key}.name`)}</h3>
                <p className="mt-1 text-xs text-cream/80">{t(`categories.${c.key}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CAPABILITIES — dense Tmall-style grid */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.about")}</div>
            <h2 className="mt-2 font-display text-3xl text-emerald-deep lg:text-5xl">{t("capabilities.title")}</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2 lg:grid-cols-3">
            {caps.map((c, i) => (
              <div key={i} className="group bg-background p-7 transition hover:bg-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-deep text-gold font-display text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl text-emerald-deep">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="relative overflow-hidden">
        <img src={logistics} alt="" loading="lazy" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald-deep/95 to-emerald-deep/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-cream lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.markets")}</div>
          <h2 className="mt-2 max-w-3xl font-display text-3xl lg:text-5xl">{t("markets.title")}</h2>
          <p className="mt-3 max-w-2xl text-cream/80">{t("markets.subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {markets.map((m) => (
              <span key={m} className="rounded-full border border-gold/40 bg-emerald-deep/50 px-4 py-2 text-sm text-cream">{m}</span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/marches" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-medium text-emerald-deep">
              {t("common.learn_more")} →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-emerald-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center text-cream lg:flex-row lg:justify-between lg:text-start lg:px-8">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl">{t("cta_band.title")}</h2>
            <p className="mt-2 text-cream/80">{t("cta_band.subtitle")}</p>
          </div>
          <a href={waLink(t("cta_band.button"))} target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-emerald-deep shadow-luxe">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
            {t("cta_band.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
