// Deve mapear os dados recebidos para atender ao domínio esperado pela aplicação

import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
  provider: string;
  trackNumber: string;
  amount: number;
  status: string;

  constructor (payPalTransaction: PayPalTransaction) {
    this.provider = 'PayPal'
    this.trackNumber = String(payPalTransaction.id)
    this.amount = payPalTransaction.amount
    this.status = this.convertStatus(payPalTransaction.status)
  }
  
  convertStatus(status: string) {
    const map: any = {
      "P": "waiting_payment",
      "S": "paid",
      "F": "refunded"
    }

    return map[status]
  }
}