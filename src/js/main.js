// import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
// setBasePath('/assets'); // points to dist/assets at build time

// Register only the components we need
// import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Styles (SCSS)
import '../styles/main.scss';

// // Set the base path to the folder you copied Shoelace's assets to
// setBasePath('/path/to/shoelace/dist');

// Features
import { initNavigation } from './modules/navigation.js';
import { initSliders } from './modules/slider.js';
import { initVideoModal } from './modules/video-modal.js';
import { initReveal } from './modules/reveal.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initHeroLoader } from './modules/video-loader.js';
import { initStageCurtain } from './modules/stage-curtain.js';
import { initSideNav } from './modules/sidenav.js';
import { initAdjustPadding} from './modules/adjust-height.js';
import { initFaq } from './modules/faq.js';
// import { initDrawer } from './modules/drawer.js';

window.addEventListener('DOMContentLoaded', () => {
  initAdjustPadding()
  initNavigation();
  initSideNav();
  initSliders();
  initVideoModal();
  initReveal();
  initSmoothScroll();
  initHeroLoader();
  initStageCurtain();
  initFaq();
  // initDrawer();

  // const drawer = document.querySelector('.DrawerBlock');
  // const openButton = drawer.nextElementSibling;
  // const closeButton = drawer.querySelector('.OpenDrawer');

  // openButton.addEventListener('click', () => drawer.show());
  // closeButton.addEventListener('click', () => drawer.hide());

  // // Details
  // const container = document.querySelector('.details-group-example');
  //   // Close all other details when one is shown
  //   container.addEventListener('sl-show', event => {
  //     if (event.target.localName === 'sl-details') {
  //       [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
  //     }
  //   }
  // );

});