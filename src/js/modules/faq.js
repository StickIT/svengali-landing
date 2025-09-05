export function initFaq() {
  const dur = 340; // must match CSS

  document.querySelectorAll('.faq .faq-item').forEach(details => {
    const summary = details.querySelector('summary');
    const panel   = details.querySelector('.answer');

    summary.addEventListener('click', e => {
      e.preventDefault(); // we handle open/close ourselves
      const isOpen = details.hasAttribute('open');

      if (isOpen) {
        // CLOSE
        details.classList.add('is-animating', 'is-closing');
        panel.style.height = panel.scrollHeight + 'px';
        // next frame -> collapse
        requestAnimationFrame(() => (panel.style.height = '0px'));

        const onEnd = ev => {
          if (ev.propertyName !== 'height') return;
          details.removeAttribute('open');
          details.classList.remove('is-closing', 'is-animating');
          panel.removeEventListener('transitionend', onEnd);
        };
        panel.addEventListener('transitionend', onEnd);
      } else {
        // OPEN
        details.classList.add('is-animating', 'is-opening');
        details.setAttribute('open', '');      // make content measurable
        panel.style.height = '0px';
        requestAnimationFrame(() => (panel.style.height = panel.scrollHeight + 'px'));

        const onEnd = ev => {
          if (ev.propertyName !== 'height') return;
          panel.style.height = 'auto';         // let it size naturally
          details.classList.remove('is-opening', 'is-animating');
          panel.removeEventListener('transitionend', onEnd);
        };
        panel.addEventListener('transitionend', onEnd);
      }
    });
  });
}
