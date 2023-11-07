---
tags: 
description: Entenda a importância dos operadores no desenvolvimento de software com Javascript e como usá-los efetivamente.
keywords: Operadores, programação, linguagem de programação.
---
**Operadores Unários:**
- Operam em um único operando.
- Exemplos: `+`, `-`, `!`, `typeof`, `++`, `--`.
- Realizam operações como conversões numéricas, negação, inversão lógica e incremento/decremento.

**Operadores Binários:**
- Operam em dois operandos.
- Exemplos: `+`, `-`, `*`, `/`, `%`, `===`, `!==`, `>`, `<`, `&&`, `||`.
- Realizam operações como cálculos aritméticos, comparações, operações lógicas e atribuições.

**Operador Ternário:**
- É um único operador que possui três operandos.
- Sintaxe: `condição ? expressão1 : expressão2`.
- A `condição` é avaliada e, se for verdadeira, `expressão1` é retornada; caso contrário, `expressão2` é retornada.
- Permite expressões condicionais (ternárias) de forma concisa.

Aqui estão alguns exemplos para ilustrar as diferenças:

**Operador Unário:**
```javascript
let x = 5;
let y = -x;  // Negação unária: y se torna -5
let z = !true;  // Negação lógica: z se torna false
```

**Operador Binário:**
```javascript
let a = 10 + 5;  // Adição: a se torna 15
let b = 10 > 5;  // Comparação maior que: b se torna true
let c = true && false;  // Operação lógica E: c se torna false
```

**Operador Ternário:**
```javascript
let idade = 25;
let permitido = (idade >= 18) ? "Sim" : "Não";  // Expressão ternária condicional
// Se idade for maior ou igual a 18, permitido se torna "Sim"; caso contrário, se torna "Não"
```

Esses exemplos destacam o uso e as distinções entre os operadores unários, binários e ternários em JavaScript.