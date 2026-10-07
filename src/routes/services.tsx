import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import logistics from "@/assets/logistics.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sourcing, chaîne du froid, export · Dawliya Group" },
      { name: "description", content: "Sourcing direct, chaîne du froid maîtrisée, documentation export et marque blanche." },
      { property: "og:title", content: "Services — Dawliya Group" },
      { property: "og:description", content: "Full export operation, farm to arrival port." },
    ],
  }),
  component: Services,
});

const SERVICES_KEYS = [
  { icon: "🌱", t_fr: "Sourcing direct", t_en: "Direct sourcing", t_ar: "توريد مباشر", d_fr: "Réseau de producteurs égyptiens audités. Visites de fermes en saison.", d_en: "Audited Egyptian growers. In-season farm visits.", d_ar: "شبكة مزارعين مدققين." },
  { icon: "❄️", t_fr: "Chaîne du froid", t_en: "Cold chain", t_ar: "سلسلة تبريد", d_fr: "Conteneurs reefer 20' & 40', logs température port à port.", d_en: "20' & 40' reefer containers, port-to-port logs.", d_ar: "حاويات مبردة مع سجلات حرارة." },
  { icon: "📑", t_fr: "Documentation export", t_en: "Export documentation", t_ar: "مستندات التصدير", d_fr: "Phyto, COO, Halal, EUR-MED — préparés et envoyés.", d_en: "Phyto, COO, Halal, EUR-MED — prepared and sent.", d_ar: "مستندات كاملة." },
  { icon: "🚢", t_fr: "Logistique multimodale", t_en: "Multimodal logistics", t_ar: "لوجستيات متعددة الوسائط", d_fr: "Alexandrie, Damiette, Port-Saïd. Lignes hebdomadaires.", d_en: "Alexandria, Damietta, Port Said. Weekly sailings.", d_ar: "إبحار أسبوعي." },
  { icon: "🏷️", t_fr: "Marque blanche", t_en: "Private label", t_ar: "علامة خاصة", d_fr: "OEM sur conserves, surgelés, huiles. MOQ flexibles.", d_en: "OEM on canned, frozen, oils. Flexible MOQ.", d_ar: "علامة خاصة OEM." },
  { icon: "🛡️", t_fr: "Contrôle qualité", t_en: "Quality control", t_ar: "ضبط الجودة", d_fr: "QC à 3 niveaux : ferme, packhouse, container.", d_en: "3-stage QC: farm, packhouse, container.", d_ar: "فحص ثلاثي المراحل." },
];

function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div>
      <section className="relative overflow-hidden bg-emerald-deep text-cream">
        <img src={logistics} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-emerald-deep/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">— {t("nav.services")}</div>
          <h1 className="mt-2 max-w-3xl font-display text-4xl lg:text-6xl">{t("services.title")}</h1>
          <p className="mt-4 max-w-2xl text-cream/85">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_KEYS.map((s, i) => {
            const title = lang === "ar" ? s.t_ar : lang === "en" ? s.t_en : s.t_fr;
            const desc = lang === "ar" ? s.d_ar : lang === "en" ? s.d_en : s.d_fr;
            return (
              <div key={i} className="rounded-lg border border-border bg-card p-7 transition hover:shadow-luxe">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-3 font-display text-xl text-emerald-deep">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-lg bg-emerald-deep p-10 text-cream lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-2xl">{t("cta_band.title")}</h3>
            <p className="mt-1 text-cream/80">{t("cta_band.subtitle")}</p>
          </div>
          <a href={waLink(t("cta_band.button"))} target="_blank" rel="noopener"
            className="mt-6 inline-flex rounded-md bg-gold px-6 py-3 text-sm font-semibold text-emerald-deep lg:mt-0">
            {t("cta_band.button")} →
          </a>
        </div>
      </section>
    </div>
  );
}
