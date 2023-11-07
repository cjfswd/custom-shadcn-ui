---
tags: 
description: Desmistifique a manipulação de estado no React com o Hook useState.
keywords: useState, React Hook, manipulação de estado.
---
O hook useState do React é usado para gerenciar o estado em componentes funcionais. Ele permite que você adicione o estado a um componente funcional, o que era anteriormente possível apenas em componentes de classe. O useState é especialmente útil quando você precisa armazenar e atualizar valores que podem mudar ao longo do tempo, como o resultado de uma interação do usuário, o conteúdo de um campo de formulário ou um estado de exibição.

Você deve usar o hook useState sempre que precisar armazenar e atualizar um valor no estado dentro de um componente funcional. Isso inclui cenários como:

1. Armazenar valores iniciais: Quando você precisa definir um valor inicial para uma variável dentro do componente funcional.
2. Atualizar valores de entrada: Se você tiver elementos de entrada controlados, como campos de formulário, onde deseja armazenar o valor atual e atualizá-lo à medida que o usuário digita.
3. Gerenciar estados de exibição: Quando você deseja alternar entre diferentes estados de exibição em um componente, como exibir ou ocultar um elemento com base em uma ação do usuário.

## Aqui está um exemplo básico de como usar o useState:

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
```

No exemplo acima, o useState é usado para adicionar uma variável de estado `count` com um valor inicial de 0. A função `setCount` é usada para atualizar o valor de `count` quando o botão é clicado.

Em resumo, você deve usar o hook useState do React sempre que precisar adicionar estado a um componente funcional e gerenciar valores que podem mudar ao longo do tempo.

## Como re-utilizar
encapsule seu useState hook em funções menores, que retornam variáveis que você considera mais úteis:

```typescript
const useAddressInputState = (initialValue: Partial<ProductImage>) => {
    const [state, set] = useState<ProductImage>(initialValue as ProductImage);
    
    const change = (newValue: Partial<ProductImage>) => {
        set({ ...state, ...newValue });
    };
    const refresh = (initialValue: Partial<ProductImage>) => {
        set(initialValue as ProductImage);
    };

    return { state, change, refresh } as const;
};
```