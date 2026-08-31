const precosProdutos = [
    "R$ 210,99",
    "R$ 299,99",
    "R$ 320,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99",
    "R$ ,99"
];

const NomesdosArquivos = [
    ["sku 10"],
    ["sku 18"],
    ["sku 21"],
    ["sku 31"],
    ["sku 59"],
    ["sku 72"],
    ["sku 77"],
    ["sku 80"],
    ["sku 82 e 59"],
    ["sku 88"],
    ["sku 89"],
    ["sku 90"],
    ["sku 99"],
    ["sku 110 1", "sku 110 2"],
];

const produtos = [
    "Floreira de parede <br>vertical jardim com 4 <br>cachepos 1,20x60  sku10",
    "Floreira de parede <br>horizontal jardim 3 <br>prateleiras sku18",
    "Floreira de parede horizontal para jardim externo com 5 cachepots sku21",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
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

const descricaoProduto = [ 
`Painel estilo treliçado nas cores das imagens.
<br>
DIMENSÕES PAINEL : <br>
Altura: 120 cm<br>
Largura: 60 cm<br>
DIMENSÕES DOS CACHEPOS :<br>
Largura: 40 cm<br>
Profundidade: 14 cm<br>
<br>
FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:<br>
RÚSTICOS FOSCOS, QUEIMADO/SAFARI, IMBUIA, CEREJEIRA, MOGNO, BRANCO, PRETO, CINZA E CAMURÇA |<br>
<br>
FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS<br>
<br>
PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">
    Acessar site
</a>
`,
`
Painel estilo ripado nas cores das imagens.
<br>
DIMENSÕES PAINEL :<br>
Altura: 80 cm<br>
Largura: 120 cm <br>
DIMENSÕES DA PRATELEIRA:<br>
Largura: 90 cm<br>
Profundidade: 12 cm<br>
<br>
FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES: <br>
RÚSTICOS FOSCOS E QUEIMADO/SAFARI, IMBUIA, CEREJEIRA, MOGNO, BRANCO, PRETO, CINZA E CAMURÇA |<br>
<br>
FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS<br>
<br>
PARA COMPRAS VIA MERCADOLIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">
    Acessar site
</a>
`,
`
Painel estilo ripado nas cores das imagens.
<br>
DIMENSÕES PAINEL :<br>
Altura: 120 cm<br>
Largura: 150 cm <br>
DIMENSÕES DOS CACHEPOS:<br>
4 chachepos Largura: 40 x 14 cm<br>
1 chachepo largura: 50 x 14 cm<br>
<br>
FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES: <br>
RÚSTICOS FOSCOS E QUEIMADO/SAFARI, IMBUIA, CEREJEIRA, MOGNO, BRANCO, PRETO, CINZA E CAMURÇA |<br>
<br>
FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS<br>
<br>
PARA COMPRAS VIA MERCADOLIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">
    Acessar site
</a>
`,
];

document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".popup-fechar").forEach((botao) => {

    botao.addEventListener("click", () => {

        const popup = botao.closest(".popup-fundo");

        if (popup) {
            popup.classList.remove("ativo");
            console.log("POPUP FECHADO:", popup.id);
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

const botoes = document.querySelectorAll(".produto-card button");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        if (imagens[indice]) {
            imagens[indice].click();
        }

    });

});

imagens.forEach((imagem, indice) => {

const capas = NomesdosArquivos[indice] || [];

// Só configura a capa se existir
if (capas.length > 0) {
    imagem.src = `img/Capa/${capas[0]}.png`;
}

    // Se tiver mais de uma capa, começa a alternar
    if (capas.length > 1) {

        let capaAtual = 0;

        setInterval(() => {

            capaAtual++;

            if (capaAtual >= capas.length) {
                capaAtual = 0;
            }

imagem.style.transition = "opacity 0.5s ease";
imagem.style.opacity = "0";

setTimeout(() => {

    imagem.src = `img/Capa/${capas[capaAtual]}.png`;

    // espera a imagem nova carregar
    imagem.onload = () => {
        imagem.style.opacity = "1";
    };

}, 500);

        }, 3000);
    }

        imagem.addEventListener("click", () => {
console.log("CLIQUE NA IMAGEM!", indice);
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

const popup =
    document.getElementById(`popup-${indice+ 1}`);
    console.log("Procurando popup:", `popup-${indice+ 1}`);
    console.log("Popup encontrado?", popup);

    if (!popup) {
        console.error("Popup não encontrado!");
        return;
    }
const botaoComprar =
    popup.querySelector(".popup-comprar");

if (botaoComprar) {
    botaoComprar.href = linksComprar[indice];
    botaoComprar.target = "_blank";
}

const nomeProduto = produtos[indice];

const titulo = popup.querySelector("h2");

if (titulo) {
    titulo.innerHTML = nomeProduto;
}
// ==========================================
// DESCRIÇÃO DO PRODUTO
// ==========================================

const descricao =
    popup.querySelector(".popup-descricao");

if (descricao) {
    descricao.innerHTML = descricaoProduto[indice];
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

// ==========================================
// MOSTRA O POPUP
// ==========================================

popup.classList.add("ativo");
console.log("POPUP ATIVADO:", popup.id);
console.log("CLASSES DO POPUP:", popup.className);
// ==========================================
// VERIFICA O CARROSSEL
// ==========================================

if (!imagem1 || !imagem2 || !imagem3 || !imagem4 || !imagem5) {
    console.warn("Alguma imagem do carrossel não foi encontrada:", popup);
    return;
}

            // ==========================================
            // CONTROLE DO CARROSSEL
            // ==========================================
const nomesArquivo = NomesdosArquivos[indice] || [];
const nomeArquivo = nomesArquivo[0] || "";   // pega o primeiro nome do array
let paginaCarrossel = 1;

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

    imagem1.src = `img/Kit ${kit1}/${nomeArquivo}.png`;
    imagem2.src = `img/Kit ${kit2}/${nomeArquivo}.png`;
    imagem4.src = `img/Kit ${kit4}/${nomeArquivo}.png`;
    imagem5.src = `img/Kit ${kit5}/${nomeArquivo}.png`;

    imagem3.style.display = "block";
    imagem3.src = `img/Kit ${kit3}/${nomeArquivo}.png`;
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