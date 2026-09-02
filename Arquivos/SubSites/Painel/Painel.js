/* =========================================================
   SCRIPT DO PAINEL
========================================================= */


/*
    Quando a página carregar...
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Painel carregado!");



/* =====================================================
   BOTÕES DOS PRODUTOS
===================================================== */

const botoes =
    document.querySelectorAll(".produto-card button");

const imagens =
    document.querySelectorAll(".produto-card img");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        if (imagens[indice]) {
            imagens[indice].click();
        }

    });

});

    /* =====================================================
       ANIMAÇÃO DOS CACHEPÔS
    ===================================================== */

    const cachepos =
        document.querySelectorAll(".cachepo");


    /*
        Inicialmente deixamos os cachepôs
        um pouco transparentes.
    */

    cachepos.forEach((cachepo) => {

        cachepo.style.opacity = "0";

        cachepo.style.transform =
            "translateX(-50%) translateY(80px)";

        cachepo.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });



    /*
        Observer detecta quando o cachepô
        entra na tela.
    */

    const observer =
        new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateX(-50%) translateY(0)";

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    cachepos.forEach((cachepo) => {

        observer.observe(cachepo);

    });
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const id = link.getAttribute("href");
        const elemento = document.querySelector(id);

        if (elemento) {
            elemento.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});

});