import { useTranslation } from "react-i18next";
import { Lang, setLang, SUPPORTED } from "@/i18n";

const LABELS: Record<Lang, string> = { fr: "FR", en: "EN", ar: "العربية" };

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-card/80 px-1 py-1 text-xs backdrop-blur">
      {SUPPORTED.map((lng) => (
        <button
          key={lng}
          onClick={() => setLang(lng)}
          className={`rounded-full px-3 py-1 transition ${
            i18n.language === lng
              ? "bg-emerald-deep text-cream"
              : "text-foreground/70 hover:text-foreground"
          }`}
          aria-label={LABELS[lng]}
        >
          {LABELS[lng]}
        </button>
      ))}
    </div>
  );
}
