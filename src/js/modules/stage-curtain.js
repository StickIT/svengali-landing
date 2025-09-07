export function initStageCurtain() {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    // ⭐ NOUVEAU : Vérifier si l'animation doit se jouer
    const shouldPlayAnimation = () => {
        // Ne pas jouer l'animation si :
        // 1. L'utilisateur a déjà scrollé (position Y > 100px)
        // 2. L'animation a déjà été jouée dans cette session
        const hasScrolled = window.scrollY > 100;
        const animationPlayed = sessionStorage.getItem('curtainAnimationPlayed');
        
        return !hasScrolled && !animationPlayed;
    };

    // ⭐ NOUVEAU : Si l'animation ne doit pas se jouer, ouvrir directement
    if (!shouldPlayAnimation()) {
        console.log('⏭️ Skipping curtain animation - user has scrolled or animation already played');
        
        // Ouvrir les rideaux immédiatement
        stage.classList.add('is-open');
        
        // Démarrer la vidéo si elle existe
        const video = stage.querySelector('.backdrop');
        if (video && video.paused) {
            video.play().catch(() => {
                /* Gestion silencieuse de l'erreur autoplay */
            });
        }
        
        // S'assurer que tous les éléments sont visibles immédiatement
        const elementsToReveal = [
            // '.sticky-top-nav',
            '.header-nav', 
            '.push-block.booking .content',
            '.hero-cta'
        ];
        
        elementsToReveal.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '1';
                element.style.visibility = 'visible';
                element.classList.add('is-revealed');
                
                // Ne pas modifier le transform du hero-cta (garde son centrage CSS)
                if (selector !== '.hero-cta') {
                    element.style.transform = 'translateY(0)';
                }
            }
        });
        
        return; // Sortir de la fonction - pas d'animation
    }

    // 🎭 VOTRE CODE EXISTANT - Animation complète des rideaux
    const video = stage.querySelector('.backdrop');
    const bottoms = stage.querySelectorAll('.bottom');

    // Configuration centralisée
    const CURTAIN_DELAY = 1600; // délai avant ouverture des rideaux (ms)
    const REVEAL_START_DELAY = 1200; // délai APRÈS ouverture avant révélation (ms)
    const REVEAL_DELAY = 600; // délai entre chaque élément (ms)

    // Éléments à révéler dans l'ordre
    const elementsToReveal = [
        // '.sticky-top-nav',
        '.header-nav', 
        '.push-block.booking .content',
        '.hero-cta'
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
                // Style de base pour tous les éléments
                element.classList.add('curtain-reveal');
                element.style.opacity = '0';
                element.style.transition = 'opacity 0.6s ease-in-out';
                element.style.willChange = 'transform, opacity';

                // Gestion spécifique des transforms selon l'élément
                if (selector === '.sticky-top-nav') {
                    // .sticky-top-nav vient du HAUT (-16px)
                    element.style.transform = 'translateY(-16px)';
                    element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                } else if (selector !== '.hero-cta') {
                    // Autres éléments viennent du BAS (+16px)
                    element.style.transform = 'translateY(16px)';
                    element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                }
                // .hero-cta garde son transform existant (centrage)
            }
        });
    };

    /**
     * Ouvre les rideaux et programme la révélation progressive
     */
    const openCurtains = () => {
        // 1. Ouvrir les rideaux immédiatement
        stage.classList.add('is-open');
        
        // 2. Démarrer la vidéo si elle existe
        if (video && video.paused) {
            video.play().catch(() => {
                /* Gestion silencieuse de l'erreur autoplay */
            });
        }

        // 3. Attendre REVEAL_START_DELAY avant de commencer les révélations
        setTimeout(() => {
            // Révéler les éléments un par un
            elementsToReveal.forEach((selector, index) => {
                const element = document.querySelector(selector);
                if (element) {
                    const delay = index * REVEAL_DELAY;
                    
                    setTimeout(() => {
                        // Pour tous les éléments : révéler l'opacité
                        element.style.opacity = '1';
                        element.classList.add('is-revealed');

                        // Animation de transform selon le type d'élément
                        if (selector === '.sticky-top-nav') {
                            // .sticky-top-nav revient à sa position normale depuis le haut
                            element.style.transform = 'translateY(0)';
                        } else if (selector !== '.hero-cta') {
                            // Autres éléments reviennent à leur position depuis le bas
                            element.style.transform = 'translateY(0)';
                        }
                        // .hero-cta garde son transform de centrage intact
                    }, delay);
                }
            });
        }, REVEAL_START_DELAY);

        // ⭐ NOUVEAU : Marquer l'animation comme jouée après la fin
        const totalAnimationTime = REVEAL_START_DELAY + (elementsToReveal.length * REVEAL_DELAY) + 1000;
        setTimeout(() => {
            sessionStorage.setItem('curtainAnimationPlayed', 'true');
            console.log('🎭 Curtain animation completed and marked as played');
        }, totalAnimationTime);
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

    // Initialiser les éléments avec les styles appropriés
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
    setTimeout(() => {
        if (!stage.classList.contains('is-open')) {
            openCurtains();
        }
    }, 4000);
}
