import { BannerContainer, BannerContent, Icon, IconCoffee, IconPackage, IconShoppingCart, IconTimer, Label } from "./styles";
import bannerCoffee from '../../../assets/banner-coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div>
            <Label><IconShoppingCart><ShoppingCart weight="fill"/></IconShoppingCart>Compra simples e segura</Label>
            <Label><IconPackage><Package weight="fill"/></IconPackage>Embalagem mantém o café intacto</Label>
            <Label><IconTimer><Timer weight="fill"/></IconTimer>Entrega rápida e rastreada</Label>
            <Label><IconCoffee><Coffee weight="fill"/></IconCoffee>O café chega fresquinho até você</Label>
          </div>
        </section>
        <section>
          <img src={bannerCoffee} alt="" />
        </section>
      </BannerContent>
    </BannerContainer>
  )
}