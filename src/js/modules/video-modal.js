export function initVideoModal() {
  const modal = document.querySelector('[data-video-modal]');
  if (!modal) return;
  const player = modal.querySelector('[data-video-player]');
  const closeBtn = modal.querySelector('[data-video-close]');
  const loopBg = document.querySelector('[data-hero-video]');

  function open(src) {
    player.src = src;
    modal.hidden = false;
    document.documentElement.classList.add('is-modal-open');
    if (loopBg && !loopBg.paused) loopBg.pause();
    if (player.requestFullscreen) {
      player.requestFullscreen().catch(() => {});
    }
    player.play().catch(() => {});
  }

  function close() {
    if (!modal.hidden) {
      player.pause();
      player.removeAttribute('src');
      player.load();
      modal.hidden = true;
      document.documentElement.classList.remove('is-modal-open');
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (loopBg && loopBg.paused) loopBg.play().catch(() => {});
    }
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-video-open]');
    if (btn) {
      const src = btn.getAttribute('data-video-src');
      if (src) open(src);
    }
    if (e.target.matches('[data-video-modal]')) {
      close();
    }
  });

  closeBtn?.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}
