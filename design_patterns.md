# Design Patterns

## _GoF (Gang of Four)_

Um Padrão de Projeto (Design Pattern), é uma solução geral para um problema que ocorre com frequência dentro de um determinado contexto no projeto de software. Um padrão de projeto não é um projeto finalizado que pode ser diretamente transformado em código fonte ou de máquina, ele é uma descrição ou modelo (template) de como resolver um problema que pode ser usado em muitas situações diferentes. Padrões são melhores práticas formalizadas que o programador pode usar para resolver problemas comuns quando projetar uma aplicação ou sistema.

## Padrões de Criação (Creational Patterns)

- Abstract Factory (disponivel)
> Fornece uma interface para criação de FAMILIAS DE OBJETOS RELACIONADOS, sem especificar suas classes concretas. Geralmente é utilizado quando uma classe precisa instanciar variações de uma mesma implementação, e não desejamos ficar utilizando "if" para verificar qual implementação devemos utilizar naquele momento. No exemplo a seguir, estamos utilizando o Abstract Factory para que a classe View receba a fábrica correta para cada cenário sem se preocupar com if/else ou com implementações extras dentro da classe. Esse pattern geralmente viabiliza o Open-Closed Principle do SOLID, ou seja, permite que a interface que está servindo de contrato para as fábricas possa ser ampliado sem a necessidade de alterar a base dela.

- Builder

- Factory Method

- Prototype

- Singleton
  

## Padrões Estruturais (Structural Patterns)

- Adapter (disponivel)
> CONVERTE  a  interface  de  uma  classe  em  outra  interface  esperada  pelos  clientes, permitindo  que  as  classes com  interfaces  incompatíveis  trabalhem  juntas. Ela  funciona  como  uma  camada  de  mapeamento  de  dados  que  traduz  diferentes  implementações  para  o  padrão  conhecido  pelo  sistema. Por  exemplo, se  nosso  sistema  se  comunica  com 3 sistemas  de  pagamentos  externos  como  Stripe, Paypal  e  MercadoPago, vamos  descobrir que  cada  um  deles  utiliza  termos  diferentes  para  o  mesmo  dado, ou  seja, Stripe  possui  um  campo  identificador  de  transacao  chamado 'code' enquanto  o  Paypal  utiliza  o  campo 'id' e  o  MercadoPago  utiliza 'payment_id'. Podemos, entao, utilizar  o  padrão  Adapter  para traduzir  esses  campos  para  a  nomenclatura  adotada  em  nossa  camada  de  domínio, que  no  nosso  exemplo  abaixo  escolhemos 'trackNumber'. O  padrão  Adapter  é  muito  utilizado  quando  temos  esse  tipo  de  cenário, onde  precisamos 'traduzir' diferentes  nomenclaturas  de  um  mesmo  dado para  o  padrão  que  adotamos  em  nosso  sistema.

- Bridge

- Composite

- Decorator

- Façade (ou Facade)

- Flyweight

- Proxy


## Padrões Comportamentais (Behavioral Patterns)

- Chain of Responsibility

- Command

- Interpreter

- Iterator

- Mediator (disponivel)
> Muito semelhante ao Observer, esse padrão define um objeto que encapsula a forma como um conjunto de objetos interagem entre si, ou seja, enquanto que o observer funciona de 1 para N, o Mediator atua de N para N (muitos para muitos).

- Memento

- Observer (disponivel)
> O padrão Observer permite que qualquer objeto que implemente a interface do assinante possa se inscrever para notificações de eventos em objetos do producer. Esse padrão consiste em definir uma dependencia 1 para N entre objetos de maneira que quando o observable for modificado, os observers serão notificados automaticamente para se atualizarem também.

- State

- Strategy (disponivel)
> Utilizado para definir uma família de algoritmos, encapsular cada uma delas e torná-las INTERCAMBIAVEIS

- Template Method (disponivel)
> Utilizado para definir um template de métodos que as subclasses deverão implementar a partir de uma classe abstrata com métodos abstratos (classe mãe)

- Visitor