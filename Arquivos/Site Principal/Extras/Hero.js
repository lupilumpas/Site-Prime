/* =========================================================
   HERO — CACHOEIRA DE CÍRCULOS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;


    /* Criar área da animação */

    const animationArea = document.createElement("div");

    animationArea.className = "hero-animation";

    hero.prepend(animationArea);


    /* Quantidade */

    const quantidadeDeCirculos = 20;


    /* Número aleatório */

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    /* Criar círculo */

    function criarCirculo() {

        const circle = document.createElement("div");

        circle.className = "hero-circle";


        /* Tamanho */

        const size = random(40, 180);


        /* =================================================
           POSIÇÃO HORIZONTAL

           IMPORTANTE:

           Agora o círculo começa em uma posição X
           e faz apenas pequenas mudanças enquanto cai.
           ================================================= */

        const start = random(0, 100);

        const move1 = start + random(-10, 10);
        const move2 = start + random(-15, 15);
        const move3 = start + random(-10, 10);
        const end = start + random(-15, 15);


        /* Velocidade */

        const duration = random(7, 14);


        /* Atraso */

        const delay = 3;


        /* Transparência */

        const opacity = random(0.15, 0.30);


        /* Borda */

        const borderSize = random(1, 4);


        /* Blur */

        const blur = random(0, 2);


        /* Enviar valores */

        circle.style.setProperty(
            "--size",
            `${size}px`
        );

        circle.style.setProperty(
            "--x-start",
            `${start}vw`
        );

        circle.style.setProperty(
            "--x-1",
            `${move1}vw`
        );

        circle.style.setProperty(
            "--x-2",
            `${move2}vw`
        );

        circle.style.setProperty(
            "--x-3",
            `${move3}vw`
        );

        circle.style.setProperty(
            "--x-end",
            `${end}vw`
        );

        circle.style.setProperty(
            "--duration",
            `${duration}s`
        );

        circle.style.setProperty(
            "--delay",
            `${delay}s`
        );

        circle.style.setProperty(
            "--opacity",
            opacity
        );

        circle.style.setProperty(
            "--border-size",
            `${borderSize}px`
        );

        circle.style.setProperty(
            "--blur",
            `${blur}px`
        );


        animationArea.appendChild(circle);
    }


    /* Criar círculos */

setTimeout(() => {

    let i = 0;

    function proximoCirculo() {

        if (i >= quantidadeDeCirculos) return;

        criarCirculo();

        i++;

        setTimeout(
            proximoCirculo,
            random(100, 400)
        );
    }

    proximoCirculo();

}, 3000);

});