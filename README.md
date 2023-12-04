# Classificador de nível de herói
Desafio de lógica dentro do bootcamp Potência Tech iFood pela plataforma DIO. Este código tem como objetivo classificar o nível de um herói com base na quantidade de experiência (XP) acumulada.

#### Variáveis:
   - `heroName` (String): Armazena o nome do herói.
   - `heroXP` (Número inteiro): Guarda a quantidade de experiência do herói.

#### Funcionamento:
O código utiliza diferentes faixas de experiência para atribuir um nível ao herói.
  - Se a experiência for menor que 1000, o herói está no nível de Ferro.
  - Se estiver entre 1001 e 2000, é no nível de Bronze, e assim por diante.


#### Saídas:
O resultado da classificação do herói é exibido no console por meio de mensagens `console.log()`. As mensagens incluem o nome do herói e seu nível.

#### Cenários Especiais:
Se a experiência do herói não se encaixar em nenhuma das faixas especificadas, uma mensagem indicando que o nível não foi encontrado será apresentada.