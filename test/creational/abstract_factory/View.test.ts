/**
 * Abstract Factory [creational]
 * 
 *   Fornece uma interface para criação de FAMILIAS DE OBJETOS RELACIONADOS, sem especificar suas classes concretas.
 *   Geralmente é utilizado quando uma classe precisa instanciar variações de uma mesma implementação, 
 *   e não desejamos ficar utilizando "if" para verificar qual implementação devemos utilizar naquele momento.
 * 
 *   No exemplo a seguir, estamos utilizando o Abstract Factory para que a classe View receba a fábrica correta para cada cenário
 *   sem se preocupar com if/else ou com implementações extras dentro da classe.
 * 
 *   Esse pattern geralmente viabiliza o Open-Closed Principle do SOLID, ou seja, permite que a interface que está servindo de contrato
 *   para as fábricas possa ser ampliado sem a necessidade de alterar a base dela.
 */

import View from '../../../src/creational/abstract_factory/View'
import LightWidgetFactory from '../../../src/creational/abstract_factory/factory/LightWidgetFactory'
import DarkWidgetFactory from '../../../src/creational/abstract_factory/factory/DarkWidgetFactory'
import NeonWidgetFactory from '../../../src/creational/abstract_factory/factory/NeonWidgetFactory'

test('Deve criar uma interface gráfica com tema claro', () => {
  const view = new View(new LightWidgetFactory())
  expect(view.label.color).toBe("black")
  expect(view.button.color).toBe("white")
  expect(view.button.backgroundColor).toBe("blue")
});

test('Deve criar uma interface gráfica com tema escuro', () => {
  const view = new View(new DarkWidgetFactory())
  expect(view.label.color).toBe("white")
  expect(view.button.color).toBe("white")
  expect(view.button.backgroundColor).toBe("black")
});

test('Deve criar uma interface gráfica com neon', () => {
  const view = new View(new NeonWidgetFactory())
  expect(view.label.color).toBe("green")
  expect(view.button.color).toBe("blue")
  expect(view.button.backgroundColor).toBe("black")
});