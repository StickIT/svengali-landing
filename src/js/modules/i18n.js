import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des fichiers de traduction
import en from '../locales/en.json';
import ja from '../locales/ja.json';

i18next
  .use(LanguageDetector) // Détection automatique de la langue
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    fallbackLng: 'en', // Langue par défaut
    detection: {
      // Ordre de détection : localStorage -> navigateur -> HTML lang
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Sauvegarde le choix utilisateur
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false // Pas d'échappement HTML nécessaire
    }
  });

export default i18next;