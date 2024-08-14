import { Address, Coffee, Payment } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_CURRENT_COFFEE = 'REMOVE_CURRENT_COFFEE',
  ADD_QUANTITY_COFFEE = 'ADD_QUANTITY_COFFEE',
  REMOVE_QUANTITY_COFFEE = 'REMOVE_QUANTITY_COFFEE',
  ADD_ADDRESS_AND_PAYMENT = 'ADD_ADDRESS_AND_PAYMENT',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function addAddressAndPayment(address: Address, payment: Payment) {
  return {
    type: ActionTypes.ADD_ADDRESS_AND_PAYMENT,
    payload: {
      address,
      payment,
    },
  }
}

export function removeCoffeeAction(activeCoffeeId: string) {
  return {
    type: ActionTypes.REMOVE_CURRENT_COFFEE,
    payload: {
      activeCoffeeId,
    },
  }
}

export function addQuantityCoffeeAction(activeCoffeeId: string) {
  return {
    type: ActionTypes.ADD_QUANTITY_COFFEE,
    payload: {
      activeCoffeeId,
    },
  }
}

export function removeQuantityCoffeeAction(activeCoffeeId: string) {
  return {
    type: ActionTypes.REMOVE_QUANTITY_COFFEE,
    payload: {
      activeCoffeeId,
    },
  }
}
