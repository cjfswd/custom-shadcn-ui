---
tags:
  - form
description: Aprenda a diferença entre formulários controlados e não controlados no React e quando usá-los.
keywords: React, formulários, controle, não controle.
---
Formulários são uma parte essencial da maioria das aplicações da web modernas. Eles permitem que os usuários insiram e enviem dados para interagir com um aplicativo. No React, a criação de formulários pode ser realizada de duas maneiras principais: formulários controlados e formulários não controlados. Neste artigo, exploraremos esses dois conceitos e discutiremos as vantagens e desvantagens de cada abordagem.

## Formulários Controlados

Formulários controlados são a abordagem mais comum no desenvolvimento de aplicativos React. Nesse tipo de formulário, cada elemento de entrada (como campos de texto, caixas de seleção e botões de opção) é vinculado ao estado do componente React. Isso significa que o React mantém o controle do valor do campo e o atualiza à medida que o usuário digita ou faz escolhas. Para criar um formulário controlado, siga estas etapas:

### Passo 1: Inicialização do Estado

Comece definindo o estado do componente que conterá os valores dos campos do formulário. Por exemplo:

```javascript
import React, { Component } from 'react';

class FormularioControlado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  // ...
}
```

### Passo 2: Lidando com Eventos de Mudança

Para manter o formulário controlado, você deve lidar com eventos de mudança para cada campo de entrada e atualizar o estado apropriadamente. Você pode fazer isso usando a função `setState`:

```javascript
handleNomeChange(event) {
  this.setState({ nome: event.target.value });
}

handleEmailChange(event) {
  this.setState({ email: event.target.value });
}
```

### Passo 3: Renderização do Formulário

Em seguida, você deve renderizar os campos do formulário e vinculá-los ao estado que você criou. Por exemplo:

```javascript
render() {
  return (
    <form>
      <label>
        Nome:
        <input
          type="text"
          value={this.state.nome}
          onChange={this.handleNomeChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Vantagens dos Formulários Controlados

- O React mantém o estado dos campos do formulário, o que facilita o rastreamento e a validação dos dados.
- É possível realizar validações em tempo real.
- Os valores dos campos do formulário podem ser facilmente manipulados antes do envio.

## Formulários Não Controlados

Os formulários não controlados são uma alternativa aos formulários controlados. Nesse tipo de formulário, os valores dos campos não são armazenados no estado do componente React. Em vez disso, os valores dos campos são acessados diretamente por meio de referências de DOM. Aqui estão os passos para criar um formulário não controlado:

### Passo 1: Criando Referências

Primeiro, crie referências para os elementos de entrada do formulário. Você pode fazer isso usando a função `React.createRef()`:

```javascript
class FormularioNaoControlado extends Component {
  constructor(props) {
    super(props);
    this.nomeInput = React.createRef();
    this.emailInput = React.createRef();
  }

  // ...
}
```

### Passo 2: Acessando Valores

Agora você pode acessar os valores diretamente a partir das referências de DOM. Por exemplo:

```javascript
handleSubmit(event) {
  event.preventDefault();

  const nome = this.nomeInput.current.value;
  const email = this.emailInput.current.value;

  // Faça algo com os valores (por exemplo, envie para o servidor)
}
```

### Passo 3: Renderização do Formulário

Renderize o formulário da mesma maneira que faria com um formulário controlado, mas sem vincular os valores aos estados:

```javascript
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Nome:
        <input type="text" ref={this.nomeInput} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" ref={this.emailInput} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Vantagens dos Formulários Não Controlados

- Em alguns casos, formulários não controlados podem simplificar o código.
- São úteis quando você precisa interagir com bibliotecas ou código legado que dependem do acesso direto aos valores dos campos de entrada.

## Conclusão

A escolha entre formulários controlados e não controlados depende das necessidades específicas do seu projeto. Formulários controlados oferecem um alto grau de controle e rastreamento, tornando-os ideais para a maioria das situações. No entanto, os formulários não controlados podem ser úteis em cenários específicos, como a integração com código existente.

Em última análise, a escolha entre formulários controlados e não controlados no React dependerá das necessidades do seu aplicativo e do equilíbrio entre controle e simplicidade que você deseja alcançar. Certifique-se de considerar cuidadosamente as implicações de ambas as abordagens ao desenvolver seus formulários.