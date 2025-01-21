// STRATEGY PATTERN

export default interface PriceCalculatorStrategy {
  calculate(parkedHours: number): number;
}