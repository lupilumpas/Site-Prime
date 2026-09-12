// =========================================================
// AJUSTADOR DO SITE
// =========================================================

// Largura de referência do site
const larguraReferencia = 1920;

// Limites da escala
const escalaMinima = 0.53;
const escalaMaxima = 1.15;


// =========================================================
// FUNÇÃO PRINCIPAL
// =========================================================

function ajustarSite() {

    // Pega a largura atual da guia
    const largura = window.innerWidth;

    // Calcula a escala proporcional
    let escala = largura / larguraReferencia;

    // Limita a escala entre 0.75 e 1.15
    escala = Math.max(
        escalaMinima,
        Math.min(escalaMaxima, escala)
    );

    // Envia a escala para o CSS
    document.documentElement.style.setProperty(
        "--escala-site",
        escala
    );

    // Mostra os valores no console para podermos testar
    console.log("Largura:", largura);
    console.log("Escala:", escala);
}


// =========================================================
// EXECUTA AO CARREGAR
// =========================================================

ajustarSite();


// =========================================================
// EXECUTA NOVAMENTE AO REDIMENSIONAR
// =========================================================

window.addEventListener("resize", ajustarSite);