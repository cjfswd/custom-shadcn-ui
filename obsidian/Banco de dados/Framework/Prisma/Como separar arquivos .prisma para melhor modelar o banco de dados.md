---
tags:
  - how-to
  - modelling
description: Aprenda a aprimorar o design do seu banco de dados dividindo arquivos .prisma. Dicas e truques para otimizar seu modelo de dados.
keywords: Prisma, modelagem de banco de dados, separar arquivos.
---
![[Prisma Background,1484x460.png]]

O suporte a múltiplos esquemas de banco de dados está atualmente disponível com os conectores PostgreSQL, CockroachDB e SQL Server.

Muitos provedores de banco de dados permitem que você organize tabelas de banco de dados em grupos nomeados. Isso pode ser usado para tornar a estrutura lógica do modelo de dados mais compreensível ou evitar conflitos de nomes entre tabelas.
## Como Ativar o Recurso de Múltiplos Esquemas

O suporte a múltiplos esquemas está atualmente em prévia. Para ativá-lo, adicione a flag `multiSchema` ao campo `previewFeatures` do bloco `generator` em seu arquivo de esquema do Prisma

```typescript
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
## Como Incluir Múltiplos Esquemas de Banco de Dados em seu Esquema do Prisma

Para usar múltiplos esquemas de banco de dados em seu arquivo de esquema do Prisma, adicione os nomes dos seus esquemas de banco de dados a um array no campo `schemas`, no bloco `datasource`. O exemplo a seguir adiciona um esquema "base" e um esquema "transactional":

```typescript
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["base", "transactional"]
}
```

Não é necessário alterar a string de conexão. O valor do esquema em sua string de conexão é o esquema padrão ao qual o Prisma Client se conecta e usa para consultas diretas. Todas as outras consultas do Prisma Client usam o esquema do modelo ou enum que você está consultando.

Para indicar que um modelo ou enum pertence a um esquema de banco de dados específico, adicione o atributo `@@schema` com o nome do esquema de banco de dados como parâmetro. No exemplo a seguir, o modelo User faz parte do esquema "base", e o modelo Order e o enum Size fazem parte do esquema "transactional":

```typescript
model User {
  id     Int     @id
  orders Order[]

  @@schema("base")
}

model Order {
  id      Int  @id
  user    User @relation(fields: [id], references: [id])
  user_id Int

  @@schema("transactional")
}

enum Size {
  Small
  Medium
  Large

  @@schema("transactional")
}
```

## Tabelas com o Mesmo Nome em Diferentes Esquemas de Banco de Dados

Se você tiver tabelas com o mesmo nome em diferentes esquemas de banco de dados, precisará mapear os nomes das tabelas para nomes de modelos exclusivos em seu esquema do Prisma. Isso evita conflitos de nomes ao consultar modelos no Prisma Client.

Por exemplo, considere uma situação em que a tabela "config" no esquema de banco de dados "base" tem o mesmo nome da tabela "config" no esquema de banco de dados "users". Para evitar conflitos de nomes, dê nomes exclusivos aos modelos em seu esquema do Prisma (BaseConfig e UserConfig) e use o atributo `@@map` para mapear cada modelo para o nome da tabela correspondente:

```typescript
model BaseConfig {
  id Int @id

  @@map("config")
  @@schema("base")
}

model UserConfig {
  id Int @id

  @@map("config")
  @@schema("users")
}
```
## Jeito antigo (antes da versão 4.9.0)

A estrutura de diretórios que utilizamos é a seguinte:

```plaintext
prisma
  |_ schemas
  |   |_ client.prisma
  |   |_ db.prisma
  |   |_ model1.prisma
  |   |_ model2.prisma
  |   |_ model3.prisma
  |_ schema.prisma
```

Nesta estrutura, todos os modelos de banco de dados individuais estão contidos em arquivos `.prisma` separados dentro da pasta `schemas`, e o arquivo `schema.prisma` na raiz do diretório é o arquivo que importa todos esses modelos. A ideia é manter cada modelo de banco de dados em seu próprio arquivo `.prisma` para facilitar a manutenção e organização.

## Os Scripts

Os scripts definidos no arquivo `package.json` permitem a geração automática do arquivo `schema.prisma` que importa todos os modelos individualmente. Vamos entender como esses scripts funcionam, começando com o script para sistemas Linux:

### Script para Linux

```json
{
"gen:schema:linux": "awk 1 ./prisma/schemas/*.prisma > ./prisma/schema.prisma && npx prisma format"
}
```

Este script executa duas operações principais: a primeira parte do comando `awk` e a segunda parte do comando `npx prisma format`.

1. **Primeira parte - `awk 1 ./prisma/schemas/*.prisma > ./prisma/schema.prisma`**:
   - `awk` é uma poderosa ferramenta de processamento de texto em sistemas Unix e Unix-like. Neste contexto, o comando `awk 1` é usado para simplesmente copiar todo o conteúdo dos arquivos `.prisma` na pasta `./prisma/schemas` e redirecioná-lo para o arquivo `./prisma/schema.prisma`.
   - Isso significa que todos os modelos individuais são concatenados em um único arquivo, `schema.prisma`.
2. **Segunda parte - `npx prisma format`**:
   - Após a concatenação, o comando `npx prisma format` é usado para formatar o arquivo resultante. Ele garante que o arquivo `schema.prisma` esteja formatado de acordo com as convenções do Prisma.

### Script para Windows

```json
{
"gen:schema:windows": "powershell -Command \"Get-Content .\\prisma\\schemas\\*.prisma | Set-Content .\\prisma\\schema.prisma; npx prisma format\""
}
```

Este script é semelhante ao script para Linux, mas é destinado a sistemas Windows e utiliza o PowerShell.

1. **Primeira parte - `"Get-Content .\\prisma\\schemas\\*.prisma | Set-Content .\\prisma\\schema.prisma"`**:
   - O comando PowerShell `Get-Content .\\prisma\\schemas\\*.prisma` lê o conteúdo de todos os arquivos `.prisma` na pasta `./prisma/schemas`.
   - Em seguida, o operador `|` redireciona esse conteúdo para o comando `Set-Content .\\prisma\\schema.prisma`, que cria o arquivo `schema.prisma` e escreve o conteúdo combinado nele.
2. **Segunda parte - `npx prisma format`**:
   - Assim como no script para Linux, a segunda parte executa o comando `npx prisma format` para formatar o arquivo `schema.prisma`.

## Vantagens da Separação de Arquivos .prisma

A separação de arquivos `.prisma` em modelos individuais oferece diversas vantagens:

1. **Organização**: Cada modelo está em seu próprio arquivo, tornando mais fácil localizar e trabalhar com um modelo específico.  
2. **Colaboração**: Diferentes membros da equipe podem trabalhar em modelos diferentes sem conflitos frequentes no arquivo `schema.prisma`.
3. **Manutenção simplificada**: Se um modelo precisa ser alterado, você pode fazê-lo em seu próprio arquivo `.prisma`, mantendo o código mais limpo e evitando alterações em outros modelos.
4. **Melhor legibilidade**: Com modelos separados, o arquivo `schema.prisma` permanece enxuto, facilitando a leitura e compreensão.
5. **Desempenho aprimorado**: O Prisma pode gerar SQL mais eficiente, pois cada modelo é gerenciado de forma independente.

Em resumo, a organização e a manutenção de modelos de banco de dados em arquivos `.prisma` separados são práticas recomendadas para projetos Prisma em crescimento. Os scripts fornecidos ajudam a criar o arquivo `schema.prisma` combinado automaticamente, independentemente do sistema operacional utilizado pela equipe de desenvolvimento. Isso resulta em uma modelagem de banco de dados mais limpa e eficaz, tornando o desenvolvimento mais eficiente e colaborativo.

**Fontes:**  
https://www.prisma.io/docs/guides/other/multi-schema  
https://github.com/prisma/prisma/issues/92


