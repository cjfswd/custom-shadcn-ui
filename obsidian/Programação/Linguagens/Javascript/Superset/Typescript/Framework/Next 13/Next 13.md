A versão 13 do framework Next introduziu uma nova arquitetura de projeto que separa o código que é executado no servidor e cliente de maneira mais simples e sucinta, além disso agora é possível criar componentes React que executam código de maneira assíncrona no lado do servidor esses componentes são chamados de React Server Components.

Para separar e classificar componentes que rodam no server e cliente utilizamos as diretivas [['use server' (diretiva Next 13) - Componentes React no lado do servidor]] e [['use client' (diretiva Next 13) - Componentes React no lado do cliente]] respectivamente. 

Desenvolver com Next 13 já não é mais tão semelhante a desenvolver com React clássico, existem modificações no comportamento dos componentes devido as Directives, o uso de Props entre outros itens é um pouco diferente nesta versão.

Uma das coisas que mais geraram impacto são as [[server actions]] junto ao uso de [formulários](form.md) html.

[['use client' (diretiva Next 13) - Componentes React no lado do cliente]]
[['use server' (diretiva Next 13) - Componentes React no lado do servidor]]
[[form]]
[[React Server Components - Uma Evolução na Renderização do Lado do Servidor]]
[[server actions]]