/* =========================================================
   DADOS DA GALERIA
   ========================================================= */

const quantidadeFotos = {
    "Branco": 26,
    "Camurça": 4,
    "Envelhecido": 10,
    "Cerejeira Claro": 26,
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

    img.src = src;
    lightbox.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharLightbox() {
    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("ativo");
    document.body.style.overflow = "";
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    mostrarGaleria();

    document.querySelectorAll(".filtros button").forEach(botao => {
        botao.addEventListener("click", () => {
            mostrarGaleria(botao.dataset.cor);
        window.location.hash = botao.dataset.cor;
        });
    });

    document.getElementById("lightboxFechar")
        .addEventListener("click", fecharLightbox);

    document.getElementById("lightbox")
        .addEventListener("click", (e) => {
            if (e.target.id === "lightbox") {
                fecharLightbox();
            }
        });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fecharLightbox();
        }
    });
});
