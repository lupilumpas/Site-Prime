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
    "Cru",
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
CONFECCIONADOS EM MADEIRA MACIÇA, OS PAINÉIS DEIXARÃO SEU AMBIENTE MAIS HARMÔNICO E ALEGRE. NOSSAS PEÇAS SÃO FEITAS À MÃO, PRODUZIDAS ARTESANALMENTE E COM MUITO APREÇO. AS MADEIRAS PARA CORTE PROVÉM DE REFLORESTAMENTO, CERTIFICADAS PELO IBAMA.
<br>
VOCÊ TERÁ UM PRODUTO VERSÁTIL E DECORATIVO, TANTO PARA FAZER UMA PEQUENA HORTA COM TEMPEROS OU FLORES E FOLHAGENS OU DECORAR SEU JARDIM, SACADA OU VARANDA, IDEAL PARA QUEM TEM POUCO ESPAÇO E NÃO ABRE MÃO DE CONTATO COM A NATUREZA. TAMBÉM HÁ QUEM ACHE OUTRAS UTILIDADES, COMO PORTA OBJETOS OU ACONCHEGO PARA GATOS.
<br>
DIMENSÕES
<br>
Painel estilo treliçado nas cores das imagens.
Acompanha 4 cachepos de 40x14 cm móveis.
Para colocar seus vasos com plantinhas deixando
sua parede ou muro mais harmônico e alegre com os cachepôs desparceirados em zig zag no seu painel!
<br>
Medidas painel:
- Altura : 120 cm
- Largura : 80cm
<br>
CACHEPOS:
<br>
ALTURA: 8,5cm EXTERNA / 6,5cm INTERNA
<br>
LARGURA: 40CM
PROFUNDIDADE: 15CM
<br>
FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA
FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES RÚSTICOS FOSCOS E QUEIMADO/SAFARI,
IMBUIA, CEREJEIRA, MOGNO, BRANCO, PRETO, CINZA E CAMURÇA |
<br>
FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS
<br>
PARA COMPRAS VIA MERCADOLIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<br>
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">
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

const botoes = document.querySelectorAll(".produto-card button");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        if (imagens[indice]) {
            imagens[indice].click();
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

    if (!popup) return;

const botaoComprar =
    popup.querySelector(".popup-comprar");

if (botaoComprar) {
    botaoComprar.href = linksComprar[indice];
    botaoComprar.target = "_blank";
}

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