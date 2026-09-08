/* =========================================================
   LIVRO INTERATIVO — MOTOR DE NAVEGAÇÃO
   ========================================================= */

"use strict";

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
          <img src="Img/Produto 1.png" alt="" class="page-image">
        </div>
      `
    },
    right: {
      number: "02",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 106</div>
          <h2 class="page-title">Prateleira Flutuante Plantas Objetos<br>Madeira Maciça 60x60x14</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira Flutuante, um design elegante e funcional que agrega charme e beleza a qualquer ambiente.<br>
Com dimensões de 60 cm de comprimento, 60 cm de altura e 14 cm de profundidade, este modelo é ideal para exibir suas plantas, livros ou objetos decorativos com sofisticação.<br>
Feita em madeira de pinus, a Floreira Flutuante oferece durabilidade e um toque natural, perfeita para quem valoriza a estética e a qualidade nos detalhes.<br>
Seu estilo flutuante permite uma instalação simples, sem a necessidade de montagem complexa, facilitando a decoração do seu lar.<br>
Aposte na versatilidade desta prateleira que harmoniza com diversos estilos de decoração, desde o contemporâneo até o rústico.<br>
Ideal para salas, escritórios ou ambientes externos, a Floreira Flutuante traz leveza e modernidade para sua casa, realçando sua personalidade e criatividade.<br>
Prateleira flutuante para flores, livros e objetos pessoais.<br>
Medidas:<br>
Altura : 60 cm<br>
Largura: 60 cm<br>
Profundidade: 14 cm<br>
Entre andares fica com 17 cm.<br>
PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>
      `
    }
  },
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

render();
