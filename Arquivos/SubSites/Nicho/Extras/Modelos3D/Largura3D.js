document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // MODELO 3D
    // =========================================================

    const modelo = document.getElementById("modelo3D");

    let hierarquia = null;
    let modeloPronto = false;

    // =========================================================
    // CONFIGURAÇÃO
    // =========================================================

    // Altura original do modelo
    const LARGURA_ORIGINAL = 60;

    // =========================================================
    // CORES
    // =========================================================

    const coresMateriais = [
        [1, 0, 0, 1],       // 0 - Vermelho - parede lateral esquerda interna
        [0, 1, 0, 1],       // 1 - Verde - parede lateral superior interna
        [0, 0, 1, 1],       // 2 - Azul - parede lateral direita interna
        [1, 1, 0, 1],       // 3 - Amarelo - parede lateral inferior interna
        [1, 0, 1, 1],       // 4 - Rosa - moldura externa inferior
        [0, 1, 1, 1],       // 5 - Ciano - moldura externa esquerda
        [1, 0.5, 0, 1],     // 6 - Laranja - moldura externa superior
        [0.5, 0, 1, 1],     // 7 - Roxo - moldura externa direita
        [0, 0, 0, 1]        // 8 - Preto - fundo
    ];

    // =========================================================
    // CARREGAR MODELO
    // =========================================================

    modelo.addEventListener("load", () => {

    const scene = modelo.model;

        // =====================================================
        // LOCALIZAR HIERARQUIA
        // =====================================================

        const simbolos =
            Object.getOwnPropertySymbols(scene);

        const simboloHierarquia =
            simbolos.find(
                simbolo =>
                    String(simbolo) === "Symbol(hierarchy)"
            );

        hierarquia =
            scene[simboloHierarquia];

        // =====================================================
        // PINTAR PEÇAS
        // =====================================================

        pintarTodasAsPecas();


        modeloPronto = true;

    });


    // =========================================================
    // PINTAR TODAS AS PEÇAS
    // =========================================================

    function pintarTodasAsPecas() {

        hierarquia.forEach((parteL, indice) => {

                if (!parteL.materials) {
                    return;
                }

                if (!(parteL.materials instanceof Map)) {
                    return;
                }

                parteL.materials.forEach((material) => {

                    if (
                        !material ||
                        !material.pbrMetallicRoughness
                    ) {
                        return;
                    }

                    const cor =
                        coresMateriais[
                            indice % coresMateriais.length
                        ];

                    material
                        .pbrMetallicRoughness
                        .setBaseColorFactor(cor);

                });

        });

    }

// =========================================================
// BARRA DE Largura
// =========================================================

const barraLargura = document.getElementById("barra-largura");
const valorLargura = document.getElementById("valor-largura");

barraLargura.addEventListener("input", () => {

    const novaLargura = Number(barraLargura.value);

    // Atualizar texto
    if (valorLargura) {
        valorLargura.textContent = novaLargura + " cm";
    }

    // Alterar modelo
    if (modeloPronto) {
        alterarLargura(novaLargura);

        // Roda a profundidade por cima (prioridade)
        const profundidadeAtual = Number(document.getElementById("barra-profundidade").value);
        alterarProfundidade(profundidadeAtual);
    }

});
    // =========================================================
    // ALTERAR Largura
    // =========================================================

    function alterarLargura(novaLargura) {

        const diferencaL =
            novaLargura -
            LARGURA_ORIGINAL;

        const fatorL =
            novaLargura /
            LARGURA_ORIGINAL;


// =====================================================
// 0 - Vermelho - parede lateral esquerda interna
// 1 - Verde - parede lateral superior interna
// 2 - Azul - parede lateral direita interna
// 3 - Amarelo - parede lateral inferior interna
// 4 - Rosa - moldura externa inferior
// 5 - Ciano - moldura externa esquerda
// 6 - Laranja - moldura externa superior
// 7 - Roxo - moldura externa direita
// 8 - Preto - fundo
// =====================================================

        const PQAL = [ // PQAL = pecasQueAumentamLargura
            1,
            3,
            4,
            6,
        ];

        const PQML = [ //PQML = pecasQueMovemLargura
            0,
            2,
            5,
            7,
        ];

const EIXO_LARGURA = {
    0: "z", //TA CERTO
    1: "y", //TA CERTO
    2: "z", //TA CERTO
    3: "y", //TA CERTO
    4: "y", //TA CERTO
    5: "z",
    6: "y", //TA CERTO
    7: "z",
};

const FML= { // Multiplicadores para arrumar peças que nao movem o suficiente em relação com as outras FML = Fator de Movimento
    0: 5.15,
    2: -5.15,
    5: 5.15,
    7: -5.15,
};

const FSL= { // Multiplicadores para arrumar peças que nao aumentam o suficiente em relação com as outras FSL = Fator de Scale (Escala)
    1: 1.0325,
    3: 1.0325,
    4: 1.0325,
    6: 1.0325,
};

        PQAL.forEach((indice) => {

            const parteL =
                hierarquia[indice];
            const fatorEscalaL =
                FSL[indice] ?? 1;
            const eixo = EIXO_LARGURA[indice];


            if (!parteL || !parteL.mesh) {
                return;
            }




                if (!parteL.__escalaOriginalLargura) {

parteL.__escalaOriginalLargura = parteL.mesh.scale[eixo];

                }


const originalL =
    parteL.__escalaOriginalLargura;

parteL.mesh.scale[eixo] =
    originalL * (1 + ((fatorL - 1) * fatorEscalaL));

        });

// =====================================================
// FUNDO Começo
// =====================================================
// Y = Altura
// X = Largura
// Z = Profundidade
// No fundo ele muda pra !!!
// Y = X
// X = Y
// Z = Z
// =====================================================
const fundoL = hierarquia[8];
const fatorEscalaL = FSL[8] ?? 1;

if (fundoL && fundoL.mesh) {

    if (!fundoL.__escalaOriginalLargura) {

fundoL.__escalaOriginalLargura =
    fundoL.mesh.scale.z;

    }

const originalL =
    fundoL.__escalaOriginalLargura;

fundoL.mesh.scale.z =
    originalL * (1 + ((fatorL - 1) * fatorEscalaL));

}
// =====================================================
// FUNDO Fim
// =====================================================

// =====================================================
// PARTE DOS MOVIMENTOS
// =====================================================

PQML.forEach((indice) => {

    const parteL = hierarquia[indice];
    const fatorMovimentoL =
        FML[indice] ?? 1;
    const eixoMovimento =
    EIXO_LARGURA[indice];

    if (!parteL || !parteL.mesh) {
        return;
    }

    if (!parteL.__posicaoOriginalL) {

        parteL.__posicaoOriginalL = {
            y: parteL.mesh.position.y,
            z: parteL.mesh.position.z
        };
    }

    const originalL = parteL.__posicaoOriginalL;

    parteL.mesh.position[eixoMovimento] = originalL[eixoMovimento] + (diferencaL * fatorMovimentoL);

});
}});