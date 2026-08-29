document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // MODELO 3D
    // =========================================================

    const modelo = document.getElementById("modelo3D");

    if (!modelo) {
        console.error("ERRO: #modelo3D não encontrado!");
        return;
    }

    console.log("model-viewer encontrado!");

    let scene = null;
    let hierarquia = null;
    let modeloPronto = false;


    // =========================================================
    // CONFIGURAÇÃO
    // =========================================================

    // Altura original do modelo
    const ALTURA_ORIGINAL = 60;

    // Altura atual
    let alturaAtual = ALTURA_ORIGINAL;


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

        console.log("");
        console.log("=================================");
        console.log("MODELO 3D CARREGADO");
        console.log("=================================");

        scene = modelo.model;

        if (!scene) {
            console.error("ERRO: modelo interno não encontrado!");
            return;
        }


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

        if (!simboloHierarquia) {

            console.error(
                "ERRO: Symbol(hierarchy) não encontrado!"
            );

            return;
        }

        hierarquia =
            scene[simboloHierarquia];


        if (!hierarquia || !Array.isArray(hierarquia)) {

            console.error(
                "ERRO: hierarquia inválida!"
            );

            return;
        }


        // =====================================================
        // LISTAR PEÇAS
        // =====================================================

        console.log("");
        console.log("PEÇAS DISPONÍVEIS:");

        hierarquia.forEach((parte, index) => {

            console.log(
                index,
                "|",
                parte.name
            );

        });


        // =====================================================
        // PINTAR PEÇAS
        // =====================================================

        pintarTodasAsPecas();


        modeloPronto = true;

        console.log("");
        console.log(
            "Modelo pronto para receber cliques."
        );


        // =====================================================
        // MOSTRAR INFORMAÇÕES DOS EIXOS
        // =====================================================

        diagnosticarEixos();

    });


    // =========================================================
    // PINTAR TODAS AS PEÇAS
    // =========================================================

    function pintarTodasAsPecas() {

        hierarquia.forEach((parte, indice) => {

            try {

                if (!parte.materials) {
                    return;
                }

                if (!(parte.materials instanceof Map)) {
                    return;
                }

                parte.materials.forEach((material) => {

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

            } catch (erro) {

                console.warn(
                    "Erro ao pintar:",
                    parte.name,
                    erro
                );

            }

        });

    }


    // =========================================================
    // DIAGNÓSTICO DOS EIXOS
    // =========================================================

    function diagnosticarEixos() {

        console.log("");
        console.log("=================================");
        console.log("DIAGNÓSTICO DOS EIXOS");
        console.log("=================================");

        hierarquia.forEach((parte, indice) => {

            try {

                if (
                    !parte.mesh ||
                    !parte.mesh.position
                ) {
                    return;
                }

                console.log(
                    indice,
                    "|",
                    parte.name,
                    "| POSIÇÃO:",
                    parte.mesh.position
                );

            } catch (erro) {

                console.warn(
                    "Erro ao diagnosticar:",
                    parte.name
                );

            }

        });

    }


    // =========================================================
    // BARRA DE ALTURA
    // =========================================================

    const barraAltura =
        document.getElementById("barra-altura");

    const valorAltura =
        document.getElementById("valor-altura");


    if (!barraAltura) {

        console.error(
            "ERRO: #barra-altura não encontrada!"
        );

    } else {

        barraAltura.addEventListener(
            "input",
            () => {

                const novaAltura =
                    Number(barraAltura.value);

                alturaAtual =
                    novaAltura;


                // ---------------------------------------------
                // ATUALIZAR TEXTO
                // ---------------------------------------------

                if (valorAltura) {

                    valorAltura.textContent =
                        novaAltura + " cm";

                }


                // ---------------------------------------------
                // ALTERAR MODELO
                // ---------------------------------------------

                if (modeloPronto) {

                    alterarAltura(
                        novaAltura
                    );

                }

            }
        );

    }


    // =========================================================
    // ALTERAR ALTURA
    // =========================================================

    function alterarAltura(novaAltura) {

        console.log("");
        console.log("=================================");
        console.log("ALTERANDO ALTURA");
        console.log("=================================");

        console.log(
            "Altura anterior:",
            alturaAtual,
            "cm"
        );

        console.log(
            "Nova altura:",
            novaAltura,
            "cm"
        );


        const diferenca =
            novaAltura -
            ALTURA_ORIGINAL;


        console.log(
            "Diferença:",
            diferenca,
            "cm"
        );


        // =====================================================
        // TESTE INICIAL
        //
        // POR ENQUANTO vamos alterar apenas a escala
        // VERTICAL das peças.
        //
        // Isso NÃO escala o modelo inteiro.
        // =====================================================

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

        const pecasQueAumentam = [
            0,
            2,
            5,
            7,
            8,
        ];

        const pecasQueMovem = [
            1,
            3,
            4,
            6,
        ];

        pecasQueAumentam.forEach((indice) => {

            const parte =
                hierarquia[indice];


            if (!parte || !parte.mesh) {
                return;
            }


            try {

                // =============================================
                // GUARDAR ESCALA ORIGINAL
                // =============================================

                if (!parte.__escalaOriginal) {

                    parte.__escalaOriginal = {
                        x: parte.mesh.scale.x,
                        y: parte.mesh.scale.y,
                        z: parte.mesh.scale.z
                    };

                }


                const original =
                    parte.__escalaOriginal;


                // =============================================
                // ALTERAR SOMENTE O EIXO Y
                // =============================================

                parte.mesh.scale.set(
                    original.x,
                    original.y * fator,
                    original.z
                );

            } catch (erro) {

            }

        });

// =====================================================
// FUNDO
// =====================================================

const fundo = hierarquia[8];

if (fundo && fundo.mesh) {

    if (!fundo.__escalaOriginal) {

        fundo.__escalaOriginal = {
            x: fundo.mesh.scale.x,
            y: fundo.mesh.scale.y,
            z: fundo.mesh.scale.z
        };

    }

    const original =
        fundo.__escalaOriginal;

    fundo.mesh.scale.set(
        original.x * fator,
        original.y,
        original.z
    );
}

// =====================================================
// FUNDO
// =====================================================

pecasQueMovem.forEach((indice) => {

    const parte = hierarquia[indice];
    const fatorMovimento = 5.1;

    if (!parte || !parte.mesh) {
        return;
    }

    if (!parte.__posicaoOriginal) {

        parte.__posicaoOriginal = {
            x: parte.mesh.position.x,
            y: parte.mesh.position.y,
            z: parte.mesh.position.z
        };
    }

    const original = parte.__posicaoOriginal;

    parte.mesh.position.set(
        original.x,
        original.y + (diferenca * fatorMovimento),
        original.z
    );

});

    }

    // =========================================================
    // CLIQUE NO MODELO
    // =========================================================

    modelo.addEventListener("click", (evento) => {

        if (!modeloPronto || !scene || !hierarquia) {

            return;
        }


        const intersecao =
            modelo.positionAndNormalFromPoint(
                evento.clientX,
                evento.clientY
            );


        if (!intersecao) {
            return;
        }


        let melhorPeca = null;
        let menorDistancia = Infinity;
        let melhorIndice = -1;


        hierarquia.forEach((parte, index) => {

            try {

                if (
                    !parte.mesh ||
                    !parte.mesh.position
                ) {
                    return;
                }


                const posicao =
                    parte.mesh.position;


                const dx =
                    intersecao.position.x -
                    posicao.x;

                const dy =
                    intersecao.position.y -
                    posicao.y;

                const dz =
                    intersecao.position.z -
                    posicao.z;


                const distancia =
                    Math.sqrt(
                        dx * dx +
                        dy * dy +
                        dz * dz
                    );


                if (distancia < menorDistancia) {

                    menorDistancia =
                        distancia;

                    melhorPeca =
                        parte;

                    melhorIndice =
                        index;

                }

            } catch (erro) {

                console.warn(
                    "Erro ao analisar:",
                    parte.name
                );

            }

        });


        if (!melhorPeca) {
            return;
        }


        console.log("");
        console.log("********************************");
        console.log("PEÇA SELECIONADA");
        console.log("********************************");

        console.log(
            "ÍNDICE:",
            melhorIndice
        );

        console.log(
            "NOME:",
            melhorPeca.name
        );

        console.log(
            "********************************");

    });

});