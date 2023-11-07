---
tags:
  - how-to
  - file-system
description: Saiba como obter uma lista de todos os arquivos em um diretório usando Node.js.
keywords: Listar arquivos, diretório, Node.js.
---
Node.js é uma plataforma amplamente utilizada para desenvolvimento de servidores e aplicativos de lado do servidor. Às vezes, é necessário trabalhar com o sistema de arquivos, como obter uma lista de todos os arquivos em um diretório específico. Neste artigo, vamos explorar um exemplo de código Node.js que faz exatamente isso.
## Requisitos Iniciais

Antes de prosseguirmos, é importante entender os módulos e conceitos usados no código. Aqui estão os requisitos iniciais:

```javascript
// Requerindo os módulos path e fs
const path = require('path');
const fs = require('fs');

// Juntando o caminho do diretório
const directoryPath = path.join(__dirname, 'Documents');
```

### Módulo `path`

O módulo `path` é uma parte fundamental para lidar com caminhos de arquivos e diretórios. Ele fornece métodos para construir e manipular caminhos de forma eficaz.
### Módulo `fs`

O módulo `fs` é usado para interagir com o sistema de arquivos. Ele oferece funções para ler, escrever, atualizar e realizar outras operações relacionadas a arquivos e diretórios.
### __dirname

`__dirname` é uma variável especial do Node.js que representa o diretório do script atual. Nesse caso, estamos usando `__dirname` para construir o caminho completo para o diretório 'Documents'.
## Lendo o Diretório

A parte central do código é a leitura do diretório e a listagem de seus arquivos:

```javascript
fs.readdir(directoryPath, function (err, files) {
    // Lidando com erros
    if (err) {
        return console.log('Não foi possível escanear o diretório: ' + err);
    } 

    // Listando todos os arquivos usando forEach
    files.forEach(function (file) {
        // Faça o que desejar com o arquivo
        console.log(file); 
    });
});
```

Aqui está o que está acontecendo nesse trecho:

- `fs.readdir(directoryPath, function (err, files) {` - Utilizamos a função `fs.readdir` para ler o conteúdo do diretório especificado (`directoryPath`). Ela recebe uma função de retorno de chamada que será executada após a conclusão da listagem do diretório. Esta função de retorno de chamada recebe dois argumentos: um objeto de erro (`err`) e um array de nomes de arquivos (`files`) encontrados no diretório.
- `if (err) { ... }` - Verificamos se ocorreu algum erro ao tentar ler o diretório. Se ocorrer um erro, registramos uma mensagem de erro e encerramos o script, impedindo a execução adicional.
- `files.forEach(function (file) { ... }` - Se nenhum erro ocorrer, este código itera sobre o array de nomes de arquivos (`files`) usando o método `forEach`. Para cada arquivo encontrado, executamos a função de retorno de chamada fornecida.
- `console.log(file);` - Dentro da função de retorno de chamada, simplesmente registramos o nome de cada arquivo no console, efetivamente listando todos os arquivos no diretório 'Documents'.

## Conclusão

Este código Node.js fornece uma maneira simples de listar todos os arquivos em um diretório específico. Ele demonstra o uso dos módulos `path` e `fs`, bem como a manipulação de erros ao interagir com o sistema de arquivos. Você pode adaptar esse código para atender às suas necessidades, como realizar operações específicas em cada arquivo encontrado no diretório.

Lembre-se de que você pode modificar o valor de `directoryPath` para apontar para o diretório que deseja listar, e o código cuidará do restante. Isso torna a tarefa de listar arquivos em um diretório bastante simples e flexível em projetos Node.js.