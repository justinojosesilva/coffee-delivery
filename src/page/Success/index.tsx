import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageIlustreitor from '../../assets/Illustration.svg'
import {
  IconCurrencyDollar,
  IconMapPin,
  IconTimer,
  Information,
  SuccessContainer,
} from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

const methodPayment = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro',
}

export function Success() {
  const { address, payment } = useContext(OrdersContext)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <section>
        <Information>
          <p>
            <IconMapPin>
              <MapPin weight="fill" />
            </IconMapPin>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {address?.street}, {address?.number}
                </strong>
              </span>
              <span>
                {address?.neighborhood} - {address?.city}, {address?.state}
              </span>
            </div>
          </p>
          <p>
            <IconTimer>
              <Timer weight="fill" />
            </IconTimer>
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </p>
          <p>
            <IconCurrencyDollar>
              <CurrencyDollar weight="fill" />
            </IconCurrencyDollar>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{methodPayment[payment?.method]}</strong>
              </span>
            </div>
          </p>
        </Information>
        <img src={imageIlustreitor} alt="" />
      </section>
    </SuccessContainer>
  )
}
