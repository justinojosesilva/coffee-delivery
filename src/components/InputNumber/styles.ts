import styled from "styled-components";

export const InputNumberContainer = styled.div`
  padding: .8rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;

  button {
    font-size: 1.4rem;
    border: none;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['purple']};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }



  input {
    background: transparent;
    border: 0;
    width: 2rem;
    height: 2.1rem;
    color: ${(props) => props.theme['base-title']};

    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
  }

`