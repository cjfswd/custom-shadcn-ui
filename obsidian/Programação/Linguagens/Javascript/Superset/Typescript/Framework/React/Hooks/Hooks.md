No React, os hooks são funções especiais que permitem que você use o estado e outros recursos do React em componentes funcionais. Antes dos hooks, os componentes funcionais eram usados principalmente para componentes simples e sem estado. No entanto, com a introdução dos hooks no React 16.8, os componentes funcionais ganharam mais poder e flexibilidade.

Os hooks são chamados de "hooks" porque permitem que você "ganhe acesso" a recursos internos do React, como estado, ciclo de vida e contexto. Eles permitem que você adicione recursos de componentes de classe a componentes funcionais sem precisar converter o componente em uma classe.

Existem vários hooks embutidos no React, como `useState`, `useEffect`, `useContext`, `useRef` e muitos outros. Aqui estão alguns exemplos de hooks populares:

1. useState: Permite que você adicione estado a componentes funcionais. Você pode declarar uma variável de estado e uma função para atualizá-la.
```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

2. useEffect: Permite que você realize efeitos colaterais em componentes funcionais, como chamadas de API, manipulação de DOM, assinaturas de eventos, etc.
```javascript
import React, { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Chamada de API assíncrona
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Executa apenas uma vez, após a montagem do componente

  return (
    <div>
      {data ? <p>{data}</p> : <p>Carregando...</p>}
    </div>
  );
}
```

Esses são apenas dois exemplos, mas existem muitos outros hooks disponíveis no React. Os hooks permitem que você compartilhe lógica entre componentes, criando hooks personalizados, além de facilitar o desenvolvimento de componentes funcionais mais avançados no React.

[[useState (React Hook) - Desmistificando a Manipulação de Estado]]
[[useEffect (React Hook) - Dominando a Gestão de Efeitos Colaterais]]
[[useEffect (React Hook) - Dominando a Gestão de Efeitos Colaterais]]
[[useEffect (React Hook) - Dominando a Gestão de Efeitos Colaterais]]