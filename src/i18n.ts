import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru.json";
import pl from "./locales/pl.json";
import es from "./locales/es.json";

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    pl: { translation: pl },
    es: { translation: es },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
