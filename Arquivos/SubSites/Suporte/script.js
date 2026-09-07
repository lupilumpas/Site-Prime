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
    title: "O começo",
    left: {
      number: "01",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Capítulo I</div>
          <h2 class="page-title">O começo de uma<br><em>pequena jornada</em></h2>
          <div class="page-rule"></div>
          <p class="page-text dropcap">
            Existem histórias que começam com um acontecimento grandioso.
            Outras começam quase em silêncio, em uma página aparentemente
            comum, esperando que alguém tenha curiosidade suficiente para
            descobrir o que existe depois dela.
          </p>
          <p class="page-text">
            Este livro foi pensado exatamente assim: como uma experiência
            simples de explorar, observar e virar páginas. Cada detalhe
            foi colocado para lembrar a sensação de segurar um livro de
            verdade entre as mãos.
          </p>
          <div class="quote">
            “Toda página é uma porta. Basta ter coragem de abri-la.”
          </div>
          <p class="page-text">
            Não existe pressa aqui. Leia no seu ritmo, observe os detalhes
            e deixe que a próxima página revele o restante.
          </p>
        </div>
      `
    },
    right: {
      number: "02",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Uma ideia</div>
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
    type: "spread",
    title: "A jornada",
    left: {
      number: "03",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Capítulo II</div>
          <h2 class="page-title">Uma página<br><em>de cada vez</em></h2>
          <div class="page-rule"></div>
          <p class="page-text dropcap">
            Virar uma página parece um gesto pequeno, mas ele carrega uma
            promessa: existe alguma coisa que ainda não foi vista.
            É justamente essa sensação que torna os livros tão especiais.
          </p>
          <p class="page-text">
            A cada movimento, uma nova composição aparece. O texto muda,
            a iluminação muda e a história ganha espaço para continuar.
          </p>
          <div class="note">
            <strong>Nota do leitor</strong><br>
            Você pode usar as setas do teclado, os botões inferiores ou
            clicar diretamente nas laterais do livro.
          </div>
          <div class="page-ornament">❧</div>
          <p class="page-text">
            Quando estiver pronto, continue. Ainda há algumas páginas
            esperando por você.
          </p>
        </div>
      `
    },
    right: {
      number: "04",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">O caminho</div>
          <h2 class="page-title">Pequenos<br><em>momentos</em></h2>
          <div class="page-rule"></div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">Primeiro</div>
              <h3 class="timeline-title">Abrir</h3>
              <p class="timeline-text">A capa deixa de esconder o que existe dentro.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Depois</div>
              <h3 class="timeline-title">Descobrir</h3>
              <p class="timeline-text">Cada página apresenta uma nova parte da experiência.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Então</div>
              <h3 class="timeline-title">Continuar</h3>
              <p class="timeline-text">O livro se transforma conforme você avança.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Por fim</div>
              <h3 class="timeline-title">Recomeçar</h3>
              <p class="timeline-text">Toda boa história pode ser lida novamente.</p>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    type: "spread",
    title: "O detalhe",
    left: {
      number: "05",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Capítulo III</div>
          <h2 class="page-title">O valor<br><em>dos detalhes</em></h2>
          <div class="page-rule"></div>
          <p class="page-text dropcap">
            Um livro não é feito apenas de palavras. A textura do papel,
            a sombra entre duas folhas, a pequena numeração no rodapé e
            até o espaço vazio fazem parte da experiência.
          </p>
          <p class="page-text">
            Por isso, esta interface tenta reproduzir essas pequenas
            imperfeições de forma digital. O papel tem textura, as folhas
            possuem profundidade e a capa tem uma moldura própria.
          </p>
          <div class="quote">
            O detalhe não precisa chamar atenção para fazer diferença.
          </div>
          <p class="page-text">
            Observe as bordas, as sombras e a separação no centro.
            São pequenas coisas, mas juntas fazem o objeto parecer muito
            mais próximo de um livro real.
          </p>
        </div>
      `
    },
    right: {
      number: "06",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Construção</div>
          <h2 class="page-title">Por trás<br><em>das páginas</em></h2>
          <div class="page-rule"></div>
          <p class="page-text">
            Esta experiência usa apenas três arquivos: HTML para a
            estrutura, CSS para toda a aparência e JavaScript para o
            comportamento das páginas.
          </p>
          <div class="note">
            <strong>Estrutura</strong><br>
            O livro é dividido em capa, contracapa, folhas e conteúdo.
            O JavaScript controla qual abertura está ativa e atualiza
            a interface sem precisar recarregar a página.
          </div>
          <div class="page-ornament">✦</div>
          <p class="page-text">
            Isso também deixa o projeto fácil de expandir. Novos capítulos,
            imagens, ilustrações, botões e até efeitos sonoros podem ser
            adicionados depois.
          </p>
        </div>
      `
    }
  },
  {
    type: "spread",
    title: "Última página",
    left: {
      number: "07",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Epílogo</div>
          <h2 class="page-title">Toda história<br><em>tem um fim</em></h2>
          <div class="page-rule"></div>
          <p class="page-text dropcap">
            Chegamos à última abertura deste pequeno volume. O que
            começou como uma capa fechada agora termina com todas as
            páginas percorridas.
          </p>
          <p class="page-text">
            Mas terminar não significa necessariamente encerrar.
            Um livro pode ser fechado hoje e aberto novamente amanhã,
            exatamente no mesmo lugar, esperando para contar tudo outra
            vez.
          </p>
          <div class="quote">
            E talvez essa seja a melhor parte: poder começar novamente.
          </div>
          <p class="page-text">
            Obrigado por chegar até aqui.
          </p>
        </div>
      `
    },
    right: {
      number: "08",
      html: `
        <div class="content-enter final-mark">
          <div class="symbol">✦</div>
          <h2>Fim.</h2>
          <p>Feche o livro quando quiser.<br>Ou comece tudo novamente.</p>
          <div class="page-ornament">— ❧ —</div>
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
const frontCover = document.getElementById("frontCover");
const backCover = document.getElementById("backCover");
const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");
const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageIndicator = document.getElementById("pageIndicator");
const progressText = document.getElementById("progressText");
const progressCount = document.getElementById("progressCount");
const progressBar = document.getElementById("progressBar");
const toast = document.getElementById("toast");
const restartButton = document.getElementById("restartButton");
const stage = document.getElementById("stage");

let currentPage = 0;
let isAnimating = false;
let toastTimer = null;

const totalPages = pages.length;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCurrentSpread() {
  if (currentPage <= 0) return null;
  if (currentPage >= totalPages - 1) return null;
  return pages[currentPage];
}

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
  const current = pages[currentPage];
  pageIndicator.textContent = current.title;
  progressText.textContent = current.title;
  progressCount.textContent = `${currentPage + 1} / ${totalPages}`;

  const percent = ((currentPage + 1) / totalPages) * 100;
  progressBar.style.width = `${percent}%`;

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === totalPages - 1;
}

function updateCoverState() {
  if (currentPage === 0) {
    frontCover.style.transform = "rotateY(0deg)";
    frontCover.style.boxShadow = "0 18px 38px rgba(0, 0, 0, .42)";
    book.classList.remove("book-open");
    return;
  }

  if (currentPage === totalPages - 1) {
    frontCover.style.transform = "rotateY(-180deg)";
    frontCover.style.boxShadow = "none";
    book.classList.add("book-open");
    return;
  }

  frontCover.style.transform = "rotateY(-180deg)";
  frontCover.style.boxShadow = "none";
  book.classList.add("book-open");
}

function render(immediate = false) {
  if (immediate) {
    updateContent();
    updateLabels();
    updateCoverState();
    return;
  }

  updateContent();
  updateLabels();
  updateCoverState();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function animateNavigation(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const oldPage = currentPage;
  currentPage = clamp(currentPage + direction, 0, totalPages - 1);

  if (currentPage === oldPage) {
    isAnimating = false;
    return;
  }

  const duration = 950;

  if (direction > 0) {
    if (oldPage === 0) {
      frontCover.style.transitionDuration = "950ms";
      frontCover.style.transform = "rotateY(-180deg)";
      book.classList.add("book-open");
    }
  } else {
    if (currentPage === 0) {
      frontCover.style.transitionDuration = "950ms";
      frontCover.style.transform = "rotateY(0deg)";
      book.classList.remove("book-open");
    }
  }

  setTimeout(() => {
    render();
    isAnimating = false;
  }, duration);
}

function nextPage() {
  if (currentPage >= totalPages - 1) {
    showToast("Você já chegou ao final.");
    return;
  }

  animateNavigation(1);
}

function previousPage() {
  if (currentPage <= 0) {
    showToast("Você já está na capa.");
    return;
  }

  animateNavigation(-1);
}

function restart() {
  if (isAnimating) return;

  if (currentPage === 0) {
    showToast("O livro já está na capa.");
    return;
  }

  isAnimating = true;
  currentPage = 0;
  frontCover.style.transitionDuration = "950ms";
  frontCover.style.transform = "rotateY(0deg)";
  book.classList.remove("book-open");

  setTimeout(() => {
    render();
    isAnimating = false;
  }, 950);
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

  if (event.key === "End") {
    event.preventDefault();

    if (!isAnimating) {
      currentPage = totalPages - 1;
      render();
    }
  }
}

function handleBookClick(event) {
  if (isAnimating) return;

  const rect = stage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const middle = rect.width / 2;

  if (x < middle) {
    previousPage();
  } else {
    nextPage();
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

function addButtonFeedback(button) {
  button.addEventListener("pointerdown", () => {
    button.style.transform = "scale(.97)";
  });

  button.addEventListener("pointerup", () => {
    button.style.transform = "";
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
}

prevButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
restartButton.addEventListener("click", restart);
document.addEventListener("keydown", handleKeyboard);

stage.addEventListener("click", handleBookClick);
stage.addEventListener("touchstart", handleTouchStart, { passive: true });
stage.addEventListener("touchend", handleTouchEnd, { passive: true });

addButtonFeedback(prevButton);
addButtonFeedback(nextButton);

let pointerX = 0;
let pointerY = 0;

document.addEventListener("pointermove", event => {
  pointerX = event.clientX;
  pointerY = event.clientY;
});

function subtleParallax() {
  if (window.innerWidth < 800) {
    requestAnimationFrame(subtleParallax);
    return;
  }

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (pointerX - centerX) / centerX;
  const offsetY = (pointerY - centerY) / centerY;

  const rotateX = offsetY * -1.3;
  const rotateZ = offsetX * .35;

  if (!isAnimating) {
    book.style.transform = `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
  }

  requestAnimationFrame(subtleParallax);
}

window.addEventListener("resize", () => {
  book.style.transform = "";
});

render(true);
subtleParallax();

setTimeout(() => {
  const hint = document.getElementById("hint");
  hint.style.opacity = ".55";
}, 2500);

setTimeout(() => {
  showToast("Use ← e → para virar as páginas");
}, 900);
