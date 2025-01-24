# Event Driven Architecture 

	 Arquitetura Orientada a Eventos
> É uma arquitetura que utiliza Eventos para disparar e se comunicar com serviços desacoplados. Geralmente é muito implementado utilizando microserviços e filas (que oferecem mais resiliência), mas também pode ser implementado sem uso de filas utilizando os padrões Observer e Mediator (que oferecem menos resiliência). Nessa arquitetura, utilizamos eventos para disparar e se comunicar com serviços desacoplados. 
> 
 Benefícios de uma arquitetura orientada a eventos:

 - [x] Baixo acoplamento entre os serviços
 - [x]  Maior tolerância a falha
 - [x] Escalabilidade mais alta
 - [x] Menor custo com infraestrutura
 - [x] Melhor divisão de responsabilidade facilitando o debug
 - [x] Possibilidade de utilizar PITR (Point-in-time Recovery)
 - [x] Diversidade tecnólogica


Desafios ao se adotar uma arquitetura orientada a eventos:

 - Complexidade mais alta 
 - Duplicação de eventos 
 - Falta de clareza no workflow 
 - Transações distribuídas

>
	O que é um Evento?
		
>Os eventos são basicamente fatos que aconteceram no domínio a cada etapa de execução do fluxo e que servem de gatilho para a execução das próximas etapas (regras de negócio). Esses eventos nada mais são que payloads de dados sendo transferidos (eventualmente, podemos utilizar apenas um id no payload do evento, porém o próximo step deverá conseguir consultar os dados completos através desse id recebido.). Eventos geralmente são nomeados sempre no passado, ex.: PedidoEfetuado, CadastroAtualizado, PrecoCalculado, PagamentoValidado.
>
> Cada evento é processado por um 'handler' consumidor que está aguardando pelo evento para iniciar seu processamento. Eventos tem baixo acoplamento e podem ser assíncronos. Podemos ter um ou vários producers enviando eventos para uma ou mais filas e um ou vários consumers consumindo esses eventos de acordo com o tipo do evento.

	Event Sourcing
> Event Sourcing consiste em manter o histórico das mutações de estado do evento durante todo o processamento, ou seja, o evento não é completamente substituido, mas sempre acrescentado com o proximo estado (input e output). Esse método é muito utilizado para se manter o histórico de tudo que ocorreu no fluxo, inclusive pode ser interessante adicionar um timestamp a cada processamento e assim ter uma visão completa do evento ao final do ciclo. Nesse método, só podemos ter eventos de create e read, nunca de delete, pois o evento será sempre acrescido de novos dados, nunca substituído ou apagado.
> 
> O principal ponto positivo desse método é que basta olhar o payload do evento para entender exatamente tudo que aconteceu durante o processamento, inclusive onde foi o ponto de falha.
> 
> O principal ponto negativo desse método é que o payload de evento pode ficar muito grande e pesado, portanto é um método que deve ser avaliado se será realmente útil ou não.


	 Padrão SAGA

> O padrão SAGA é muito utilizado para orquestração e compensação de falhas na arquitetura de microsserviços, visando garantir a consistência dos dados. Sendo assim, o padrão SAGA determina que toda ação tenha uma ação compensatória correspondente, e com isso, ao ocorrer uma falha, as ações compensatórias de cada ação previamente executada com sucesso deve ser também executada. Para melhor exemplificar, podemos levar em conta um sistema de locação de veículo com o seguinte fluxo:

1. Verificar disponibilidade de veículo
2. Calcular valor da reserva
3. Efetuar pré-reserva de veículo
4. Processar pagamento
5. Finalizar reserva

> E supondo que tivemos um problema na etapa '3. Processar pagamento'. Devemos ter um sistema que ao observar o evento de falha no pagamento, desfaça qualquer alteração que possa ter sido feita nos passos anteriores a esse que falhou, mesmo que esses passos anteriores tenham sido concluídos com sucesso. Podemos entender que o padrão SAGA funciona como um 'rollback geral' do fluxo.