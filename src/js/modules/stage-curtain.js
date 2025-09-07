// export function initStageCurtain() {
//     const stage = document.querySelector('.stage');
//     const video = stage.querySelector('.backdrop');

//     const DELAY = 1600; // délai avant ouverture (ms)

//     // garanti fermé au départ
//     stage.classList.remove('is-open');

//     // ouvre après que les images “bottom” soient chargées (ou au bout de 4s)
//     const bottoms = stage.querySelectorAll('.bottom');
//     let loaded = 0;

//     const open = () => {
//         stage.classList.add('is-open');
//         if (video && video.paused) video.play().catch(() => { });
//     };

//     bottoms.forEach(img => {
//         if (img.complete) loaded++;
//         else img.addEventListener('load', () => {
//             if (++loaded === bottoms.length) setTimeout(open, DELAY);
//         }, { once: true });
//     });

//     if (loaded === bottoms.length) setTimeout(open, DELAY);
//     setTimeout(open, 4000); // sécurité réseau lent
// }

export function initStageCurtain() {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    const video = stage.querySelector('.backdrop');
    const bottoms = stage.querySelectorAll('.bottom');

    // Configuration centralisée
    const CURTAIN_DELAY = 1600; // délai avant ouverture des rideaux (ms)
    const REVEAL_DELAY = 300; // délai entre chaque élément (ms)

    // Éléments à révéler dans l'ordre (modifiez cette liste selon vos besoins)
    const elementsToReveal = [
        '.sticky-top-nav',
        '.header-nav', 
        '.push-block.booking .content',
        'bouton.video'
    ];

    let imagesLoaded = 0;

    // Ferme les rideaux au départ
    stage.classList.remove('is-open');

    /**
     * Initialise les styles des éléments à révéler
     */
    const initializeElements = () => {
        elementsToReveal.forEach((selector) => {
            const element = document.querySelector(selector);
            if (element) {
                // Applique la classe générique et les styles initiaux
                element.classList.add('curtain-reveal');
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                element.style.willChange = 'transform, opacity';
            }
        });
    };

    /**
     * Ouvre les rideaux et déclenche la révélation progressive
     */
    const openCurtains = () => {
        // Ouvrir les rideaux
        stage.classList.add('is-open');
        
        // Démarrer la vidéo si elle existe
        if (video && video.paused) {
            video.play().catch(() => {
                // Gestion silencieuse de l'erreur autoplay
            });
        }

        // Révéler les éléments un par un
        elementsToReveal.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                const delay = index * REVEAL_DELAY;
                
                setTimeout(() => {
                    // Applique l'animation de révélation
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('is-revealed');
                }, delay);
            }
        });
    };

    /**
     * Vérifie le chargement des images et déclenche l'ouverture
     */
    const checkImagesAndOpen = () => {
        if (imagesLoaded === bottoms.length) {
            setTimeout(openCurtains, CURTAIN_DELAY);
        }
    };

    /**
     * Gestionnaire de chargement d'image
     */
    const onImageLoad = () => {
        imagesLoaded++;
        checkImagesAndOpen();
    };

    // Initialiser les éléments avec les styles
    initializeElements();

    // Gérer le chargement des images "bottom"
    bottoms.forEach(img => {
        if (img.complete) {
            imagesLoaded++;
        } else {
            img.addEventListener('load', onImageLoad, { once: true });
        }
    });

    // Vérifier si toutes les images sont déjà chargées
    checkImagesAndOpen();

    // Sécurité : ouverture forcée après 4 secondes
    setTimeout(openCurtains, 4000);
}