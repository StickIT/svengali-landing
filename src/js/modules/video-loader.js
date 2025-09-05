export function initHeroLoader() {
  const hero = document.querySelector('.hero');
  const vid = document.querySelector('[data-hero-video]');
  if (!hero || !vid) return;
  const onReady = () => hero.classList.add('hero--ready');
  if (vid.readyState >= 2) onReady();
  vid.addEventListener('loadeddata', onReady, { once: true });
  vid.addEventListener('canplay', onReady, { once: true });
}
