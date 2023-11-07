---
tags:
  - how-to
  - convert
description: Transforme facilmente um objeto Date em uma string formatada 'yyyy-mm-dd' usando JavaScript.
keywords: Conversão, Date, formato 'yyyy-mm-dd'.
---
![[javascript date,720x424.png]]

O código `new Date().toISOString().slice(0, 10)` em JavaScript é uma sequência de chamadas de métodos que cria um objeto de data, converte essa data em uma representação de data e hora no formato ISO 8601 e, em seguida, extrai apenas os primeiros 10 caracteres dessa representação, que correspondem à data no formato "aaaa-mm-dd".

Aqui está uma explicação passo a passo do que cada parte do código faz:

1. `new Date()`: Isso cria um novo objeto de data JavaScript que representa a data e a hora atual no momento em que a linha de código é executada.
2. `.toISOString()`: Este método converte o objeto de data em uma string de data e hora no formato ISO 8601. O formato ISO 8601 é amplamente utilizado para representar datas e horas em um formato padronizado. Ele se parece com "aaaa-mm-ddThh:mm:ss.sssZ", onde "aaaa" representa o ano, "mm" o mês, "dd" o dia, "hh" a hora, "mm" os minutos, "ss" os segundos e "sss" os milissegundos.
3. `.slice(0, 10)`: Este método de string `slice` é usado para extrair uma parte da string original. No caso do código, `slice(0, 10)` está pegando os caracteres da posição 0 até a posição 9 (pois a posição 10 não está incluída), o que resulta nos primeiros 10 caracteres da string. Isso captura a parte da string que representa a data no formato "aaaa-mm-dd".

Portanto, quando você executa `new Date().toISOString().slice(0, 10)`, você obtém uma string que representa a data atual no formato "aaaa-mm-dd". Por exemplo, se a data atual for 7 de outubro de 2023, o resultado será "2023-10-07".