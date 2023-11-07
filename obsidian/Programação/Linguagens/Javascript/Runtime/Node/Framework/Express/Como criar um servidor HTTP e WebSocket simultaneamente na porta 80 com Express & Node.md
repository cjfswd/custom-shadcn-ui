---
tags:
  - how-to
  - server
description: Aprenda a configurar um servidor HTTP e WebSocket simultaneamente na porta 80 com Express e Node.js.
keywords: Servidor HTTP, WebSocket, porta 80, Express, Node.js.
---
Neste guia, vamos aprender como configurar um servidor HTTP e um servidor WebSocket simultaneamente na porta 80. Isso permitirá que você crie aplicativos da web que possam lidar com solicitações HTTP e comunicação bidirecional em tempo real usando WebSocket. Usaremos como base um código de exemplo em JavaScript e o pacote Express para configurar o servidor HTTP e o pacote ws para configurar o servidor WebSocket. Vamos dividir o processo em várias etapas.
## Requisitos Iniciais

Antes de começarmos, certifique-se de que você já tenha instalado o Node.js em seu sistema. Caso contrário, você pode baixá-lo em [Node.js](https://nodejs.org/).
## Configurando o Servidor HTTP

Primeiro, vamos configurar o servidor HTTP. Suponha que você tenha um arquivo `main.js` com o seguinte conteúdo:

```javascript
var app = express()
```

e várias linhas de código Express para configurar suas rotas e middlewares. (Não é necessário fazer alterações nessa parte do arquivo caso tenha algo relacionado)

Normalmente, você iniciaria o servidor HTTP no final do arquivo `main.js` usando o código a seguir:

```javascript
app.listen(80, (err) => { ... })
```

Porém, neste tutorial, excluiremos essa linha e configuraremos o servidor HTTP de forma diferente.

```javascript
//app.listen(80, (err) => { ... })
```
## Configurando o Servidor WebSocket

Agora, vamos configurar o servidor WebSocket. Suponha que você tenha um arquivo chamado `multiplayer.js` com o seguinte conteúdo:

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 9999,
    perMessageDeflate: false
})
```

Você precisará fazer algumas alterações neste arquivo para combinar o servidor WebSocket com o servidor HTTP.

```javascript
const WebSocket = require('ws');
/*const wss = new WebSocket.Server({
    port: 2828,
    perMessageDeflate: false
});*/
let WSServer = WebSocket.Server;
let server = require('http').createServer();
let app = require('./main'); // Observe que 'main' é o seu arquivo main.js acima
let wss = new WSServer({
  server: server,
  perMessageDeflate: false
})
server.on('request', app);
```

Observe que agora `server` é um servidor HTTP criado com `http.createServer()`, e `app` é uma referência ao seu aplicativo Express definido em `main.js`. Também adicionamos o servidor WebSocket `wss` ao servidor HTTP usando `server.on('request', app)`.

No final do arquivo `multiplayer.js`, você deve adicionar o seguinte código para fazer com que o servidor escute na porta 80:

```javascript
server.listen(80, function() {
    console.log(`Servidor HTTP/WS na porta 80`);
});
```

**Observação** - É importante lançar o arquivo `multiplayer.js` (não `main.js`).

Com essas alterações, você agora tem um servidor HTTP e WebSocket funcionando simultaneamente na porta 80.

## Executando o Servidor

Para executar o servidor, abra um terminal, navegue até o diretório que contém seus arquivos `main.js` e `multiplayer.js` e execute o seguinte comando:

```bash
node multiplayer.js
```

Agora, seu servidor estará em execução na porta 80, pronto para lidar com solicitações HTTP e comunicação em tempo real via WebSocket. Certifique-se de ajustar seu código e rotas conforme necessário para atender aos requisitos do seu aplicativo.

Esperamos que este guia tenha sido útil para configurar um servidor HTTP e WebSocket simultaneamente na porta 80. Com essa configuração, você pode criar aplicativos da web incríveis e interativos que atendam às necessidades de seus usuários. Se você encontrar algum problema ou tiver dúvidas, não hesite em procurar ajuda na comunidade de desenvolvedores. Feliz codificação!