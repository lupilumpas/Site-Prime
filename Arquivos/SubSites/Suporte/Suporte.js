/* =========================================================
   LIVRO INTERATIVO — MOTOR DE NAVEGAÇÃO
   ========================================================= */

"use strict";

const numeroSku = [106, 0, 0, 0, 0];

const imagensPorProduto = {
    [numeroSku[0]]: 6,
    [numeroSku[1]]: 6,
    [numeroSku[2]]: 6
};

const precoP10 = "Preço:";
const WhatsDescricao = "Olá! Vim pela página JDM Madeiras e gostaria de solicitar um orçamento para";

const pages = [
  {
    type: "cover",
    title: "Capa"
  },
  {
    type: "spread",
    left: {
      number: "01",
      html: `
    <div class="content-enter">
    <div class="IndicePagina2">

        <h1>ÍNDICE</h1>

        <div id="listaIndice"></div>

    </div>
</div>
      `
    },
    right: {
      number: "02",
      html: `
    <div class="content-enter">
      <div class="Indice">

        <img class="indice-imagem" src="Img/Img/Foto 1.png" alt="">
                <img class="indice-imagem2" src="Img/Img/Foto 2.png" alt="">

                  <p class="indice-text">Suportes de Chao</p>
                  <p2 class="indice-text">~</p2>
                  <p1 class="indice-text">Suportes em madeira <br>para plantas e objetos.</p1>

        <div class="galeria-contador"></div>
      </div>
    </div>
      `
    }
  },
    /*  Daqui ate proximo (/*), a parte do livro que eu posso copiar e colar, pra criar um novo produto*/
    {
    type: "spread",
    left: {
      number: "03",
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="0">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
    },
    right: {
      number: "04",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 106</div>
          <h2 class="page-title">Prateleira Flutuante <br>Plantas Objetos Madeira Maciça</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 60 cm:<br>
Largura:60 cm<br>
Profundidade: 14cm<br>
Entre andares fica com 17cm.<br>
PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL. Acessar site

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 299,99</p10>    

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Prateleira Flutuante Plantas Objetos Madeira Maciça', '_blank')">
    Comprar
</button>
      `
    }
  },
  /*  Até aqui, a parte do livro que eu posso copiar e colar, pra criar um novo produto*/
  {
    type: "end",
    title: "Contracapa"
  }
];


const book = document.getElementById("book");
const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");
const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const toast = document.getElementById("toast");
const stage = document.getElementById("stage");

let currentPage = 0;
let toastTimer = null;

const totalPages = pages.length;

function setPageContent(element, html) {
  element.innerHTML = html || "";
}

function iniciarGaleria() {
  const galerias = document.querySelectorAll(".galeria-produto");

  galerias.forEach(galeria => {
const indice = Number(galeria.dataset.indice);
const nomePasta = numeroSku[indice];
    const imagem = galeria.querySelector(".galeria-imagem");
    const anterior = galeria.querySelector(".galeria-anterior");
    const proxima = galeria.querySelector(".galeria-proxima");
    const contador = galeria.querySelector(".galeria-contador");

    const quantidade = imagensPorProduto[nomePasta] || 0;
    const imagens = [];

    for (let i = 1; i <= quantidade; i++) {
      const caminho = `Img/Produtos/${nomePasta}/${String(i).padStart(2, "0")}.png`;
      imagens.push(caminho);
    }

    let indiceAtual = 0;

    function atualizarGaleria() {
      if (imagens.length === 0) return;

      imagem.src = imagens[indiceAtual];
      contador.textContent = `${indiceAtual + 1} / ${imagens.length}`;

      anterior.disabled = indiceAtual === 0;
      proxima.disabled = indiceAtual === imagens.length - 1;
    }

    anterior.addEventListener("click", () => {
      if (indiceAtual <= 0) return;

      indiceAtual--;
      atualizarGaleria();
    });

    proxima.addEventListener("click", () => {
      if (indiceAtual >= imagens.length - 1) return;

      indiceAtual++;
      atualizarGaleria();
    });

    atualizarGaleria();
  });
}

function gerarIndice() {
    const lista = document.getElementById("listaIndice");
    if (!lista) return;

    lista.innerHTML = "";

    numeroSku.forEach((sku, indice) => {

        const numeroIndice = String(indice + 1).padStart(2, "0");
        const pagina = indice + 2;

        const item = document.createElement("a");

        item.href = "#";
        item.className = "indice-item";
        item.dataset.pagina = pagina;

        item.innerHTML = `
            <span>${numeroIndice} -- Sku${sku}</span>
            <span class="indice-linha"></span>
            <span>${pages[pagina]?.left?.number || ""} e ${pages[pagina]?.right?.number || ""}</span>
        `;

        lista.appendChild(item);
    });
}

function updateContent() {
  const current = pages[currentPage];

  if (current.type === "cover") {
    setPageContent(leftContent, "");
    setPageContent(rightContent, "");
    leftNumber.textContent = "";
    rightNumber.textContent = "";
  } else if (current.type === "end") {
    setPageContent(leftContent, "");
    setPageContent(rightContent, "");
    leftNumber.textContent = "";
    rightNumber.textContent = "";
  } else {
    setPageContent(leftContent, current.left.html);
    setPageContent(rightContent, current.right.html);
    leftNumber.textContent = current.left.number;
    rightNumber.textContent = current.right.number;
        iniciarGaleria();
        gerarIndice();
  }
}

function updateLabels() {
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === totalPages - 1;
}

function updateCoverState() {
  book.classList.remove("book-cover-only");
  book.classList.remove("book-open");
  book.classList.remove("book-end");

  document.body.classList.remove(
    "state-cover",
    "state-open",
    "state-end"
  );

  if (currentPage === 0) {
    book.classList.add("book-cover-only");
    document.body.classList.add("state-cover");
    return;
  }

  if (pages[currentPage].type === "end") {
    book.classList.add("book-end");
    document.body.classList.add("state-end");
    return;
  }

  book.classList.add("book-open");
  document.body.classList.add("state-open");
}

function render() {
  updateContent();
  updateLabels();
  updateCoverState();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
}

function nextPage() {
  currentPage++;
  render();
}

function previousPage() {
  currentPage--;
  render();
}

function restart() {
  currentPage = 0;
  render();
}

function handleKeyboard(event) {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    nextPage();
    return;
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    previousPage();
    return;
  }

  if (event.key === "Home") {
    event.preventDefault();
    restart();
    return;
  }
}

function handleTouchStart(event) {
  if (!event.touches || event.touches.length === 0) return;
  window.__bookTouchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  if (typeof window.__bookTouchStartX !== "number") return;

  const endX = event.changedTouches[0].clientX;
  const delta = endX - window.__bookTouchStartX;
  window.__bookTouchStartX = null;

  if (Math.abs(delta) < 45) return;

  if (delta < 0) {
    nextPage();
  } else {
    previousPage();
  }
}

prevButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
document.addEventListener("keydown", handleKeyboard);
stage.addEventListener("touchstart", handleTouchStart, { passive: true });
stage.addEventListener("touchend", handleTouchEnd, { passive: true });

document.addEventListener("click", (event) => {

    const item = event.target.closest(".IndicePagina2 .indice-item");

    if (!item) return;

    event.preventDefault();

    const pagina = Number(item.dataset.pagina);

    if (pagina < 0 || pagina >= totalPages) return;

    currentPage = pagina;
    render();
});

document.querySelectorAll(".marca-tab-1, .marca-tab-2, .marca-tab-3").forEach(botao => {
    botao.addEventListener("click", () => {
        currentPage = Number(botao.dataset.pagina);
        render();
    });
});
    render();