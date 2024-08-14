import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 4rem 16rem;

  form {
    display: flex;
    justify-content: flex-start;
    gap: 3.2rem;
  }
`

export const TitleCheckout = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 130%;

  margin-bottom: 1.5rem;
`

export const ResumeCartContainer = styled.section`
  width: 44.8rem;
  padding: 4rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;

  div > p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme['base-text']};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 130%;
      margin-bottom: 1.2rem;
    }

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 2rem;
      font-weight: 700;
      line-height: 130%;
      margin-bottom: 2.4rem;
    }
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0.8rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 160%;

  border-radius: 6px;
  border: 0;

  text-decoration: none;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
