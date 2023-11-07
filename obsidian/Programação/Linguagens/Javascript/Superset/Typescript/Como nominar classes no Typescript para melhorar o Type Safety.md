---
tags:
  - how-to
  - type-safety
description: Melhore a segurança de tipos em seu projeto TypeScript através de boas práticas de nomenclatura de classes.
keywords: TypeScript, classes, Type Safety.
---
Considere o seguinte caso:

```typescript
type PostId = string;
type UserId = string;
 
function publicarPost(userId: UserId, postId: PostId) {
  //
}
 
const postId: PostId = 'post-xyz-123';
const userId: UserId = 'user-xyz-123';
 
publicarPost(userId, postId); // correto
publicarPost(postId, userId); // gostaríamos que fosse um erro, mas passa
```

Acreditaríamos que o TypeScript nos impediria de passar um valor do tipo PostId quando se espera um UserId.

Infelizmente, tanto userId quanto postId podem ser usados de forma intercambiável. Para o compilador, os nomes são irrelevantes, pois são um alias para o mesmo tipo de string.

O TypeScript não se importa com como nomeamos nossos valores, apenas se a forma que eles descrevem (por exemplo, string) pode satisfazer as restrições.

## Tipagem estrutural

Se você deseja uma explicação detalhada, sinta-se à vontade para ler a entrada da documentação oficial e pular esta seção.

O TypeScript utiliza a tipagem estrutural, que é um pouco diferente do que você pode ter usado em Java.

Em nosso caso, o TypeScript não se importa se um tipo tem uma herança explícita de outro. Se seu conteúdo é igual (ou um subconjunto), está tudo bem. Aqui está outro exemplo:

```typescript
type Estudante = { nome: string };
type Professor = { nome: string };
 
const estudante: Estudante = { nome: 'Benjamin' };
const professor: Professor = estudante; // sem problemas
```

Para o TypeScript, tanto Estudante quanto Professor são equivalentes. Contanto que os conteúdos sejam os mesmos, qualquer implementação que use um valor Estudante pode também ser satisfeita com um valor Professor. Em linguagens como Java, isso não seria permitido.

```java
class Estudante {
  public String nome;
}
class Professor {
  public String nome;
}
 
// erro: tipos incompatíveis: Professor não pode ser convertido em Estudante
Estudante estudante = new Professor();
```

Claro, em nosso trecho de código TypeScript, se adicionarmos outra propriedade ao Professor, seremos notificados disso.

```typescript
// A propriedade 'classes' está faltando no tipo 'Estudante', mas é necessária no tipo 'Professor'.(2741)
type Professor = { nome: string; classes: Array<string> };
```

Podemos ter uma falsa sensação de segurança ao usar o TypeScript, esperando que o compilador nos salve. No entanto, na realidade, podemos estar introduzindo bugs semelhantes em nosso código se não tivermos cuidado.

## Como podemos corrigir isso?

Precisamos de uma maneira de diferenciar entre os dois tipos.

Primeiro, criamos um símbolo que podemos usar para identificar nossos tipos nominais. Vale ressaltar que ele não existirá após a compilação.

```typescript
declare const __nominal__type: unique symbol;
```

Em seguida, enriquecemos nosso tipo base (por exemplo, string) com um símbolo que podemos usar para identificar nossos tipos nominais. Dois tipos são considerados equivalentes se tiverem o mesmo símbolo, além de seus conteúdos.

```typescript
declare const __nominal__type: unique symbol;
 
export type Nominal<Tipo, Identificador> = Tipo & {
  readonly [__nominal__type]: Identificador;
};
```

Alguns exemplos nos quais podemos precisar de uma distinção:

```typescript
type UserId = Nominal<string, 'UserId'>;
type PostId = Nominal<string, 'PostId'>;
type OrgId = Nominal<string, 'OrgId'>;
type ProjectId = Nominal<string, 'ProjectId'>;
 
type CustomerId = Nominal<string, 'CustomerId'>;
type ClientId = Nominal<string, 'ClientId'>;
 
type projectInvitationToken = Nominal<string, 'projectInvitationToken'>;
type passwordResetToken = Nominal<string, 'passwordResetToken'>;
 
type EUR = Nominal<number, 'EUR'>;
type USD = Nominal<number, 'USD'>;
 
type Miles = Nominal<number, 'Miles'>;
type Kilometers = Nominal<number, 'Kilometers'>;
```

Aqui estão eles:

```typescript
type UserId = Nominal<string, 'UserId'>;
type PostId = Nominal<string, 'PostId'>;
 
let userId = 'xyz' as UserId;
let postId = 'xyz' as PostId;
 
/*
O tipo 'PostId' não é atribuível ao tipo 'UserId'.
 O tipo 'PostId' não é atribuível ao tipo '{ readonly [__nominal__type]: "UserId"; }'.
 Os tipos da propriedade '[__nominal__type]' são incompatíveis.
 O tipo '"PostId"' não é atribuível ao tipo '"UserId"'.
*/
userId = postId;
```

O elefante na sala

Sim, temos que usar `as`. Não podemos atribuir a string 'xyz' diretamente.

```typescript
// falha
/*
O tipo 'string' não é atribuível ao tipo 'UserId'.
 O tipo 'string' não é atribuível ao tipo '{ readonly [__nominal__type]: "UserId"; }'.
*/
let userId: UserId = 'xyz';
/*
O tipo 'string' não é atribuível ao tipo 'PostId'.
 O tipo 'string' não é atribuível ao tipo '{ readonly [__nominal__type]: "PostId"; }'.
*/
let postId: PostId = 'xyz';
 
// funciona
let userId = 'xyz' as UserId;
let postId = 'xyz' as PostId;
```

Você pode considerar isso como uma "gambiarra", mas o TypeScript possui ferramentas poderosas em seu conjunto de recursos. Cabe a nós saber quando usá-las.

Dito isso, podemos melhorar a situação. Vamos concentrar a conversão de tipo `as` em um único local.

```typescript
function UserId(id: string): UserId {
  // a validação pode ser feita aqui
  return id as UserId;
}
 
function PostId(id: string): PostId {
  // a validação pode ser feita aqui
  return id as PostId;
}
 
let userId = UserId('id');
let postId = PostId('id');
```

Agora você tem uma maneira de adicionar tipos nominais no TypeScript e melhorar a segurança de tipos em seu código. Lembre-se de que a clareza do código e a prevenção de erros são sempre prioridades importantes.