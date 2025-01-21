/**
 * Adapter [structural]
 * 
 *    CONVERTE a interface de uma classe em outra interface esperada pelos clientes, permitindo que as classes
 *    com interfaces incompatíveis trabalhem juntas.
 * 
 *    Ela funciona como uma camada de mapeamento de dados que traduz diferentes implementações para o padrão conhecido pelo sistema.
 *    Por exemplo, se nosso sistema se comunica com 3 sistemas de pagamentos externos como Stripe, Paypal e MercadoPago, vamos descobrir
 *    que cada um deles utiliza termos diferentes para o mesmo dado, ou seja, Stripe possui um campo identificador de transacao chamado 'code'
 *    enquanto o Paypal utiliza o campo 'id' e o MercadoPago utiliza 'payment_id'. Podemos, entao, utilizar o padrão Adapter para 
 *    traduzir esses campos para a nomenclatura adotada em nossa camada de domínio, que no nosso exemplo abaixo escolhemos 'trackNumber'
 * 
 *    O padrão Adapter é muito utilizado quando temos esse tipo de cenário, onde precisamos 'traduzir' diferentes nomenclaturas de um mesmo dado
 *    para o padrão que adotamos em nosso sistema.
 */

import StripeTransaction from '../../../src/structural/adapter/StripeTransaction'
import PayPalTransaction from '../../../src/structural/adapter/PayPalTransaction'
import StripeTransactionAdapter from '../../../src/structural/adapter/StripeTransactionAdapter'
import PayPalTransactionAdapter from '../../../src/structural/adapter/PayPalTransactionAdapter'

test('Deve criar uma transação do Stripe', () => {
  const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2)

  expect(stripeTransaction.code).toBe("AHN786AB8")
});

test('Deve criar uma transação do Paypal', () => {
  const paypalTransaction = new PayPalTransaction(78978978, 1000, "S")

  expect(paypalTransaction.id).toBe(78978978)
});

test('Deve mapear uma transação a partir do Stripe', () => {
  const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2)
  const transaction = new StripeTransactionAdapter(stripeTransaction)

  expect(transaction.provider).toBe("Stripe")
  expect(transaction.trackNumber).toBe("AHN786AB8")
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe("paid")
});

test('Deve mapear uma transação a partir do PayPal', () => {
  const paypalTransaction = new PayPalTransaction(78978978, 1000, "S")
  const transaction = new PayPalTransactionAdapter(paypalTransaction)

  expect(transaction.provider).toBe("PayPal")
  expect(transaction.trackNumber).toBe("78978978")
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe("paid")
});