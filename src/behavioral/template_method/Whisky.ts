import TaxItem from "./ItemTemplateMethod/TaxItem";

export default class Whisky extends TaxItem {
  constructor(description: string, price: number) {
    super("Whisky", description, price)
  }
  
  getTax(): number {
    return 0.20 // 20%
  }
}