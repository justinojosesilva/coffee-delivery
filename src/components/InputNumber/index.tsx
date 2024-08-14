import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";

interface InputNumberProps {
  quantity: number
  onChangeMinus: () => void
  onChangePlus: () => void
}

export function InputNumber({ quantity = 1, onChangeMinus, onChangePlus}: InputNumberProps) {
  function handleRemoveQuantity() {
    onChangeMinus()
  }

  function handleAddQuantity() {
    onChangePlus()
  }
  return (
    <InputNumberContainer>
      <button
        type="button"
        onClick={handleRemoveQuantity}
      >
        <Minus weight="bold"/>
      </button>
      <input value={quantity} />
      <button
        type="button"
        onClick={handleAddQuantity}
      >
        <Plus weight="bold"/>
      </button>
    </InputNumberContainer>
  )
}