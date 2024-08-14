import { ShoppingCartSimple } from 'phosphor-react'
import { InputNumber } from '../InputNumber'
import { ButtonCart, CardContainer, FooterCard, TagsCard } from './styles'
import { useContext, useState } from 'react'
import { Coffee } from '../../reduces/Orders/reducer'
import { OrdersContext } from '../../contexts/OrdersContext'

export interface CoffeeProperties {
  id: string
  image: string
  name: string
  tags: string[]
  description: string
  price: number
  quantity: number | null
}

interface CreateItemOrderData {
  coffee: Coffee
}

export function Card({
  id,
  image,
  name,
  description,
  tags,
  price,
}: CoffeeProperties) {
  const { createNewItemOrder } = useContext(OrdersContext)
  const [quantityActive, setQuantityActive] = useState(1)
  function removeQuantity() {
    setQuantityActive((state) => {
      return state > 0 ? state - 1 : state
    })
  }

  function addQuantity() {
    setQuantityActive((state) => {
      return state + 1
    })
  }

  function handleAddNewCoffeeToOrder() {
    const data: CreateItemOrderData = {
      coffee: {
        id,
        image,
        name,
        description,
        tags,
        price,
        quantity: quantityActive,
      },
    }
    createNewItemOrder(data)
  }
  return (
    <CardContainer>
      <img src={image} alt="" />
      <TagsCard>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagsCard>
      <h2>{name}</h2>
      <p>{description}</p>
      <FooterCard>
        <div>
          R${' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(price)}
          </strong>
        </div>
        <div>
          <InputNumber
            quantity={quantityActive}
            onChangeMinus={removeQuantity}
            onChangePlus={addQuantity}
          />
          <ButtonCart type="button" onClick={handleAddNewCoffeeToOrder}>
            <ShoppingCartSimple weight="fill" size={22} />
          </ButtonCart>
        </div>
      </FooterCard>
    </CardContainer>
  )
}
