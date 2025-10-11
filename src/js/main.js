// Styles (SCSS)
import '../styles/main.scss';

  // Redirect root path to language slug for SEO-friendly URLs (PROD only)
  (() => {
    if (import.meta && import.meta.env && import.meta.env.PROD) {
      const parts = window.location.pathname.split('/').filter(Boolean);
      if (parts.length === 0) {
        const saved = localStorage.getItem('i18nextLng');
        const browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
        const lang = saved || (browser.startsWith('ja') ? 'ja' : 'en');
        window.location.replace(`/${lang}/`);
      }
    }
  })();

  // i18n
  import './modules/i18n.js';
import { initLanguageSwitcher } from './modules/language-switcher.js';

// Features
import { initNavigation } from './modules/navigation.js';
import { initVideoModal } from './modules/video-modal.js';
import { initReveal } from './modules/reveal.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initHeroLoader } from './modules/video-loader.js';
import { initStageCurtain } from './modules/stage-curtain.js';
import { initSideNav } from './modules/sidenav.js';
import { initAdjustPadding } from './modules/adjust-height.js';
import { initFaq } from './modules/faq.js';
import { initNewsletter } from './modules/newsletter.js';
import { initSwiper } from './modules/swiper.js';

// Attendre que le DOM soit chargé et que i18n soit prêt
const initApp = async () => {
  // Initialiser le sélecteur de langue en premier
  initLanguageSwitcher();
  // Initialiser les autres fonctionnalités
  initAdjustPadding();
  initHeroLoader();
  initStageCurtain();
  initNavigation();
  initSideNav();
  initReveal();
  initVideoModal();
  initSmoothScroll();
  initFaq();
  initNewsletter();
  initSwiper();
};

// Démarrer l'application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}