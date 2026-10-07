import { useTranslation } from "react-i18next";
import { SITE, waLink } from "@/lib/site";

export function StickyContactBar() {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-emerald-deep text-cream shadow-luxe md:hidden">
      <a
        href={waLink(t("cta_band.button"))}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium"
        style={{ background: "var(--whatsapp)" }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
        {t("common.whatsapp")}
      </a>
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-cream"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        {t("common.call")}
      </a>
    </div>
  );
}
