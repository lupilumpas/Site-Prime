document.addEventListener("DOMContentLoaded", () => {

    const setaEsquerda = document.getElementById("setaEsquerda");
    const setaDireita = document.getElementById("setaDireita");

    const paginaAtual = document.getElementById("paginaAtual");

    const imagens = document.querySelectorAll(".produto-card img");

    let pagina = 1;

const descricaoKit = document.getElementById("descricaoKit");

const nomesKits = [
    "Imagens de antigos clientes",
    "Imagens antes e depois",
    "Imagens da comparação de nichos com fundo mdf e pinus",
    "Foto com ia de cada cor, diferentes nichos no mesmo espaço/churrasqueira",
    "Foto com ia de cada cor, com um zoom"
];

if (descricaoKit) {
    descricaoKit.textContent = nomesKits[pagina - 1];
}

    

    


    function atualizarFotos() {

        imagens.forEach((imagem) => {

            const original = imagem.dataset.original;
            const segunda = imagem.dataset.segunda;

if (pagina === 1) {
imagem.src = original;
}

if (pagina === 2) {
imagem.src = segunda;
}
if (pagina === 3) {
imagem.src = imagem.dataset.terceira;
}
if (pagina === 4) {
    imagem.src = imagem.dataset.quarta;
}
if (pagina === 5) {
    imagem.src = imagem.dataset.quinta;
}

        });

        // Atualiza o número da página
        paginaAtual.textContent = pagina;

        // Atualiza nome do kit
descricaoKit.textContent = nomesKits[pagina - 1];
    }


    setaDireita.addEventListener("click", () => {

        pagina++;

        if (pagina > 5) {
            pagina = 1;
        }

        atualizarFotos();

    });


    setaEsquerda.addEventListener("click", () => {

        pagina--;

        if (pagina < 1) {
            pagina = 5;
        }

        atualizarFotos();

    });

});