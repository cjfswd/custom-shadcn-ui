---
tags: 
description: Explore como o método repeat em JavaScript que facilita a repetição de strings.
keywords: repeat, método JavaScript, repetição, strings.
---
O método `repeat()` em JavaScript é usado para criar uma nova string que consiste na repetição da string original um determinado número de vezes. Ele recebe um único argumento que especifica quantas vezes a string original deve ser repetida e retorna uma nova string que consiste na repetição da string original de acordo com o número especificado.

## Aqui está um exemplo simples:

```javascript
"abc".repeat(3)
```

Neste exemplo, `"abc"` é a string original, e `3` é o número de vezes que queremos repetir essa string. O método `repeat()` então cria uma nova string repetindo `"abc"` três vezes e retorna o resultado, que é `"abcabcabc"`.

## Aqui estão alguns outros exemplos para ilustrar como o método repeat() funciona:

1. `"Hello, ".repeat(4)` retorna `"Hello, Hello, Hello, Hello, "`. Neste caso, a string `"Hello, "` é repetida quatro vezes.
2. `"123".repeat(2)` retorna `"123123"`. A string `"123"` é repetida duas vezes.
3. `"JavaScript".repeat(0)` retorna uma string vazia `""`. Quando o argumento é `0`, o método `repeat()` retorna uma string vazia.
4. `"Repeat this! ".repeat(5)` retorna `"Repeat this! Repeat this! Repeat this! Repeat this! Repeat this! "`. A string original é repetida cinco vezes.

O método `repeat()` é útil quando você precisa criar strings que consistem em uma repetição de padrões ou conteúdo várias vezes em uma linha, economizando assim tempo e esforço na concatenação manual de strings.