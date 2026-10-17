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
    [numeroSku[1]]: 9,
    [numeroSku[2]]: 11,
    [numeroSku[3]]: 11,
    [numeroSku[4]]: 11,
    [numeroSku[5]]: 10, //33
    [numeroSku[6]]: 9,
    [numeroSku[7]]: 9,
    [numeroSku[8]]: 10,
    [numeroSku[9]]: 7,
    [numeroSku[10]]: 9,
    [numeroSku[11]]: 1,
    [numeroSku[12]]: 9,
    [numeroSku[13]]: 2,
    [numeroSku[14]]: 10,
    [numeroSku[15]]: 2,
    [numeroSku[16]]: 11,
    [numeroSku[17]]: 2,
    [numeroSku[18]]: 2,
    [numeroSku[19]]: 2,
    [numeroSku[20]]: 6,
    [numeroSku[21]]: 9,
    [numeroSku[22]]: 2,
    [numeroSku[23]]: 2,
    [numeroSku[24]]: 7,
    [numeroSku[25]]: 9,
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

function iniciarComparador(galeria) {

    const comparador = document.createElement("div");
    comparador.className = "comparador-produto";

    comparador.innerHTML = `
        <img class="comparador-antes"
             src="Img/Produtos/104/03.png"
             alt="">

        <div class="comparador-depois">
            <img src="Img/Produtos/104/02.png" alt="">
        </div>

        <div class="comparador-barra">
            <div class="comparador-botao">↔</div>
        </div>
    `;
galeria.appendChild(comparador);

    const depois = comparador.querySelector(".comparador-depois");
    const barra = comparador.querySelector(".comparador-barra");

    let arrastando = false;

    function mover(x) {
        const rect = comparador.getBoundingClientRect();

        let porcentagem =
            ((x - rect.left) / rect.width) * 100;

        porcentagem = Math.max(0, Math.min(100, porcentagem));

        depois.style.width = `${porcentagem}%`;
        barra.style.left = `${porcentagem}%`;
    }

    barra.addEventListener("mousedown", () => {
        arrastando = true;
    });

    document.addEventListener("mousemove", event => {
        if (arrastando) mover(event.clientX);
    });

    document.addEventListener("mouseup", () => {
        arrastando = false;
    });
}

function iniciarGaleria() {
  const galerias = document.querySelectorAll(".galeria-produto");

  galerias.forEach(galeria => {
const indice = Number(galeria.dataset.indice);
const nomePasta = numeroSku[indice];
    const imagem = galeria.querySelector(".galeria-imagem");
    let mascara = galeria.querySelector(".galeria-mascara");

if (!mascara) {
  mascara = document.createElement("img");
  mascara.src = "Img/Livro/MascaraEsquerda.png";
  mascara.alt = "";
  mascara.className = "galeria-mascara";
  galeria.appendChild(mascara);
}
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

      if (galeria.dataset.indice === "18" && indiceAtual === 1) {
    imagem.style.display = "none";

    if (!galeria.querySelector(".comparador-produto")) {
        iniciarComparador(galeria);
    }
} else {
    imagem.style.display = "";
    
    const comparadorExistente = galeria.querySelector(".comparador-produto");

    if (comparadorExistente) {
        comparadorExistente.remove();
    }

    imagem.src = imagens[indiceAtual];
}
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

document.querySelectorAll(".marca-tab-2, .marca-tab-3").forEach(botao => {
    botao.addEventListener("click", () => {
        currentPage = Number(botao.dataset.pagina);
        render();
    });
});
    render();