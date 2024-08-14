import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ButtonGroup, PaymentContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function Payment() {
  const { register } = useFormContext()

  return (
    <PaymentContainer>
      <div>
        <CurrencyDollar weight="regular" size={22} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <ButtonGroup data-toggle="buttons">
        <input
          type="radio"
          value="credit"
          id="credit"
          {...register('payment')}
        />
        <label htmlFor="credit">
          <CreditCard weight="regular" size={16} />
          CARTÃO DE CRÉDITO
        </label>

        <input type="radio" value="debit" id="debit" {...register('payment')} />
        <label htmlFor="debit">
          <Bank weight="regular" size={16} />
          CARTÃO DE DÉBITO
        </label>

        <input type="radio" value="money" id="money" {...register('payment')} />
        <label htmlFor="money">
          <Money weight="regular" size={16} />
          DINHEIRO
        </label>
      </ButtonGroup>
    </PaymentContainer>
  )
}
