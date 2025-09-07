export function initNavigation() {
  const navbar = document.getElementById('navbar');
  const topNav = document.querySelector('.top-nav');
  const heroContent = document.getElementById('herocontent');
  if (!navbar || !topNav || !heroContent) return;

  // Mesure les hauteurs
  const updatePositions = () => {
    const topNavH = topNav.getBoundingClientRect().height;
    const navbarH = navbar.getBoundingClientRect().height;

    // Stocke en dataset pour réutiliser facilement
    navbar.dataset.topNavH = topNavH;
    navbar.dataset.navbarH = navbarH;

    // APPLIQUE LE TOP À HEROCONTENT DÈS LE DÉBUT (une seule fois)
    heroContent.style.top = `${topNavH}px`;

    // Si visible - applique hauteur de top-nav
    if (navbar.classList.contains('is-visible')) {
      navbar.style.top = `${topNavH}px`;
    } else {
      // Si caché - applique -navbarH
      navbar.style.top = `-${navbarH}px`;
    }
  };

  // Gestion scroll - SEULEMENT pour navbar, pas pour heroContent
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const topNavH = parseFloat(navbar.dataset.topNavH) || 0;
    const navbarH = parseFloat(navbar.dataset.navbarH) || 0;

    if (y > 140) {
      navbar.classList.add('is-visible');
      navbar.style.top = `${topNavH}px`;
      // heroContent garde sa position fixe
    } else {
      navbar.classList.remove('is-visible');
      navbar.style.top = `-${navbarH}px`;
      // heroContent garde sa position fixe
    }
  };

  // Init mesures
  updatePositions();
  onScroll();

  // Met à jour si resize ou si la top-nav change
  window.addEventListener('resize', updatePositions);
  if ('ResizeObserver' in window) {
    new ResizeObserver(updatePositions).observe(topNav);
    new ResizeObserver(updatePositions).observe(navbar);
  }

  // Scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });
}
