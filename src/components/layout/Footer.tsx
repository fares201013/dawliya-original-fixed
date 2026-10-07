import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SITE } from "@/lib/site";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 border-t border-border bg-emerald-deep text-cream/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-emerald-deep font-display text-lg font-bold">DG</div>
            <div>
              <div className="font-display text-xl text-cream">Dawliya Group</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-cream/70">{t("footer.tagline")}</p>
          <div className="gold-rule mt-6 max-w-xs" />
          <div className="mt-4 space-y-1 text-sm text-cream/80">
            <div>{SITE.address}</div>
            <div><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></div>
            <div><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold">{SITE.phone}</a></div>
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">{t("nav.products")}</div>
          <ul className="space-y-2 text-sm">
            {(["fruits","vegetables","groceries","frozen"] as const).map(c => (
              <li key={c}><Link to="/produits" search={{ cat: c }} className="hover:text-gold">{t(`categories.${c}.name`)}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-gold">{t("nav.services")}</Link></li>
            <li><Link to="/marches" className="hover:text-gold">{t("nav.markets")}</Link></li>
            <li><Link to="/a-propos" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 lg:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} Dawliya Group. {t("footer.rights")}</div>
          <div>Cairo, Egypt → Africa</div>
        </div>
      </div>
    </footer>
  );
}
