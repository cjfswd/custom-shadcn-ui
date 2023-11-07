---
tags:
  - how-to
  - font
description: Aprenda a incorporar fontes .otf em seu CSS usando @font-face.
keywords: Fontes .otf, CSS, @font-face.
---
![[otf,680x230.png]]

As fontes desempenham um papel fundamental na criação de designs atraentes e legíveis em seus projetos web. Ao longo dos anos, a web evoluiu e trouxe uma maior flexibilidade na escolha de fontes. Uma das opções mais versáteis é o uso de fontes OpenType (OTF) no CSS, permitindo que os designers tenham mais controle sobre a tipografia em seus sites. Neste artigo, vamos explorar como incorporar fontes OTF em seu projeto web usando o `@font-face`.

## O que são Fontes OTF?

OpenType (OTF) é um formato de fonte desenvolvido pela Microsoft e Adobe no final dos anos 1990. Ele combina as características do formato TrueType (TTF) e PostScript (PS), tornando-o adequado para uma ampla variedade de usos. Fontes OTF oferecem suporte a recursos avançados, como ligaduras, frações, glifos alternativos e muito mais, tornando-as ideais para projetos de design web.

## Incorporando Fontes OTF com @font-face

A regra `@font-face` é uma parte fundamental do CSS que permite aos designers incorporar fontes personalizadas em suas páginas web. Usando essa regra, é possível definir o nome da fonte, o local da fonte e as variações da fonte, como negrito e itálico. Aqui está um exemplo de como incorporar fontes OTF em seu CSS:

```css
@font-face {
    font-family: GraublauWeb;
    src: url("path/GraublauWeb.otf") format("opentype");
}

@font-face {
    font-family: GraublauWeb;
    font-weight: bold;
    src: url("path/GraublauWebBold.otf") format("opentype");
}
```

Neste exemplo, estamos incorporando a fonte "GraublauWeb" e sua variante em negrito. Aqui está o que cada parte do código faz:

- `@font-face`: Isso inicia a definição da fonte personalizada.
- `font-family`: Define um nome descritivo para a fonte. Este nome será usado posteriormente em propriedades CSS, como `font-family`.
- `src`: Especifica o local da fonte OTF. Certifique-se de fornecer o caminho correto para o arquivo OTF desejado.
- `format`: Especifica o formato da fonte. No caso de fontes OTF, usamos "opentype".
- `font-weight`: Essa declaração é usada para especificar a variação da fonte em negrito.

Certifique-se de que o caminho especificado em `url()` seja correto e relativo ao local do arquivo CSS. Uma vez que a regra `@font-face` está definida, você pode usá-la em seu CSS regularmente para aplicar a fonte a elementos específicos.

## Aplicando a Fonte em Seu Site

Depois de definir a regra `@font-face`, você pode aplicar a fonte em seu site da seguinte maneira:

```css
body {
    font-family: "GraublauWeb", sans-serif;
}
```

Neste exemplo, estamos aplicando a fonte "GraublauWeb" ao corpo do documento. Certifique-se de incluir uma família de fontes genérica, como "sans-serif", após a fonte personalizada. Isso garante que, se a fonte personalizada não estiver disponível, o navegador usará uma fonte de backup.

## Verificando a Compatibilidade

Antes de usar fontes OTF em seu projeto, é importante verificar a compatibilidade com os navegadores. A maioria dos navegadores modernos oferece suporte a fontes OTF, mas é sempre bom verificar em [caniuse.com](https://caniuse.com) para garantir que você não terá problemas com navegadores mais antigos.

## Conclusão

O uso de fontes OTF no CSS usando a regra `@font-face` oferece aos designers uma maior flexibilidade na escolha de fontes personalizadas para seus projetos web. Com as fontes OTF, você pode criar designs mais atraentes e legíveis. Certifique-se de verificar a compatibilidade do navegador e use essa técnica com sabedoria para melhorar a tipografia em seus sites.
