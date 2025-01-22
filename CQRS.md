# CQRS

CQRS é um padrão de design que separa as operações de leitura e gravação de dados em modelos de dados diferentes. A sigla CQRS significa Command Query Responsibility Segregation, que em português significa Separação de Responsabilidades em Consultas e Comandos. É muito utilizado para aumentar a performance, eficiencia e escalabilidade, além de evitar problemas de incompatibilidade das informações.

## Princípios Básicos
> Comandos devem ser orientados a tarefas específicas e não aos dados em si. Ex.: FazerPedido, EfetuarMatricula, BuscarPedidos
> Eventualmente podem ser colocados em uma fila e processados de forma assíncrona.
> Consultas nunca modificam dados, não envolvem o domínio e apenas retornam os dados em um DTO.
> Enquanto que a persistência dos dados é feita em conjunto com a camada de Domínio, devemos implementar uma camada separada para Leitura (Read Model) que trabalha com DTOs, onde vamos diferenciar comandos de persistencia de comandos de leitura.


## Teorema CAP
> O teorema CAP consiste na ideia de que em um sistema distribuido, no processo de armazenamento de dados só podemos ter 2 das 3 características desejáveis: 
1. Consistência
2. Disponibilidade
3. Tolerância a falhas (particao)

Esse teorema nos mostra que, diariamente, teremos que optar por garantir 2 dessas 3 características, muito semelhante ao conceito de "Bom, bonito e barato.. escolha dois!". Vamos ao exemplo de um sistema de hotelaria:

Digamos que um cliente está tentando efetuar o pagamento de uma reserva para um quarto do hotel e durante o pagamento houve uma falha no sistema. Você, como gestor, não está conseguindo ter uma visão do sistema de reservas, quartos disponíveis etc.. E agora deverá optar por:
1. Não aceitar a reserva, visto que você não sabe se o quarto ainda está disponível e perder um possível cliente. (Manter a Consistência dos dados e arriscar perder a Disponibilidade).

2. Aceitar a reserva, correndo o risco de ter outro cliente reservando o mesmo quarto. (Manter a Disponibilidade e arriscar perder a Consistência).

Geralmente, a maioria dos sistemas atuais faz a opção de garantir a DISPONIBILIDADE, possuindo mecanismos de ajuste para regularizar a consistência dos dados perdidos, por exemplo: um mecanismo que verifica qual reserva foi efetuada antes através do horário e cancelamento da outra reserva concorrente.
