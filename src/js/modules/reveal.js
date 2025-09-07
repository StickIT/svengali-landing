export function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--in');
        obs.unobserve(entry.target);
      }
    });
  }, { 
    rootMargin: '0px 0px -5% 0px', // Plus tôt : déclenche à 70% du viewport
    threshold: 0 // Dès que le premier pixel entre
  });

  items.forEach(el => io.observe(el));
}