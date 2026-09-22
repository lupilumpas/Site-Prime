const imagensProdutos = [
    "produto01.png",
    "produto02.png",
    "produto03.png",
    "produto04.png",
    "produto05.png",
    "produto06.png",
    "produto07.png",
    "produto08.png",
    "produto09.png"
];

const cardsProdutos = document.querySelectorAll(".produto-imagem");

cardsProdutos.forEach((produto, index) => {
    const imagem = imagensProdutos[index];

    produto.style.backgroundImage = `url("${imagem}")`;
});