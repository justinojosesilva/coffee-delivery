import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding: 8rem 16rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 900;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    font-weight: 400;
    line-height: 130%;
  }

  section {
    margin-top: 4rem;
    display: flex;
    gap: 10.2rem;
  }

`

export const Information = styled.div`
  width: 52.6rem;
  padding: 4rem;
  background: linear-gradient(#FAFAFA, #FAFAFA) padding-box,
              linear-gradient(to right, #DBAC2C 0%, #8047F8 100%) border-box;
  border-radius: 50em;
  border: 1px solid transparent;
  /*border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #DBAC2C 0%, #8047F8 100%)1;*/
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 40px;

  p {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    div {
      display: flex;
      flex-direction: column;
      
      span {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 130%;

        strong {
          color: ${(props) => props.theme['base-text']};
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 130%;
        }
      }
    }
  }
`

const BaseIcon = styled.span`
  padding: .8rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50px;
  color: ${(props) => props.theme['background']};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconMapPin = styled(BaseIcon)`
  background: ${(props) => props.theme['purple']};
`

export const IconTimer = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow']};
`

export const IconCurrencyDollar = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`