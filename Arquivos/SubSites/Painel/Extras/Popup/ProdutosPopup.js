const precosProdutos = [
    "R$ 226,07",//
    "R$ 278,72",//
    "R$ 350,98",//
    "R$ 252,91",//
    "R$ 277,69",//
    "R$ 257,04",//
    "R$ 268,40",//
    "R$ 469,99",//
    "R$ 277,69",//
    "R$ 226,07",//
    "R$ 588,41",//
    "R$ 712,29",//
    "R$ 196,14",//
    "R$ 258,07",//
    "R$ 154,84",//
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
    ["sku 82"],
    ["sku 88"],
    ["sku 89"],
    ["sku 90"],
    ["sku 99"],
    ["sku 110 1", "sku 110 2"],
    ["sku 71"]

];

const imagensProdutos = {
    "sku 10": 9, //
    "sku 18": 5, //
    "sku 21": 7, //
    "sku 31": 12, //
    "sku 59": 7, //
    "sku 72": 6, //
    "sku 77": 7, //
    "sku 80": 5, //
    "sku 82": 10, //
    "sku 88": 12, //
    "sku 89": 5, //
    "sku 90": 5, //
    "sku 99": 7, //
    "sku 110": 10, //
    "sku 71": 6
};

const produtos = [
    "Floreira de parede <br>vertical jardim com 4<br>cachepôs 1,20x60",
    "Floreira de parede <br>horizontal jardim 3<br>prateleiras",
    "Floreira de parede <br>horizontal para jardim<br>com 5 cachepôs",
    "Floreira de parede <br>vertical jardim 1,20x60<br>com 4 cachepôs",
    "Floreira de parede <br>vertical jardim com 4<br>cachepôs cor cerejeira",
    "Floreira de parede <br>treliçada jardim<br>horizontal 100x60 cm",
    "Floreira de parede <br>vertical externa com 3<br>cachepôs 100x50 cm",
    "Floreira de parede <br>vertical jardim<br>com 6 andares",
    "Floreira de parede <br>vertical jardim com<br>4 cachepôs cor cerejeira",
    "Floreira de parede <br>horizontal jardim<br>com 5 andares",
    "Floreira de parede <br>vertical jardim<br>com 6 cachepôs",
    "Floreira de parede <br>vertical jardim<br>com 8 cachepôs",
    "Floreira de parede <br>vertical jardim<br>com 4 cachepôs",
    "Floreira de parede <br>vertical ou horizontal<br>jardim com 4 cachepôs",
    "Floreira de parede <br>60x60 jardim suspenso<br>3 bases"
];

const linkWhatsApp = "https://api.whatsapp.com/send/?phone=5541991371245&text=";

const tiposPainel = [
    "treliçado",
    "ripado",
    "ripado",
    "treliçado",
    "treliçado",
    "treliçado",
    "ripado",
    "ripado",
    "ripado",
    "ripado",
    "ripado",
    "ripado",
    "ripado",
    "ripado",
    "treliçado",
];

const dimensoesProdutos = [
    //10
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 60 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões dos Cachepôs:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">Largura: 40 cm</p>
    <p class="PR linha-6c">Profundidade: 14 cm</p>
    </div></div>
    `,//18
        `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 80 cm</p>
    <p class="PR linha-3c">Largura: 120 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões das Prateleiras:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">Largura: 90 cm</p>
    <p class="PR linha-6c">Profundidade: 12 cm</p>
    </div></div>
    `,
    //21
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 150 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">4 chachepos Largura: 40 x 14 cm</p>
    <p class="PR linha-6c">1 chachepo largura: 50 x 14 cm</p>
    </div></div>
    `,
    //31
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 60 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">4 chachepos Largura: 40 x 14 cm</p>
    </div></div>
    `,
    //59
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 80 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">4 chachepos Largura: 50 x 14 cm</p>
    </div></div>
    `,
    //72
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 60 cm</p>
    <p class="PR linha-3c">Largura: 100 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">2 chachepos Largura: 60 x 14 cm</p>
    </div></div>
    `,
    //77
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 100 cm</p>
    <p class="PR linha-3c">Largura: 50 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">3 chachepos Largura: 30 x 14 cm</p>
    </div></div>
    `,
    //80
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 150 cm</p>
    <p class="PR linha-3c">Largura: 100 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões das Prateleiras:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">6 Prateleiras 70cm X 12cm cada.</p>
    <p class="PR linha-6c">Entre andares-Aprox. 26cm.</p>
    </div></div>
    `,
    //82
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 80 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões dos Cachepôs:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">Largura: 40cm</p>
    <p class="PR linha-6c">Profundidade: 14cm</p>
    </div></div>
    `,
    //88
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 60 cm</p>
    <p class="PR linha-3c">Largura: 90 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões das Prateleiras:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">4 Bases de 40cm X 12cm</p>
    <p class="PR linha-6c">1 Base 54cm X 12cm (central)</p>
    </div></div>
    `,
    //89
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 200 cm</p>
    <p class="PR linha-3c">Largura: 150 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">6 Cachepôs 40cm X 14cm</p>
    <p class="PR linha-6c">Altura Cachepôs: 8,5cm externa<br>/6,5cm interna</p>
    </div></div>
    `,
    //90
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 240 cm</p>
    <p class="PR linha-3c">Largura: 170 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-62a">Dimensões dos Cachepôs:</h3>
    <div class="l62-2">
    <p class="PR linha-6b">8 Cachepôs 40cm X 14cm</p>
    <p class="PR linha-6c">Altura Cachepôs: 8,5cm externa<br>/6,5cm interna</p>
    </div></div>
    `,
    //99
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 60 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões dos Cachepôs:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">4 Cachepôs 40cm X 14cm</p>
    </div></div>
    `,
    //110
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 120 cm</p>
    <p class="PR linha-3c">Largura: 60 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões dos Cachepôs:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">2 Cachepôs 40cm X 14 cm</p>
    <p class="PR linha-6c">2 Cachepôs 35cm X 14 cm</p>
    <p class="PSB linha-6d">OBS:<br></p>
    <p class="PSB linha-6e">Eles podem ser usados na vertical ou horizontal,pois são em módulos.</p>
    </div></div>
    `,
    //71
    `
    <div class="l3-2">
    <p class="PR linha-3b">Altura: 60 cm</p>
    <p class="PR linha-3c">Largura: 60 cm</p>
    </div></div>
    <div class="l6">
    <h3 class="PB linha-6a">Dimensões das Prateleiras:</h3>
    <div class="l6-2">
    <p class="PR linha-6b">3 Bases 40cm X 12cm</p>
    </div></div>
    `,
];

const descricaoProduto = `
<p class="PR linha-1">Painel estilo {{TIPO_PAINEL}} nas cores das imagens.</p>
<div class="l10-11">
<p class="PR linha-10">FAZEMOS OS CACHEPÔS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p class="PR linha-11">
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
</div>
<h1 class="PB linha-2">Detalhes do produto</h1>
<div class="l3">
<p class="PB linha-3a">Dimensões Painel:</p>
{{DIMENSOES}}

<p class="PR linha-8">FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:↓</p>


<div class="linha-9">
  <div class="linha-9a">
    <div class="linha-9-2">
        <strong class="PSB linha-9-2a">Tons rústicos:</strong>
    </div>
        <div class="tonalidades linha-9-3a">
            <p1>
                <span class="caramelo">Caramelo</span>
                <span class="rose">Rosê</span>
                <span class="por-do-sol">Pôr do sol</span>
                <span class="safari">Safari</span>
                <span class="envelhecido">Envelhecido</span>
                <span class="pastel">Pastel</span>
            </p1>
        </div>
  </div>
  <div class="linha-9b">
    <div class="linha-9-2">
        <strong class="PSB linha-9-2b">Tons amadeirados:</strong>
    </div>
        <div class="tonalidades linha-9-3b">
            <p1>
                <span class="mogno">Mogno</span>
                <span class="imbuia">Imbuia</span>
                <span class="cerejeira-claro">Cerejeira Claro</span>
                <span class="cerejeira-escuro">Cerejeira Escuro</span>
            </p1>
        </div>
  </div>
  <div class="linha-9c">
            <div class="linha-9-2">
        <strong class="PSB linha-9-2c">Tons cheios:</strong>
    </div>
        <div class="tonalidades linha-9-3c">
            <p1>
                <span class="branco">Branco</span>
                <span class="preto">Preto</span>
                <span class="cinza-claro">Cinza Claro</span>
                <span class="cinza-escuro">Cinza Escuro</span>
                <span class="camurca">Camurça</span>
            </p1>
        </div>
  </div>
</div>
`;

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
    imagem.src = `Img/Capa/${capas[0]}.png`;
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

    imagem.src = `Img/Capa/${capas[capaAtual]}.png`;

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
// ENCONTRA O POPUP
// ==========================================

const popup = document.getElementById("popup-produto");
    console.log("Procurando popup único");
    console.log("Popup encontrado?", popup);

    if (!popup) {
        console.error("Popup não encontrado!");
        return;
    }

const nomeProdutoLimpo = produtos[indice].replace(/<br\s*\/?>/gi, " ");

const mensagem = `Olá! Vim pela página JDM Madeiras e gostaria de solicitar um orçamento para ${nomeProdutoLimpo}.`;

const botaoComprar = popup.querySelector(".popup-comprar");

if (botaoComprar) {
    botaoComprar.href = linkWhatsApp + encodeURIComponent(mensagem);
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

let texto = descricaoProduto;

texto = texto.replace(
    "{{DIMENSOES}}",
    dimensoesProdutos[indice] || ""
);
texto = texto.replace(
    "{{TIPO_PAINEL}}",
    tiposPainel[indice] || "???"
);
    texto = texto.trim();

    // Divide o conteúdo pelas linhas vazias
    const blocos = texto.split(/\n\s*\n/);

    texto = blocos.map(bloco => {

        bloco = bloco.trim();

        // Se for título, mantém o HTML original
        if (/^<h[1-3]>[\s\S]*<\/h[1-3]>$/i.test(bloco)) {
            return bloco;
        }

        // Se for link ou outro HTML, mantém
        if (bloco.startsWith("<")) {
            return bloco;
        }

        // Texto normal vira parágrafo
        return `<p>${bloco.replace(/\n/g, " ")}</p>`;

    }).join("");

    descricao.innerHTML = texto;
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
let pastaProduto = NomesdosArquivos[indice][0];

if (pastaProduto.startsWith("sku 110")) {
    pastaProduto = "sku 110";
}

const quantidadeImagens = imagensProdutos[pastaProduto] || 0;

const imagensDoProduto = Array.from(
    { length: quantidadeImagens },
    (_, i) => `${i + 1}.png`
);

let paginaCarrossel = 0;

//     function atualizarCarrossel() {

//     const totalImagens = imagensDoProduto.length;

//     if (totalImagens === 0) {
//         console.warn("Nenhuma imagem encontrada para:", pastaProduto);
//         return;
//     }

//     function indiceCircular(indice) {
//         return (indice + totalImagens) % totalImagens;
//     }

//     const indice1 = indiceCircular(paginaCarrossel - 2);
//     const indice2 = indiceCircular(paginaCarrossel - 1);
//     const indice3 = indiceCircular(paginaCarrossel);
//     const indice4 = indiceCircular(paginaCarrossel + 1);
//     const indice5 = indiceCircular(paginaCarrossel + 2);

//     imagem1.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice1]}`;
//     imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice2]}`;
//     imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice3]}`;
//     imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice4]}`;
//     imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice5]}`;

//     imagem3.style.display = "block";
// }

function atualizarCarrossel() {

    const totalImagens = imagensDoProduto.length;

    if (totalImagens === 0) {
        console.warn("Nenhuma imagem encontrada para:", pastaProduto);
        return;
    }

    function indiceCircular(indice) {
        return (indice + totalImagens) % totalImagens;
    }

    if (totalImagens >= 5) {

        imagem1.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel - 2)]}`;
        imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel - 1)]}`;
        imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel)]}`;
        imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel + 1)]}`;
        imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel + 2)]}`;

        imagem1.style.display = "block";
        imagem2.style.display = "block";
        imagem3.style.display = "block";
        imagem4.style.display = "block";
        imagem5.style.display = "block";

    } else {

        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "none";
        imagem4.style.display = "none";
        imagem5.style.display = "none";

        if (totalImagens >= 2) {
            imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[0]}`;
            imagem2.style.display = "block";
        }

        imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[totalImagens === 1 ? 0 : 1]}`;
        imagem3.style.display = "block";

        if (totalImagens >= 3) {
            imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[2]}`;
            imagem4.style.display = "block";
        }

        if (totalImagens >= 4) {
            imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[3]}`;
            imagem5.style.display = "block";
        }
    }
}

            // ==========================================
            // PRIMEIRA CONFIGURAÇÃO
            // ==========================================

            atualizarCarrossel();

            // ==========================================
            // BOTÃO DIREITA
            // ==========================================

imagem4.onclick = () => {

    paginaCarrossel++;

    if (paginaCarrossel >= imagensDoProduto.length) {
        paginaCarrossel = 0;
    }

    atualizarCarrossel();
};

            // ==========================================
            // BOTÃO ESQUERDA
            // ==========================================

imagem2.onclick = () => {

    paginaCarrossel--;

    if (paginaCarrossel < 0) {
        paginaCarrossel = imagensDoProduto.length - 1;
    }

    atualizarCarrossel();
};

        }); // fim do click

    }); // fim do forEach

}); // fim do DOMContentLoaded