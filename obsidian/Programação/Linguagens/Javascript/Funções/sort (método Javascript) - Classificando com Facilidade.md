---
tags: 
description: Aprenda a classificar elementos de arrays com facilidade usando o método sort em JavaScript.
keywords: sort, método JavaScript, classificação, arrays.
---
O método `sort()` em JavaScript é usado para classificar os elementos de um array em ordem alfabética (ou numérica) e atualizar o próprio array com a nova ordem dos elementos. Por padrão, o método `sort()` classifica os elementos como strings e os ordena em ordem alfabética crescente. No entanto, você pode fornecer uma função de comparação personalizada para controlar a ordenação.

## Aqui está a sintaxe básica do método `sort()`:

```javascript
array.sort([comparação])
```

O parâmetro `comparação` é uma função opcional que define a maneira como os elementos do array devem ser classificados. Se não for fornecida, os elementos serão convertidos em strings e classificados em ordem alfabética.

## Exemplo de uso padrão (ordem alfabética crescente):

```javascript
const frutas = ["banana", "maçã", "laranja", "abacaxi"];
frutas.sort();
console.log(frutas); // ["abacaxi", "banana", "laranja", "maçã"]
```

## Exemplo de uso com uma função de comparação personalizada (ordem numérica crescente):

```javascript
const numeros = [5, 2, 9, 1, 5];
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 5, 9]
```

Neste exemplo, a função de comparação `(a, b) => a - b` subtrai `b` de `a`, o que resulta em uma ordenação crescente de números inteiros.

Você também pode usar uma função de comparação personalizada para classificar elementos em ordem decrescente ou para classificar com base em critérios complexos, como classificar objetos por propriedades específicas.

Lembre-se de que o método `sort()` modifica o array original e retorna o próprio array classificado. Se você desejar criar uma cópia classificada do array original sem alterar o original, deverá fazer uma cópia do array antes de chamar o método `sort()`.