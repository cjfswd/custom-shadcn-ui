---
tags:
  - reset
  - how-to
description: Saiba como redefinir estilos CSS para uma base limpa em seus projetos.
keywords: Resetar CSS, estilos, projetos.
---
![[Reset CSS,705x397.png]]

As Cascading Style Sheets (CSS) são uma parte fundamental do design web, permitindo que os desenvolvedores controlem o layout e a aparência das páginas da web. No entanto, os navegadores da web possuem estilos padrão para os elementos HTML, o que às vezes pode levar a inconsistências na exibição de páginas da web em navegadores diferentes. É aqui que entra o "reset CSS". Neste post de blog, exploraremos o conceito de reset CSS e discutiremos o popular reset CSS fornecido por Eric Meyer.
## O que é Reset CSS?

O Reset CSS, também conhecido como uma folha de estilos de reset CSS ou folha de estilos de reset, é um conjunto de regras CSS que tem como objetivo remover ou redefinir os estilos padrão do navegador para os elementos HTML. O objetivo é criar um ponto de partida consistente para estilizar as páginas da web, eliminando as variações nos estilos padrão que diferentes navegadores aplicam.
## O Reset CSS de Eric Meyer

Uma das folhas de estilos de reset CSS mais conhecidas e amplamente usadas é a criada por Eric Meyer. Esta folha de estilos de reset CSS é frequentemente referida como "Reset de Eric Meyer" e está disponível gratuitamente em seu site. Aqui está o trecho de código do Reset CSS de Eric Meyer, que você forneceu em sua solicitação:

```css
/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain) */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* Redefinição de papel de exibição HTML5 para navegadores mais antigos */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```
## Como o Reset CSS Funciona

Vamos analisar como o Reset CSS de Eric Meyer funciona e os elementos-chave desta folha de estilos:
### 1. Redefinição do Seletor Universal

A redefinição começa com um seletor universal que atinge vários elementos HTML. Ele define várias propriedades como zero ou seus valores padrão. Propriedades importantes incluem margem, preenchimento, borda, tamanho da fonte, família da fonte e alinhamento vertical. Isso remove efetivamente qualquer espaçamento ou formatação que o navegador normalmente aplicaria.
### 2. Redefinição de Elementos HTML5

O HTML5 introduziu novos elementos como `<article>`, `<nav>`, `<section>`, entre outros. Esses elementos são estilizados com `display: block;` para garantir que sejam tratados como elementos de nível de bloco para uma formatação consistente.
### 3. Redefinições Adicionais

A folha de estilos também aborda elementos específicos como `<body>`, `<ol>`, `<ul>` e `<table>`. Ela remove os estilos de lista de listas, elimina aspas de `<blockquote>` e `<q>`, e define propriedades de tabela para garantir uma renderização consistente.
## Por que Usar o Reset CSS?

O Reset CSS serve a vários propósitos essenciais:

1. **Consistência**: Ele fornece uma base consistente para a estilização, reduzindo as variações entre navegadores diferentes e garantindo que seus estilos sejam a principal influência no design.
2. **Previsibilidade**: Os desenvolvedores podem prever melhor como os elementos serão exibidos, facilitando a criação de designs compatíveis com diferentes navegadores e plataformas.
3. **Depuração Simplificada**: Ao redefinir todos os estilos padrão do navegador, torna mais fácil depurar problemas e identificar problemas em seu CSS.
4. **Personalização**: O Reset CSS pode ser um ponto de partida para criar uma estrutura CSS personalizada ou um sistema de design que atenda às necessidades específicas do seu projeto.

## Usando o Reset CSS de Eric Meyer

Para usar o Reset CSS de Eric Meyer, siga estas etapas:

1. Visite a [página do Reset CSS de Eric Meyer](http://meyerweb.com/eric/tools/css/reset/) para acessar a versão mais recente.
2. Copie o código de reset CSS fornecido na página.
3. Crie um novo arquivo CSS para o seu projeto ou adicione o código de reset a um arquivo CSS existente.
4. Vincule o arquivo CSS em seu documento HTML usando a tag `<link>`.
   ```html
   <link rel="stylesheet" type="text/css" href="reset.css">
   ```
5. Certifique-se de que o arquivo de reset CSS seja incluído antes de qualquer outro estilo em seu documento HTML, para que ele tenha precedência.
6. Estilize sua página da web conforme necessário, sabendo que os estilos padrão do navegador foram efetivamente redefinidos.
## Personalizando o Reset CSS

O Reset CSS de Eric Meyer fornece uma redefinição abrangente, mas você pode personalizá-lo ainda mais para atender às necessidades do seu projeto. Por exemplo, você pode desejar manter determinados estilos padrão para alguns elementos ou ajustar a redefinição para se alinhar melhor com suas preferências de design. Para fazer isso, basta modificar o código de reset CSS para atender às suas necessidades.
## Conclusão

O Reset CSS, especialmente o Reset de Eric Meyer, é uma ferramenta valiosa para desenvolvedores da web em busca de estilos consistentes e previs