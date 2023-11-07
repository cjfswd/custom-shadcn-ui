---
tags:
  - how-to
  - download
  - json
description: Aprenda a baixar objetos em formato .json com JavaScript em seu projeto Frontend.
keywords: Download, objeto .json, Frontend.
---
![[baixar json com javascript,1440x840.png]]

Neste tutorial, vamos explorar como baixar um objeto em formato JSON com JavaScript no frontend de uma aplicação web. Utilizaremos o código fornecido como base:

```javascript
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // necessário para o Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
```

Este código é uma função simples que permite ao usuário baixar um objeto JavaScript no formato JSON como um arquivo `.json`. Vamos quebrar o processo em etapas e explicar cada parte do código em detalhes.

## Passo 1: Parâmetros da Função

O primeiro passo é entender os parâmetros da função `downloadObjectAsJson`. Ela aceita dois parâmetros:

- `exportObj`: O objeto que você deseja exportar para um arquivo JSON.
- `exportName`: O nome que você deseja dar ao arquivo JSON que será baixado.

## Passo 2: Construindo a String JSON

A próxima parte do código cria uma string no formato JSON a partir do objeto JavaScript. Isso é feito usando a função `JSON.stringify(exportObj)`, que transforma o objeto em uma representação JSON.

```javascript
var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
```

A variável `dataStr` agora contém a representação do objeto no formato JSON.
## Passo 3: Criando um Elemento de Ancoragem

Para criar um link de download, o código cria um elemento `<a>` (uma âncora) no DOM. Este elemento será usado para iniciar o download do arquivo JSON. A âncora é criada da seguinte maneira:

```javascript
var downloadAnchorNode = document.createElement('a');
```

## Passo 4: Configurando os Atributos da Âncora

A âncora recém-criada precisa de dois atributos configurados:

- `href`: Define o endereço do arquivo que será baixado. Neste caso, `dataStr` contém a representação JSON do objeto.
- `download`: Define o nome do arquivo que será baixado, acrescentando ".json" ao final do nome original.

```javascript
downloadAnchorNode.setAttribute("href", dataStr);
downloadAnchorNode.setAttribute("download", exportName + ".json");
```

## Passo 5: Anexando a Âncora ao Corpo do Documento

Para que o processo de download funcione corretamente no Firefox, é necessário anexar a âncora criada ao corpo do documento.

```javascript
document.body.appendChild(downloadAnchorNode);
```

## Passo 6: Iniciando o Download

Finalmente, o código inicia o download chamando o método `click()` na âncora, o que simula um clique do usuário no link de download.

```javascript
downloadAnchorNode.click();
```

## Passo 7: Removendo a Âncora

Após o download, a âncora não é mais necessária e pode ser removida do DOM.

```javascript
downloadAnchorNode.remove();
```

Com esses passos, o código realiza o download do objeto no formato JSON como um arquivo `.json` no navegador do usuário.

## Exemplo de Uso

Aqui está um exemplo de como usar a função `downloadObjectAsJson`:

```javascript
var myData = { name: "John Doe", age: 30, city: "New York" };
downloadObjectAsJson(myData, "my_data");
```

Isso irá baixar um arquivo chamado "my_data.json" que contém o objeto `myData` no formato JSON.

Este tutorial demonstrou como usar JavaScript para criar uma funcionalidade de download de objetos no formato JSON no frontend de uma aplicação web. Essa funcionalidade pode ser útil para exportar dados ou configurações de uma aplicação e permite que os usuários salvem essas informações em seus dispositivos.