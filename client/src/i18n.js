import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import mr from './locales/mr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mr: { translation: mr }
    },
    fallbackLng: 'mr', // Default language if detection fails/on first load
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: { escapeValue: false }
  });

export default i18n;