import { CatalogContainer } from './styles'
import { useState } from 'react'
import { Card, CoffeeProperties } from '../../../components/Card'

const listCoffee: CoffeeProperties[] = [
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/expresso.svg',
    name: 'Expresso Tradicional',
    tags: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/americano.svg',
    name: 'Expresso Americano',
    tags: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/expressoCremoso.svg',
    name: 'Expresso Cremoso',
    tags: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/cafeGelado.svg',
    name: 'Expresso Gelado',
    tags: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/cafeLeite.svg',
    name: 'Café com Leite',
    tags: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/latte.svg',
    name: 'Latte',
    tags: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/capuccino.svg',
    name: 'Capuccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/macchiato.svg',
    name: 'Macchiato',
    tags: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/mochaccino.svg',
    name: 'Mocaccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/chocolateQuente.svg',
    name: 'Chocolate Quente',
    tags: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/cubano.svg',
    name: 'Cubano',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/havaiano.svg',
    name: 'Havaiano',
    tags: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/arabe.svg',
    name: 'Árabe',
    tags: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 0,
  },
  {
    id: String(new Date().getTime()),
    image: 'src/assets/coffee/irlandes.svg',
    name: 'Irlandês',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 0,
  },
]
export function Catalog() {
  const [coffees] = useState<CoffeeProperties[]>(listCoffee)
  return (
    <CatalogContainer>
      <h1>Nossos Cafés</h1>
      <section>
        {coffees &&
          coffees.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                quantity={null}
              />
            )
          })}
      </section>
    </CatalogContainer>
  )
}
