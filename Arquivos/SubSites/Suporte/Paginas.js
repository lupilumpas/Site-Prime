const WhatsDescricao = "Olá! Vim pela página JDM Madeiras e gostaria de solicitar um orçamento para";
const precoP10 = "Preço: R$";
const pages = [
  {
    type: "cover",
    title: "Capa"
  },
    { //Aqui começa o indice do de chão
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
    { //Inicio 
    type: "spread",
    left: {
      number: "03", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "04", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "05", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
//no data-andice tem que somar o data-indice da pagina anterior + 1, ou seja (0+1=1) assim ele reconhece as novas paginas
    },
    right: {
      number: "06", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "07", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "08", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "09", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "10", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "11", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "12", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
  { //Inicio 
    type: "spread",
    left: {
      number: "13", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "14", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 75</div>
          <h2 class="page-title">???</h2>
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
Altura 73 cm:<br>
Profundidade: 27 cm<br>
BASE: 60 cm<br>
1 e 2 andares: 34 cm<br>
3 andar: 28 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 184,78</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
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
      number: "16", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 7</div>
          <h2 class="page-title">???</h2>
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
Suporte 3 niveis<br>
Altura 89 cm:<br>
Largura: 51 cm<br>
profundidade (distância entre os pezinhos): 36cm<br>
Altura entre degraus: 19cm<br>
Base de baixo: 44x39cm<br>
Base do meio: 44x30cm<br>
Base de cima: 44x21cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 184,78</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
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
      <div class="galeria-produto" data-indice="8">

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
          <div class="chapter-kicker">Sku 15</div>
          <h2 class="page-title">???</h2>
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
Largura: 25 cm<br>
Profundidade: 60 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 195,10</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "19", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="9">

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
      number: "20", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 12</div>
          <h2 class="page-title">???</h2>
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
Largura: 80 cm<br>
Profundidade: 30 cm<br>
DESIGN: SUPORTE 3 ANDARES<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 201,30</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "21", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="10">

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
      number: "22", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 63</div>
          <h2 class="page-title">???</h2>
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
-TAMANHO DAS BASES DE CIMA PARA BAIXO:<br>
30cm/40cm/50cm/60cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 108,39</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "23", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="11">

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
      number: "24", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 53</div>
          <h2 class="page-title">???</h2>
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
Altura 50 cm:<br>
Largura: 50 cm<br>
Profundidade: 14 cm<br>
3 bases com 50 cm cada.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 91,87</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "25", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="12">

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
      number: "26", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 61</div>
          <h2 class="page-title">???</h2>
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
Altura 50 cm:<br>
Largura: 50 cm<br>
Profundidade: 14 cm<br>
Suporte 4 níveis,base com 50 cm mais 3 com 25 cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 81,55</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "27", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="13">

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
      number: "28", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 66</div>
          <h2 class="page-title">???</h2>
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
Suporte 3 andares<br>
Altura 40 cm:<br>
Largura: 40 cm<br>
Profundidade: 14 cm<br>
base com 40 cm<br>
meio com 30 cm<br>
encima 20 cm<br>
entre andares 20 cm.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 102,20</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "29", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="14">

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
      number: "30", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 38</div>
          <h2 class="page-title">???</h2>
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
Altura 50 cm:<br>
Largura: 53 cm<br>
Profundidade: 33 cm<br>
DESIGN: SUPORTE 3 ANDARES<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 257,04</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "31", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="15">

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
      number: "32", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 79</div>
          <h2 class="page-title">???</h2>
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
Altura 120 cm:<br>
Largura: 50 cm<br>
Profundidade: 28 cm<br>
Com rodinhas sem trava.<br>
Fundo em mdf 3 mm.<br>
DESIGN: SUPORTE 6 ANDARES<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 402,60</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "33", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="16">

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
      number: "34", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 65</div>
          <h2 class="page-title">???</h2>
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
Altura como cavalete: 80 cm:<br>
Altura como Painel: 160 cm:<br>
Largura: 60 cm<br>
ACOMPANHA 6 CAIXINHAS COM :<br>
2 CAIXAS 30 CM PROFUNDIDADE DE 14 CM<br>
4 CAXIAS 40 CM PROFUNDIDADE DE 14 CM<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 247,75</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "35", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="17">

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
      number: "36", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 84</div>
          <h2 class="page-title">???</h2>
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
Altura como cavalete: 80 cm:<br>
Altura como Painel: 160 cm:<br>
Largura: 60 cm<br>
ACOMPANHA 6 CAIXINHAS COM :<br>
2 CAIXAS 30 CM PROFUNDIDADE DE 14 cm<br>
4 CAXIAS 40 CM PROFUNDIDADE DE 14 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 299,37</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "37", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="18">

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
      number: "38", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 104</div>
          <h2 class="page-title">???</h2>
          <div class="page-rule"></div>
          <p class="page-text">
<strong>
Transforme seu espaço com a Floreira de Chão, oferecendo um cantinho especial para suas flores.<br>
<br>
Suporte ecológico confeccionado com cuidado e capricho em pinus tonalizado com brilho suave.<br>
<br>
Suas plantas merecem destaque e seu ambiente a naturalidade da madeira maciça.<br>
<br>
TAMPA PARA BOTIJÃO DE G.A.S<br>
TAMANHO DE COZINHA PADRÃO DE 13KG.<br>
Medidas:<br>
Altura 70 cm:<br>
Largura: 54 cm<br>
Profundidade: 45 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 308,66</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "39", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="19">

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
      number: "40", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 201</div>
          <h2 class="page-title">???</h2>
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
Altura do chão a definir pelo cliente.<br>
Largura: 240 cm<br>
Profundidade: 45 cm<br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 402,60</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "41", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="20">

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
      number: "42", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 2</div>
          <h2 class="page-title">???</h2>
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
Altura 53 cm (Sem contar o encosto):<br>
Altura 83 cm (Contando com o encosto):<br>
Largura: 87 cm<br>
Profundidade: 50 cm<br>
Em pinus com verniz acrilico transparente.<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 609,06</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
      { // aqui começa o indice dos aérios
    type: "spread",
    left: {
      number: "43",
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
      number: "44",
      html: `
    <div class="content-enter">
      <div class="Indice">

        <img class="indice-imagem" src="Img/Img/Foto 3.png" alt="">
                <img class="indice-imagem2" src="Img/Img/Foto 2.png" alt="">

                  <p4 class="indice-text">Suportes Aereos</p4>
                  <p3 class="indice-text">´</p3>
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
      number: "45",
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="21">

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
      number: "46",
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
      number: "47",
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="22">

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
      number: "48",
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
      number: "49", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="23">

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
      number: "50", //aqui é a mesma coisa o numero da pagina anterior mais +1
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
      number: "51", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="24">

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
      number: "52", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 5</div>
          <h2 class="page-title">???</h2>
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
Largura: 40 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 134,20</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
    Comprar
</button>
      `
    }
  }, //Fim
  { //Inicio 
    type: "spread",
    left: {
      number: "53", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="25">

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
      number: "54", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku 26</div>
          <h2 class="page-title">???</h2>
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
Altura 44 cm:<br>
Largura: 64 cm<br><br>

PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
<a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a></strong></p>

<p10>${precoP10} 205,43</p10>

<button class="meu-botao" onclick="window.open('https://api.whatsapp.com/send/?phone=5541991371245&text=${WhatsDescricao} ???(aqui é o titulo do produto)', '_blank')">
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