/* =========================================================
   DADOS DA GALERIA
   ========================================================= */

const quantidadeFotos = {
    "Branco": 23,
    "Camurça": 4,
    "Envelhecido": 10,
    "Cerejeira Claro": 23,
    "Cerejeira Escuro": 10,
    "Cinza Claro": 11,
    "Cinza Escuro": 3,
    "Imbuia": 41,
    "Mogno": 0,
    "Cru ou Natural": 7,
    "Por do Sôl": 8,
    "Preto": 34,
    "Caramelo": 7,
    "Pastel": 30,
    "Rosê": 6,
    "Safari": 5
};

let todasAsFotos = [];

for (const [cor, quantidade] of Object.entries(quantidadeFotos)) {
    for (let i = 1; i <= quantidade; i++) {
        todasAsFotos.push({
            cor: cor,
            src: `../../Img/Produtos/Galeria/${cor}/ (${i}).png`
        });
    }
}

/* =========================================================
   GALERIA
   ========================================================= */

function mostrarGaleria(cor = "todos") {
    const grid = document.getElementById("galeriaGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const fotos = cor === "todos"
        ? todasAsFotos
        : todasAsFotos.filter(foto => foto.cor === cor);

    fotos.forEach((foto, index) => {
        const item = document.createElement("div");
        item.className = "galeria-item";

        const img = document.createElement("img");

        img.src = foto.src;
        img.alt = `${foto.cor} - Foto ${index + 1}`;
        img.loading = "lazy";

        img.onerror = function () {
            item.style.display = "none";
        };

        item.appendChild(img);
        grid.appendChild(item);

        item.addEventListener("click", () => {
            abrirLightbox(foto.src);
        });
    });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

function abrirLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    if (!lightbox || !img) return;

    img.src = src;
    lightbox.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.classList.remove("ativo");
    document.body.style.overflow = "";
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    mostrarGaleria();

    /* =====================================================
       FILTROS
       ===================================================== */

    document.querySelectorAll(".filtros button").forEach(botao => {

        botao.addEventListener("click", () => {

            mostrarGaleria(botao.dataset.cor);

            window.location.hash = botao.dataset.cor;

        });

    });

    /* =====================================================
       BOTÃO VOLTAR
       ===================================================== */

    const botaoVoltar = document.querySelector(".voltar");

    if (botaoVoltar) {

        botaoVoltar.addEventListener("click", (event) => {

            event.preventDefault();

            const caminhoLocal = botaoVoltar.dataset.local;
            const caminhoOnline = botaoVoltar.getAttribute("href");

            if (
                window.location.protocol === "file:" ||
                window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1"
            ) {

                window.location.href = caminhoLocal;

            } else {

                window.location.href = caminhoOnline;

            }

        });

    }

    /* =====================================================
       FECHAR LIGHTBOX PELO BOTÃO
       ===================================================== */

    const botaoFechar = document.getElementById("lightboxFechar");

    if (botaoFechar) {
        botaoFechar.addEventListener("click", fecharLightbox);
    }

    /* =====================================================
       FECHAR LIGHTBOX CLICANDO FORA
       ===================================================== */

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {
                fecharLightbox();
            }

        });

    }

    /* =====================================================
       FECHAR LIGHTBOX COM ESC
       ===================================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            fecharLightbox();
        }

    });

});