/* =========================================================
   DADOS GLOBAIS (usados em vários lugares)
   ========================================================= */
const Produtos = [
    "Branco",
    "Camurça",
    "Envelhecido",
    "Cerejeira Claro",
    "Cerejeira Escuro",
    "Cinza Claro",
    "Cinza Escuro",
    "Imbuia",
    "Mogno",
    "Cru ou Natural",
    "Por do Sôl",
    "Preto",
    "Caramelo",
    "Pastel",
    "Rosê",
    "Safari"
];

const Preco = "Preço:";

// Valores de exemplo (ajuste depois com os preços reais)
const Valor = [
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99",
//    "R$ 0,99"
];

const ImagensNicho = [
    "Img/Produtos/Churrasqueira/Branco.png",  // Branco
    "Img/Produtos/Churrasqueira/Camurça.png",  // Camurça
    "Img/Produtos/Churrasqueira/Envelhecido.png",  // Envelhecido
    "Img/Produtos/Churrasqueira/Cerejeira Claro.png",  // Cerejeira Claro
    "Img/Produtos/Churrasqueira/Cerejeira Escuro.png",  // Cerejeira Escuro
    "Img/Produtos/Churrasqueira/Cinza Claro.png",  // Cinza Claro
    "Img/Produtos/Churrasqueira/Cinza Escuro.png",  // Cinza Escuro
    "Img/Produtos/Churrasqueira/Imbuia.png",  // Imbuia
    "Img/Produtos/Churrasqueira/Mogno.png",  // Mogno
    "Img/Produtos/Churrasqueira/Cru.png", // Cru ou Natural
    "Img/Produtos/Churrasqueira/Por do Sôl.png", // Por do Sôl
    "Img/Produtos/Churrasqueira/Preto.png", // Preto
    "Img/Produtos/Churrasqueira/Caramelo.png", // Caramelo
    "Img/Produtos/Churrasqueira/Pastel.png", // Pastel
    "Img/Produtos/Churrasqueira/Rosê.png", // Rosê
    "Img/Produtos/Churrasqueira/Safari.png"  // Safari
];

// Link base do WhatsApp (o ${Produtos} será substituído)
const WhatsLinkBase = "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20Nicho:%20";

/* =========================================================
   ÍNDICE ALEATÓRIO DO PRODUTO (usado em vários lugares)
   ========================================================= */
let indiceAtual = Math.floor(Math.random() * Produtos.length);

/* =========================================================
   ATUALIZA NOME, PREÇO E LINK DO BOTÃO
   ========================================================= */
function atualizarProduto() {
    const nomeEl = document.getElementById("nomeProduto");
    const textoPrecoEl = document.getElementById("textoPreco");
    const valorPrecoEl = document.getElementById("valorPreco");
    const botaoComprar = document.getElementById("botaoComprar");
    const imagemNicho = document.getElementById("imagemNicho");
    
    if (nomeEl) nomeEl.textContent = `Nicho ${Produtos[indiceAtual]}`;
    if (textoPrecoEl) textoPrecoEl.textContent = Preco;
    if (valorPrecoEl) valorPrecoEl.textContent = Valor[indiceAtual] || "";
    if (botaoComprar) {
        const produtoEncoded = encodeURIComponent(Produtos[indiceAtual]);
        botaoComprar.href = WhatsLinkBase + produtoEncoded;
        }
    if (imagemNicho) {
    imagemNicho.src = ImagensNicho[indiceAtual];
        }
    aplicarFundoAleatorio();
}

/* =========================================================
   FUNDO ALEATÓRIO DO NICHO (imagens da pasta img/fundos/)
   ========================================================= */
const fundosNicho = [
    "Img/Produtos/Fundo/Branco.png",  // Branco
    "Img/Produtos/Fundo/Camurça.png",  // Camurça
    "Img/Produtos/Fundo/Envelhecido.png",  // Envelhecido
    "Img/Produtos/Fundo/Cerejeira Claro.png",  // Cerejeira Claro
    "Img/Produtos/Fundo/Cerejeira Escuro.png",  // Cerejeira Escuro
    "Img/Produtos/Fundo/Cinza Claro.png",  // Cinza Claro
    "Img/Produtos/Fundo/Cinza Escuro.png",  // Cinza Escuro
    "Img/Produtos/Fundo/Imbuia.png",  // Imbuia
    "Img/Produtos/Fundo/Mogno.png",  // Mogno
    "Img/Produtos/Fundo/Cru.png", // Cru ou Natural
    "Img/Produtos/Fundo/Por do Sôl.png", // Por do Sôl
    "Img/Produtos/Fundo/Preto.png", // Preto
    "Img/Produtos/Fundo/Caramelo.png", // Caramelo
    "Img/Produtos/Fundo/Pastel.png", // Pastel
    "Img/Produtos/Fundo/Rosê.png", // Rosê
    "Img/Produtos/Fundo/Safari.png"  // Safari
];

function aplicarFundoAleatorio() {
    const fundoEl = document.getElementById("fundoNicho");
    if (!fundoEl || fundosNicho.length === 0) return;

    const indice = Math.floor(Math.random() * fundosNicho.length);
    fundoEl.style.backgroundImage = `url('${fundosNicho[indiceAtual]}')`;
}

/* =========================================================
   GALERIA
   ========================================================= */
const fotosGaleria = [
    "Img/Produtos/Fundo/Branco.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png",
    "Img/Produtos/Fundo/.png"
    
];

// Fallback caso as imagens não existam ainda
function criarPlaceholder(src) {
    // Retorna o src mesmo; o onerror do img cuida do fallback visual
    return src;
}

function inicializarGaleria() {
    const grid = document.getElementById("galeriaGrid");
    if (!grid) return;

    // Cria 6 slots
    for (let i = 0; i < 6; i++) {
        const item = document.createElement("div");
        item.className = "galeria-item";
        item.dataset.index = i;

        const img = document.createElement("img");
        const fotoInicial = fotosGaleria[i % fotosGaleria.length];
        img.src = criarPlaceholder(fotoInicial);
        img.alt = `Foto ${i + 1}`;
        img.loading = "lazy";

        // Fallback visual se a imagem não carregar
        img.onerror = function () {
            this.style.background = "linear-gradient(135deg, #d4c4b0, #b8a48e)";
            this.style.minHeight = "180px";
            this.alt = "Imagem em breve";
        };

        item.appendChild(img);
        grid.appendChild(item);

        // Clique abre lightbox
        item.addEventListener("click", () => abrirLightbox(img.src));
    }

    // A cada 5 segundos troca uma foto aleatória
    setInterval(trocarFotoAleatoria, 5000);
}

function trocarFotoAleatoria() {
    const itens = document.querySelectorAll(".galeria-item img");
    if (itens.length === 0 || fotosGaleria.length === 0) return;

    const slot = Math.floor(Math.random() * itens.length);
    const novaFoto = fotosGaleria[Math.floor(Math.random() * fotosGaleria.length)];

    const img = itens[slot];
    img.style.opacity = "0";

    setTimeout(() => {
        img.src = novaFoto;
        img.style.opacity = "1";
    }, 400);
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
    atualizarProduto();
    aplicarFundoAleatorio();
    inicializarGaleria();

    const nichoAnterior = document.getElementById("nichoAnterior");
const nichoProximo = document.getElementById("nichoProximo");

if (nichoAnterior) {
    nichoAnterior.addEventListener("click", () => {
        indiceAtual--;

        if (indiceAtual < 0) {
            indiceAtual = Produtos.length - 1;
        }

        atualizarProduto();
    });
}

if (nichoProximo) {
    nichoProximo.addEventListener("click", () => {
        indiceAtual++;

        if (indiceAtual >= Produtos.length) {
            indiceAtual = 0;
        }

        atualizarProduto();
    });
}

    // Botão da galeria (por enquanto não faz nada)
    const botaoGaleria = document.getElementById("botaoGaleria");
    if (botaoGaleria) {
        botaoGaleria.addEventListener("click", (e) => {
            e.preventDefault();
            // Por enquanto não faz nada
        });
    }

    // Fechar lightbox
    const btnFechar = document.getElementById("lightboxFechar");
    const lightbox = document.getElementById("lightbox");

    if (btnFechar) {
        btnFechar.addEventListener("click", fecharLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) fecharLightbox();
        });
    }

    // ESC fecha lightbox
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") fecharLightbox();
    });
});
