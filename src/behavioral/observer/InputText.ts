import Observable from "./Observable";

// Setando InputText como um Observable, possibilitando outras classes de observarem suas atualizacoes
export default class InputText extends Observable {
  value: string

  constructor(readonly fieldName: string) {
    super()
    this.value = "";
  }

  setValue(value:string) {
    this.value = value
    this.notify(this.fieldName, value) // Notificando observadores que a property foi atualizada
  }
}