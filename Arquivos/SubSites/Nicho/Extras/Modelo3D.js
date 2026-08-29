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
    // CORES DE TESTE
    // Cada MATERIAL terá uma cor diferente
    // =========================================================

    const coresMateriais = [
        [1, 0, 0, 1],       // Vermelho
        [0, 1, 0, 1],       // Verde
        [0, 0, 1, 1],       // Azul
        [1, 1, 0, 1],       // Amarelo
        [1, 0, 1, 1],       // Rosa
        [0, 1, 1, 1],       // Ciano
        [1, 0.5, 0, 1],     // Laranja
        [0.5, 0, 1, 1],     // Roxo
        [0, 0, 0, 1]        // Preto
    ];


    // =========================================================
    // CARREGAMENTO DO MODELO
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

            console.log(
                "Symbols encontrados:",
                simbolos
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


        modeloPronto = true;

        console.log("");
        console.log(
            "Modelo pronto para receber cliques."
        );


        // =====================================================
        // TESTE INICIAL
        //
        // Pinta cada MATERIAL de uma cor diferente.
        // =====================================================

        console.log("");
        console.log("=================================");
        console.log("TESTE DOS MATERIAIS");
        console.log("=================================");

        testarMateriais();

    });


    // =========================================================
    // TESTAR TODOS OS MATERIAIS
    // =========================================================

    function testarMateriais() {

        if (!hierarquia) {
            return;
        }


        hierarquia.forEach((parte, indicePeca) => {

            try {

                if (!parte.materials) {

                    console.warn(
                        "PEÇA SEM MATERIAL:",
                        parte.name
                    );

                    return;
                }


                if (!(parte.materials instanceof Map)) {

                    console.warn(
                        "Materials não é Map:",
                        parte.name
                    );

                    return;
                }


                // =============================================
                // PERCORRER TODOS OS MATERIAIS DA PEÇA
                // =============================================

                parte.materials.forEach(
                    (material, indiceMaterial) => {

                        if (!material) {

                            console.warn(
                                "Material inválido:",
                                parte.name
                            );

                            return;
                        }


                        console.log("");
                        console.log(
                            "PEÇA:",
                            parte.name
                        );

                        console.log(
                            "ÍNDICE DA PEÇA:",
                            indicePeca
                        );

                        console.log(
                            "ÍNDICE DO MATERIAL:",
                            indiceMaterial
                        );

                        console.log(
                            "NOME DO MATERIAL:",
                            material.name
                        );


                        // =====================================
                        // PEGAR PBR
                        // =====================================

                        const pbr =
                            material.pbrMetallicRoughness;


                        if (!pbr) {

                            console.warn(
                                "Material sem PBR:",
                                material.name
                            );

                            return;
                        }


                        // =====================================
                        // ESCOLHER COR
                        // =====================================

                        const cor =
                            coresMateriais[
                                indicePeca %
                                coresMateriais.length
                            ];


                        // =====================================
                        // APLICAR COR
                        // =====================================

                        pbr.setBaseColorFactor(cor);


                        console.log(
                            "COR APLICADA:",
                            cor
                        );

                    }
                );

            } catch (erro) {

                console.error(
                    "ERRO AO PINTAR MATERIAL DA PEÇA:",
                    parte.name,
                    erro
                );

            }

        });


        console.log("");
        console.log("=================================");
        console.log("TESTE DOS MATERIAIS FINALIZADO");
        console.log("=================================");

    }


    // =========================================================
    // CLIQUE NO MODELO
    // =========================================================

    modelo.addEventListener("click", (evento) => {

        if (!modeloPronto || !scene || !hierarquia) {

            console.log(
                "Modelo ainda não está pronto."
            );

            return;
        }


        console.log("");
        console.log("=================================");
        console.log("CLIQUE NO MODELO");
        console.log("=================================");


        // =====================================================
        // DESCOBRIR PONTO CLICADO
        // =====================================================

        const intersecao =
            modelo.positionAndNormalFromPoint(
                evento.clientX,
                evento.clientY
            );


        if (!intersecao) {

            console.log(
                "Clique fora do modelo."
            );

            return;
        }


        console.log(
            "POSIÇÃO:",
            intersecao.position
        );

        console.log(
            "NORMAL:",
            intersecao.normal
        );

        console.log(
            "UV:",
            intersecao.uv
        );


        // =====================================================
        // IDENTIFICAR PEÇA
        // =====================================================

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


                console.log(
                    "PEÇA:",
                    parte.name,
                    "| DISTÂNCIA:",
                    distancia
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
                    parte.name,
                    erro
                );

            }

        });


        // =====================================================
        // NENHUMA PEÇA
        // =====================================================

        if (!melhorPeca) {

            console.error(
                "Não foi possível identificar a peça."
            );

            return;
        }


        // =====================================================
        // RESULTADO
        // =====================================================

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
            "DISTÂNCIA:",
            menorDistancia
        );

        console.log(
            "********************************"
        );


        // =====================================================
        // PINTAR O MATERIAL DA PEÇA CLICADA
        // =====================================================

        pintarMaterialDaPeca(
            melhorPeca,
            melhorIndice
        );

    });


    // =========================================================
    // PINTAR MATERIAL DA PEÇA CLICADA
    // =========================================================

    function pintarMaterialDaPeca(parte, indicePeca) {

        console.log("");
        console.log("=================================");
        console.log("PINTANDO MATERIAL");
        console.log("=================================");

        console.log(
            "PEÇA:",
            parte.name
        );


        try {

            if (!parte.materials) {

                console.error(
                    "Essa peça não possui materials."
                );

                return;
            }


            if (!(parte.materials instanceof Map)) {

                console.error(
                    "parte.materials não é um Map."
                );

                return;
            }


            parte.materials.forEach(
                (material, indiceMaterial) => {

                    if (!material) {
                        return;
                    }


                    const pbr =
                        material.pbrMetallicRoughness;


                    if (!pbr) {

                        console.warn(
                            "Material sem PBR:",
                            material.name
                        );

                        return;
                    }


                    // =========================================
                    // COR DA PEÇA
                    // =========================================

                    const cor =
                        coresMateriais[
                            indicePeca %
                            coresMateriais.length
                        ];


                    pbr.setBaseColorFactor(cor);


                    console.log(
                        "MATERIAL:",
                        material.name
                    );

                    console.log(
                        "ÍNDICE DO MATERIAL:",
                        indiceMaterial
                    );

                    console.log(
                        "COR:",
                        cor
                    );

                }
            );


            console.log("");
            console.log("SUCESSO!");
            console.log(
                "Material da peça alterado."
            );

        } catch (erro) {

            console.error(
                "ERRO AO ALTERAR MATERIAL:",
                erro
            );

        }

    }

});