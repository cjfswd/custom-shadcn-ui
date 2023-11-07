---
tags: 
description: Saiba como utilizar o Hook useMemo no React para otimizar o desempenho de seus aplicativos.
keywords: useMemo, React Hook, desempenho.
---
O hook `useMemo` do React é usado para memoização, ou seja, para memoizar o valor de uma computação para evitar cálculos desnecessários. Ele é útil quando você precisa calcular um valor com base em dependências específicas, como propriedades ou estados, e deseja evitar a recomputação desse valor sempre que o componente for renderizado.

Você pode usar o `useMemo` em situações em que o cálculo de um valor é computacionalmente intensivo ou quando você precisa evitar chamadas caras, como chamadas de API, em cada renderização do componente. Em vez disso, você pode calcular o valor uma vez usando o `useMemo` e garantir que ele só seja recalculado quando as dependências especificadas mudarem.

**Aqui está um exemplo de uso do `useMemo`:**

```javascript
import React, { useMemo } from 'react';

const MyComponent = ({ propA, propB }) => {
  const memoizedValue = useMemo(() => {
    // Cálculo caro ou lógica complexa aqui
    // Pode depender de propA e propB
    return /* resultado do cálculo */;
  }, [propA, propB]);

  // Renderiza o componente com o valor memoizado
  return <div>{memoizedValue}</div>;
};
```

No exemplo acima, o valor de `memoizedValue` será calculado apenas quando `propA` ou `propB` mudarem. Se essas propriedades permanecerem iguais em várias renderizações subsequentes do componente, o valor será recuperado da memória cache em vez de ser recalculado, economizando tempo e recursos.

Em resumo, use o `useMemo` quando você precisa otimizar o desempenho evitando cálculos repetidos ou chamadas custosas, memoizando o resultado com base em dependências específicas.