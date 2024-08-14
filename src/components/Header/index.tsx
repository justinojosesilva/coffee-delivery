import { HeaderContainer, NavContainer } from './styles'
import logoCoffee from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

export function Header() {
  const { totalItemOrder } = useContext(OrdersContext)
  const cartWithItem = totalItemOrder != null && totalItemOrder > 0
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="Imagem de um copo de café." />
      </NavLink>
      <NavContainer>
        <span>
          <MapPin size={28} weight="fill" />
          Porto Alegre, RS
        </span>

        <span>
          <NavLink to="/checkout">
            <ShoppingCart size={26} weight="fill" />
            {cartWithItem && <strong>{totalItemOrder}</strong>}
          </NavLink>
        </span>
      </NavContainer>
    </HeaderContainer>
  )
}
