import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

export function initSliders() {
  document.querySelectorAll('[data-slider]').forEach(el => {
    const s = new Splide(el, {
      type: 'loop',
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      perPage: 1,
      arrows: true,
      pagination: true
    });
    s.mount();
  });
}