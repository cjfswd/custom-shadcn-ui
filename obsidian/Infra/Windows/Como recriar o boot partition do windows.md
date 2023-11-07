---
tags:
  - bootloader
  - drive
description: Um guia abrangente sobre como recriar a partição de inicialização do Windows para resolver problemas de inicialização.
keywords: Boot partition, Windows, solução de inicialização.
---
![[Windows Wallpaper,1658x932.png]]

As vezes podemos fazer besteiras com arquivos e diretorios que são importantes para o sistema operacional como deletar a partição do windows que cuida do bootloader do sistema (Sim eu fiz isso usando software de terceiros vulgo IOBIT Advanced SystemCare). Portanto vou ensinar como recriar o boot partition do windows, tanto para documentar o processo quanto ajudar outras pessoas. 
## Materiais necessários

Antes de prosseguir, você precisará dos seguintes materiais:

- Um dispositivo de instalação do Windows 10, como um DVD de instalação ou uma unidade USB de inicialização.
- Acesso a um computador com Windows 10.

## Passo 1: Inicializar a partir da Mídia

Certifique-se de que o seu computador está configurado para inicializar a partir da mídia. Isso geralmente pode ser feito no BIOS ou na tela de inicialização do sistema. O processo de entrada pode variar de acordo com o fabricante do computador.
## Passo 2: Inserir a Mídia de Instalação

Insira a mídia de instalação (DVD ou unidade USB) no seu computador e, em seguida, reinicie o sistema.
## Passo 3: Acessar as Opções de Reparo

Após inicializar a partir da mídia, você verá a tela de instalação do Windows. Siga estas etapas:

1. Selecione "Reparar o seu computador".
2. Em seguida, selecione "Solução de problemas".  
  
## Passo 4: Acessar o Prompt de Comando

Dentro das opções de solução de problemas, escolha "Prompt de Comando". Este será o ponto de partida para recriar a partição de inicialização.

## Passo 5: Usar o Diskpart

Digite o comando a seguir para iniciar o utilitário Diskpart:

`Diskpart`

## Passo 6: Listar Discos

Digite o comando abaixo para listar os discos do sistema. Anote o número do disco que corresponde à sua partição de inicialização (normalmente será 0, mas pode variar).

`List disk`

## Passo 7: Selecionar o Disco

Selecione o disco da partição de inicialização usando o comando "Sel disk X", onde X é o número do disco da etapa anterior. Por exemplo:

`Sel disk 0`

## Passo 8: Listar Volumes

Digite o comando a seguir para listar os volumes no disco. Anote o número do volume correspondente à partição EFI (geralmente é 4).

`List vol`

## Passo 9: Selecionar a Partição EFI

Selecione a partição EFI usando o comando "Sel vol X", onde X é o número do volume da etapa anterior. Por exemplo:

`Sel vol 4`

## Passo 10: Atribuir uma Letra à Partição

Atribua uma letra a essa partição com o comando "assign letter=X", onde X é a letra que você deseja atribuir à partição EFI. Por exemplo:

`assign letter=V`

## Passo 11: Sair do Diskpart

Saia do Diskpart usando o comando "Exit".

## Passo 12: Acessar a Partição EFI

Acesse a partição EFI digitando a letra que você atribuiu a ela. No nosso exemplo, digitamos:

`V:`

## Passo 13: Formatando a Partição EFI

Agora, você pode formatar a partição EFI. Use o comando a seguir para formatá-la no sistema de arquivos FAT32:

`format V: /FS:FAT32`

## Passo 14: Recriar a Estrutura de Diretórios EFI

Depois de formatar a partição EFI, você precisa recriar a estrutura de diretórios. No entanto, nas versões mais recentes do Windows 10, esse passo não é mais necessário, e o comando apropriado é diferente. Portanto, siga as instruções para sua versão do Windows 10:

### Para versões anteriores (antes da versão 1709):

1. Crie a estrutura de diretórios EFI com o comando: `MD \EFI\Microsoft\Boot`
2. Em seguida, acesse o diretório "Boot" com o comando: `cd /d V:\EFI\Microsoft\Boot\`
3. Por fim, execute o comando: `bootrec /FixBoot`

### Para versões a partir da 1709 (ou se você preferir uma abordagem mais simples):

Use o comando a seguir para recriar o bootloader EFI:

`bcdboot C:\windows /s V: /f UEFI`

## Conclusão

Recriar a partição de inicialização do Windows 10 pode ser uma solução eficaz para resolver problemas de inicialização e erros relacionados ao bootloader. Certifique-se de seguir cuidadosamente os passos fornecidos neste guia e escolher a abordagem apropriada com base na versão do Windows 10 que você está usando. Com as etapas corretas, você poderá recuperar com sucesso o funcionamento normal do seu sistema. Lembre-se sempre de fazer backup dos seus dados importantes antes de realizar qualquer procedimento que envolva as partições do sistema.