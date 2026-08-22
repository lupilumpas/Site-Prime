document.addEventListener("DOMContentLoaded", () => {

    const setaEsquerda = document.getElementById("setaEsquerda");
    const setaDireita = document.getElementById("setaDireita");

    const paginaAtual = document.getElementById("paginaAtual");

    const imagens = document.querySelectorAll(".produto-card img");

    let pagina = 1;


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

        });

        // Atualiza o número da página
        paginaAtual.textContent = pagina;
    }


    setaDireita.addEventListener("click", () => {

        pagina++;

        if (pagina > 4) {
            pagina = 1;
        }

        atualizarFotos();

    });


    setaEsquerda.addEventListener("click", () => {

        pagina--;

        if (pagina < 1) {
            pagina = 4;
        }

        atualizarFotos();

    });

});