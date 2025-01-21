import PriceCalculatorStrategy from "./PriceCalculatorStrategy/PriceCalculatorStrategy";

export default class ParkingLot {
  parkedCars: { plate: string, checkinDate: Date }[];

  constructor (readonly location: string, readonly capacity: number, readonly priceCalculator: PriceCalculatorStrategy) {
    this.parkedCars = []
  }

  
  checkin (plate: string, checkinDate: Date) {
    this.parkedCars.push({ plate, checkinDate })
  }

  checkout (plate: string, checkoutDate: Date) {
    const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate)

    if (!parkedCar) throw new Error(`Car plate ${plate} not found!`)

    this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1) // Removendo carro que saiu do array de parkedCars

    const parkedHours = (checkoutDate.getTime() - parkedCar.checkinDate.getTime()) / (1000*60*60)

    return this.priceCalculator.calculate(parkedHours)  // Calculo do preço é uma regra de negócio e nao pode ser de conhecimento do ParkingLot, portanto utilizamos a Inversao de Dependencia de PriceCalculator pra isso
  }

  getEmptySpaces () {
    return this.capacity - this.parkedCars.length;
  }
}