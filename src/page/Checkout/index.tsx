import {
  CheckoutContainer,
  ConfirmButton,
  ResumeCartContainer,
  TitleCheckout,
} from './styles'
import * as zod from 'zod'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'
import { ItemCart } from './components/ItemCart'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o logradouro'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o Estado'),
  payment: zod.enum(['credit', 'debit', 'money']),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { orders, totalItemPrice, deliveryCost, createAddressAndPayment } =
    useContext(OrdersContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      payment: undefined,
    },
  })

  const { handleSubmit, watch, reset } = newOrderForm

  function handleAddAddressInOrder(data: NewOrderFormData) {
    const address = {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.city,
    }

    const payment = {
      method: data.payment,
    }

    createAddressAndPayment({
      address,
      payment,
    })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleAddAddressInOrder)} action="">
        <section>
          <TitleCheckout>Complete seu pedido</TitleCheckout>
          <FormProvider {...newOrderForm}>
            <Address />
            <Payment />
          </FormProvider>
        </section>
        <section>
          <TitleCheckout>Cafés selecionados</TitleCheckout>
          <ResumeCartContainer>
            {orders &&
              orders.map((coffee) => {
                return (
                  <ItemCart
                    key={coffee.id}
                    id={coffee.id}
                    image={coffee.image}
                    name={coffee.name}
                    quantity={coffee.quantity}
                    price={coffee.price}
                  />
                )
              })}
            <div>
              <p>
                <h2>Total de itens</h2>
                <h2>
                  R${' '}
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  }).format(totalItemPrice)}
                </h2>
              </p>
              <p>
                <h2>Entrega</h2>
                <h2>
                  R${' '}
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  }).format(deliveryCost)}
                </h2>
              </p>
              <p>
                <h1>Total</h1>
                <h1>
                  R${' '}
                  {new Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  }).format(totalItemPrice + deliveryCost)}
                </h1>
              </p>
              <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
            </div>
          </ResumeCartContainer>
        </section>
      </form>
    </CheckoutContainer>
  )
}
