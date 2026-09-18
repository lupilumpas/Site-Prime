/* =========================================================
   LIVRO INTERATIVO — MOTOR DE NAVEGAÇÃO
   ========================================================= */

"use strict";

const numeroSku = [106, 109, 111, 108, 76, 8, 25, 33];

const imagensPorProduto = { //por enquanto vou deixar todos com 1 pq, as imagens tão bem merda, eu acho que pelo menos 5 de cada um seria bem legal, fazer umas 10 fotos e pegar as mais bonitas, seria uma boa ideia
    [numeroSku[0]]: 1,
    [numeroSku[1]]: 1,
    [numeroSku[2]]: 1,
    [numeroSku[3]]: 1,
    [numeroSku[4]]: 1,
    [numeroSku[5]]: 1,
    [numeroSku[6]]: 1,
    [numeroSku[7]]: 1,
};

const precoP10 = "Preço:";
const WhatsDescricao = "Olá! Vim pela página JDM Madeiras e gostaria de solicitar um orçamento para";

const pages = [
  {
    type: "cover",
    title: "Capa"
  },
  {
    type: "spread",
    left: {
      number: "01",
      html: `
    <div class="content-enter">
    <div class="IndicePagina2">

        <h1>ÍNDICE</h1>

        <div id="listaIndice"></div>

    </div>
</div>
      `
    },
    right: {
      number: "02",
      html: `
    <div class="content-enter">
      <div class="Indice">

        <img class="indice-imagem" src="Img/Img/Foto 1.png" alt="">
                <img class="indice-imagem2" src="Img/Img/Foto 2.png" alt="">

                  <p class="indice-text">Suportes de Chao</p>
                  <p2 class="indice-text">~</p2>
                  <p1 class="indice-text">Suportes em madeira <br>para plantas e objetos.</p1>

        <div class="galeria-contador"></div>
      </div>
    </div>
      `
    }
  },
    /*  Daqui ate proximo (/*), a parte do livro que eu posso copiar e colar, pra criar um novo produto*/
    {
    type: "spread",
    left: {
      number: "03",
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="0">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
    },
    right: {
      number: "04",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 106</div>
          <h2 class="page-title">Prateleira Flutuante Plantas <br>Objetos Madeira Maciça</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 60 cm:<br>
Largura:60 cm<br>
Profundidade: 14cm<br>
Entre andares fica com 17cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 176,49</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Prateleira Flutuante Plantas Objetos Madeira Maciça', '_blank')">
    Comprar
</button>
      `
    }
  },
  /*  Até aqui, a parte do livro que eu posso copiar e colar, pra criar um novo produto*/
      {
    type: "spread",
    left: {
      number: "05",
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="1">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
    },
    right: {
      number: "06",
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 109</div>
          <h2 class="page-title">Prateleira Flutuante Plantas Objetos <br> Madeira Maciça Segunda Versão</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 70 cm:<br>
Largura: 60 cm<br>
Profundidade: 14 cm<br>
Entre andares fica com 20 cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 176,49</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Prateleira Flutuante Plantas Objetos Madeira Maciça Segunda Versão', '_blank')">
    Comprar
</button>
      `
    }
  },
{ //Inicio 
    type: "spread",
    left: {
      number: "07", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="2">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//aqui tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "08", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 111</div>
          <h2 class="page-title">Criado Mudo Para Cama Flutuante 50x50x19.</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura ?? cm:<br>
Largura: ?? cm<br>
Profundidade: ?? cm<br>
Entre andares fica com ??cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} ???</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "09", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="3"> 

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "10", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 108</div>
          <h2 class="page-title">Prateleira De Canto Para Livros Ou Flores</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 80 cm:<br>
Largura: 20 cm<br>
Profundidade: 14 cm<br>
Entre andares fica com 17 cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 216,78</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Prateleira De Canto Para Livros Ou Flores', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "11", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="4">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "12", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 76</div>
          <h2 class="page-title">Suporte Base Madeira Maciça P/ Ventilador Objetos Diversos</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 40 cm:<br>
Largura: 40 cm<br>
Profundidade: 40 cm<br>
Entre andares fica com ??cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 170,33</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Suporte Base Madeira Maciça P/ Ventilador Objetos Diversos', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "13", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="5">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "14", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 8</div>
          <h2 class="page-title">Floreira Cavalete de madeira suporte para flores jardim</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 90 cm:<br>
Largura: 67 cm<br>
Profundidade: 36 cm (distância entre os pezinhos)<br>
Altura entre degraus: 19cm<br>
Base de baixo: 60x39cm<br>
Base do meio: 60x30cm<br>
Base de cima: 60x21cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 205,43</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Floreira Cavalete de madeira suporte para flores jardim', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "15", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="6">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "16", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 25</div>
          <h2 class="page-title">Floreira de madeira suporte para flores jardim</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 116 cm:<br>
Largura: 44 cm<br>
Profundidade: ?? cm<br>
4 andar....................24 cm<br>
3 andar ...................41 cm<br>
2 andar ...................59 cm<br>
1 andar ...................79 cm<br>
Entre andares fica com 22 cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 237,43</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Floreira de madeira suporte para flores jardim', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "17", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="7">

        <div class="galeria-controles">

          <button class="galeria-anterior" type="button">
            ←
          </button>

          <span>Trocar fotos</span>

          <button class="galeria-proxima" type="button">
            →
          </button>

        </div>

        <img class="galeria-imagem" src="" alt="Imagem do produto">

        <div class="galeria-contador"></div>

      </div>
    </div>
      `
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "18", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 33</div>
          <h2 class="page-title">Floreira de madeira suporte para flores jardim</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
Medidas:<br>
Altura 89 cm:<br>
Largura: 51 cm<br>
Profundidade: 36 cm (distância entre os pezinhos)<br>
Altura entre degraus: 19cm<br>
Base de baixo: 44x39cm<br>
Base do meio: 44x30cm<br>
Base de cima: 44x21cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 220,89</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} Floreira de madeira suporte para flores jardim', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  {
    type: "end",
    title: "Contracapa"
  }
];


const book = document.getElementById("book");
const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");
const leftNumber = document.getElementById("leftNumber");
const rightNumber = document.getElementById("rightNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const toast = document.getElementById("toast");
const stage = document.getElementById("stage");

let currentPage = 0;
let toastTimer = null;

const totalPages = pages.length;

function setPageContent(element, html) {
  element.innerHTML = html || "";
}

function iniciarGaleria() {
  const galerias = document.querySelectorAll(".galeria-produto");

  galerias.forEach(galeria => {
const indice = Number(galeria.dataset.indice);
const nomePasta = numeroSku[indice];
    const imagem = galeria.querySelector(".galeria-imagem");
    const anterior = galeria.querySelector(".galeria-anterior");
    const proxima = galeria.querySelector(".galeria-proxima");
    const contador = galeria.querySelector(".galeria-contador");

    const quantidade = imagensPorProduto[nomePasta] || 0;
    const imagens = [];

    for (let i = 1; i <= quantidade; i++) {
      const caminho = `Img/Produtos/${nomePasta}/${String(i).padStart(2, "0")}.png`;
      imagens.push(caminho);
    }

    let indiceAtual = 0;

    function atualizarGaleria() {
      if (imagens.length === 0) return;

      imagem.src = imagens[indiceAtual];
      contador.textContent = `${indiceAtual + 1} / ${imagens.length}`;

      anterior.disabled = indiceAtual === 0;
      proxima.disabled = indiceAtual === imagens.length - 1;
    }

    anterior.addEventListener("click", () => {
      if (indiceAtual <= 0) return;

      indiceAtual--;
      atualizarGaleria();
    });

    proxima.addEventListener("click", () => {
      if (indiceAtual >= imagens.length - 1) return;

      indiceAtual++;
      atualizarGaleria();
    });

    atualizarGaleria();
  });
}

function gerarIndice() {
    const lista = document.getElementById("listaIndice");
    if (!lista) return;

    lista.innerHTML = "";

    numeroSku.forEach((sku, indice) => {

        const numeroIndice = String(indice + 1).padStart(2, "0");
        const pagina = indice + 2;

        const item = document.createElement("a");

        item.href = "#";
        item.className = "indice-item";
        item.dataset.pagina = pagina;

        item.innerHTML = `
            <span>${numeroIndice} -- Sku${sku}</span>
            <span class="indice-linha"></span>
            <span>${pages[pagina]?.left?.number || ""} e ${pages[pagina]?.right?.number || ""}</span>
        `;

        lista.appendChild(item);
    });
}

function updateContent() {
  const current = pages[currentPage];

  if (current.type === "cover") {
    setPageContent(leftContent, "");
    setPageContent(rightContent, "");
    leftNumber.textContent = "";
    rightNumber.textContent = "";
  } else if (current.type === "end") {
    setPageContent(leftContent, "");
    setPageContent(rightContent, "");
    leftNumber.textContent = "";
    rightNumber.textContent = "";
  } else {
    setPageContent(leftContent, current.left.html);
    setPageContent(rightContent, current.right.html);
    leftNumber.textContent = current.left.number;
    rightNumber.textContent = current.right.number;
        iniciarGaleria();
        gerarIndice();
  }
}

function updateLabels() {
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === totalPages - 1;
}

function updateCoverState() {
  book.classList.remove("book-cover-only");
  book.classList.remove("book-open");
  book.classList.remove("book-end");

  document.body.classList.remove(
    "state-cover",
    "state-open",
    "state-end"
  );

  if (currentPage === 0) {
    book.classList.add("book-cover-only");
    document.body.classList.add("state-cover");
    return;
  }

  if (pages[currentPage].type === "end") {
    book.classList.add("book-end");
    document.body.classList.add("state-end");
    return;
  }

  book.classList.add("book-open");
  document.body.classList.add("state-open");
}

function render() {
  updateContent();
  updateLabels();
  updateCoverState();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
}

function nextPage() {
  currentPage++;
  render();
}

function previousPage() {
  currentPage--;
  render();
}

function restart() {
  currentPage = 0;
  render();
}

function handleKeyboard(event) {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    nextPage();
    return;
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    previousPage();
    return;
  }

  if (event.key === "Home") {
    event.preventDefault();
    restart();
    return;
  }
}

function handleTouchStart(event) {
  if (!event.touches || event.touches.length === 0) return;
  window.__bookTouchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  if (typeof window.__bookTouchStartX !== "number") return;

  const endX = event.changedTouches[0].clientX;
  const delta = endX - window.__bookTouchStartX;
  window.__bookTouchStartX = null;

  if (Math.abs(delta) < 45) return;

  if (delta < 0) {
    nextPage();
  } else {
    previousPage();
  }
}

prevButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
document.addEventListener("keydown", handleKeyboard);
stage.addEventListener("touchstart", handleTouchStart, { passive: true });
stage.addEventListener("touchend", handleTouchEnd, { passive: true });

document.addEventListener("click", (event) => {

    const item = event.target.closest(".IndicePagina2 .indice-item");

    if (!item) return;

    event.preventDefault();

    const pagina = Number(item.dataset.pagina);

    if (pagina < 0 || pagina >= totalPages) return;

    currentPage = pagina;
    render();
});

document.querySelectorAll(".marca-tab-1, .marca-tab-2, .marca-tab-3").forEach(botao => {
    botao.addEventListener("click", () => {
        currentPage = Number(botao.dataset.pagina);
        render();
    });
});
    render();