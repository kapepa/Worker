import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    fallbackLng: 'en',
    // debug: process.env.NODE_ENV === "development",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   // loadPath: 'http://localhost:3000/locales/{{lng}}/{{ns}}.json',
    //   // loadPath: '../public/public/locales/{{lng}}/{{ns}}.json',
    // },
  });


export default i18n;

