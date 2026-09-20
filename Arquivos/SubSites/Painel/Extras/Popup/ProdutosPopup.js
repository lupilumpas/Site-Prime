const precosProdutos = [
    "R$ 226,07",//
    "R$ 278,72",//
    "R$ 350,98",//
    "R$ 252,91",//
    "R$ 277,69",//
    "R$ 257,04",//
    "R$ 268,40",//
    "R$ 469,99",//
    "R$ 277,69",//
    "R$ 226,07",//
    "R$ 588,41",//
    "R$ 712,29",//
    "R$ 196,14",//
    "R$ 258,07",//
    "R$ 154,84",//
];

const NomesdosArquivos = [
    ["sku 10"],
    ["sku 18"],
    ["sku 21"],
    ["sku 31"],
    ["sku 59"],
    ["sku 72"],
    ["sku 77"],
    ["sku 80"],
    ["sku 82"],
    ["sku 88"],
    ["sku 89"],
    ["sku 90"],
    ["sku 99"],
    ["sku 110 1", "sku 110 2"],
    ["sku 71"]

];

const imagensProdutos = {
    "sku 10": 9, //
    "sku 18": 5, //
    "sku 21": 7, //
    "sku 31": 12, //
    "sku 59": 7, //
    "sku 72": 6, //
    "sku 77": 7, //
    "sku 80": 5, //
    "sku 82": 10, //
    "sku 88": 12, //
    "sku 89": 5, //
    "sku 90": 5, //
    "sku 99": 7, //
    "sku 110": 10, //
    "sku 71": 6
};

const produtos = [
    "Floreira de parede <br>vertical jardim com 4 <br>cachepos 1,20x60  sku10",
    "Floreira de parede <br>horizontal jardim 3 <br>prateleiras sku18",
    "Floreira de parede <br>horizontal para jardim <br>externo com 5 cachepots <br>sku21",
    "Floreira de parede <br>vertical jardim 1,20x60 <br>com 4 cachepos sku31",
    "Floreira de parede <br>vertical jardim com 4 <br>cachepos cor cerejeira <br>1,20x80 sku59",
    "Floreira de parede <br>treliçada jardim horizontal  <br>100x60 cm sku72",
    "Floreira de parede <br>vertical externa com 3 <br>cachepos 100x50 cm <br>sku77",
    "Floreira de parede <br>vertical jardim <br>com 6 andares sku80",
    "Floreira de parede <br>vertical jardim <br>com 4 cachepos cor <br>cerejeira. sku82",
    "Floreira de parede <br>horizontal jardim <br>com 5 andares sku88",
    "Floreira de parede <br>vertical jardim <br>com 6 cachepos sku89",
    "Floreira de parede <br>vertical jardim <br>com 8 cachepos sku90",
    "Floreira de parede <br>vertical jardim <br>com 4 cachepos sku99",
    "Floreira de parede <br>vertical ou horizontal <br>jardim com 4 cachepos <br>sku110",
    "Floreira de parede <br>60x60 jardim suspenso <br>3 bases sku71"
];

const linkWhatsApp = "https://api.whatsapp.com/send/?phone=5541991371245&text=";

const descricaoProduto = [ 
`
<p>Painel estilo treliçado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 60 cm</p>
<h3>DIMENSÕES DOS CACHEPOS :</h3>
<p>Largura: 40 cm</p>
<p>Profundidade: 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 80 cm</p>
<p>Largura: 120 cm</p>
<h3>DIMENSÕES DA PRATELEIRA:</h3>
<p>Largura: 90 cm</p>
<p>Profundidade: 12 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL</h1>
<p>Altura: 120 cm</p>
<p>Largura: 150 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>4 chachepos Largura: 40 x 14 cm</p>
<p>1 chachepo largura: 50 x 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo treliçado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 60 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>4 chachepos Largura: 40 x 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,

`
<p>Painel estilo treliçado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 80 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>4 chachepos Largura: 50 x 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo treliçado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 60 cm</p>
<p>Largura: 100 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>2 chachepos Largura: 60 x 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 100 cm</p>
<p>Largura: 50 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>3 chachepos Largura: 30 x 14 cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 150 cm</p>
<p>Largura: 100 cm</p>
<br>
<p>6 PRATELEIRAS COM 70CM X 12CM CADA.</p>
<p>ESPAÇO ENTRE ANDARES - APROX. 26 CM.</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 80 cm</p>
<h3>DIMENSÕES DOS CACHEPOS:</h3>
<p>LARGURA: 40 CM</p>
<p>PROFUNDIDADE: 14 CM</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 60 cm</p>
<p>Largura: 90 cm</p>
<br>
<p>4 BASES DE 40X12 CM</p>
<p>1 BASE DE 54X12 CM (BASE CENTRAL)</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 200 cm</p>
<p>Largura: 150 cm</p>
<p>6 CACHEPOS DE 40 CM X 14 CM</p>
<p>Altura cachepôs: 8,5cm EXTERNA / 6,5cm INTERNA</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 240 cm</p>
<p>Largura: 170 cm</p>
<p>8 CACHEPOS DE 40cm X 14 cm</p>
<p>Altura cachepôs: 8,5cm EXTERNA / 6,5cm INTERNA</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 60 cm</p>
<h3>Extras</h3>
<p>4 CACHEPOT DE 40 CM X 14 CM</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo ripado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 120 cm</p>
<p>Largura: 60 cm</p>
<p>2 CACHEPOT COM 40 CM FUNDURA DE 14 CM.</p>
<p>2 CACHEPOT COM 35 CM FUNDURA 14 CM.</p>
<br>
<h1>OBS:Eles podem ser usados na vertical ou horizontal,pois são em módulos.</h1>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
`
<p>Painel estilo treliçado nas cores das imagens.</p>
<h1>DIMENSÕES PAINEL :</h1>
<p>Altura: 60 cm</p>
<p>Largura: 60 cm</p>
<h3>Bases:</h3>
<p>3 BASES COM 40cm X 12cm</p>
<br>
<p>FAZEMOS OS PAINÉIS NO TAMANHO DO ESPAÇO DA SUA PAREDE; BASTA NOS PASSAR AS MEDIDAS PARA FAZERMOS O ORÇAMENTO. TRABALHAMOS COM AS TONALIDADES:</p>
<br>
<div class="grupo-tonalidades">
    <strong>Tons rústicos:</strong>
    <p1 class="tonalidades">
        <span class="caramelo">Caramelo</span>
        <span class="rose">Rosê</span>
        <span class="por-do-sol">Pôr do sol</span>
        <span class="safari">Safari</span>
        <span class="envelhecido">Envelhecido</span>
        <span class="pastel">Pastel</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons amadeirados:</strong>
    <p1 class="tonalidades">
        <span class="mogno">Mogno</span>
        <span class="imbuia">Imbuia</span>
        <span class="cerejeira-claro">Cerejeira Claro</span>
        <span class="cerejeira-escuro">Cerejeira Escuro</span>
    </p1>
</div>

<div class="grupo-tonalidades">
    <strong>Tons cheios:</strong>
    <p1 class="tonalidades">
        <span class="branco">Branco</span>
        <span class="preto">Preto</span>
        <span class="cinza-claro">Cinza Claro</span>
        <span class="cinza-escuro">Cinza Escuro</span>
        <span class="camurca">Camurça</span>
    </p1>
</div>
<br>
<p>FAZEMOS OS CACHEPOS EM TAMANHOS MAIORES E FIXOS NO PAINEL - CONSULTE-NOS PELO WHATS</p>
<p>
    PARA COMPRAS VIA MERCADO LIVRE ACESSE NOSSO LINK E VISITE NOSSA LOJA VIRTUAL.
    <a href="https://lista.mercadolivre.com.br/_CustId_28595610?item_id=MLB3971325067&category_id=MLB271323&seller_id=28595610&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic" target="_blank">Acessar site</a>
</p>
`,
];

document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".popup-fechar").forEach((botao) => {

    botao.addEventListener("click", () => {

        const popup = botao.closest(".popup-fundo");

        if (popup) {
            popup.classList.remove("ativo");
            console.log("POPUP FECHADO:", popup.id);
        }

    });

});

// ==========================================
// FECHAR CLICANDO FORA DO POPUP
// ==========================================

document.querySelectorAll(".popup-fundo").forEach((popup) => {

    popup.addEventListener("click", (evento) => {

        // Só fecha se clicou no fundo
        if (evento.target === popup) {

            const botaoFechar = popup.querySelector(".popup-fechar");

            if (botaoFechar) {
                botaoFechar.click();
            }

        }

    });

});

const imagens = document.querySelectorAll(".produto-card img");

const botoes = document.querySelectorAll(".produto-card button");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        if (imagens[indice]) {
            imagens[indice].click();
        }

    });

});

imagens.forEach((imagem, indice) => {

const capas = NomesdosArquivos[indice] || [];

// Só configura a capa se existir
if (capas.length > 0) {
    imagem.src = `Img/Capa/${capas[0]}.png`;
}

    // Se tiver mais de uma capa, começa a alternar
    if (capas.length > 1) {

        let capaAtual = 0;

        setInterval(() => {

            capaAtual++;

            if (capaAtual >= capas.length) {
                capaAtual = 0;
            }

imagem.style.transition = "opacity 0.5s ease";
imagem.style.opacity = "0";

setTimeout(() => {

    imagem.src = `Img/Capa/${capas[capaAtual]}.png`;

    // espera a imagem nova carregar
    imagem.onload = () => {
        imagem.style.opacity = "1";
    };

}, 500);

        }, 3000);
    }

        imagem.addEventListener("click", () => {
console.log("CLIQUE NA IMAGEM!", indice);
// ==========================================
// ENCONTRA O POPUP
// ==========================================

const popup =
    document.getElementById(`popup-${indice+ 1}`);
    console.log("Procurando popup:", `popup-${indice+ 1}`);
    console.log("Popup encontrado?", popup);

    if (!popup) {
        console.error("Popup não encontrado!");
        return;
    }

const nomeProdutoLimpo = produtos[indice].replace(/<br\s*\/?>/gi, " ");

const mensagem = `Olá! Vim pela página JDM Madeiras e gostaria de solicitar um orçamento para ${nomeProdutoLimpo}.`;

const botaoComprar = popup.querySelector(".popup-comprar");

if (botaoComprar) {
    botaoComprar.href = linkWhatsApp + encodeURIComponent(mensagem);
    botaoComprar.target = "_blank";
}

const nomeProduto = produtos[indice];

const titulo = popup.querySelector("h2");

if (titulo) {
    titulo.innerHTML = nomeProduto;
}
// ==========================================
// DESCRIÇÃO DO PRODUTO
// ==========================================

const descricao =
    popup.querySelector(".popup-descricao");

if (descricao) {

    let texto = descricaoProduto[indice] || "";

    texto = texto.trim();

    // Divide o conteúdo pelas linhas vazias
    const blocos = texto.split(/\n\s*\n/);

    texto = blocos.map(bloco => {

        bloco = bloco.trim();

        // Se for título, mantém o HTML original
        if (/^<h[1-3]>[\s\S]*<\/h[1-3]>$/i.test(bloco)) {
            return bloco;
        }

        // Se for link ou outro HTML, mantém
        if (bloco.startsWith("<")) {
            return bloco;
        }

        // Texto normal vira parágrafo
        return `<p>${bloco.replace(/\n/g, " ")}</p>`;

    }).join("");

    descricao.innerHTML = texto;
}

const preco =
    popup.querySelector(".popup-preco");

if (preco) {
    preco.textContent = precosProdutos[indice];
}

            // ==========================================
            // ELEMENTOS DO CARROSSEL
            // ==========================================

const imagem1 = popup.querySelector(".Imagem-Anterior-2");
const imagem2 = popup.querySelector(".Imagem-Anterior");
const imagem3 = popup.querySelector(".Imagem-central");
const imagem4 = popup.querySelector(".Imagem-Seguinte");
const imagem5 = popup.querySelector(".Imagem-Seguinte-2");

// ==========================================
// MOSTRA O POPUP
// ==========================================

popup.classList.add("ativo");
console.log("POPUP ATIVADO:", popup.id);
console.log("CLASSES DO POPUP:", popup.className);
// ==========================================
// VERIFICA O CARROSSEL
// ==========================================

if (!imagem1 || !imagem2 || !imagem3 || !imagem4 || !imagem5) {
    console.warn("Alguma imagem do carrossel não foi encontrada:", popup);
    return;
}

            // ==========================================
            // CONTROLE DO CARROSSEL
            // ==========================================
let pastaProduto = NomesdosArquivos[indice][0];

if (pastaProduto.startsWith("sku 110")) {
    pastaProduto = "sku 110";
}

const quantidadeImagens = imagensProdutos[pastaProduto] || 0;

const imagensDoProduto = Array.from(
    { length: quantidadeImagens },
    (_, i) => `${i + 1}.png`
);

let paginaCarrossel = 0;

//     function atualizarCarrossel() {

//     const totalImagens = imagensDoProduto.length;

//     if (totalImagens === 0) {
//         console.warn("Nenhuma imagem encontrada para:", pastaProduto);
//         return;
//     }

//     function indiceCircular(indice) {
//         return (indice + totalImagens) % totalImagens;
//     }

//     const indice1 = indiceCircular(paginaCarrossel - 2);
//     const indice2 = indiceCircular(paginaCarrossel - 1);
//     const indice3 = indiceCircular(paginaCarrossel);
//     const indice4 = indiceCircular(paginaCarrossel + 1);
//     const indice5 = indiceCircular(paginaCarrossel + 2);

//     imagem1.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice1]}`;
//     imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice2]}`;
//     imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice3]}`;
//     imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice4]}`;
//     imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indice5]}`;

//     imagem3.style.display = "block";
// }

function atualizarCarrossel() {

    const totalImagens = imagensDoProduto.length;

    if (totalImagens === 0) {
        console.warn("Nenhuma imagem encontrada para:", pastaProduto);
        return;
    }

    function indiceCircular(indice) {
        return (indice + totalImagens) % totalImagens;
    }

    if (totalImagens >= 5) {

        imagem1.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel - 2)]}`;
        imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel - 1)]}`;
        imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel)]}`;
        imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel + 1)]}`;
        imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[indiceCircular(paginaCarrossel + 2)]}`;

        imagem1.style.display = "block";
        imagem2.style.display = "block";
        imagem3.style.display = "block";
        imagem4.style.display = "block";
        imagem5.style.display = "block";

    } else {

        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "none";
        imagem4.style.display = "none";
        imagem5.style.display = "none";

        if (totalImagens >= 2) {
            imagem2.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[0]}`;
            imagem2.style.display = "block";
        }

        imagem3.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[totalImagens === 1 ? 0 : 1]}`;
        imagem3.style.display = "block";

        if (totalImagens >= 3) {
            imagem4.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[2]}`;
            imagem4.style.display = "block";
        }

        if (totalImagens >= 4) {
            imagem5.src = `Img/Produtos/${pastaProduto}/${imagensDoProduto[3]}`;
            imagem5.style.display = "block";
        }
    }
}

            // ==========================================
            // PRIMEIRA CONFIGURAÇÃO
            // ==========================================

            atualizarCarrossel();

            // ==========================================
            // BOTÃO DIREITA
            // ==========================================

imagem4.onclick = () => {

    paginaCarrossel++;

    if (paginaCarrossel >= imagensDoProduto.length) {
        paginaCarrossel = 0;
    }

    atualizarCarrossel();
};

            // ==========================================
            // BOTÃO ESQUERDA
            // ==========================================

imagem2.onclick = () => {

    paginaCarrossel--;

    if (paginaCarrossel < 0) {
        paginaCarrossel = imagensDoProduto.length - 1;
    }

    atualizarCarrossel();
};

        }); // fim do click

    }); // fim do forEach

}); // fim do DOMContentLoaded