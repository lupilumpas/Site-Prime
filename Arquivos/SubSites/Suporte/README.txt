{ //Inicio 
    type: "spread",
    left: {
      number: "??", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
    <div class="content-enter">
      <div class="galeria-produto" data-indice="?">

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
      number: "??", //aqui é a mesma coisa o numero da pagina anterior mais +1
      html: `
        <div class="content-enter">
          <div class="chapter-kicker">Sku ???</div>
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