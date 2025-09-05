// export function initVideoModal() {
//   const modal = document.querySelector('[data-video-modal]');
//   if (!modal) return;
//   const player = modal.querySelector('[data-video-player]');
//   const closeBtn = modal.querySelector('[data-video-close]');
//   const loopBg = document.querySelector('[data-hero-video]');

//   function open(src) {
//     player.src = src;
//     modal.hidden = false;
//     document.documentElement.classList.add('is-modal-open');
//     if (loopBg && !loopBg.paused) loopBg.pause();
//     if (player.requestFullscreen) {
//       player.requestFullscreen().catch(() => {});
//     }
//     player.play().catch(() => {});
//   }

//   function close() {
//     if (!modal.hidden) {
//       player.pause();
//       player.removeAttribute('src');
//       player.load();
//       modal.hidden = true;
//       document.documentElement.classList.remove('is-modal-open');
//       if (document.fullscreenElement && document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//       if (loopBg && loopBg.paused) loopBg.play().catch(() => {});
//     }
//   }

//   document.addEventListener('click', e => {
//     const btn = e.target.closest('[data-video-open]');
//     if (btn) {
//       const src = btn.getAttribute('data-video-src');
//       if (src) open(src);
//     }
//     if (e.target.matches('[data-video-modal]')) {
//       close();
//     }
//   });

//   closeBtn?.addEventListener('click', close);
//   document.addEventListener('keydown', e => {
//     if (e.key === 'Escape') close();
//   });
// }

export function initVideoModal() {
  const modal = document.querySelector('[data-video-modal]');
  if (!modal) return;
  const player = modal.querySelector('[data-video-player]');
  const closeBtn = modal.querySelector('[data-video-close]');
  const loopBg = document.querySelector('[data-hero-video]');

  function selectOptimalSources(sources) {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' ||
      connection.effectiveType === '3g' ||
      connection.saveData === true
    );

    // Test de support des codecs
    const testVideo = document.createElement('video');
    const canPlayAV1 = testVideo.canPlayType('video/webm; codecs="av01.0.05M.08"') === 'probably';
    const canPlayVP9 = testVideo.canPlayType('video/webm; codecs="vp9"') === 'probably';
    const canPlayH265 = testVideo.canPlayType('video/mp4; codecs="hev1"') === 'probably';

    let selectedSources = [];
    
    // CAS SPÉCIAL : Mobile avec connexion lente -> 720p uniquement
    if (isMobile && isSlowConnection) {
      selectedSources = sources.filter(s => s.quality === '720p');
      console.log('Mobile connexion lente détectée -> 720p');
    }
    // SINON : Tous les autres cas -> Full HD avec codec optimal
    else {
      // Sélectionner le meilleur codec supporté
      if (canPlayAV1) {
        selectedSources = sources.filter(s => s.type.includes('av01'));
        console.log('AV1 supporté -> AV1 Full HD');
      }
      else if (canPlayVP9) {
        selectedSources = sources.filter(s => s.type.includes('vp9'));
        console.log('VP9 supporté -> VP9 Full HD');
      }
      else if (canPlayH265) {
        selectedSources = sources.filter(s => s.type.includes('hev1'));
        console.log('H265 supporté -> H265 Full HD');
      }
      else {
        // Fallback H264 Full HD
        selectedSources = sources.filter(s => 
          s.type.includes('mp4') && s.quality === '1080p'
        );
        console.log('Fallback -> H264 Full HD');
      }
      
      // Ajouter H264 Full HD comme fallback si pas déjà sélectionné
      if (!selectedSources.some(s => s.type.includes('mp4') && s.quality === '1080p')) {
        selectedSources.push(...sources.filter(s => 
          s.type.includes('mp4') && s.quality === '1080p'
        ));
      }
    }

    // Trier par priorité
    return selectedSources.sort((a, b) => (a.priority || 99) - (b.priority || 99));
  }

  function open(sources) {
    if (typeof sources === 'string') {
      player.src = sources;
    } else {
      player.removeAttribute('src');
      player.innerHTML = '';
      
      const optimizedSources = selectOptimalSources(sources);
      
      // Log pour comprendre la sélection
      console.log('Sources sélectionnées:', optimizedSources.map(s => 
        `${s.quality} ${s.type.split(';')[0].split('/')[1]}`
      ));
      
      optimizedSources.forEach(source => {
        const sourceEl = document.createElement('source');
        sourceEl.src = source.src;
        sourceEl.type = source.type;
        player.appendChild(sourceEl);
      });
      
      const fallback = document.createElement('p');
      fallback.textContent = 'Votre navigateur ne supporte pas la vidéo HTML5.';
      player.appendChild(fallback);
      
      player.load();
    }
    
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
      player.innerHTML = '';
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
      if (btn.hasAttribute('data-video-sources')) {
        const sources = JSON.parse(btn.getAttribute('data-video-sources'));
        open(sources);
      } else {
        const src = btn.getAttribute('data-video-src');
        if (src) open(src);
      }
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