// src/js/modules/faq.js - Solution définitive
export function initFaq() {
  const acc = document.querySelectorAll('.faq .faq-item .accordion');
  
  acc.forEach(button => {
    const panel = button.nextElementSibling; // .faq-body
    
    button.addEventListener('click', function(e) {
      e.preventDefault(); // ✅ CRUCIAL : Empêche le comportement natif <details>
      
      // Toggle classe active sur le bouton (pour la flèche)
      this.classList.toggle('active');
      
      // Animation W3Schools exacte
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}