export function initStageCurtain() {
    const stage = document.querySelector('.stage');
    const video = stage.querySelector('.backdrop');

    const DELAY = 1200; // délai avant ouverture (ms)

    // garanti fermé au départ
    stage.classList.remove('is-open');

    // ouvre après que les images “bottom” soient chargées (ou au bout de 4s)
    const bottoms = stage.querySelectorAll('.bottom');
    let loaded = 0;

    const open = () => {
        stage.classList.add('is-open');
        if (video && video.paused) video.play().catch(() => { });
    };

    bottoms.forEach(img => {
        if (img.complete) loaded++;
        else img.addEventListener('load', () => {
            if (++loaded === bottoms.length) setTimeout(open, DELAY);
        }, { once: true });
    });

    if (loaded === bottoms.length) setTimeout(open, DELAY);
    setTimeout(open, 4000); // sécurité réseau lent
}