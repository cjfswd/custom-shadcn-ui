---
tags: 
description: Aprenda a usar o método findIndex em JavaScript para localizar o índice de um elemento específico em um array.
keywords: findIndex, método JavaScript, índice, elemento.
---
A função `findIndex` é um método comumente utilizado na programação, especialmente em linguagens como JavaScript, para buscar um elemento específico dentro de um array e retornar o índice da primeira ocorrência desse elemento. É uma função de ordem superior, frequentemente usada em combinação com uma função de retorno de chamada (callback) para definir os critérios de busca.
## Aqui está um exemplo simples:

```javascript
const numeros = [1, 2, 3, 4, 5];

// Use o findIndex para encontrar o índice do primeiro número par no array
const indice = numeros.findIndex(function(elemento) {
  return elemento % 2 === 0;
});

console.log(indice); // Saída: 1 (índice do primeiro número par, que é 2)
```

Neste exemplo, o `findIndex` é usado para localizar o primeiro número par no array `numeros` e retorna o seu índice, que é 1. Se não houvesse números pares no array, ele retornaria -1.

No geral, o `findIndex` é uma função útil para buscar em arrays e encontrar a posição do primeiro elemento que corresponde a uma condição dada.
## Aqui está uma explicação geral de como a função `findIndex` funciona:

1. **Parâmetros de Entrada**: A função `findIndex` normalmente recebe dois parâmetros:
   - Um array: O array no qual você deseja buscar um elemento.
   - Uma função de retorno de chamada: Uma função que define os critérios para encontrar o elemento. A função de retorno de chamada é aplicada a cada elemento no array até encontrar uma correspondência.
2. **Iteração**: A função `findIndex` itera por cada elemento do array, do primeiro ao último.
3. **Função de Retorno de Chamada**: Para cada elemento no array, a função de retorno de chamada é chamada com três argumentos:
   - O elemento atual sendo processado.
   - O índice atual do elemento no array.
   - O array completo sendo percorrido.
4. **Correspondência**: Dentro da função de retorno de chamada, você especifica a condição que determina se o elemento atual corresponde ao elemento que você está buscando. Se a condição for atendida, a função de retorno de chamada retorna `true`; caso contrário, retorna `false`.
5. **Valor de Retorno**: Quando o `findIndex` encontra um elemento que faz com que a função de retorno de chamada retorne `true`, ele interrompe a iteração pelo array e retorna o índice desse elemento. Se nenhum elemento correspondente for encontrado após percorrer todo o array, o `findIndex` retorna -1.

