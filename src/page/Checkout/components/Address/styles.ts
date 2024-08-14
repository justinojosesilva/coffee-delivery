import styled from 'styled-components'

export const AddressContainer = styled.section`
  width: 64rem;
  padding: 4rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
    }

    div > p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 130%;
    }

    div > span {
      color: ${(props) => props.theme['base-text']};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 130%;

      margin-bottom: 3.2rem;
    }
  }

  div + div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

export const Row = styled.tr`
  width: 100%;
  display: flex;
  gap: 1.2rem;
`

export const Column = styled.td`
  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    padding: 1.2rem;

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 130%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
  }
`
