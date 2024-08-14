import styled from 'styled-components'

export const PaymentContainer = styled.section`
  width: 64rem;
  padding: 4rem;
  margin-top: 1.2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;

    svg {
      color: ${(props) => props.theme.purple};
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

    div + div {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  input {
    display: none;
  }

  label {
    width: 100%;
    background: ${(props) => props.theme['base-button']};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;

    cursor: pointer;

    border-radius: 6px;

    padding: 1.6rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 130%;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  input:checked + label {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
