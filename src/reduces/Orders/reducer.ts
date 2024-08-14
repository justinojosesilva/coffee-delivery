import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Coffee } from 'phosphor-react'

export interface Coffee {
  id: string
  image: string
  name: string
  tags: string[]
  description: string
  price: number
  quantity: number
}

export interface Address {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export interface Payment {
  method: 'credit' | 'debit' | 'money'
}

interface OrdersState {
  orders: Coffee[]
  address: Address | null
  payment: Payment | null
  activeCoffeeId: string | null
}

export function ordersReducer(state: OrdersState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.orders.push(action.payload.newCoffee)
        draft.activeCoffeeId = action.payload.newCoffee.id
      })
    case ActionTypes.ADD_ADDRESS_AND_PAYMENT:
      return produce(state, (draft) => {
        draft.address = action.payload.address
        draft.payment = action.payload.payment
      })
    case ActionTypes.REMOVE_CURRENT_COFFEE: {
      const currentCoffeeIndex = state.orders.findIndex((coffee) => {
        return coffee.id === action.payload.activeCoffeeId
      })

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.orders.splice(currentCoffeeIndex, 1)
      })
    }
    case ActionTypes.ADD_QUANTITY_COFFEE: {
      const currentCoffeeIndex = state.orders.findIndex((coffee) => {
        return coffee.id === action.payload.activeCoffeeId
      })

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.orders[currentCoffeeIndex].quantity =
          draft.orders[currentCoffeeIndex].quantity + 1
      })
    }
    case ActionTypes.REMOVE_QUANTITY_COFFEE: {
      const currentCoffeeIndex = state.orders.findIndex((coffee) => {
        return coffee.id === action.payload.activeCoffeeId
      })

      if (currentCoffeeIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        const quantity = draft.orders[currentCoffeeIndex].quantity
        const totalQuantity = quantity > 0 ? quantity - 1 : quantity
        draft.orders[currentCoffeeIndex].quantity = totalQuantity
      })
    }
    default:
      return state
  }
}
