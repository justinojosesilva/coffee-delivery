import { createContext, ReactNode, useReducer } from 'react'
import {
  Address,
  Coffee,
  ordersReducer,
  Payment,
} from '../reduces/Orders/reducer'
import {
  addAddressAndPayment,
  addNewCoffeeAction,
  addQuantityCoffeeAction,
  removeCoffeeAction,
  removeQuantityCoffeeAction,
} from '../reduces/Orders/actions'
import { useNavigate } from 'react-router-dom'

interface CreateItemOrderData {
  coffee: Coffee
}

interface AddAddressAndPayment {
  address: Address
  payment: Payment
}

interface OrdersContextType {
  orders: Coffee[]
  address: Address | null
  payment: Payment | null
  totalItemOrder: number | null
  totalItemPrice: number
  deliveryCost: number
  activeCoffee: Coffee | undefined
  activeCoffeeId: string | null
  createNewItemOrder: (data: CreateItemOrderData) => void
  createAddressAndPayment: (data: AddAddressAndPayment) => void
  removeCoffeeToOrder: (id: string) => void
  addQuantity: (id: string) => void
  removeQuantity: (id: string) => void
}

interface OrdersContextProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const navigate = useNavigate()
  const [ordersState, dispatch] = useReducer(
    ordersReducer,
    {
      orders: [],
      address: null,
      payment: null,
      activeCoffeeId: null,
    },
    (initialState) => {
      return initialState
    },
  )

  const { orders, activeCoffeeId, address, payment } = ordersState
  const activeCoffee = orders.find((coffee) => coffee.id === activeCoffeeId)

  function createNewItemOrder(data: CreateItemOrderData) {
    const id = String(new Date().getTime())
    const { coffee } = data
    const newCoffee: Coffee = { ...coffee, id }
    dispatch(addNewCoffeeAction(newCoffee))
  }

  function createAddressAndPayment(data: AddAddressAndPayment) {
    const { address, payment } = data
    console.log(address)
    console.log(payment)
    dispatch(addAddressAndPayment(address, payment))
    navigate('/success')
  }

  function addQuantity(id: string) {
    dispatch(addQuantityCoffeeAction(id))
  }

  function removeQuantity(id: string) {
    dispatch(removeQuantityCoffeeAction(id))
  }

  function removeCoffeeToOrder(id: string) {
    dispatch(removeCoffeeAction(id))
  }

  const totalItemPrice = orders.reduce(function (totalItemPrice, coffee) {
    return totalItemPrice + coffee.price * coffee.quantity
  }, 0)

  const totalItemOrder = orders.reduce(function (totalItemOrder, coffee) {
    return totalItemOrder + coffee.quantity
  }, 0)

  const deliveryCost = totalItemPrice > 0 ? 3.5 : 0
  return (
    <OrdersContext.Provider
      value={{
        orders,
        address,
        payment,
        totalItemOrder,
        totalItemPrice,
        deliveryCost,
        activeCoffee,
        activeCoffeeId,
        createNewItemOrder,
        createAddressAndPayment,
        removeCoffeeToOrder,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
