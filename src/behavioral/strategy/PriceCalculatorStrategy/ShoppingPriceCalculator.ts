import PriceCalculatorStrategy from "./PriceCalculatorStrategy";

export default class ShoppingPriceCalculator implements PriceCalculatorStrategy {
  calculate(parkedHours: number): number
  {
    return parkedHours * 10
  }

}