const modelo = document.getElementById("modelo3D");

function forcarRender() {
    if (!modelo) return;

    const simbolos = Object.getOwnPropertySymbols(modelo);
    const simboloScene = simbolos.find(s => String(s) === "Symbol(scene)");

    if (simboloScene && modelo[simboloScene]) {
        const scene = modelo[simboloScene];
        scene.queueRender();
        // scene.updateShadow(); // descomente se usar sombra
    }
}

modelo.addEventListener("camera-change", () => {
    console.log("CAMERA:", modelo.getCameraOrbit().theta);
});

let hierarquia = null;
let modeloPronto = false;


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

        console.log("=== HIERARQUIA ===");
console.log(hierarquia);
console.log("=== OBJETOS DO MODELO ===");
hierarquia.forEach((parte, indice) => {
    console.log(indice, parte.name);
});

    // Modelo carregado
    modeloPronto = true;

        // Ativa Branco ao iniciar
    const botaoBranco = document.querySelector(
        '.seletor-texturas button[data-textura="Branco"]'
    );

    botaoBranco.click();

    const primeiraOpcao = document.querySelector(
    '.seletor-partes-internas button[data-parte="opcao1"]'
);

primeiraOpcao.click();

});

const botaoRotacao = document.getElementById("pararRotacao");

botaoRotacao.addEventListener("click", () => {

    modelo.autoRotate = !modelo.autoRotate;

    if (modelo.autoRotate) {
        botaoRotacao.textContent = "⏸ Parar rotação";
    } else {
        botaoRotacao.textContent = "▶ Continuar rotação";
    }

});

const botoesTextura = document.querySelectorAll(".seletor-texturas button");

const configuracaoTexturas = [
    {
        nome: "Branco",
        textura: "Branco",
        imagem: "Extras/Texturas/Branco.png",
        corTexto: "black"
    },
    {
        nome: "Camurça",
        textura: "Camurça",
        imagem: "Extras/Texturas/Camurça.png",
        corTexto: "black"
    },
    {
        nome: "Envelhecido",
        textura: "Envelhecido",
        imagem: "Extras/Texturas/Envelhecido.png",
        corTexto: "white"
    },
    {
        nome: "Cerejeira Claro",
        textura: "Cerejeira Claro",
        imagem: "Extras/Texturas/Cerejeira Claro.png",
        corTexto: "white"
    },
    {
        nome: "Cerejeira Escuro",
        textura: "Cerejeira Escuro",
        imagem: "Extras/Texturas/Cerejeira Escuro.png",
        corTexto: "white"
    },
    {
        nome: "Cinza Claro",
        textura: "Cinza Claro",
        imagem: "Extras/Texturas/Cinza Claro.png",
        corTexto: "white"
    },
    {
        nome: "Cinza Escuro",
        textura: "Cinza Escuro",
        imagem: "Extras/Texturas/Cinza Escuro.png",
        corTexto: "white"
    },
    {
        nome: "Imbuia",
        textura: "Imbuia",
        imagem: "Extras/Texturas/Imbuia.png",
        corTexto: "white"
    },
    {
        nome: "Mogno",
        textura: "Mogno",
        imagem: "Extras/Texturas/Mogno.png",
        corTexto: "white"
    },
    {
        nome: "Cru",
        textura: "Cru",
        imagem: "Extras/Texturas/Cru.png",
        corTexto: "black"
    },
    {
        nome: "Por do sôl",
        textura: "Por do sôl",
        imagem: "Extras/Texturas/Por do sôl.png",
        corTexto: "white"
    },
    {
        nome: "Preto",
        textura: "Preto",
        imagem: "Extras/Texturas/Preto.png",
        corTexto: "white"
    },
    {
        nome: "Caramelo",
        textura: "Caramelo",
        imagem: "Extras/Texturas/Caramelo.png",
        corTexto: "black"
    },
    {
        nome: "Pastel",
        textura: "Pastel",
        imagem: "Extras/Texturas/Pastel.png",
        corTexto: "white"
    },
    {
        nome: "Rosê",
        textura: "Rosê",
        imagem: "Extras/Texturas/Rosê.png",
        corTexto: "white"
    },
    {
        nome: "Safari",
        textura: "Safari",
        imagem: "Extras/Texturas/Safari.png",
        corTexto: "white"
    },
];

botoesTextura.forEach((botao, indice) => {

    const configuracao = configuracaoTexturas[indice];

    botao.dataset.textura = configuracao.textura;

    botao.querySelector("img").src = configuracao.imagem;

    botao.querySelector("span").textContent = configuracao.nome;

    botao.querySelector("span").style.color = configuracao.corTexto;

});

const normalPath = "Extras/Texturas/Normal.png";
const roughnessPath = "Extras/Texturas/Roughness.png";

botoesTextura.forEach((botao, indice) => {

    botao.addEventListener("click", async () => {

        // Remove o destaque de todos
        botoesTextura.forEach((b) => {
            b.classList.remove("selecionado");
        });

        // Destaca o botão clicado
        botao.classList.add("selecionado");

const textura = botao.dataset.textura;

const configuracao = configuracaoTexturas.find(
    (config) => config.textura === textura
);

const caminho = configuracao.imagem;

        const baseColor = await modelo.createTexture(caminho);
        const normal = await modelo.createTexture(normalPath);
        const roughness = await modelo.createTexture(roughnessPath);

        hierarquia.forEach((parte) => {

            if (!parte.materials) return;
            if (!(parte.materials instanceof Map)) return;

            parte.materials.forEach((material) => {

                if (!material?.pbrMetallicRoughness) return;

                material.pbrMetallicRoughness
                    .setBaseColorFactor([1, 1, 1, 1]);

                material.pbrMetallicRoughness.baseColorTexture
                    ?.setTexture(baseColor);

                material.normalTexture
                    ?.setTexture(normal);

                material.pbrMetallicRoughness.roughnessTexture
                    ?.setTexture(roughness);

            });

        });

    });

});

// =========================================================
// PARTES INTERNAS
// =========================================================

const botoesPartesInternas = document.querySelectorAll(
    ".seletor-partes-internas button"
);

const configuracoesInternas = {

    opcao0: [
    ],
    
    opcao1: [
        "Cube",
        "Cube009"
    ],

    opcao2: [
        "Cube010",
        "Cube011"
    ],

    opcao3: [
        "Cube013"
    ],

    opcao4: [
        "Cube012"
    ],

    opcao5: [
        "Cube014",
        "Cube015"
    ],

    opcao6: [
        "Cube016",
        "Cube017"
    ],

    opcao7: [
        "Cube018",
        "Cube019",
        "Cube020",
        "Cube021"
    ],

    opcao8: [
        "Cube022",
        "Cube023",
        "Cube025"
    ],
        opcao9: [
        "Cube024",
        "Cube026",
        "Cube027"
    ],
        opcao10: [
        "Cube028",
        "Cube029",
        "Cube030",
        "Cube031"
    ]

};

function encontrarObjeto(nome, objeto = hierarquia) {

    if (!objeto) return null;

    if (objeto.name === nome) {
        return objeto;
    }

    if (objeto.children) {

        for (const filho of objeto.children) {

            const encontrado = encontrarObjeto(nome, filho);

            if (encontrado) {
                return encontrado;
            }

        }

    }

    return null;
}

botoesPartesInternas.forEach((botao) => {

    botao.addEventListener("click", () => {

        const opcao = botao.dataset.parte;

        console.log("================================");
        console.log("CLICOU:", opcao);


        // =====================================================
        // SELEÇÃO DO BOTÃO
        // =====================================================

        botoesPartesInternas.forEach((b) => {
            b.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");


        // =====================================================
        // ESCONDER TODAS AS PEÇAS INTERNAS
        // =====================================================

        Object.values(configuracoesInternas)
            .flat()
            .forEach((nome) => {

                // Primeiro tenta encontrar pela hierarquia
                let objeto = hierarquia.find(
                    (parte) => parte.name === nome
                );

                // Se não encontrar, usa encontrarObjeto()
                if (!objeto) {
                    objeto = encontrarObjeto(nome);
                }

                console.log("Escondendo:", nome, "=>", objeto);

                if (objeto && objeto.mesh) {

                    objeto.mesh.visible = false;

                    console.log(
                        "Visible agora:",
                        objeto.mesh.visible
                    );

                }

            });


        // =====================================================
        // MOSTRAR A OPÇÃO ESCOLHIDA
        // =====================================================

        configuracoesInternas[opcao].forEach((nome) => {

            let objeto = hierarquia.find(
                (parte) => parte.name === nome
            );

            // Se não encontrar, usa encontrarObjeto()
            if (!objeto) {
                objeto = encontrarObjeto(nome);
            }

            console.log("Mostrando:", nome, "=>", objeto);

            if (objeto && objeto.mesh) {

                objeto.mesh.visible = true;

            }

        });
// === FORÇA O RENDER ===
        forcarRender();
    });

});