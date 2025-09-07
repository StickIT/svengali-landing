export function initStageCurtain() {
    const stage = document.querySelector('.stage');
    if (!stage) return;

    // ⭐ CORRIGÉ : Attendre que le navigateur restaure la position de scroll
    const checkAndInitAnimation = () => {
        const hasScrolled = window.scrollY > 50; // Seuil plus bas
        const animationPlayed = sessionStorage.getItem('curtainAnimationPlayed');
        
        console.log(`Scroll position: ${window.scrollY}, Animation played: ${animationPlayed}`); // Debug
        
        if (hasScrolled || animationPlayed) {
            console.log('⏭️ Skipping curtain animation - user has scrolled or animation already played');
            
            // Ouvrir directement sans animation
            stage.classList.add('is-open');
            
            const video = stage.querySelector('.backdrop');
            if (video && video.paused) {
                video.play().catch(() => {});
            }
            
            // Révéler tous les éléments immédiatement
            const elementsToReveal = [
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
                    
                    if (selector !== '.hero-cta') {
                        element.style.transform = 'translateY(0)';
                    }
                }
            });
            
            return; // Pas d'animation
        }
        
        // Lancer l'animation normale
        startCurtainAnimation();
    };

    // ⭐ NOUVEAU : Vérifier après un délai pour laisser le browser restaurer le scroll
    setTimeout(checkAndInitAnimation, 100);

    // Fonction d'animation normale
    function startCurtainAnimation() {
        const video = stage.querySelector('.backdrop');
        const bottoms = stage.querySelectorAll('.bottom');

        const CURTAIN_DELAY = 1600;
        const REVEAL_START_DELAY = 1200;
        const REVEAL_DELAY = 600;

        const elementsToReveal = [
            '.header-nav', 
            '.push-block.booking .content',
            '.hero-cta'
        ];

        let imagesLoaded = 0;

        stage.classList.remove('is-open');

        const initializeElements = () => {
            elementsToReveal.forEach((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.classList.add('curtain-reveal');
                    element.style.opacity = '0';
                    element.style.transition = 'opacity 0.6s ease-in-out';
                    element.style.willChange = 'transform, opacity';

                    if (selector !== '.hero-cta') {
                        element.style.transform = 'translateY(16px)';
                        element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
                    }
                }
            });
        };

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

                            if (selector !== '.hero-cta') {
                                element.style.transform = 'translateY(0)';
                            }
                        }, delay);
                    }
                });
            }, REVEAL_START_DELAY);

            // ⭐ Marquer comme joué après la fin
            const totalTime = REVEAL_START_DELAY + (elementsToReveal.length * REVEAL_DELAY) + 1000;
            setTimeout(() => {
                sessionStorage.setItem('curtainAnimationPlayed', 'true');
            }, totalTime);
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

        initializeElements();

        bottoms.forEach(img => {
            if (img.complete) {
                imagesLoaded++;
            } else {
                img.addEventListener('load', onImageLoad, { once: true });
            }
        });

        checkImagesAndOpen();

        setTimeout(() => {
            if (!stage.classList.contains('is-open')) {
                openCurtains();
            }
        }, 4000);
    }
}
