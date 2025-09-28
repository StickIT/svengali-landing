import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import enTranslations from '../../locales/en.json';
import jaTranslations from '../../locales/ja.json';

// Configuration d'i18next
const i18nInstance = i18n.createInstance();

i18nInstance
  .use(LanguageDetector)
  .init({
    // Langue par défaut
    fallbackLng: 'en',
    
    // Détection de la langue
    detection: {
      // Priorité aux slugs /en /ja dans l'URL, puis paramètres, puis stockage local
      order: ['path', 'querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lang',
      caches: ['localStorage', 'cookie'],
    },
    
    // Ressources de traduction
    resources: {
      en: {
        translation: enTranslations
      },
      ja: {
        translation: jaTranslations
      }
    },
    
    // Options de réactivité
    interpolation: {
      escapeValue: false // React s'occupe déjà de l'échappement
    }
  });

export { i18nInstance as i18n };
export default i18nInstance;
