import 'intl-pluralrules';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '@/lang/en.json';

const resources = {
    en: {
        translation: translationEN,
    },
};

i18n.use(initReactI18next).init({
    resources,
    debug: true,
    lng: Localization.locale,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});

export default i18n;
