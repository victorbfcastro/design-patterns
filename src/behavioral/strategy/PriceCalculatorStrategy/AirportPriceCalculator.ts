import PriceCalculatorStrategy from "./PriceCalculatorStrategy";

export default class AirportPriceCalculator implements PriceCalculatorStrategy {
  calculate(parkedHours: number): number
  {
    let price = 20
    let minHours = 3
    const remainingHours = parkedHours - minHours
    
    if (remainingHours <= 0) return price

    price += remainingHours * 10
    
    return price
  }

}