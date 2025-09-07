// src/js/modules/faq.js - Version optimisée
export function initFaq() {
  document.querySelectorAll('.faq .faq-item').forEach(details => {
    details.addEventListener('toggle', () => {
      details.classList.toggle('is-open', details.open);
    });
  });
}