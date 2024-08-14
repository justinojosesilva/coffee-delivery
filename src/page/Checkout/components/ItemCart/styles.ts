import styled from 'styled-components'

export const ItemCartContainer = styled.div`
  display: flex;

  img {
    width: 6.4rem;
    height: 6.4rem;
    margin-right: 2rem;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const TitleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 17.1rem;
  height: 6.1rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.8rem;
  }
`

export const TrashButton = styled.button`
  padding: 0 0.8rem;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;

  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 160%;

  border-radius: 6px;
  border: 0;

  cursor: pointer;

  transition: background 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const DivisionCart = styled.hr`
  width: 100%;
  border: 0.5px solid ${(props) => props.theme['base-button']};

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`
