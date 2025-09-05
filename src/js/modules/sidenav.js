export function initSideNav() {
  const overlay = document.getElementById('menuMobile');   // overlay plein écran
  const main    = document.getElementById('main');         // ton contenu page
  if (!overlay || !main) return;

  // Panneau latéral (si absent, on traite overlay comme panneau)
  const panel = overlay.querySelector('.menuMobile__panel') || overlay;

  const open = () => {
    // overlay visible + scroll body bloqué + main “dim”
    overlay.classList.add('is-open');
    document.body.classList.add('no-scroll');
    main.classList.add('overlay-mobile');
  };

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    main.classList.remove('overlay-mobile');
  };

  // Expose pour onclick="openNav()/closeNav()" depuis le HTML
  window.openNav = open;
  window.closeNav = close;

  // Fermer si on clique hors du panneau (sur l’overlay)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Fermer avec Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}