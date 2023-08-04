import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from "../../../locales/en/translation.json";
import enHome from "../../../locales/en/home.json";
import enAbout from "../../../locales/en/about.json";
import enProfile from "../../../locales/en/profile.json";
import enError from "../../../locales/en/error.json";

import ruTranslation from "../../../locales/ru/translation.json";
import ruHome from "../../../locales/ru/home.json";
import ruAbout from "../../../locales/ru/about.json";
import ruProfile from "../../../locales/ru/profile.json";
import ruError from "../../../locales/ru/error.json";

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: {
      en: {
        translation: enTranslation,
        home: enHome,
        about: enAbout,
        profile: enProfile,
        error: enError
      },
      ru: {
        translation: ruTranslation,
        home: ruHome,
        about: ruAbout,
        profile: ruProfile,
        error: ruError
      }
    },

  });

export default i18n;