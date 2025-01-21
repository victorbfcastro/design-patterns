/**
 * Strategy [behavioral]
 * 
 * Utilizado para definir uma família de algoritmos, encapsular cada uma delas e torná-las INTERCAMBIAVEIS
 */

import AirportPriceCalculator from "../../../src/behavioral/strategy/PriceCalculatorStrategy/AirportPriceCalculator";
import BeachPriceCalculator from "../../../src/behavioral/strategy/PriceCalculatorStrategy/BeachPriceCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingPriceCalculator from "../../../src/behavioral/strategy/PriceCalculatorStrategy/ShoppingPriceCalculator";


test('Deve criar um estacionamento vazio', () => {
  const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator());

  expect(parkingLot.getEmptySpaces()).toBe(500)
});

test('Deve registrar entrada de um veículo', () => {
  const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator());

  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"))

  expect(parkingLot.getEmptySpaces()).toBe(499)
});

test('Deve registrar saída de um veículo', () => {
  const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator());

  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"))
  parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"))

  expect(parkingLot.getEmptySpaces()).toBe(500)
});


test('Deve calcular valor devido de um veículo que utilizou o estacionamento da PRAIA, cujo valor é de 20 reais por tempo ilimitado', () => {
  const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator());

  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"))
  const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T16:00:00"))
  
  expect(price).toBe(20)
});

test('Deve calcular valor devido de um veículo que utilizou o estacionamento do SHOPPING, cujo valor é de 10 reais por hora', () => {
  const parkingLot = new ParkingLot('shopping', 500, new ShoppingPriceCalculator());

  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"))
  const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"))
  
  expect(price).toBe(50)
});

test('Deve calcular valor devido de um veículo que utilizou o estacionamento do AEROPORTO, cujo valor é de 20 reais pelas primeiras 3 horas e depois 10 reais por hora extra', () => {
  const parkingLot = new ParkingLot('airport', 500, new AirportPriceCalculator());

  parkingLot.checkin("AAA-9999", new Date("2022-01-01T10:00:00"))
  const price = parkingLot.checkout("AAA-9999", new Date("2022-01-01T15:00:00"))
  
  expect(price).toBe(40)
});