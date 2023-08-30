import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "../../../locales/en/translation.json";
import enHome from "../../../locales/en/home.json";
import enAbout from "../../../locales/en/about.json";
import enProfile from "../../../locales/en/profile.json";
import enError from "../../../locales/en/error.json";
import enArticle from "../../../locales/en/article.json";
import enDetails from "../../../locales/en/details.json";
import enComments from "../../../locales/en/comments.json";
import enForm from "../../../locales/en/form.json";

import ruTranslation from "../../../locales/ru/translation.json";
import ruHome from "../../../locales/ru/home.json";
import ruAbout from "../../../locales/ru/about.json";
import ruProfile from "../../../locales/ru/profile.json";
import ruError from "../../../locales/ru/error.json";
import ruArticle from "../../../locales/ru/article.json";
import ruDetails from "../../../locales/ru/details.json";
import ruComments from "../../../locales/ru/comments.json";
import ruForm from "../../../locales/ru/form.json";

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
        error: enError,
        article: enArticle,
        details: enDetails,
        comments: enComments,
        form: enForm,
      },
      ru: {
        translation: ruTranslation,
        home: ruHome,
        about: ruAbout,
        profile: ruProfile,
        error: ruError,
        article: ruArticle,
        details: ruDetails,
        comments: ruComments,
        form: ruForm,
      }
    },

  });

export default i18n;