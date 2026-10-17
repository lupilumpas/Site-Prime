/* =========================================================
   JARDINS DE MADEIRA — AVALIAÇÕES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const reviewsContainer =
        document.querySelector("#reviews-container");

    if (!reviewsContainer) {
        console.warn("Container de avaliações não encontrado.");
        return;
    }

    if (typeof DADOS_AVALIACOES === "undefined") {
        console.error("DADOS_AVALIACOES não foi encontrado.");
        return;
    }


    /* ---------------------------------------------------------
       1. PEGAR PRODUTOS
       --------------------------------------------------------- */

    const produtos = Array.isArray(DADOS_AVALIACOES.produtos)
        ? DADOS_AVALIACOES.produtos
        : [];


    /* ---------------------------------------------------------
       2. JUNTAR TODAS AS AVALIAÇÕES
       --------------------------------------------------------- */

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


    /* ---------------------------------------------------------
       3. FUNÇÃO PARA PROTEGER TEXTOS
       --------------------------------------------------------- */

    function escapeHTML(value) {

        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }


    /* ---------------------------------------------------------
       4. LIMPAR CONTAINER
       --------------------------------------------------------- */

    reviewsContainer.innerHTML = "";


    /* ---------------------------------------------------------
       5. NENHUMA AVALIAÇÃO
       --------------------------------------------------------- */

    if (todasAvaliacoes.length === 0) {

        reviewsContainer.innerHTML = `
            <p class="reviews-empty">
                Nenhuma avaliação encontrada.
            </p>
        `;

        return;
    }


    /* ---------------------------------------------------------
       6. CRIAR CARDS
       --------------------------------------------------------- */

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
           7. PEGAR FOTOS E VÍDEOS
           ----------------------------------------------------- */

        const fotos =
            avaliacao.midia &&
            Array.isArray(avaliacao.midia.fotos)
                ? avaliacao.midia.fotos
                : [];


        const videos =
            avaliacao.midia &&
            Array.isArray(avaliacao.midia.videos)
                ? avaliacao.midia.videos
                : [];


        /* -----------------------------------------------------
           8. JUNTAR FOTOS E VÍDEOS
           ----------------------------------------------------- */

        const midias = [

            ...fotos.map(foto => ({
                tipo: "foto",
                url: foto.url,
                alt: foto.alt || "Foto da avaliação"
            })),

            ...videos.map(video => ({
                tipo: "video",
                url:
                    typeof video === "string"
                        ? video
                        : video.url
            }))

        ].filter(media => media.url);


        /* -----------------------------------------------------
           9. CRIAR CARD
           ----------------------------------------------------- */

        const card =
            document.createElement("article");

        card.className = "review-card";

        card.dataset.reviewId = id;
        card.dataset.itemId = itemId;


        /* -----------------------------------------------------
           10. PRIMEIRA MÍDIA
           ----------------------------------------------------- */

        let mediaHTML = "";


        if (midias.length > 0) {

            const primeiraMidia = midias[0];

            let conteudoInicial = "";


            if (primeiraMidia.tipo === "foto") {

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

            } else {

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


        /* -----------------------------------------------------
           11. CONTEÚDO DO CARD
           ----------------------------------------------------- */

        card.innerHTML = `

            <div class="stars">
                ${estrelas}
            </div>

            ${
                texto
                    ? `
                        <p class="review-text">
                            “${texto}”
                            <span class="review-read-more">Ler mais</span>
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


        /* -----------------------------------------------------
           12. ADICIONAR CARD AO HTML
           ----------------------------------------------------- */

        reviewsContainer.appendChild(card);
const reviewText =
    card.querySelector(".review-text");

const readMore =
    card.querySelector(".review-read-more");

if (reviewText && readMore) {

    requestAnimationFrame(() => {

        const passouDoLimite =
            reviewText.scrollHeight >
            reviewText.clientHeight;

        if (!passouDoLimite) {

            readMore.style.display = "none";

            return;
        }

        readMore.addEventListener("click", () => {

            const expandido =
                reviewText.classList.contains(
                    "review-expanded"
                );

if (expandido) {

    reviewText.classList.remove(
        "review-expanded"
    );

    card.style.height = "380px";

    readMore.textContent =
        "Ler mais";

} else {

    reviewText.classList.add(
        "review-expanded"
    );

    requestAnimationFrame(() => {

        const alturaTexto =
            reviewText.scrollHeight;

        const alturaMedia = 236.59;

        const alturaNecessaria =
            30 +
            reviewText.offsetTop +
            alturaTexto +
            30 +
            alturaMedia +
            30;

        card.style.height =
            `${Math.max(380, alturaNecessaria)}px`;

    });

    readMore.textContent =
        "Ler menos";

}

        });

    });

}


        /* -----------------------------------------------------
           13. CARROSSEL DE MÍDIA
           ----------------------------------------------------- */

        if (midias.length > 1) {

            const mediaContainer =
                card.querySelector(".review-media");


            const mediaContent =
                card.querySelector(".review-media-content");


            const prevButton =
                card.querySelector(
                    ".review-media-arrow-left"
                );


            const nextButton =
                card.querySelector(
                    ".review-media-arrow-right"
                );


            let mediaIndex = 0;


            function mostrarMidia() {

                const media =
                    midias[mediaIndex];


                if (!media) {
                    return;
                }


                if (media.tipo === "foto") {

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

                } else {

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


            prevButton.addEventListener(
                "click",
                () => {

                    mediaIndex--;

                    if (mediaIndex < 0) {
                        mediaIndex =
                            midias.length - 1;
                    }

                    mostrarMidia();

                }
            );


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

    });


    /* ---------------------------------------------------------
       14. INFORMAÇÕES NO CONSOLE
       --------------------------------------------------------- */

    console.log(
        "Produtos carregados:",
        produtos.length
    );

    console.log(
        "Avaliações carregadas:",
        todasAvaliacoes.length
    );


    /* ---------------------------------------------------------
       15. NAVEGAÇÃO DAS AVALIAÇÕES
       --------------------------------------------------------- */

    const reviewsPrev =
        document.querySelector("#reviews-prev");


    const reviewsNext =
        document.querySelector("#reviews-next");


    const CARDS_POR_PAGINA = 6;


    let paginaAtual = 0;


    function atualizarPaginaAvaliacoes() {

        const cards =
            reviewsContainer.querySelectorAll(
                ".review-card"
            );


        const totalPaginas =
            Math.ceil(
                cards.length /
                CARDS_POR_PAGINA
            );


        cards.forEach((card, index) => {

            const inicio =
                paginaAtual *
                CARDS_POR_PAGINA;


            const fim =
                inicio +
                CARDS_POR_PAGINA;


            card.style.display =
                index >= inicio &&
                index < fim
                    ? ""
                    : "none";

        });


        if (reviewsPrev) {

            reviewsPrev.disabled =
                paginaAtual === 0;

        }


        if (reviewsNext) {

            reviewsNext.disabled =
                paginaAtual >=
                totalPaginas - 1;

        }

    }


    if (reviewsPrev) {

        reviewsPrev.addEventListener(
            "click",
            () => {

                if (paginaAtual <= 0) {
                    return;
                }


                paginaAtual--;


                atualizarPaginaAvaliacoes();

            }
        );

    }


    if (reviewsNext) {

        reviewsNext.addEventListener(
            "click",
            () => {

                const cards =
                    reviewsContainer.querySelectorAll(
                        ".review-card"
                    );


                const totalPaginas =
                    Math.ceil(
                        cards.length /
                        CARDS_POR_PAGINA
                    );


                if (
                    paginaAtual >=
                    totalPaginas - 1
                ) {
                    return;
                }


                paginaAtual++;


                atualizarPaginaAvaliacoes();

            }
        );

    }


    atualizarPaginaAvaliacoes();

const botaoAvaliacao =
    document.getElementById("botaoAvaliacao");

if (botaoAvaliacao) {

    botaoAvaliacao.addEventListener("click", () => {

        const caminhoLocal =
            botaoAvaliacao.dataset.local;

        if (
            window.location.protocol === "file:" ||
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1"
        ) {

            window.top.location.href =
                caminhoLocal;

        } else {

            window.top.location.href =
                "/Avaliações/";

        }

    });

}

    /* ---------------------------------------------------------
       10. LIGHTBOX DAS AVALIAÇÕES
       --------------------------------------------------------- */

    const lightboxAvaliacao =
        document.getElementById("lightboxAvaliacao");

    const lightboxAvaliacaoImg =
        document.getElementById("lightboxAvaliacaoImg");

    const fecharLightboxAvaliacao =
        document.getElementById("fecharLightboxAvaliacao");


    function abrirLightboxAvaliacao(url, alt = "") {

        if (
            !lightboxAvaliacao ||
            !lightboxAvaliacaoImg
        ) {
            return;
        }

        lightboxAvaliacaoImg.src = url;
        lightboxAvaliacaoImg.alt = alt;

        lightboxAvaliacao.classList.add("ativo");

        document.body.style.overflow = "hidden";
    }


    function fecharLightbox() {

        if (!lightboxAvaliacao) {
            return;
        }

        lightboxAvaliacao.classList.remove("ativo");

        if (lightboxAvaliacaoImg) {
            lightboxAvaliacaoImg.src = "";
        }

        document.body.style.overflow = "";
    }


    document.addEventListener("click", event => {

        const link =
            event.target.closest(".review-image-link");

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

    });


    if (fecharLightboxAvaliacao) {

        fecharLightboxAvaliacao.addEventListener(
            "click",
            fecharLightbox
        );

    }


    if (lightboxAvaliacao) {

        lightboxAvaliacao.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightboxAvaliacao
                ) {
                    fecharLightbox();
                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                fecharLightbox();
            }

        }
    );

});