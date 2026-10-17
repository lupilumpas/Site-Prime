/* =========================================================
   JARDINS DE MADEIRA — TODAS AS AVALIAÇÕES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const reviewsContainer =
        document.querySelector("#reviews-container");

    if (!reviewsContainer) {
        console.warn("Container de avaliações não encontrado.");
        return;
    }


    /* =========================================================
       1. VERIFICAR DADOS
       ========================================================= */

    if (typeof DADOS_AVALIACOES === "undefined") {
        console.error("DADOS_AVALIACOES não foi encontrado.");
        return;
    }


    /* =========================================================
       2. PEGAR PRODUTOS
       ========================================================= */

    const produtos = Array.isArray(DADOS_AVALIACOES.produtos)
        ? DADOS_AVALIACOES.produtos
        : [];


    /* =========================================================
       3. JUNTAR TODAS AS AVALIAÇÕES
       ========================================================= */

    const todasAvaliacoes = [];

    produtos.forEach(produto => {

        if (!Array.isArray(produto.avaliacoes)) {
            return;
        }

        produto.avaliacoes.forEach(avaliacao => {

            todasAvaliacoes.push({
                ...avaliacao,
                item_id: produto.item_id
            });

        });

    });


    /* =========================================================
       4. PROTEGER TEXTOS
       ========================================================= */

    function escapeHTML(value) {

        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }


    /* =========================================================
       5. LIMPAR CONTAINER
       ========================================================= */

    reviewsContainer.innerHTML = "";


    /* =========================================================
       6. NENHUMA AVALIAÇÃO
       ========================================================= */

    if (todasAvaliacoes.length === 0) {

        reviewsContainer.innerHTML = `
            <p class="reviews-empty">
                Nenhuma avaliação encontrada.
            </p>
        `;

        return;
    }


    /* =========================================================
       7. CRIAR TODOS OS CARDS
       ========================================================= */

    todasAvaliacoes.forEach(avaliacao => {


        /* -----------------------------------------------------
           DADOS BÁSICOS
           ----------------------------------------------------- */

        const nota = Math.max(
            0,
            Math.min(
                5,
                Number(avaliacao.nota) || 0
            )
        );


        const estrelas =
            "★".repeat(nota) +
            "☆".repeat(5 - nota);


        const texto = avaliacao.texto
            ? escapeHTML(avaliacao.texto)
            : "";


        const data = avaliacao.data
            ? escapeHTML(avaliacao.data)
            : "";


        const id = avaliacao.id
            ? escapeHTML(String(avaliacao.id))
            : "";


        const itemId = avaliacao.item_id
            ? escapeHTML(String(avaliacao.item_id))
            : "";


        const curtidas = Number(
            avaliacao.curtidas
        ) || 0;


        /* -----------------------------------------------------
           FOTOS
           ----------------------------------------------------- */

        const fotos =
            avaliacao.midia &&
            Array.isArray(avaliacao.midia.fotos)
                ? avaliacao.midia.fotos
                : [];


        /* -----------------------------------------------------
           VÍDEOS
           ----------------------------------------------------- */

        const videos =
            avaliacao.midia &&
            Array.isArray(avaliacao.midia.videos)
                ? avaliacao.midia.videos
                : [];


        /* -----------------------------------------------------
           JUNTAR FOTOS + VÍDEOS
           ----------------------------------------------------- */

        const midias = [

            ...fotos.map(foto => ({

                tipo: "foto",

                url: foto.url,

                alt:
                    foto.alt ||
                    "Foto da avaliação"

            })),

            ...videos.map(video => ({

                tipo: "video",

                url:
                    typeof video === "string"
                        ? video
                        : video.url

            }))

        ].filter(media => media.url);


        /* =====================================================
           8. CRIAR CARD
           ===================================================== */

        const card =
            document.createElement("article");


        card.className =
            "review-card";


        card.dataset.reviewId =
            id;


        card.dataset.itemId =
            itemId;


        card.dataset.nota =
            nota;


        /* =====================================================
           9. PRIMEIRA MÍDIA
           ===================================================== */

        let mediaHTML = "";


        if (midias.length > 0) {

            const primeiraMidia =
                midias[0];


            let conteudoInicial = "";


            /* -------------------------------------------------
               FOTO
               ------------------------------------------------- */

            if (
                primeiraMidia.tipo ===
                "foto"
            ) {

                conteudoInicial = `

                        <a
                            href="#"
                            class="review-image-link"
                        >

                        <img
                            src="${escapeHTML(primeiraMidia.url)}"
                            alt="${escapeHTML(primeiraMidia.alt)}"
                            loading="lazy"
                        >

                    </a>

                `;

            }


            /* -------------------------------------------------
               VÍDEO
               ------------------------------------------------- */

            else {

                conteudoInicial = `

                    <video
                        controls
                        preload="metadata"
                    >

                        <source
                            src="${escapeHTML(primeiraMidia.url)}"
                        >

                        Seu navegador não suporta vídeo.

                    </video>

                `;

            }


            /* -------------------------------------------------
               CONTAINER DA MÍDIA
               ------------------------------------------------- */

            mediaHTML = `

                <div
                    class="review-media"
                    data-media-index="0"
                >

                    ${
                        midias.length > 1
                            ? `

                                <button
                                    type="button"
                                    class="review-media-arrow review-media-arrow-left"
                                    aria-label="Mídia anterior"
                                >
                                    ‹
                                </button>

                            `
                            : ""
                    }


                    <div class="review-media-content">

                        ${conteudoInicial}

                    </div>


                    ${
                        midias.length > 1
                            ? `

                                <button
                                    type="button"
                                    class="review-media-arrow review-media-arrow-right"
                                    aria-label="Próxima mídia"
                                >
                                    ›
                                </button>

                            `
                            : ""
                    }

                </div>

            `;

        }


        /* =====================================================
           10. CONTEÚDO DO CARD
           ===================================================== */

        card.innerHTML = `

            <div class="stars">
                ${estrelas}
            </div>


            ${
                texto
                    ? `

                        <p class="review-text">

                            “${texto}”

                            <span class="review-read-more">
                                Ler mais
                            </span>

                        </p>

                    `
                    : ""
            }


            <strong>
                Cliente do Mercado Livre
            </strong>


            ${
                data
                    ? `

                        <span>
                            ${data}
                        </span>

                    `
                    : ""
            }


            ${
                curtidas > 0
                    ? `

                        <div class="review-likes">

                            ${curtidas}
                            curtida${curtidas !== 1 ? "s" : ""}

                        </div>

                    `
                    : ""
            }


            ${mediaHTML}

        `;


        /* =====================================================
           11. ADICIONAR CARD
           ===================================================== */

        reviewsContainer.appendChild(card);


        /* =====================================================
           12. LER MAIS / LER MENOS
           ===================================================== */

        const reviewText =
            card.querySelector(
                ".review-text"
            );


        const readMore =
            card.querySelector(
                ".review-read-more"
            );


        if (
            reviewText &&
            readMore
        ) {

            requestAnimationFrame(() => {

                const passouDoLimite =
                    reviewText.scrollHeight >
                    reviewText.clientHeight;


                if (!passouDoLimite) {

                    readMore.style.display =
                        "none";

                    return;

                }


                readMore.addEventListener(
                    "click",
                    () => {

                        const expandido =
                            reviewText.classList.contains(
                                "review-expanded"
                            );


                        /* -------------------------------------
                           FECHAR
                           ------------------------------------- */

                        if (expandido) {

                            reviewText.classList.remove(
                                "review-expanded"
                            );


                            card.style.height =
                                "380px";


                            readMore.textContent =
                                "Ler mais";

                        }


                        /* -------------------------------------
                           ABRIR
                           ------------------------------------- */

                        else {

                            reviewText.classList.add(
                                "review-expanded"
                            );


                            requestAnimationFrame(() => {

                                const alturaTexto =
                                    reviewText.scrollHeight;


                                const alturaMedia =
                                    236.59;


                                const alturaNecessaria =

                                    30 +

                                    reviewText.offsetTop +

                                    alturaTexto +

                                    30 +

                                    alturaMedia +

                                    30;


                                card.style.height =
                                    `${Math.max(
                                        380,
                                        alturaNecessaria
                                    )}px`;

                            });


                            readMore.textContent =
                                "Ler menos";

                        }

                    }
                );

            });

        }


        /* =====================================================
           13. CARROSSEL DE MÍDIA
           ===================================================== */

        if (
            midias.length > 1
        ) {

            const mediaContainer =
                card.querySelector(
                    ".review-media"
                );


            const mediaContent =
                card.querySelector(
                    ".review-media-content"
                );


            const prevButton =
                card.querySelector(
                    ".review-media-arrow-left"
                );


            const nextButton =
                card.querySelector(
                    ".review-media-arrow-right"
                );


            let mediaIndex = 0;


            /* -------------------------------------------------
               MOSTRAR MÍDIA
               ------------------------------------------------- */

            function mostrarMidia() {

                const media =
                    midias[mediaIndex];


                if (!media) {
                    return;
                }


                /* ---------------------------------------------
                   FOTO
                   --------------------------------------------- */

                if (
                    media.tipo ===
                    "foto"
                ) {

                    mediaContent.innerHTML = `

<a
    href="#"
    class="review-image-link"
>

                            <img
                                src="${escapeHTML(media.url)}"
                                alt="${escapeHTML(media.alt)}"
                                loading="lazy"
                            >

                        </a>

                    `;

                }


                /* ---------------------------------------------
                   VÍDEO
                   --------------------------------------------- */

                else {

                    mediaContent.innerHTML = `

                        <video
                            controls
                            preload="metadata"
                        >

                            <source
                                src="${escapeHTML(media.url)}"
                            >

                            Seu navegador não suporta vídeo.

                        </video>

                    `;

                }


                mediaContainer.dataset.mediaIndex =
                    mediaIndex;

            }


            /* -------------------------------------------------
               MÍDIA ANTERIOR
               ------------------------------------------------- */

            if (prevButton) {

                prevButton.addEventListener(
                    "click",
                    () => {

                        mediaIndex--;


                        if (
                            mediaIndex < 0
                        ) {

                            mediaIndex =
                                midias.length - 1;

                        }


                        mostrarMidia();

                    }
                );

            }


            /* -------------------------------------------------
               PRÓXIMA MÍDIA
               ------------------------------------------------- */

            if (nextButton) {

                nextButton.addEventListener(
                    "click",
                    () => {

                        mediaIndex++;


                        if (
                            mediaIndex >=
                            midias.length
                        ) {

                            mediaIndex = 0;

                        }


                        mostrarMidia();

                    }
                );

            }

        }

    });


    /* =========================================================
       14. INFORMAÇÕES NO CONSOLE
       ========================================================= */

    console.log(
        "Produtos carregados:",
        produtos.length
    );


    console.log(
        "Avaliações carregadas:",
        todasAvaliacoes.length
    );


    /* =========================================================
       15. BOTÃO VOLTAR
       ========================================================= */

    const botaoVoltar =
        document.querySelector(
            ".voltar"
        );


    if (botaoVoltar) {

        botaoVoltar.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const caminhoLocal =
                    botaoVoltar.dataset.local;


                const caminhoOnline =
                    botaoVoltar.getAttribute(
                        "href"
                    );


                if (

                    window.location.protocol ===
                    "file:" ||

                    window.location.hostname ===
                    "localhost" ||

                    window.location.hostname ===
                    "127.0.0.1"

                ) {

                    window.location.href =
                        caminhoLocal;

                }

                else {

                    window.location.href =
                        caminhoOnline;

                }

            }
        );

    }


    /* =========================================================
       16. OBSERVAÇÃO
       =========================================================

       NÃO EXISTE PAGINAÇÃO AQUI.

       Todos os cards são mantidos no DOM.

       O CSS decide quantos cards cabem
       em cada linha através de:

       grid-template-columns:
           repeat(
               auto-fill,
               minmax(300px, 1fr)
           );

       ========================================================= */
    /* =========================================================
       17. LIGHTBOX DAS AVALIAÇÕES
       ========================================================= */

    const lightboxAvaliacao =
        document.getElementById(
            "lightboxAvaliacao"
        );


    const lightboxAvaliacaoImg =
        document.getElementById(
            "lightboxAvaliacaoImg"
        );


    const fecharLightboxAvaliacao =
        document.getElementById(
            "fecharLightboxAvaliacao"
        );


    function abrirLightboxAvaliacao(
        url,
        alt = ""
    ) {

        if (
            !lightboxAvaliacao ||
            !lightboxAvaliacaoImg
        ) {
            return;
        }


        lightboxAvaliacaoImg.src =
            url;


        lightboxAvaliacaoImg.alt =
            alt;


        lightboxAvaliacao.classList.add(
            "ativo"
        );


        document.body.style.overflow =
            "hidden";

    }


    function fecharLightbox() {

        if (!lightboxAvaliacao) {
            return;
        }


        lightboxAvaliacao.classList.remove(
            "ativo"
        );


        if (lightboxAvaliacaoImg) {

            lightboxAvaliacaoImg.src =
                "";

        }


        document.body.style.overflow =
            "";

    }


    /* ---------------------------------------------------------
       CLICAR NA IMAGEM
       --------------------------------------------------------- */

    document.addEventListener(
        "click",
        (event) => {

            const link =
                event.target.closest(
                    ".review-image-link"
                );


            if (!link) {
                return;
            }


            const imagem =
                link.querySelector("img");


            if (!imagem) {
                return;
            }


            event.preventDefault();


            abrirLightboxAvaliacao(
                imagem.src,
                imagem.alt
            );

        }
    );


    /* ---------------------------------------------------------
       BOTÃO FECHAR
       --------------------------------------------------------- */

    if (fecharLightboxAvaliacao) {

        fecharLightboxAvaliacao.addEventListener(
            "click",
            fecharLightbox
        );

    }


    /* ---------------------------------------------------------
       CLICAR FORA DA IMAGEM
       --------------------------------------------------------- */

    if (lightboxAvaliacao) {

        lightboxAvaliacao.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    lightboxAvaliacao
                ) {

                    fecharLightbox();

                }

            }
        );

    }


    /* ---------------------------------------------------------
       ESC
       --------------------------------------------------------- */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                fecharLightbox();

            }

        }
    );

/* =========================================================
   CONTAGEM DAS AVALIAÇÕES POR NOTA
   ========================================================= */

const contagemNotas = {

    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0

};


todasAvaliacoes.forEach(avaliacao => {

    const nota =
        Number(avaliacao.nota);


    if (
        nota >= 1 &&
        nota <= 5
    ) {

        contagemNotas[nota]++;

    }

});


/* ---------------------------------------------------------
   ATUALIZAR QUANTIDADES DOS BOTÕES
   --------------------------------------------------------- */

const filtrosAvaliacoes =
    document.querySelectorAll(".filtro-avaliacao");


filtrosAvaliacoes.forEach(filtro => {

    const nota =
        filtro.dataset.nota;


    const quantidade =
        filtro.querySelector(
            ".filtro-quantidade"
        );


    if (!quantidade) {
        return;
    }


    if (nota === "todas") {

        quantidade.textContent =
            todasAvaliacoes.length;

    }

    else {

        quantidade.textContent =
            contagemNotas[nota] || 0;

    }

});


/* =========================================================
   FILTRO DAS AVALIAÇÕES
   ========================================================= */

filtrosAvaliacoes.forEach(filtro => {

    filtro.addEventListener("click", () => {

        const notaSelecionada =
            filtro.dataset.nota;


        filtrosAvaliacoes.forEach(botao => {

            botao.classList.remove(
                "ativo"
            );

        });


        filtro.classList.add(
            "ativo"
        );


        const cards =
            reviewsContainer.querySelectorAll(
                ".review-card"
            );


        cards.forEach(card => {

            if (
                notaSelecionada ===
                "todas"
            ) {

                card.style.display =
                    "";

                return;

            }


            const notaCard =
                card.dataset.nota;


            card.style.display =
                notaCard ===
                notaSelecionada
                    ? ""
                    : "none";

        });

    });

});

});