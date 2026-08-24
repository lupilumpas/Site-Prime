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
    "Por do sôl",
    "Preto",
    "Caramelo",
    "Pastel",
    "Rosê",
    "Safari"
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
Acessar loja no Mercado Livre
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

const nomeProduto = produtos[indice];

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

            // ==========================================
            // ELEMENTOS DO CARROSSEL
            // ==========================================

            const imagem1 = popup.querySelector(".Imagem-Anterior-2");
            const imagem2 = popup.querySelector(".Imagem-Anterior");
            const imagem3 = popup.querySelector(".Imagem-central");
            const imagem4 = popup.querySelector(".Imagem-Seguinte");
            const imagem5 = popup.querySelector(".Imagem-Seguinte-2");

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
                imagem3.src = `img/Kit ${kit3}/${nomeProduto}.png`;
                imagem4.src = `img/Kit ${kit4}/${nomeProduto}.png`;
                imagem5.src = `img/Kit ${kit5}/${nomeProduto}.png`;
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