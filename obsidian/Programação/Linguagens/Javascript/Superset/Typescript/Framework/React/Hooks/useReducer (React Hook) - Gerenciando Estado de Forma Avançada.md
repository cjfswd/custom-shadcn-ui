---
tags: 
description: Aprenda a avançar no gerenciamento de estados com o Hook useReducer no React.
keywords: useReducer, React Hook, gerenciamento de estado.
---
Os Hooks do React revolucionaram a forma como desenvolvemos aplicativos front-end. Eles tornam nossos componentes mais limpos, organizados e eficientes. Você pode já estar familiarizado com Hooks como `useState` e `useEffect`, ou pode ser um novato ansioso para aprender. Em qualquer caso, neste artigo, vou apresentar o Hook `useReducer`, uma ferramenta poderosa para simplificar o gerenciamento de estados em formulários no React.

Vamos começar explorando um exemplo de formulário básico, que servirá como nosso caso de estudo ao longo deste artigo.

## Exemplo de Formulário Básico

Antes de mergulharmos fundo no `useReducer`, vamos considerar como formulários são tradicionalmente tratados no React. Se você nunca usou Hooks antes, provavelmente está familiarizado com a abordagem de componentes de classe. Aqui está um exemplo:

```jsx
class FormularioClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Renderiza o formulário e lida com as alterações
  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleFormChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleFormChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleFormChange}
        />
      </form>
    );
  }
}
```

Este é um método válido para gerenciar formulários, mas pode ficar complexo à medida que o formulário cresce. Agora, vamos explorar uma abordagem mais moderna e elegante usando Hooks.

## Introdução aos Hooks do React

Antes de mergulharmos diretamente no `useReducer`, é importante compreender os benefícios dos Hooks em geral. No exemplo acima, você notou que o código pode se tornar extenso e repetitivo à medida que adicionamos mais campos ao formulário. 

Com o Hook `useState`, podemos simplificar significativamente o código:

```jsx
import React, { useState } from 'react';

function FormularioHooks() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFormChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={formValues.firstName}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="lastName"
        value={formValues.lastName}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="email"
        value={formValues.email}
        onChange={handleFormChange}
      />
    </form>
  );
}
```

Como você pode observar, com `useState`, conseguimos simplificar nosso código consideravelmente. A função `useState` recebe um estado inicial e retorna o valor do estado atual e uma função para atualizá-lo. Com isso, podemos atualizar os campos do formulário de forma concisa.

Agora que você está familiarizado com a utilização de `useState`, vamos dar um passo adiante e explorar o Hook `useReducer`.

## O Poder do Hook useReducer

O Hook `useReducer` oferece uma alternativa mais estruturada e poderosa para o gerenciamento de estados, especialmente em formulários mais complexos. Vamos transformar o nosso exemplo de formulário básico usando `useReducer`:

```jsx
import React, { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

function FormularioUseReducer() {
  const [formValues, dispatch] = useReducer(formReducer, {
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFormChange = (event) => {
    dispatch({
      type: 'CHANGE',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={formValues.firstName}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="lastName"
        value={formValues.lastName}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="email"
        value={formValues.email}
        onChange={handleFormChange}
      />
    </form>
  );
}
```

Vamos analisar o que está acontecendo no código acima. Em vez de manter várias variáveis de estado como fizemos com `useState`, usamos um objeto chamado `formValues` como estado inicial. O `useReducer` recebe dois argumentos: a função redutora e o estado inicial. Ele retorna um par, semelhante ao `useState`. O estado inicial e uma função que chamará a função redutora.

A função `handleFormChange` chama `dispatch`, que automaticamente passa o estado atual (ou seja, `formValues`) e quaisquer argumentos adicionais que fornecermos para a função redutora. O uso do operador de propagação (`...state`) em nossa função redutora nos permite atualizar o objeto `formValues` de forma eficiente.

O uso do `useReducer` permite manter todos os valores do formulário em um único objeto, o que pode ser benéfico quando se lida com formulários mais complexos ou quando se precisa enviar esses valores para uma API ou para outro componente. Isso elimina a necessidade de criar novos objetos e simplifica qualquer atualização em nosso objeto `formValues`, centralizando-as em uma única função.

Em resumo, existem várias maneiras de lidar com formulários no React, e cada abordagem tem suas vantagens e desvantagens. Encorajamos você a experimentar essas diferentes abordagens para encontrar a que melhor se adapte às suas necessidades e ao seu projeto.

Se desejar explorar o código completo deste exemplo e aprofundar seu conhecimento sobre o `useReducer`, você pode encontrar o repositório [aqui](https://github.com/seu-repositorio).

Lembre-se de que os Hooks do React, incluindo o `useReducer`, são uma ferramenta poderosa que pode tornar seu código
