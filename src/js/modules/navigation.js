export function initNavigation() {
  const navbar = document.getElementById('navbar');
  const topNav = document.querySelector('.top-nav');
  if (!navbar || !topNav) return;

  // Mesure les hauteurs
  const updatePositions = () => {
    const topNavH = topNav.getBoundingClientRect().height;
    const navbarH = navbar.getBoundingClientRect().height;

    // Stocke en dataset pour réutiliser facilement
    navbar.dataset.topNavH = topNavH;
    navbar.dataset.navbarH = navbarH;

    // Si visible → applique hauteur de top-nav
    if (navbar.classList.contains('is-visible')) {
      navbar.style.top = `${topNavH}px`;
    } else {
      // Si caché → applique -navbarH
      navbar.style.top = `-${navbarH}px`;
    }
  };

  // Gestion scroll
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const topNavH = parseFloat(navbar.dataset.topNavH) || 0;
    const navbarH = parseFloat(navbar.dataset.navbarH) || 0;

    if (y > 140) {
      navbar.classList.add('is-visible');
      navbar.style.top = `${topNavH}px`;
    } else {
      navbar.classList.remove('is-visible');
      navbar.style.top = `-${navbarH}px`;
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
