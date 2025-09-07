// export function initStageCurtain() {
//     const stage = document.querySelector('.stage');
//     if (!stage) return;

//     const video = stage.querySelector('.backdrop');
//     const bottoms = stage.querySelectorAll('.bottom');

//     // Configuration centralisée
//     const CURTAIN_DELAY = 1600; // délai avant ouverture des rideaux (ms)
//     const REVEAL_START_DELAY = 1200; // délai APRÈS ouverture avant révélation (ms)
//     const REVEAL_DELAY = 600; // délai entre chaque élément (ms)

//     // Éléments à révéler dans l'ordre
//     const elementsToReveal = [
//         '.sticky-top-nav',
//         '.header-nav', 
//         '.push-block.booking .content',
//         '.hero-cta'
//     ];

//     let imagesLoaded = 0;

//     // Ferme les rideaux au départ
//     stage.classList.remove('is-open');

//     /**
//      * Initialise les styles des éléments à révéler
//      */
//     const initializeElements = () => {
//         elementsToReveal.forEach((selector) => {
//             const element = document.querySelector(selector);
//             if (element) {
//                 // Style de base pour tous les éléments
//                 element.classList.add('curtain-reveal');
//                 element.style.opacity = '0';
//                 element.style.transition = 'opacity 0.6s ease-in-out';
//                 element.style.willChange = 'transform, opacity';

//                 // Gestion spécifique des transforms selon l'élément
//                 if (selector === '.sticky-top-nav') {
//                     // .sticky-top-nav vient du HAUT (-16px)
//                     element.style.transform = 'translateY(-16px)';
//                     element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
//                 } else if (selector !== '.hero-cta') {
//                     // Autres éléments viennent du BAS (+16px)
//                     element.style.transform = 'translateY(16px)';
//                     element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
//                 }
//                 // .hero-cta garde son transform existant (centrage)
//             }
//         });
//     };

//     /**
//      * Ouvre les rideaux et programme la révélation progressive
//      */
//     const openCurtains = () => {
//         // 1. Ouvrir les rideaux immédiatement
//         stage.classList.add('is-open');
        
//         // 2. Démarrer la vidéo si elle existe
//         if (video && video.paused) {
//             video.play().catch(() => {
//                 /* Gestion silencieuse de l'erreur autoplay */
//             });
//         }

//         // 3. Attendre REVEAL_START_DELAY avant de commencer les révélations
//         setTimeout(() => {
//             // Révéler les éléments un par un
//             elementsToReveal.forEach((selector, index) => {
//                 const element = document.querySelector(selector);
//                 if (element) {
//                     const delay = index * REVEAL_DELAY;
                    
//                     setTimeout(() => {
//                         // Pour tous les éléments : révéler l'opacité
//                         element.style.opacity = '1';
//                         element.classList.add('is-revealed');

//                         // Animation de transform selon le type d'élément
//                         if (selector === '.sticky-top-nav') {
//                             // .sticky-top-nav revient à sa position normale depuis le haut
//                             element.style.transform = 'translateY(0)';
//                         } else if (selector !== '.hero-cta') {
//                             // Autres éléments reviennent à leur position depuis le bas
//                             element.style.transform = 'translateY(0)';
//                         }
//                         // .hero-cta garde son transform de centrage intact
//                     }, delay);
//                 }
//             });
//         }, REVEAL_START_DELAY);
//     };

//     /**
//      * Vérifie le chargement des images et déclenche l'ouverture
//      */
//     const checkImagesAndOpen = () => {
//         if (imagesLoaded === bottoms.length) {
//             setTimeout(openCurtains, CURTAIN_DELAY);
//         }
//     };

//     /**
//      * Gestionnaire de chargement d'image
//      */
//     const onImageLoad = () => {
//         imagesLoaded++;
//         checkImagesAndOpen();
//     };

//     // Initialiser les éléments avec les styles appropriés
//     initializeElements();

//     // Gérer le chargement des images "bottom"
//     bottoms.forEach(img => {
//         if (img.complete) {
//             imagesLoaded++;
//         } else {
//             img.addEventListener('load', onImageLoad, { once: true });
//         }
//     });

//     // Vérifier si toutes les images sont déjà chargées
//     checkImagesAndOpen();

//     // Sécurité : ouverture forcée après 4 secondes
//     setTimeout(openCurtains, 4000);
// }

export function initStageCurtain() {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    const video = stage.querySelector('.backdrop');
    const bottoms = stage.querySelectorAll('.bottom');
    const main = document.getElementById('main');

    // Configuration centralisée
    const CURTAIN_DELAY = 1600;
    const REVEAL_START_DELAY = 1200;
    const REVEAL_DELAY = 600;

    // Éléments à révéler dans l'ordre
    const elementsToReveal = [
        '.sticky-top-nav',
        '.header-nav', 
        '.push-block.booking .content',
        '.hero-cta'
    ];

    let imagesLoaded = 0;
    let currentScrollY = 0; // ⭐ NOUVEAU : Sauvegarder la position de scroll

    stage.classList.remove('is-open');

    // ⭐ NOUVEAU : Gérer le scroll correctement
    const lockScroll = () => {
        // Sauvegarder la position actuelle
        currentScrollY = window.scrollY;
        
        // Appliquer le style de blocage avec compensation de scroll
        document.body.style.position = 'fixed';
        document.body.style.top = `-${currentScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.classList.add('curtain-blocking');
    };

    const unlockScroll = () => {
        // Restaurer le scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.classList.remove('curtain-blocking');
        
        // Remettre la page à sa position de scroll précédente
        window.scrollTo(0, currentScrollY);
    };

    // ⭐ NOUVEAU : Bloquer avec gestion intelligente du scroll
    const initPageBlocking = () => {
        lockScroll();
        
        // Masquer les éléments non nécessaires
        if (main) {
            const allElements = main.querySelectorAll('*');
            allElements.forEach(element => {
                const isToReveal = elementsToReveal.some(selector => {
                    return element.matches(selector) || element.closest(selector);
                });
                
                const isStageOrHero = element.closest('.stage') || 
                                     element.closest('.hero') || 
                                     element.matches('.stage, .hero');
                
                if (!isToReveal && !isStageOrHero) {
                    element.style.visibility = 'hidden';
                    element.style.pointerEvents = 'none';
                }
            });
        }
    };

    // ⭐ NOUVEAU : Restaurer avec gestion du scroll
    const restorePageInteraction = () => {
        // Restaurer la visibilité des éléments
        if (main) {
            const allElements = main.querySelectorAll('*');
            allElements.forEach(element => {
                element.style.visibility = '';
                element.style.pointerEvents = '';
            });
        }
        
        // Débloquer le scroll
        unlockScroll();
    };

    /**
     * Initialise les styles des éléments à révéler
     */
    const initializeElements = () => {
        elementsToReveal.forEach((selector) => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.add('curtain-reveal');
                element.style.opacity = '0';
                element.style.transition = 'opacity 0.6s ease-in-out';
                element.style.willChange = 'transform, opacity';

                if (selector === '.sticky-top-nav') {
                    element.style.transform = 'translateY(-16px)';
                    element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                } else if (selector !== '.hero-cta') {
                    element.style.transform = 'translateY(16px)';
                    element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                }
            }
        });
    };

    /**
     * Ouvre les rideaux et programme la révélation progressive
     */
    const openCurtains = () => {
        stage.classList.add('is-open');
        
        if (video && video.paused) {
            video.play().catch(() => {});
        }

        setTimeout(() => {
            elementsToReveal.forEach((selector, index) => {
                const element = document.querySelector(selector);
                if (element) {
                    const delay = index * REVEAL_DELAY;
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.classList.add('is-revealed');

                        if (selector === '.sticky-top-nav') {
                            element.style.transform = 'translateY(0)';
                        } else if (selector !== '.hero-cta') {
                            element.style.transform = 'translateY(0)';
                        }
                    }, delay);
                }
            });
        }, REVEAL_START_DELAY);

        // Restaurer après la fin complète
        const totalAnimationTime = REVEAL_START_DELAY + (elementsToReveal.length * REVEAL_DELAY) + 1000;
        setTimeout(() => {
            restorePageInteraction();
        }, totalAnimationTime);
    };

    const checkImagesAndOpen = () => {
        if (imagesLoaded === bottoms.length) {
            setTimeout(openCurtains, CURTAIN_DELAY);
        }
    };

    const onImageLoad = () => {
        imagesLoaded++;
        checkImagesAndOpen();
    };

    // Initialiser le blocage avec gestion du scroll
    initPageBlocking();
    initializeElements();

    bottoms.forEach(img => {
        if (img.complete) {
            imagesLoaded++;
        } else {
            img.addEventListener('load', onImageLoad, { once: true });
        }
    });

    checkImagesAndOpen();

    // Sécurité avec restauration du scroll
    setTimeout(() => {
        if (!stage.classList.contains('is-open')) {
            openCurtains();
        }
        restorePageInteraction();
    }, 6000);
}


