import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ← make sure these paths are correct!
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

i18n
  .use(initReactI18next)  
  .init({
    resources: {
      en: { translation: translationEN },
      it: { translation: translationIT },
    },
    lng: "it",              // start
    fallbackLng: "en",      // fallback if key missing
    interpolation: { escapeValue: false },
  });

export default i18n;
