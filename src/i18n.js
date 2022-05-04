import { createI18n } from "vue-i18n";
import es from "./lang/es.json";
import en from "./lang/en.json";
const messages = {
  en: en,
  es: es,
};
export const i18n = createI18n({
  locale: "es", // set locale
  fallbackLocale: "es", // set fallback locale
  messages,
});
