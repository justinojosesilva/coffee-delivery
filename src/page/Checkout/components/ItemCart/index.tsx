import { Trash } from 'phosphor-react'
import {
  ItemCartContainer,
  TitleItem,
  TrashButton,
  DivisionCart,
} from './styles'
import { useContext, useState } from 'react'
import { OrdersContext } from '../../../../contexts/OrdersContext'
import { InputNumber } from '../../../../components/InputNumber'

export interface CoffeeProperties {
  id: string
  image: string
  name: string
  price: number
  quantity: number
}

export function ItemCart({
  id,
  image,
  name,
  quantity,
  price,
}: CoffeeProperties) {
  const [quantityActive, setQuantityActive] = useState(quantity)
  const { removeCoffeeToOrder, addQuantity, removeQuantity } =
    useContext(OrdersContext)

  function onRemoveQuantity() {
    setQuantityActive((state) => {
      return state > 0 ? state - 1 : state
    })
    removeQuantity(id)
  }

  function onAddQuantity() {
    setQuantityActive((state) => {
      return state + 1
    })
    addQuantity(id)
  }

  function removeToOrder() {
    removeCoffeeToOrder(id)
  }

  return (
    <>
      <ItemCartContainer>
        <img src={image} alt="" />
        <TitleItem>
          <h1>{name}</h1>
          <p>
            <InputNumber
              quantity={quantityActive}
              onChangeMinus={onRemoveQuantity}
              onChangePlus={onAddQuantity}
            />
            <TrashButton type="button" onClick={removeToOrder}>
              <Trash weight="regular" size={18} />
              REMOVER
            </TrashButton>
          </p>
        </TitleItem>
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(price * quantityActive)}
        </span>
      </ItemCartContainer>
      <DivisionCart />
    </>
  )
}
