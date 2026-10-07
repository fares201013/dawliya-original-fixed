import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr.json";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED = ["fr", "en", "ar"] as const;
export type Lang = (typeof SUPPORTED)[number];

const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: stored ?? "fr",
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });
}

export function setLang(lang: Lang) {
  i18n.changeLanguage(lang);
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
  }
}

export default i18n;
