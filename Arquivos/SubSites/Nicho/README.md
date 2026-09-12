# JDM Madeiras – Página de Nichos

## Estrutura de pastas

```
jdm-nichos/
├── index.html
├── css/
│   ├── style.css          ← estilos principais (hero, seção nicho, galeria, botões)
│   └── Modelo3D.css       ← estilos do visualizador 3D (seu código)
├── js/
│   ├── script.js          ← lógica principal (produto, fundo aleatório, galeria, lightbox)
│   └── Outros3D.js        ← lógica do modelo 3D (seu código)
├── img/
│   ├── churrasqueira.png          ← imagem da churrasqueira
│   ├── nicho-interno.png          ← foto que fica dentro da boca da churrasqueira
│   ├── Nicho.glb                  ← modelo 3D
│   ├── Whatsapp.png
│   ├── Instagram.png
│   ├── QRCode Whats.png
│   ├── QRCode Insta.png
│   ├── Fundo instagram.png
│   ├── fundos/                    ← imagens de fundo do nicho (T virado)
│   │   ├── nicho-fundo-1.png
│   │   ├── nicho-fundo-2.png
│   │   └── ...
│   └── galeria/                   ← fotos da galeria
│       ├── foto1.jpg
│       ├── foto2.jpg
│       └── ...
├── Extras/
│   └── Opções/
│       ├── Sem divisão.png
│       ├── Opção 1.png
│       └── ...
└── Extras Gerais/
    └── Texturas/
        ├── Branco.png
        ├── Camurça.png
        ├── Normal.png
        ├── Roughness.png
        └── ...
```

## O que já está funcionando

1. **Hero** – placeholder pronto para você colocar a imagem depois.
2. **Seção principal do nicho**
   - Fundo aleatório (pega uma imagem da pasta `img/fundos/`).
   - Layout com churrasqueira + nicho dentro da boca + círculo com nome/preço/botão.
   - Nome e preço vêm do array `Produtos` e `Valor`.
   - Botão “Comprar via WhatsApp” usa o link que você passou + o nome do produto.
   - Botões flutuantes WhatsApp e Instagram com animação de expansão (seu código).
3. **Modelo 3D** – usa exatamente seus arquivos CSS e JS.
4. **Galeria**
   - 2 linhas × 3 fotos.
   - A cada 5 segundos uma foto aleatória é trocada.
   - Clique abre lightbox com animação de zoom para o centro.
   - Botão “Ver mais fotos” existe e ainda não faz nada (como pedido).

## Como personalizar

### Trocar o produto mostrado
No arquivo `js/script.js` altere a linha:
```js
let indiceAtual = Math.floor(Math.random() * Produtos.length);
```
Ou force um índice específico, por exemplo:
```js
let indiceAtual = 0; // sempre Branco
```

### Preços
Edite o array `Valor` em `js/script.js`.

### Imagens de fundo do nicho
Coloque as imagens na pasta `img/fundos/` e atualize o array `fundosNicho` em `script.js`.

### Fotos da galeria
Coloque as fotos em `img/galeria/` e atualize o array `fotosGaleria`.

## Observações

- As imagens ainda não existem → o site mostra placeholders / fallbacks coloridos até você colocar os arquivos reais.
- O modelo 3D (`Nicho.glb`) e as texturas precisam estar nos caminhos indicados.
- Corrigi o typo `opca6` → `opcao6` no HTML e no JS do 3D.
