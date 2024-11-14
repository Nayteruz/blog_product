import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const testI18n = i18n.createInstance();

testI18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,

  interpolation: { escapeValue: false }, // not needed for react!!

  resources: { ru: { translations: {} } },
});

export default testI18n;
