import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from "./locales/en/translation.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enError from "./locales/en/error.json";

import ruTranslation from "./locales/ru/translation.json";
import ruHome from "./locales/ru/home.json";
import ruAbout from "./locales/ru/about.json";
import ruError from "./locales/ru/error.json";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    resources: {
      en: {
        translation: enTranslation,
        home: enHome,
        about: enAbout,
        error: enError
      },
      ru: {
        translation: ruTranslation,
        home: ruHome,
        about: ruAbout,
        error: ruError
      }
    },
    fallbackLng: 'en',
    // debug: process.env.NODE_ENV === "development",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  }, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });


export default i18n;

