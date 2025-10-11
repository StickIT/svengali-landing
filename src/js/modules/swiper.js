import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

export function initSwiper() {
  if (typeof window === 'undefined') return;
  const container = document.querySelector('.swiper-container');
  if (!container) return;
  const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // Enable infinite loop
    loop: true,
    // Helpful with slidesPerView: 'auto' to avoid blank spaces at edges
    loopAdditionalSlides: 2,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  });
  return swiper;
}
