// export function initAdjustPadding() {
//   const ref = document.querySelector('.booking');      // élément de référence
//   const target = document.querySelector('section.intro'); // celui qui reçoit le padding

//   if (!ref || !target) return;

//   const update = () => {
//     const halfHeight = ref.offsetHeight / 2;
//     target.style.paddingTop = `${halfHeight + 128}px`; // 64px = 4rem
//   };

//   // premier calcul
//   update();

//   // écoute les resize de la fenêtre
//   window.addEventListener('resize', update);

//   // écoute aussi les changements de taille de l’élément ref
//   if ('ResizeObserver' in window) {
//     const ro = new ResizeObserver(update);
//     ro.observe(ref);
//   }
// }

// const remToPx = (rem) => {
//   return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
// };

// export function initAdjustPadding() {
//   const ref = document.querySelector('.booking');      // élément de référence
//   const target = document.querySelector('section.intro'); // celui qui reçoit le padding

//   if (!ref || !target) return;

//   const update = () => {
//     const halfHeight = ref.offsetHeight / 2;         // en px
//     const fourRem = remToPx(8);                      // conversion rem -> px
//     const total = halfHeight + fourRem;

//     target.style.paddingTop = `${total}px`;          // applique en px
//   };

//   update();

//   window.addEventListener('resize', update);
//   if ('ResizeObserver' in window) {
//     new ResizeObserver(update).observe(ref);
//   }
// }

export function initAdjustPadding() {
  const ref = document.querySelector('.booking');      // élément de référence
  const target = document.querySelector('section.intro'); // celui qui reçoit le padding

  if (!ref || !target) return;

  const update = () => {
    const halfHeight = ref.offsetHeight / 2; // valeur en px
    target.style.setProperty('--half-ref-h', `${halfHeight}px`);
  };

  update();

  window.addEventListener('resize', update);
  if ('ResizeObserver' in window) {
    new ResizeObserver(update).observe(ref);
  }
}