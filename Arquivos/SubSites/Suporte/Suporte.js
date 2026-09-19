/* =========================================================
   LIVRO INTERATIVO — MOTOR DE NAVEGAÇÃO
   ========================================================= */

"use strict";

const numeroSku = [0,108,76,8,25,33,75,7,15,12,63,53,61,66,38,79,65,84,104,201,2,106,109,111,5,26];

const skusIndice1 = [
    108, 76, 8, 25, 33, 75, 7, 15, 12, 63,
    53, 61, 66, 38, 79, 65, 84, 104, 201, 2
];

const skusIndice2 = [
    106, 109, 111, 5, 26
];

const imagensPorProduto = { //por enquanto vou deixar todos com 1 pq, as imagens tão bem merda, eu acho que pelo menos 5 de cada um seria bem legal, fazer umas 10 fotos e pegar as mais bonitas, seria uma boa ideia
    [numeroSku[1]]: 1,
    [numeroSku[2]]: 1,
    [numeroSku[3]]: 1,
    [numeroSku[4]]: 1,
    [numeroSku[5]]: 1,
    [numeroSku[6]]: 1,
    [numeroSku[7]]: 1,
    [numeroSku[8]]: 1,
    [numeroSku[9]]: 1,
    [numeroSku[10]]: 1,
    [numeroSku[11]]: 1,
    [numeroSku[12]]: 1,
    [numeroSku[13]]: 1,
    [numeroSku[14]]: 1,
    [numeroSku[15]]: 1,
    [numeroSku[16]]: 1,
    [numeroSku[17]]: 1,
    [numeroSku[18]]: 1,
    [numeroSku[19]]: 1,
    [numeroSku[20]]: 1,
    [numeroSku[21]]: 1,
    [numeroSku[22]]: 1,
    [numeroSku[23]]: 1,
    [numeroSku[24]]: 1,
    [numeroSku[25]]: 1,
};

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

    const skus = currentPage === 1 ? skusIndice1 : skusIndice2;
    const paginaInicial = currentPage === 1 ? 2 : 23;

    skus.forEach((sku, indice) => {

        const numeroIndice = String(indice + 1).padStart(2, "0");
        const pagina = paginaInicial + indice;

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