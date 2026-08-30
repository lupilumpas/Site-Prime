document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // MODELO 3D
    // =========================================================

    const modelo = document.getElementById("modelo3D");

    let hierarquia = null;
    let modeloPronto = false;

    // =========================================================
    // CONFIGURAÇÃO DA PROFUNDIDADE
    // =========================================================

    const PROFUNDIDADE_ORIGINAL = 5;

    // Direção do crescimento
    //  1 = um lado
    // -1 = lado contrário
    const DIRECAO_PROFUNDIDADE = -1;

    // Quanto a peça se desloca na posição (quanto maior, mais longe do centro)
const FORCA_DESLOCAMENTO = -3;   // ← MEXA AQUI

const FORCA_FUNDO = 10;   // quanto mais alto, mais ele anda

    // =========================================================
    // CORES
    // =========================================================

    const coresMateriais = [
        [1, 0, 0, 1],       // 0 - Vermelho
        [0, 1, 0, 1],       // 1 - Verde
        [0, 0, 1, 1],       // 2 - Azul
        [1, 1, 0, 1],       // 3 - Amarelo
        [1, 0, 1, 1],       // 4 - Rosa
        [0, 1, 1, 1],       // 5 - Ciano
        [1, 0.5, 0, 1],     // 6 - Laranja
        [0.5, 0, 1, 1],     // 7 - Roxo
        [0, 0, 0, 1]        // 8 - Preto
    ];

    // =========================================================
    // CARREGAR MODELO
    // =========================================================

modelo.addEventListener("load", () => {

    const scene = modelo.model;

    const simbolos = Object.getOwnPropertySymbols(scene);
    const simboloHierarquia = simbolos.find(
        simbolo => String(simbolo) === "Symbol(hierarchy)"
    );

    hierarquia = scene[simboloHierarquia];

    pintarTodasAsPecas();
    modeloPronto = true;

    // Define 10 cm como valor inicial
    const botaoInicial = document.querySelector(
        '#barra-profundidade button[value="10"]'
    );

    if (botaoInicial) {
        botaoInicial.click();
    }
});

    // =========================================================
    // PINTAR TODAS AS PEÇAS
    // =========================================================

    function pintarTodasAsPecas() {
        hierarquia.forEach((parte, indice) => {
            if (!parte.materials || !(parte.materials instanceof Map)) return;

            parte.materials.forEach((material) => {
                if (!material || !material.pbrMetallicRoughness) return;

                const cor = coresMateriais[indice % coresMateriais.length];
                material.pbrMetallicRoughness.setBaseColorFactor(cor);
            });
        });
    }

    // =========================================================
    // BARRA DE PROFUNDIDADE
    // =========================================================

const barraProfundidade =
    document.getElementById("barra-profundidade");

const valorProfundidade =
    document.getElementById("valor-profundidade");

const opcoesProfundidade =
    barraProfundidade.querySelectorAll("button");

opcoesProfundidade.forEach((botao) => {

    botao.addEventListener("click", () => {

        const novaProfundidade = Number(botao.value);

        // Atualiza o texto
        if (valorProfundidade) {
            valorProfundidade.textContent =
                novaProfundidade + " cm";
        }

        // Marca a caixa selecionada
        opcoesProfundidade.forEach((b) => {
            b.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

        // Continua usando seu sistema 3D
        if (modeloPronto) {
            alterarProfundidade(novaProfundidade);
        }
    });

});

    // =========================================================
    // ALTERAR PROFUNDIDADE
    // =========================================================



    function alterarProfundidade(novaProfundidade) {

        const diferencaP = novaProfundidade - PROFUNDIDADE_ORIGINAL;
        const fatorP = novaProfundidade / PROFUNDIDADE_ORIGINAL;

        // -------------------------------------------------
        // DEFINIÇÕES CLARAS
        // -------------------------------------------------

        // Peças que AUMENTAM de tamanho (escala)
        const pecasQueEscalam = [0, 1, 2, 3];

        // Peças que só se MOVEM
        const pecasQueMovem = [8];

        // Eixo de cada peça
        const eixo = {
    0: "z",
    1: "z",
    2: "z",
    3: "z",
    8: "x"          // fundo (eixo diferente)
        };
const FMP = {
    0: -5,
    1: -5,
    2: -5,
    3: -5
};

// -------------------------------------------------
// 1. PEÇAS QUE ESCALAM (0, 1, 2, 3)
// -------------------------------------------------
pecasQueEscalam.forEach((indice) => {

    const parte = hierarquia[indice];

    if (!parte || !parte.mesh) return;

    // Eixo em que a peça AUMENTA
    const eixoEscala = eixo[indice];


    // Guarda valores originais
    if (!parte.__escalaOriginalProfundidade) {
        parte.__escalaOriginalProfundidade =
            parte.mesh.scale[eixoEscala];
    }

    if (!parte.__posicaoOriginalProfundidade) {
        parte.__posicaoOriginalProfundidade = {
            x: parte.mesh.position.x,
        };
    }


    const escalaOriginal =
        parte.__escalaOriginalProfundidade;

    const posicaoOriginal =
        parte.__posicaoOriginalProfundidade;


    // ---------------------------------------------
    // AUMENTAR SOMENTE NO EIXO DA PROFUNDIDADE
    // ---------------------------------------------

parte.mesh.scale[eixoEscala] =
    escalaOriginal * fatorP;

    parte.mesh.updateMatrixWorld(true);


parte.mesh.position.x =
    posicaoOriginal.x +
    (diferencaP * FMP[indice]);

    console.log(
    "X:", parte.mesh.scale.x,
    "Y:", parte.mesh.scale.y,
    "Z:", parte.mesh.scale.z
);

console.log(
    "Peça", indice,
    "scale:",
    parte.mesh.scale.x,
    parte.mesh.scale.y,
    parte.mesh.scale.z
);

console.log(
    "rotation:",
    parte.mesh.rotation.x,
    parte.mesh.rotation.y,
    parte.mesh.rotation.z
);

    // ---------------------------------------------
    // TESTE
    // ---------------------------------------------

    console.log(`Peça ${indice}`);
    console.log("Eixo da escala:", eixoEscala);
    console.log("Eixo do movimento: z");
    console.log("Z original:", posicaoOriginal.z);

});
        // -------------------------------------------------
        // 2. PEÇAS QUE SÓ SE MOVEM (fundo - 8)
        // -------------------------------------------------
        pecasQueMovem.forEach((indice) => {
            const parte = hierarquia[indice];
            if (!parte || !parte.mesh) return;

            const eixoAtual = eixo[indice];

            if (!parte.__posicaoOriginalProfundidade) {
                parte.__posicaoOriginalProfundidade = {
                    x: parte.mesh.position.x,
                };
            }

            const posicaoOriginal = parte.__posicaoOriginalProfundidade;

parte.mesh.position[eixoAtual] = posicaoOriginal[eixoAtual] + (diferencaP * DIRECAO_PROFUNDIDADE * FORCA_FUNDO);
        });
    }

});