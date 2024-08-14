import { MapPinLine } from 'phosphor-react'
import { AddressContainer, Row, Column } from './styles'
import { useFormContext } from 'react-hook-form'

export function Address() {
  const { register } = useFormContext()

  return (
    <AddressContainer>
      <div>
        <MapPinLine weight="regular" size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <div>
        <Row>
          <Column className={'col-x-2'}>
            <input
              type="text"
              id="zipCode"
              placeholder="CEP"
              {...register('zipCode')}
            />
          </Column>
        </Row>
        <Row>
          <Column className="col-x-5">
            <input
              type="text"
              placeholder="Rua"
              id="street"
              {...register('street')}
            />
          </Column>
        </Row>
        <Row>
          <Column className="col-x-2">
            <input
              type="text"
              placeholder="Número"
              id="number"
              {...register('number')}
            />
          </Column>
          <Column className="col-x-4">
            <input
              type="text"
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
          </Column>
        </Row>
        <Row>
          <Column className="col-x-2">
            <input
              type="text"
              placeholder="Bairro"
              id="neighborhood"
              {...register('neighborhood')}
            />
          </Column>
          <Column className="col-x-3">
            <input
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
          </Column>
          <Column className="col-x-1">
            <input
              type="text"
              placeholder="UF"
              id="state"
              {...register('state')}
            />
          </Column>
        </Row>
      </div>
    </AddressContainer>
  )
}
