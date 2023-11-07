---
tags: 
description: Descubra o que é a ECMAScript e sua importância no desenvolvimento web.
keywords: ECMAScript, linguagem de programação, JavaScript.
---
![[ecmascript e javascript,1366x768.png]]

Desde o seu lançamento inicial como parte do Netscape Navigator 2.0 em 1995 até o presente, o JavaScript tem tido uma jornada fascinante. A linguagem de programação teve alguns dias agitados no início, com a explosão da internet, sua aparição em diferentes navegadores e a adoção de telefones móveis.

Todos nós precisávamos de um padrão (ECMAScript) para seguir em nossas implementações porque o JavaScript não era a única linguagem de programação que usávamos. JScript, desenvolvido pela Microsoft, e ActionScript eram os principais concorrentes do JavaScript.

Os desenvolvedores verdadeiramente experientes que usaram o IE6/7/8 nos primeiros dias podem se lembrar de noites inteiras tentando corrigir problemas de compatibilidade entre navegadores. Vamos dar uma olhada nos motores por trás dos navegadores mais populares e como eles evoluíram.

E por motor, quero dizer o código-fonte principal que contém a implementação real do JavaScript:

- Internet Explorer – Chakra engines -> Edge – a próxima versão será baseada no Chromium (um navegador da web baseado no Blink Engine)
- Chrome – WebKit Original – depois bifurcado no 'Blink Engine'
- Safari – Webkit – transformado em Nitro
- Opera – Motor Próprio Presto, depois mudou para o Blink Rendering Engine (que contém o V8 Engine)

Existem vários navegadores, cada um tentando implementar as regras estabelecidas pelo ECMAScript.

## Quem Define as Regras do ECMAScript?
Isso é legal, mas quem estabelece as regras no ECMAScript e como elas são selecionadas?
Por exemplo, como desenvolvedor JavaScript, você já desejou uma maneira mais fácil de trabalhar com contexto ou ter classes? Em algum momento, outros desenvolvedores também desejaram isso, então eles seguiram o chamado "Processo TC39", um padrão que especifica como adicionar recursos.

Existem cinco etapas necessárias para acelerar um recurso, desde a ideia até a implementação:

Como em todos os projetos, cada recurso desenvolvido ao longo do caminho é incluído em um grande lançamento estável. No início, a ECMA International não lançava novos recursos de maneira muito organizada. Mas desde 2015, a organização tem fornecido lançamentos regulares e estáveis a cada ano, geralmente em junho.

## Recursos Adicionados em Cada Versão
Vimos como o processo funciona, agora vamos dar uma olhada nos recursos que a ECMA International melhorou ou adicionou em cada versão do ECMAScript:

- **Junho de 1997** – Versão Inicial do ECMAScript
- **Junho de 1998** – Alinhada com o padrão internacional ISO/IEC 16262
- **Dezembro de 1999** – Adição de expressões regulares; bloco try-catch; melhor manipulação de strings

A ECMA International abandonou a versão 4 devido a algumas complexidades. Os novos recursos adicionados a esta edição foram completamente abandonados ou incluídos na sexta edição.

- **Dezembro de 2009** – A quinta edição foi lançada após uma pausa de 10 anos. O "Modo Estrito" foi adicionado, alguns recursos foram removidos e o acesso ao objeto global foi cortado. Esta versão ofereceu melhor suporte para objetos JSON (funções parse e stringify), novas funções em arrays (map, filter, reduce, every, some, indexOf, lastIndexOf, forEach e outros), novas funções para strings (trim, charAt), Object.defineProperty, getters e setters.
- **Junho de 2015** – A edição ES6 iniciou uma REVOLUÇÃO e uma nova geração de JavaScript surgiu, um avanço de grande interesse para qualquer desenvolvedor frontend respeitável. Estamos de volta aos negócios! Muitos novos recursos foram adicionados, como:
  - Parâmetros padrão
  - Parâmetros Rest/Spread (mas apenas para arrays)
  - Funções de seta (não é mais necessário vincular funções ao contexto)
  - Módulos
  - Classes (não se preocupe, é apenas açúcar sintático)
  - Iteradores e Símbolos (você provavelmente deveria dar uma olhada neles, são muito legais)
  - Geradores (se você já trabalhou com React-Redux-Saga, nos arquivos de saga, eles podem ser benéficos)
  - Promises
  - Literais de string
  - Desestruturação
  - Propriedades abreviadas
  - Let e Const
  - Set
  - Mapa
  - Proxies
  - Refletir
  - Binário e Octal e alguns outros novos métodos e constantes.

A partir de agora, todos os lançamentos serão feitos a cada ano, então não teremos versões que contenham tantos recursos quanto a de 2015.

- **Junho de 2016** – A edição ES7 foi lançada com apenas duas adições: Array.prototype.includes() e o operador de exponenciação **
- **Junho de 2017** – A edição ES8 incluiu Async/await (uma nova maneira de escrever código assíncrono, uma alternativa às Promises), Novos métodos (Object.values(), Object.entries(), String.prototype.padEnd(), String.prototype.padStart(), Object.getOwnPropertyDescriptors()), Vírgulas finais.
- **Junho de 2018** – Também conhecida como ECMAScript versão 2018, este lançamento ofereceu novos recursos: operador Rest (na desestruturação de objetos), operador Spread (em objetos literais), iteração assíncrona, Promise.finally, template de string marcada, nova funcionalidade de regex.
- **Junho de 2019** – A versão ES10 incluiu Novos Métodos (Array.flat, Array.flatMap, String.trimStart/trimEnd, Object.fromEntries), try…catch (e - PARÂMETRO OPCIONAL), método .toString revisado, atualização da classe Symbol.

É interessante ver por que cada recurso acabou se tornando um padrão ECMAScript. Você sempre pode dar uma olhada nas propostas de recursos e ver recursos intrigantes que foram propostos no site: 

https://www.ecma-international.org/
