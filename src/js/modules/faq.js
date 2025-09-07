// src/js/modules/faq.js
export function initFaq() {
  const acc = document.querySelectorAll('.faq .faq-item summary');
  
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(e) {
      e.preventDefault(); // Empêcher le comportement natif <details>
      
      // Toggle class active sur le bouton
      this.classList.toggle('active');
      
      // Toggle display block/none sur le panel
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}