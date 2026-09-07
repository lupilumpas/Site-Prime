const precosProdutos = [
    "R$ 330,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 290,99",
    "R$ 290,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 290,99",
    "R$ 260,99",
    "R$ 230,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 260,99",
    "R$ 280,99"
];

const produtos = [
    "Branco",
    "Camurça",
    "Envelhecido",
    "Cerejeira Claro",
    "Cerejeira Escuro",
    "Cinza Claro",
    "Cinza Escuro",
    "Imbuia",
    "Mogno",
    "Cru ou Natural",
    "Por do Sôl",
    "Preto",
    "Caramelo",
    "Pastel",
    "Rosê",
    "Safari"
];

const linksComprar = [
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Branco.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Camurça.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Envelhecido.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Cerejeira Claro.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Cerejeira Escuro.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Cinza Claro.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Cinza Escuro.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Imbuia.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Mogno.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Cru/Natural.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Por%20do%20sôl.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Preto.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Caramelo.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Pastel.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Rosê.",
    "http://api.whatsapp.com/send/?phone=5541991371245&text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20JDM%20Madeiras%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20nicho%20Safari."
];

const descricaoProduto = `
TAMPA PARA CHURRASQUEIRA ESTILO NICHO IDEAL PARA DECORAÇÃO.<br>
TAMBÉM AUXILIA NO ISOLAMENTO PARA RETORNO DE CINZAS CAUSADO PELO VENTO - VEDAÇÃO EM TORNO DE 95%.
<br><br>
ESTES VALORES SÃO PARA CHURRASQUEIRAS DE ATÉ 60X60, POIS PASSANDO DISSO O VALOR DO FRETE ALTERA;
<br><br>
LATERAIS - PRATELEIRAS DIVISÓRIAS - MOLDURAS:
FEITOS EM MADEIRA NATURAL MACIÇA - CONFERINDO ALGUMAS PEQUENAS IMPERFEIÇÕES E NÓS AO NICHO. POIS COMO É TAMPA DE CHURRASQUEIRA, A IDEIA PRINCIPAL É A RUSTICIDADE DO PRODUTO, DESTACANDO A NATURALIDADE DA MADEIRA.
MADEIRA - PINUS CERTIFICADO DE REFLORESTAMENTO.
<br><br>
FUNDO - TEMOS 2 OPÇÕES PARA ESCOLHER:
1) FORRO EM MDF 2,5MM
2) FORRO EM PINUS 5,0MM
<br><br>
VAMOS PRECISAR DAS SEGUINTES INFORMAÇÕES:
- FOTOS DE FRENTE E DE LATERAIS DA CHURRASQUEIRA
- FOTO COM TRENA MOSTRANDO A LARGURA E A ALTURA EXATAS DA BOCA DA CHURRASQUEIRA
<br><br>
ADAPTAMOS O TAMANHO EXATO DE SUA CHURRASQUEIRA PARA QUE A MESMA NÃO ENROSQUE E ENTRE COM FACILIDADE NA ABERTURA DA CHURRASQUEIRA.
<br><br>
TIPOS DE MOLDURA:
- MOLDURA 3 LADOS
- MOLDURA 4 LADOS
<br><br>
A PROFUNDIDADE DO NICHO É FEITA COM 10CM OU 14CM
<br><br>
FAZEMOS EM OUTRAS MEDIDAS CONFORME A ABERTURA DA SUA CHURRASQUEIRA DE ATÉ 90X90. SOLICITE ORÇAMENTO ESPECÍFICO.
<br><br>
PARA COMPRAS VIA MERCADOLIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<br>
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610" target="_blank">
Acessar loja
</a>
`;

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".popup-fechar").forEach((botao) => {

    botao.addEventListener("click", () => {

        const popup = botao.closest(".popup-fundo");

        if (popup) {
            popup.classList.remove("ativo");
        }

    });

});

// ==========================================
// FECHAR CLICANDO FORA DO POPUP
// ==========================================

document.querySelectorAll(".popup-fundo").forEach((popup) => {

    popup.addEventListener("click", (evento) => {

        // Só fecha se clicou no fundo
        if (evento.target === popup) {

            const botaoFechar = popup.querySelector(".popup-fechar");

            if (botaoFechar) {
                botaoFechar.click();
            }

        }

    });

});



    const imagens = document.querySelectorAll(".produto-card img");

    imagens.forEach((imagem) => {

        imagem.addEventListener("click", () => {

            // ==========================================
            // ANIMAÇÃO DA IMAGEM → CENTRO
            // ==========================================

            const rect = imagem.getBoundingClientRect();

            const imagemAnimacao = imagem.cloneNode(true);

            imagemAnimacao.classList.add("imagem-animacao");

            imagemAnimacao.style.left = rect.left + "px";
            imagemAnimacao.style.top = rect.top + "px";
            imagemAnimacao.style.width = rect.width + "px";
            imagemAnimacao.style.height = rect.height + "px";

            document.body.appendChild(imagemAnimacao);

            // ==========================================
            // FAZ A IMAGEM IR PARA O CENTRO
            // ==========================================

            requestAnimationFrame(() => {
                imagemAnimacao.style.left = "42.2%";
                imagemAnimacao.style.top = "21%";
                imagemAnimacao.style.width = "300px";
                imagemAnimacao.style.height = "340px";
                imagemAnimacao.style.transform = "translate(-50%, -50%)";
            });

// ==========================================
// ENCONTRA O POPUP
// ==========================================

const indice = Array.from(imagens).indexOf(imagem);

const popup =
    document.getElementById(`popup-${indice + 1}`);

const botaoComprar =
    popup.querySelector(".popup-comprar");

if (botaoComprar) {
    botaoComprar.href = linksComprar[indice];
    botaoComprar.target = "_blank";
}

if (!popup) return;

const nomeProduto = produtos[indice];

// ==========================================
// ANTES E DEPOIS
// ==========================================

const imagemAntes = popup.querySelector(".aed-imagem-A");
const imagemDepois = popup.querySelector(".aed-imagem-D");

if (imagemAntes && imagemDepois) {

    imagemAntes.src = `img/Antes e Depois/${nomeProduto}/Antes.png`;
    imagemDepois.src = `img/Antes e Depois/${nomeProduto}/Depois.png`;

}

const titulo = popup.querySelector("h2");

if (titulo) {
    titulo.textContent = nomeProduto;
}
// ==========================================
// DESCRIÇÃO DO PRODUTO
// ==========================================

const descricao =
    popup.querySelector(".popup-descricao");

if (descricao) {
    descricao.innerHTML = descricaoProduto;
}

const preco =
    popup.querySelector(".popup-preco");

if (preco) {
    preco.textContent = precosProdutos[indice];
}

            // ==========================================
            // ELEMENTOS DO CARROSSEL
            // ==========================================

            const imagem1 = popup.querySelector(".Imagem-Anterior-2");
            const imagem2 = popup.querySelector(".Imagem-Anterior");
            const imagem3 = popup.querySelector(".Imagem-central");
            const imagem4 = popup.querySelector(".Imagem-Seguinte");
            const imagem5 = popup.querySelector(".Imagem-Seguinte-2");
            const aedContainer = popup.querySelector(".aed-container");
const aedImagemA = popup.querySelector(".aed-imagem-A");
const aedImagemD = popup.querySelector(".aed-imagem-D");
const aedBarra = popup.querySelector(".aed-barra");
const aedBotao = popup.querySelector(".aed-botao");

function atualizarAeD(posicao) {

    aedImagemD.style.clipPath =
        `inset(0 ${100 - posicao}% 0 0)`;

    aedBarra.style.left =
        posicao + "%";

}
atualizarAeD(50);
let arrastandoAeD = false;



aedBotao.addEventListener("mousedown", (evento) => {
    evento.preventDefault();   // ← adiciona isto
    arrastandoAeD = true;
});

document.addEventListener("mousemove", (evento) => {
    if (!arrastandoAeD) return;

    evento.preventDefault();   // ← e isto também

    const rect = aedContainer.getBoundingClientRect();
    let posicao = ((evento.clientX - rect.left) / rect.width) * 100;
    posicao = Math.max(0, Math.min(100, posicao));
    atualizarAeD(posicao);
});



document.addEventListener("mouseup", () => {

    arrastandoAeD = false;

});

            if (!imagem1 || !imagem2 || !imagem3 || !imagem4 || !imagem5) {
                return;
            }

            // ==========================================
            // CONTROLE DO CARROSSEL
            // ==========================================

// Descobre qual Kit foi clicado
const caminhoImagem = imagem.src;

const resultado =
    caminhoImagem.match(/Kit%20(\d+)|Kit%20(\d+)/);

let paginaCarrossel = 1;

if (resultado) {
    paginaCarrossel = Number(resultado[1]);
}

            function atualizarCarrossel() {
                let kit1 = paginaCarrossel - 2;
                let kit2 = paginaCarrossel - 1;
                let kit3 = paginaCarrossel;
                let kit4 = paginaCarrossel + 1;
                let kit5 = paginaCarrossel + 2;

                if (kit1 < 1) kit1 += 5;
                if (kit2 < 1) kit2 += 5;
                if (kit4 > 5) kit4 -= 5;
                if (kit5 > 5) kit5 -= 5;

imagem1.src = `img/Kit ${kit1}/${nomeProduto}.png`;
imagem2.src = `img/Kit ${kit2}/${nomeProduto}.png`;
imagem4.src = `img/Kit ${kit4}/${nomeProduto}.png`;
imagem5.src = `img/Kit ${kit5}/${nomeProduto}.png`;


/* ========================================= */
/* PÁGINA 2 = ANTES E DEPOIS */
/* ========================================= */

if (paginaCarrossel === 2) {

    imagem3.style.display = "none";

    aedContainer.style.display = "block";

    aedImagemA.src =
        `img/Antes e Depois/${nomeProduto}/Antes.png`;

    aedImagemD.src =
        `img/Antes e Depois/${nomeProduto}/Depois.png`;

}  else {

    imagem3.style.display = "block";
    aedContainer.style.display = "none";

    imagem3.src = `img/Kit ${kit3}/${nomeProduto}.png`;
}
            }

            // ==========================================
            // PRIMEIRA CONFIGURAÇÃO
            // ==========================================

            atualizarCarrossel();

            // ==========================================
            // ESCONDE A IMAGEM CENTRAL (fica branco)
            // ==========================================

imagem3.style.opacity = "0";
imagem3.style.transition = "none";

            // ==========================================
            // MOSTRA O POPUP
            // ==========================================
                popup.classList.add("ativo");
            // ==========================================
            // QUANDO A ANIMAÇÃO TERMINAR
            // ==========================================

            setTimeout(() => {

                imagem3.style.opacity = "1";
                imagemAnimacao.remove();

                setTimeout(() => {
                    imagem3.style.transition = "";
                }, 50);
            }, 900);

            // ==========================================
            // BOTÃO DIREITA
            // ==========================================

            imagem4.onclick = () => {
                paginaCarrossel++;
                if (paginaCarrossel > 5) paginaCarrossel = 1;
                atualizarCarrossel();
            };

            // ==========================================
            // BOTÃO ESQUERDA
            // ==========================================

            imagem2.onclick = () => {
                paginaCarrossel--;
                if (paginaCarrossel < 1) paginaCarrossel = 5;
                atualizarCarrossel();
            };

        }); // fim do click

    }); // fim do forEach

}); // fim do DOMContentLoaded