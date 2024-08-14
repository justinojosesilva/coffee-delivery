import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 25.6rem;
  height: 31rem;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -3.7rem;
    margin-bottom: 1.2rem;
  }

  div {
    
  }



  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: .8rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    margin-bottom: 3.3rem;
  }
`

export const TagsCard = styled.div`
  display: flex;
  gap: 0.4rem;
  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: .4rem .8rem;
    border-radius: 10px;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`

export const FooterCard = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme['base-text']};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;

  strong {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 130%;
  }
  
  div + div {
    display: flex;
    gap: .8rem;
  }

`

export const ButtonCart = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border: 0;

  padding: .8rem;
  border-radius: .6rem;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
  
`