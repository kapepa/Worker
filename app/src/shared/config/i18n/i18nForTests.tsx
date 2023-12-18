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
import enNotification from "../../../locales/en/notification.json";
import enFilter from "../../../locales/en/filter.json";
import enEditor from "../../../locales/en/editor.json";
import enImageLoader from "../../../locales/en/image-loader.json";
import enNotice from "../../../locales/en/notice.json";
import enStars from "../../../locales/en/stars.json";
import enRating from "../../../locales/en/rating.json";

import ruTranslation from "../../../locales/ru/translation.json";
import ruHome from "../../../locales/ru/home.json";
import ruAbout from "../../../locales/ru/about.json";
import ruProfile from "../../../locales/ru/profile.json";
import ruError from "../../../locales/ru/error.json";
import ruArticle from "../../../locales/ru/article.json";
import ruDetails from "../../../locales/ru/details.json";
import ruComments from "../../../locales/ru/comments.json";
import ruForm from "../../../locales/ru/form.json";
import ruNotification from "../../../locales/ru/notification.json";
import ruFilter from "../../../locales/ru/filter.json";
import ruEditor from "../../../locales/ru/editor.json";
import ruImageLoader from "../../../locales/ru/image-loader.json";
import ruNotice from "../../../locales/ru/notice.json";
import ruStars from "../../../locales/ru/stars.json";
import ruRating from "../../../locales/ru/rating.json";

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
        notification: enNotification,
        filter: enFilter,
        editor: enEditor,
        image_loader: enImageLoader,
        notice: enNotice,
        stars: enStars,
        rating: enRating,
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
        notification: ruNotification,
        filter: ruFilter,
        editor: ruEditor,
        image_loader: ruImageLoader,
        notice: ruNotice,
        stars: ruStars,
        rating: ruRating,
      }
    },

  });

export default i18n;