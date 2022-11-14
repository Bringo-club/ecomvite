import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ArabeLanguage from "./locales/ar/translations.json";

i18n.use(initReactI18next).init({
	fallbackLng: "ar",
	lng: "ar",
	resources: {
		ar: {
			translations: ArabeLanguage,
		},
	},
	ns: ["translations"],
	defaultNS: "translations",
});

i18n.languages = ["ar",];

export default i18n;