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
        if (!container.contains(e.target)) return;
        if (e.propertyName !== "left") return;

        container.removeEventListener("transitionend", onTransitionEnd);

        // 1. Desliga transições
        const imagens = container.querySelectorAll("img");
        imagens.forEach(img => img.style.transition = "none");

        const aed = container.querySelector(".aed-container");
        if (aed) aed.style.transition = "none";

        // 2. Remove as classes de animação ANTES de mostrar a nova imagem
        container.classList.remove("animando-direita", "animando-esquerda");

        // 3. Força reflow
        void container.offsetWidth;

        // 4. Agora sim atualiza src + show/hide
        if (typeof imagemClicada.onclick === "function") {
            imagemClicada.onclick();
        }

        // 5. Reseta posição do AeD (já escondido)
        if (aed) {
            aed.style.left = "";
            aed.style.width = "";
            aed.style.height = "";
            aed.style.transform = "";
            aed.style.opacity = "";
        }
       // if (aed) {
        //    aed.style.left = "50%";
   //        aed.style.width = "300px";
     //       aed.style.height = "340px";
    //        aed.style.transform = "translate(-50%, -50%)";
     //       aed.style.opacity = "1";
     //   }

        // 6. Restaura transições
        imagens.forEach(img => img.style.transition = "");
        if (aed) aed.style.transition = "";

        animando = false;
    };

    container.addEventListener("transitionend", onTransitionEnd);

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