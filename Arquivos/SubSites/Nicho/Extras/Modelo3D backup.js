document.addEventListener("DOMContentLoaded", () => {

// =========================================================
// MODELO 3D - SISTEMA PRINCIPAL
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

    const simbolos = Object.getOwnPropertySymbols(scene);

    const simboloHierarquia = simbolos.find(
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


    hierarquia = scene[simboloHierarquia];


    if (!hierarquia || !Array.isArray(hierarquia)) {

        console.error(
            "ERRO: hierarquia encontrada, mas não é válida!"
        );

        return;
    }


    console.log(
        "Quantidade de peças:",
        hierarquia.length
    );


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

});


// =========================================================
// FUNÇÃO AUXILIAR
// DISTÂNCIA ENTRE DOIS PONTOS
// =========================================================

function distancia(a, b) {

    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;

    return Math.sqrt(
        dx * dx +
        dy * dy +
        dz * dz
    );
}


// =========================================================
// PEGAR POSIÇÃO DO OBJETO
// =========================================================

function obterPosicao(parte) {

    try {

        if (
            parte &&
            parte.mesh &&
            parte.mesh.position
        ) {

            return parte.mesh.position;

        }

    } catch (erro) {

        console.warn(
            "Não foi possível obter posição:",
            parte.name
        );

    }

    return null;
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
    // IMPORTANTE
    // Não usamos modelIndex como índice da peça.
    // =====================================================

    console.log("");
    console.log(
        "MODEL INDEX:",
        intersecao.modelIndex
    );


    // =====================================================
    // PROCURAR A PEÇA MAIS PRÓXIMA
    // =====================================================

    let melhorPeca = null;
    let menorDistancia = Infinity;
    let melhorIndice = -1;


    hierarquia.forEach((parte, index) => {

        const posicao =
            obterPosicao(parte);


        if (!posicao) {
            return;
        }


        const d =
            distancia(
                intersecao.position,
                posicao
            );


        console.log(
            "PEÇA:",
            parte.name,
            "| DISTÂNCIA:",
            d
        );


        if (d < menorDistancia) {

            menorDistancia = d;
            melhorPeca = parte;
            melhorIndice = index;

        }

    });


    // =====================================================
    // RESULTADO
    // =====================================================

    if (!melhorPeca) {

        console.error(
            "Não foi possível identificar a peça."
        );

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
        "DISTÂNCIA:",
        menorDistancia
    );


    console.log(
        "OBJETO:",
        melhorPeca
    );


    console.log(
        "MESH:",
        melhorPeca.mesh
    );


    console.log(
        "********************************");


    // =====================================================
    // AQUI VAI ENTRAR O SISTEMA DE SELEÇÃO
    // =====================================================

    selecionarPeca(
        melhorPeca,
        melhorIndice
    );

});


// =========================================================
// SELECIONAR PEÇA
// =========================================================

function selecionarPeca(parte, indice) {

    console.log("");
    console.log(
        ">>> PEÇA SELECIONADA:"
    );

    console.log(
        "Nome:",
        parte.name
    );

    console.log(
        "Índice:",
        indice
    );


    // =====================================================
    // FUTURO:
    // Aqui vamos mudar material,
    // cor, textura, preço etc.
    // =====================================================

}

});