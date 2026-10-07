import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { PRODUCTS, type Category } from "@/lib/products";
import { waLink } from "@/lib/site";
import catFruits from "@/assets/cat-fruits.jpg";
import catVeg from "@/assets/cat-vegetables.jpg";
import catGroc from "@/assets/cat-groceries.jpg";
import catFrozen from "@/assets/cat-frozen.jpg";

const IMG: Record<Category, string> = {
  fruits: catFruits, vegetables: catVeg, groceries: catGroc, frozen: catFrozen,
};

const searchSchema = z.object({
  cat: z.enum(["fruits", "vegetables", "groceries", "frozen"]).optional(),
});

export const Route = createFileRoute("/produits")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Catalogue produits — Dawliya Group" },
      { name: "description", content: "Catalogue de fruits, légumes, épicerie et surgelés exportés depuis l'Égypte." },
      { property: "og:title", content: "Product catalog — Dawliya Group" },
      { property: "og:description", content: "Fruits, vegetables, groceries, frozen — exported from Egypt." },
    ],
  }),
  component: Products,
});

function Products() {
  const { t, i18n } = useTranslation();
  const { cat } = useSearch({ from: "/produits" });
  const lang = (i18n.language as "fr" | "en" | "ar") ?? "fr";
  const filtered = cat ? PRODUCTS.filter(p => p.category === cat) : PRODUCTS;

  const cats: (Category | undefined)[] = [undefined, "fruits", "vegetables", "groceries", "frozen"];

  return (
    <div>
      <section className="border-b border-border bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.products")}</div>
          <h1 className="mt-2 font-display text-4xl text-emerald-deep lg:text-6xl">{t("products.title")}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("products.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => {
            const active = (cat ?? undefined) === c;
            return (
              <Link key={c ?? "all"} to="/produits" search={c ? { cat: c } : {}}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-emerald-deep text-cream" : "border border-border bg-card hover:border-emerald-deep"
                }`}>
                {c ? t(`categories.${c}.name`) : t("products.filter_all")}
              </Link>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <article key={p.id} className="lift group flex flex-col overflow-hidden rounded-lg border border-border bg-card">
              <Link to="/produits/$id" params={{ id: p.id }} className="relative block aspect-square overflow-hidden bg-muted">
                <img src={IMG[p.category]} alt={p.name[lang]} loading="lazy" width={600} height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-3 start-3 rounded-full bg-emerald-deep/90 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gold">
                  {t(`categories.${p.category}.name`)}
                </span>
                <span className="absolute top-3 end-3 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold text-emerald-deep">
                  {p.origin}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-lg text-emerald-deep">{p.name[lang]}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.desc[lang]}</p>
                <dl className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
                  <dt className="text-muted-foreground">{t("common.moq")}</dt><dd className="text-end font-medium">{p.moq}</dd>
                  <dt className="text-muted-foreground">{t("common.packaging")}</dt><dd className="text-end font-medium">{p.packaging[lang]}</dd>
                </dl>
                <div className="mt-4 flex gap-2">
                  <Link to="/produits/$id" params={{ id: p.id }}
                    className="flex-1 rounded-md border border-emerald-deep/20 py-2 text-center text-xs font-medium text-emerald-deep hover:bg-emerald-deep hover:text-cream">
                    {t("products.details")}
                  </Link>
                  <a href={waLink(`${t("common.request_quote")}: ${p.name[lang]}`)} target="_blank" rel="noopener"
                    className="flex-1 rounded-md py-2 text-center text-xs font-medium text-cream"
                    style={{ background: "var(--whatsapp)" }}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
