import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PRODUCTS, type Category } from "@/lib/products";
import { waLink, SITE } from "@/lib/site";
import catFruits from "@/assets/cat-fruits.jpg";
import catVeg from "@/assets/cat-vegetables.jpg";
import catGroc from "@/assets/cat-groceries.jpg";
import catFrozen from "@/assets/cat-frozen.jpg";

const IMG: Record<Category, string> = {
  fruits: catFruits, vegetables: catVeg, groceries: catGroc, frozen: catFrozen,
};

export const Route = createFileRoute("/produits/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name.fr ?? "Produit"} — Dawliya Group` },
      { name: "description", content: loaderData?.product.desc.fr ?? "" },
      { property: "og:title", content: loaderData?.product.name.fr ?? "" },
      { property: "og:description", content: loaderData?.product.desc.fr ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl text-emerald-deep">Produit introuvable</h1>
      <Link to="/produits" className="mt-6 inline-block text-emerald-deep underline">Retour au catalogue</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10 text-destructive">{error.message}</div>,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: typeof PRODUCTS[number] };
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "fr" | "en" | "ar") ?? "fr";

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="border-b border-border bg-cream/40">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground lg:px-8">
          <Link to="/" className="hover:text-emerald-deep">{t("nav.home")}</Link> /{" "}
          <Link to="/produits" className="hover:text-emerald-deep">{t("nav.products")}</Link> /{" "}
          <span className="text-emerald-deep">{product.name[lang]}</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <img src={IMG[product.category]} alt={product.name[lang]} width={1024} height={1024}
            className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">{t(`categories.${product.category}.name`)}</div>
          <h1 className="mt-2 font-display text-4xl text-emerald-deep lg:text-5xl">{product.name[lang]}</h1>
          <p className="mt-4 text-foreground/80">{product.desc[lang]}</p>

          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr><th className="bg-cream/60 px-4 py-3 text-start font-medium text-muted-foreground">{t("common.from_egypt")}</th><td className="px-4 py-3">Egypt ({product.origin})</td></tr>
                <tr><th className="bg-cream/60 px-4 py-3 text-start font-medium text-muted-foreground">{t("common.moq")}</th><td className="px-4 py-3">{product.moq}</td></tr>
                <tr><th className="bg-cream/60 px-4 py-3 text-start font-medium text-muted-foreground">{t("common.packaging")}</th><td className="px-4 py-3">{product.packaging[lang]}</td></tr>
                <tr><th className="bg-cream/60 px-4 py-3 text-start font-medium text-muted-foreground">{t("common.shipping")}</th><td className="px-4 py-3">Reefer 20' / 40' — Alexandria, Damietta</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink(`${t("common.request_quote")}: ${product.name[lang]} (${product.moq})`)} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-cream shadow-luxe"
              style={{ background: "var(--whatsapp)" }}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
              {t("common.request_quote")}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-emerald-deep px-6 py-3.5 text-sm font-medium text-emerald-deep">
              {t("common.call")} {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-cream/30 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-6 font-display text-2xl text-emerald-deep">+ {t("common.view_all")}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} to="/produits/$id" params={{ id: p.id }} className="lift overflow-hidden rounded-lg border border-border bg-card">
                  <div className="aspect-square overflow-hidden">
                    <img src={IMG[p.category]} alt={p.name[lang]} loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3">
                    <div className="font-display text-base text-emerald-deep">{p.name[lang]}</div>
                    <div className="text-[11px] text-muted-foreground">{p.moq} · {p.packaging[lang]}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
