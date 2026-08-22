/* =========================================================
   JARDINS DE MADEIRA — PROTEÇÃO DE IMAGENS
   ========================================================= */

/*
   Este arquivo dificulta:
   - Botão direito sobre imagens
   - Arrastar imagens
   - Arrastar e soltar imagens
   - Seleção acidental das imagens

   IMPORTANTE:
   Isso não impede cópia de imagens de forma absoluta.
   Se uma imagem é exibida no navegador, ela pode ser obtida
   por alguém que realmente queira fazê-lo.
*/


// =========================================================
// BLOQUEAR BOTÃO DIREITO NAS IMAGENS
// =========================================================

document.addEventListener("contextmenu", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});


// =========================================================
// BLOQUEAR ARRASTAR IMAGENS
// =========================================================

document.addEventListener("dragstart", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});


// =========================================================
// BLOQUEAR DRAG AND DROP
// =========================================================

document.addEventListener("drop", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});


// =========================================================
// EVITAR SELEÇÃO DAS IMAGENS
// =========================================================

document.addEventListener("selectstart", function (event) {

    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }

});


// =========================================================
// APLICAR PROTEÇÃO AUTOMATICAMENTE ÀS IMAGENS
// =========================================================

function protegerImagens() {

    const imagens = document.querySelectorAll("img");

    imagens.forEach(function (imagem) {

        imagem.setAttribute("draggable", "false");

        imagem.style.userSelect = "none";
        imagem.style.webkitUserSelect = "none";
        imagem.style.webkitUserDrag = "none";

    });

}


// Executa quando a página termina de carregar
document.addEventListener("DOMContentLoaded", protegerImagens);


// =========================================================
// PROTEGER IMAGENS ADICIONADAS DEPOIS PELO JAVASCRIPT
// =========================================================

const observadorImagens = new MutationObserver(function () {

    protegerImagens();

});

observadorImagens.observe(document.body, {
    childList: true,
    subtree: true
});