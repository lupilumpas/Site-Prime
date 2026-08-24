document.addEventListener("DOMContentLoaded", () => {

    const popups = document.querySelectorAll(".popup-fundo");

    popups.forEach((popup) => {

        const container = popup.querySelector(".popup-imagens");
        const imagemAnterior = popup.querySelector(".Imagem-Anterior");
        const imagemSeguinte = popup.querySelector(".Imagem-Seguinte");

        if (!container || !imagemAnterior || !imagemSeguinte) {
            return;
        }

        let animando = false;

        function finalizarAnimacao(imagemClicada) {

            const onTransitionEnd = (e) => {
                // Só reage se a transição for de uma das imagens do carrossel
                if (!container.contains(e.target)) return;

                // Evita disparar várias vezes (uma por propriedade)
                if (e.propertyName !== "left") return;

                container.removeEventListener("transitionend", onTransitionEnd);

                // 1. Executa a lógica original (troca os src)
                if (typeof imagemClicada.onclick === "function") {
                    imagemClicada.onclick();
                }

                // 2. Desliga as transições temporariamente
                const imagens = container.querySelectorAll("img");
                imagens.forEach(img => {
                    img.style.transition = "none";
                });

                // 3. Remove as classes de animação (as imagens voltam para as posições originais)
                container.classList.remove("animando-direita", "animando-esquerda");

                // 4. Força o navegador a aplicar a mudança imediatamente
                void container.offsetWidth;

                // 5. Restaura as transições
                imagens.forEach(img => {
                    img.style.transition = "";
                });

                animando = false;
            };

            container.addEventListener("transitionend", onTransitionEnd);

            // Fallback de segurança (caso o transitionend falhe)
            setTimeout(() => {
                if (animando) {
                    container.removeEventListener("transitionend", onTransitionEnd);
                    onTransitionEnd({ target: container, propertyName: "left" });
                }
            }, 850);
        }

// ===== CLIQUE NA DIREITA (próximo) =====
imagemSeguinte.addEventListener("click", (evento) => {
    evento.preventDefault();
    evento.stopImmediatePropagation();

    if (animando) return;
    animando = true;

    container.classList.remove("animando-direita");
    void container.offsetWidth;
    container.classList.add("animando-esquerda");   // ← troquei aqui

    finalizarAnimacao(imagemSeguinte);
}, true);


// ===== CLIQUE NA ESQUERDA (anterior) =====
imagemAnterior.addEventListener("click", (evento) => {
    evento.preventDefault();
    evento.stopImmediatePropagation();

    if (animando) return;
    animando = true;

    container.classList.remove("animando-esquerda");
    void container.offsetWidth;
    container.classList.add("animando-direita");    // ← troquei aqui

    finalizarAnimacao(imagemAnterior);
}, true);

    });

});