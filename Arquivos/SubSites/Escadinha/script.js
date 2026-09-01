/* =========================================================
   ESCADINHA — JAVASCRIPT
   O scroll é convertido em progresso de 0 a 1.

   0   = câmera muito aproximada na escadinha
   1   = câmera afastada mostrando toda a escadinha

   Cada andar aparece progressivamente durante o afastamento.
========================================================= */

(() => {
    const section = document.querySelector(".escadinha-section");
    const background = document.querySelector(".escadinha-background");
    const floors = [...document.querySelectorAll(".andar")];
    const indicator = document.querySelector(".scroll-indicator");

    if (!section || !background) return;

    let ticking = false;

    /*
       Ajustes principais:
       START_SCALE = zoom inicial
       END_SCALE   = zoom final
       Os thresholds controlam quando cada andar aparece.
    */
    const START_SCALE = 2.8;
    const END_SCALE = 1;

    // Cada valor representa aproximadamente a posição do scroll
    // em que aquele andar começa a aparecer.
    const FLOOR_STARTS = [0.05, 0.22, 0.40, 0.58, 0.76];

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function easeOutCubic(value) {
        return 1 - Math.pow(1 - value, 3);
    }

    function update() {
        ticking = false;

        const rect = section.getBoundingClientRect();
        const scrollDistance = section.offsetHeight - window.innerHeight;

        if (scrollDistance <= 0) return;

        // Quanto da seção já foi percorrido.
        const progress = clamp(
            -rect.top / scrollDistance,
            0,
            1
        );

        // Interpolação do zoom.
        const zoomProgress = easeOutCubic(progress);
        const scale = START_SCALE + (END_SCALE - START_SCALE) * zoomProgress;

        background.style.transform = `scale(${scale})`;

        /*
           Revela os 5 andares um por um.
           O pequeno intervalo de fade evita que todos apareçam juntos.
        */
        floors.forEach((floor, index) => {
            const start = FLOOR_STARTS[index];
            const revealDuration = 0.13;

            const floorProgress = clamp(
                (progress - start) / revealDuration,
                0,
                1
            );

            const cards = floor.querySelectorAll(".produto-card");

            cards.forEach((card, cardIndex) => {
                const stagger = cardIndex * 0.045;
                const cardProgress = clamp(
                    (floorProgress - stagger) / 0.72,
                    0,
                    1
                );

                if (cardProgress > 0.01) {
                    card.classList.add("visivel");
                } else {
                    card.classList.remove("visivel");
                }
            });
        });

        // O indicador desaparece quando a experiência começa.
        if (indicator) {
            indicator.style.opacity = progress < 0.035 ? "0.65" : "0";
        }
    }

    function requestUpdate() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    // Estado inicial.
    update();
})();
