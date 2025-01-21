import PriceCalculatorStrategy from "./PriceCalculatorStrategy";

export default class BeachPriceCalculator implements PriceCalculatorStrategy {
  calculate(parkedHours: number): number
  {
    return 20;
  }

}