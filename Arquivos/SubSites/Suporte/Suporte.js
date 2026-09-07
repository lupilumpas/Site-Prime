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
          <div class="chapter-kicker">Sku </div>
          <h2 class="page-title">Feito para<br><em>ser explorado</em></h2>
          <div class="page-rule"></div>
          <p class="page-text">
            Um livro físico possui duas páginas abertas diante dos olhos.
            Nesta versão digital, essa mesma ideia ganha movimento:
            a capa pode ser aberta, as páginas podem ser viradas e o
            conteúdo muda conforme você avança.
          </p>
          <div class="fact-grid">
            <div class="fact">
              <strong>05</strong>
              <span>Páginas planejadas nesta primeira versão.</span>
            </div>
            <div class="fact">
              <strong>02</strong>
              <span>Folhas visíveis em cada abertura.</span>
            </div>
            <div class="fact">
              <strong>∞</strong>
              <span>Possibilidades para novas histórias.</span>
            </div>
            <div class="fact">
              <strong>01</strong>
              <span>Livro feito para você explorar.</span>
            </div>
          </div>
          <div class="page-ornament">— ✦ —</div>
          <p class="page-text">
            E esta é apenas a primeira edição.
          </p>
        </div>
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
