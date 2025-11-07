import { i18n } from './i18n.js';

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = i18n.language || 'en';
    this.languageMap = {
      'en': 'EN',
      'ja': 'JA'
    };
  }

  init() {
    this.render();
    this.bindEvents();
    this.setInitialLanguage();
    this.updateSelect();

    // Ensure initial content update when i18n is ready
    if (i18n.isInitialized) {
      this.updateContent();
    } else {
      i18n.on('initialized', () => this.updateContent());
    }
  }

  render() {
    // Si un select existe déjà dans le DOM (index.html), le réutiliser
    const existing = document.querySelector('.language-switcher select.language-select');
    if (existing) {
      // Ensure it has the right attribs (no forced button classes)
      existing.setAttribute('aria-label', 'Language');
      // Mettre la valeur courante
      existing.value = this.currentLanguage;
      return;
    }

    // Sinon, créer le conteneur du sélecteur de langue et l'injecter
    // Cibler en priorité la top bar
    let mountPoint = document.querySelector('.top-nav .nav-content');
    if (!mountPoint) {
      mountPoint = document.querySelector('#navbar .desktop');
    }
    if (!mountPoint) {
      // Dernier recours: premier nav de la page
      mountPoint = document.querySelector('nav');
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';

    const select = document.createElement('select');
    select.className = 'language-select';
    select.setAttribute('aria-label', 'Language');

    Object.entries(this.languageMap).forEach(([code, label]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = label;
      if (this.currentLanguage === code) option.selected = true;
      select.appendChild(option);
    });

    wrapper.appendChild(select);
    if (mountPoint) mountPoint.appendChild(wrapper);
  }

  bindEvents() {
    // Écouter le changement sur le select
    document.addEventListener('change', (e) => {
      const select = e.target.closest('.language-select');
      if (!select) return;
      const lang = select.value;
      if (lang && lang !== this.currentLanguage) {
        this.changeLanguage(lang);
      }
    });
  }

  async changeLanguage(lang) {
    try {
      // Persist selection
      localStorage.setItem('i18nextLng', lang);

      // Navigate to the proper slug so SEO URLs are distinct
      const targetPrefix = `/${lang}`;
      const { pathname, search, hash } = window.location;

      // If already on the right prefix, just change language live
      if (pathname.startsWith(targetPrefix)) {
        await i18n.changeLanguage(lang);
        this.currentLanguage = lang;
        this.updateSelect();
        this.updateContent();
        return;
      }

      // If at root or another prefix, go to the language root while preserving hash
      const newUrl = `${targetPrefix}/` + (hash || '');
      window.location.assign(newUrl);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  }

  updateSelect() {
    document.querySelectorAll('.language-switcher .language-select').forEach(sel => {
      sel.value = this.currentLanguage;
    });
  }

  setInitialLanguage() {
    // Prefer URL path if present (/en or /ja)
    const pathLang = (window.location.pathname.split('/').filter(Boolean)[0] || '').toLowerCase();
    const savedLanguage = localStorage.getItem('i18nextLng');
    const browserLanguage = navigator.language || navigator.userLanguage || '';

    // If URL specifies a language, honor it and persist
    if (pathLang === 'en' || pathLang === 'ja') {
      localStorage.setItem('i18nextLng', pathLang);
      this.currentLanguage = pathLang;
      return;
    }

    // No path slug: decide initial language (ja for Japanese browsers, else en)
    if (!savedLanguage && browserLanguage.toLowerCase().startsWith('ja')) {
      localStorage.setItem('i18nextLng', 'ja');
      this.currentLanguage = 'ja';
    } else if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    } else {
      this.currentLanguage = 'en';
    }
  }

  updateContent() {
    // Mettre à jour les éléments simples avec des attributs de traduction
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;

      // Éviter d'écraser les structures HTML complexes
      if (element.children && element.children.length > 0) return;

      element.textContent = i18n.t(key);
    });

    // Mettre à jour les éléments riches (innerHTML) pour le mode dev/preview
    // En production, cela est déjà prérendu et les data-i18n-* sont retirés
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      if (!key) return;
      const html = i18n.t(key);
      if (typeof html === 'string' && html.length) {
        element.innerHTML = html;
      }
    });

    // Mettre à jour les attributs alt et title
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.getAttribute('data-i18n-alt');
      if (key) {
        element.alt = i18n.t(key);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      if (key) {
        element.title = i18n.t(key);
      }
    });

    // Mettre à jour les attributs placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (key) {
        element.placeholder = i18n.t(key);
      }
    });

    // Mettre à jour les attributs meta
    document.documentElement.lang = this.currentLanguage;
    document.title = i18n.t('meta.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = i18n.t('meta.description');
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = i18n.t('meta.og_title');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = i18n.t('meta.og_description');
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = i18n.t('meta.twitter_title');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.content = i18n.t('meta.twitter_description');
    }
  }
}

export const initLanguageSwitcher = () => {
  const languageSwitcher = new LanguageSwitcher();
  languageSwitcher.init();
  
  // Mettre à jour le contenu lorsque la langue change
  i18n.on('languageChanged', () => {
    languageSwitcher.updateContent();
  });
};
