---
tags:
  - how-to
  - delete
description: Descubra como limpar completamente informações de versionamento em um diretório .git. Mantenha seu repositório limpo e organizado.
keywords: Git, versionamento, remoção de informações.
---
![[Git Background,1920x600.png]]  
Quando se trabalha com repositórios [Git](https://git-scm.com/), é comum que em algum momento você precise remover completamente todas as informações de versionamento, incluindo o histórico de commits, rastreamento de arquivos e ramificações. Isso pode ser necessário por várias razões, como limpar um projeto antes de compartilhá-lo publicamente, reduzir o tamanho de um repositório ou simplesmente começar do zero. Neste guia, vamos explorar como remover todas as informações de versionamento de um repositório [Git](https://git-scm.com/) usando o comando `rm -rf .git`.
## Antes de Prosseguir

Antes de realizar qualquer ação para remover as informações de versionamento do seu repositório [Git](https://git-scm.com/), é importante fazer um backup do seu repositório ou cloná-lo novamente de outra fonte. Certifique-se de que você tem cópias dos arquivos e do histórico em um local seguro.

## Removendo o Diretório .git

Para remover todas as informações de versionamento de um repositório [Git](https://git-scm.com/), siga os passos abaixo:

**Passo 1:** Abra um terminal ou prompt de comando e navegue até o diretório raiz do repositório [Git](https://git-scm.com/) que você deseja desversionar.

**Passo 2:** Certifique-se de que está no diretório correto e verifique se há um diretório `.git` no diretório raiz. Você pode listar os arquivos e diretórios com o seguinte comando:

```bash
ls -la
```

**Passo 3:** Use o comando `rm -rf` para remover o diretório `.git`. Este comando excluirá todos os arquivos e subdiretórios dentro do diretório `.git` e o diretório em si. Execute o seguinte comando:

```bash
rm -rf .git
```

**Passo 4:** Após a execução deste comando, o diretório `.git` e todas as informações de versionamento associadas serão permanentemente excluídos. O repositório agora está desversionado.

## Verificando o Resultado

Para verificar se o diretório `.git` foi completamente removido e que o repositório está desversionado, você pode executar o seguinte comando:

```bash
ls -la
```

Você não deve ver mais o diretório `.git` na lista de arquivos e diretórios. Isso confirma que todas as informações de versionamento foram removidas com sucesso.

## Alternativas

Embora o comando `rm -rf .git` seja uma abordagem rápida para remover todas as informações de versionamento, existem alternativas que podem ser mais apropriadas em certos casos:

- **Clonagem Limpa**: Você pode clonar o repositório novamente a partir da fonte original, criando assim um novo repositório sem o histórico antigo.
- **Repositório Orfão**: Se você deseja manter um histórico mínimo, pode criar um novo repositório [Git](https://git-scm.com/) no mesmo diretório e adicionar apenas os arquivos necessários, evitando adicionar o diretório `.git`.

**Fontes:**  
https://git-scm.com/docs/git-rm/