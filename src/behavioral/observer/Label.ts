import Observer from "./Observer";

export default class Label implements Observer{
  value: string;

  constructor (readonly expression: string) {
    this.value = "";
  }
  
  setValue(fieldName: string, value: string) {
    this.value = this.expression.replace(`{{${fieldName}}}`, value)
  }
  
  getValue() {
    return this.value
  }

  update(fieldName: string, value: string): void
  {
    this.setValue(fieldName, value)
  }
}