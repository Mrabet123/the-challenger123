import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ← make sure these paths are correct!
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

i18n
  // detect user language from localStorage/navigator
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      it: { translation: translationIT },
    },
    // initial language will be detected
    fallbackLng: "it", // <-- set Italian as fallback
    lng: "it",         // <-- set Italian as initial language
    interpolation: { escapeValue: false },
    detection: {
      // order and from where user language should be detected
      order: ["localStorage", "navigator"],
      // keys or params to lookup language from
      lookupLocalStorage: "i18nextLng",
      // cache user language on
      caches: ["localStorage"],
    },
  });

export default i18n;
