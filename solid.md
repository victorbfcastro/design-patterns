# SOLID

O acrônimo SOLID representa os cinco princípios que facilitam o processo de desenvolvimento e acabam por facilitar também a manutenção, testabilidade e a expansão do software.

Estes princípios são fundamentais na programação orientada a objetos e podem ser aplicados em qualquer linguagem que adote este paradigma.

Os 5 princípios são:

**S** 	— 	Single Responsibility Principle (Princípio da responsabilidade única)
**O** 	— 	Open-Closed Principle (Princípio Aberto-Fechado)
**L** 	— 	Liskov Substitution Principle (Princípio da substituição de Liskov)
**I** 	— 	Interface Segregation Principle (Princípio da Segregação da Interface)
**D** 	— 	Dependency Inversion Principle (Princípio da inversão da dependência)

## Single Responsability Principle
 >*(Principio da Responsabilidade Única)*
> Cada classe deve ter um, e somente um, motivo para mudar. Se uma classe tem várias responsabilidades, mudar um requisito do projeto pode trazer várias razões para modificar a classe. Por isso, as classes devem ter responsabilidades únicas. Esse princípio pode ser estendido para os métodos que criamos também. Quanto mais tarefas um método executa, mais difícil é testá-lo e garantir que o programa está em ordem.

## Open/Closed Principle
>*(Principio do Aberto/Fechado)*
> Entidades de software (como classes e métodos) devem estar abertas para extensão, mas fechadas para modificação. Ou seja, se uma classe está aberta para modificação, quanto mais recursos adicionarmos, mais complexa ela vai ficar. O ideal é adaptar o código não para alterar a classe, mas para estendê-la. Em geral, isso é feito quando abstraímos um código para uma interface.

## Liskov Substitution Principle
> *(Principio da Substituição de Liskov)*
> Se objetos do tipo "S" (ex.: "Beer", "Whisky", "Water") são subclasses do tipo "T" (ex.: Item), então os objetos do tipo "T" (Item) podem ser substituídos por objetos do tipo "S" sem quebrar o comportamento do sistema. 
`Exemplo 1:` Vamos dizer que as classes "Beer" e "Whisky" tenham um método getTax() para calcular o imposto do item e a classe "Water", que não possui imposto, não tenha esse método implementado ou lance uma exception nesse método getTax(), veremos que "Water" possui um comportamento diferente da classe mãe (Item) que está quebrando o sistema e portanto está ferindo o princípio da Substituição de Liskov. Para solucionar esse problema, podemos ter uma subclasse abstrata "NotTaxedItem" que estende de "Item" e agora "Water" poderá estender de "NotTaxedItem".
*`Exemplo 2:`* Uma classe mãe 'Pessoa' possui um campo Idade que aceita qualquer número de 0 a 100. Existe uma subclasse de 'Pessoa' chamada 'Funcionario' que caso receba uma idade menor que 18 vai lançar uma exception, pois um funcionário precisa ter mais de 18 anos. Veja que a subclasse 'Funcionário' está limitando a condição que era estabelecida pela classe mãe 'Pessoa'. Isso configura uma quebra do princípio de Substituição de Liskov, pois as subclasses devem poder serem substituidas pela classe mão sem quebrar o funcionamento do sistema.


## Integration Segregation Principle

> *(Principio da Segregração de Interface)* 
> Uma subclasse não deve precisar implementar métodos que ela não precisa. Dessa forma, devemos quebrar interfaces muito abrangentes em interfaces mais granulares.


## Dependency Inversion Principle
> *(Principio da Inversão de Dependência)*
> Componentes de alto nível não devem depender de componentes de baixo nível, os dois devem depender de abstrações (interfaces). Abstrações não devem depender de detalhes, ou seja, é a implementação que utilizará a abstração é que conhecerá o detalhe. Quanto mais próximo de regras de negócio, mais alto nível estamos. A inversão de dependência se dá quando uma determinada classe, ao invés de implementar uma lógica dentro dela,  ela passe a receber a classe que fornecerá esse dado ou até mesmo receber o dado já pronto de fora. Dessa forma, a classe não fica "dependente" de implementações que não deveria estar fazendo.
> `Exemplo:` Uma classe 'Cupom' que possui uma data de validade não deveria calcular um new Date() dentro dela para calcular a validade do cupom, mas sim receber essa data via parâmetro, facilitando também o teste unitário da classe.