export function initAdjustPadding() {
  const bookingRef = document.querySelector('.booking');      // élément de référence
  const introTarget = document.querySelector('section.intro'); // celui qui reçoit le padding
  const heroContent = document.getElementById('herocontent');
  const heroCta = document.querySelector('.hero-cta');
  const headerLogo = document.querySelector('.header-nav .logo'); // logo dans header-nav

  if (!bookingRef || !introTarget) return;

  const update = () => {
    // Logique existante pour section.intro
    const halfHeight = bookingRef.offsetHeight / 2;
    introTarget.style.setProperty('--half-ref-h', `${halfHeight}px`);

    // Nouvelle logique pour .hero-cta centré entre logo et booking
    if (heroContent && heroCta && headerLogo) {
      const heroContentHeight = heroContent.offsetHeight;  // Hauteur totale disponible
      const logoHeight = headerLogo.offsetHeight;          // Espace occupé en haut
      const halfBookingHeight = halfHeight;                // Espace occupé en bas

      // Calcul de la position pour centrer dans l'espace disponible
      // (hauteurTotale + espaceHaut - espaceBas) / 2
      const topValue = `calc((100% + ${logoHeight}px - ${halfBookingHeight}px) / 2)`;

      heroCta.style.top = topValue;
    }
  };

  update();

  window.addEventListener('resize', update);
  if ('ResizeObserver' in window) {
    new ResizeObserver(update).observe(bookingRef);
    if (headerLogo) {
      new ResizeObserver(update).observe(headerLogo);
    }
    if (introTarget) {
      new ResizeObserver(update).observe(introTarget);
    }
    if (heroContent) {
      new ResizeObserver(update).observe(heroContent);
    }
  }
}
