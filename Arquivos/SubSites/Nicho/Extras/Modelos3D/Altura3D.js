document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // CONFIGURAÇÃO
    // =========================================================

    // Altura original do modelo
    const ALTURA_ORIGINAL = 60;

// =========================================================
// BARRA DE ALTURA
// =========================================================

const barraAltura = document.getElementById("barra-altura");
const valorAltura = document.getElementById("valor-altura");

barraAltura.addEventListener("input", () => {

    const novaAltura = Number(barraAltura.value);

    // Atualizar texto
    if (valorAltura) {
        valorAltura.textContent = novaAltura + " cm";
    }

    // Alterar modelo
    if (modeloPronto) {
        alterarAltura(novaAltura);

        // Roda a profundidade por cima (prioridade)
        const profundidadeAtual = Number(document.getElementById("barra-profundidade").value);
        alterarProfundidade(profundidadeAtual);
    }

});

    // =========================================================
    // ALTERAR ALTURA
    // =========================================================

    function alterarAltura(novaAltura) {

        const diferenca =
            novaAltura -
            ALTURA_ORIGINAL;

        const fator =
            novaAltura /
            ALTURA_ORIGINAL;


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

        const PQA = [ // PQA = pecasQueAumentam
            0,
            2,
            5,
            7,
        ];

        const PQM = [ //PQM = pecasQueMovem
            1,
            3,
            4,
            6
        ];
const FM= { // Multiplicadores para arrumar peças que nao movem o suficiente em relação com as outras FM = Fator de Movimento
    1: 5.1,
    3: -5.1,
    4: -5.1,
    6: 5.1
};

const FS= { // Multiplicadores para arrumar peças que nao aumentam o suficiente em relação com as outras FS = Fator de Scale (Escala)
    0: 1.16,
    2: 1.16,
    8: 1.16,
};

        PQA.forEach((indice) => {

            const parte =
                hierarquia[indice];
            const fatorEscala =
                FS[indice] ?? 1;


            if (!parte || !parte.mesh) {
                return;
            }




                if (!parte.__escalaOriginalAltura) {

parte.__escalaOriginalAltura = parte.mesh.scale.y;

                }


const original =
    parte.__escalaOriginalAltura;

parte.mesh.scale.y =
    original * (1 + ((fator - 1) * fatorEscala));

        });

// =====================================================
// FUNDO Começo
// =====================================================
// Y = Altura
// X = Largura
// Z = Profundidade
// No fundo ele muda pra
// Y = X
// X = Y
// Z = Z
// =====================================================

const fundo = hierarquia[8];
const fatorEscala = FS[8] ?? 1;

if (fundo && fundo.mesh) {

    if (!fundo.__escalaOriginalAltura) {

fundo.__escalaOriginalAltura =
    fundo.mesh.scale.x;

    }

const original =
    fundo.__escalaOriginalAltura;

fundo.mesh.scale.x =
    original * (1 + ((fator - 1) * fatorEscala));

}

// =====================================================
// FUNDO Fim
// =====================================================
// =====================================================
// PARTE DOS MOVIMENTOS
// =====================================================

PQM.forEach((indice) => {

    const parte = hierarquia[indice];
    const fatorMovimento =
        FM[indice] ?? 1;

    if (!parte || !parte.mesh) {
        return;
    }

    if (!parte.__posicaoOriginal) {

        parte.__posicaoOriginal = {
            y: parte.mesh.position.y,
            z: parte.mesh.position.z
        };
    }

    const original = parte.__posicaoOriginal;

    parte.mesh.position.y = original.y + (diferenca * fatorMovimento);

});
}});