import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 16rem;
`

export const NavContainer = styled.nav`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;

      padding: .8rem;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      font-size: 1.4rem;
      font-weight: 400;
      line-height: 130%;

      svg {
        color: ${(props) => props.theme['purple']};
      }
    }

    span + span {
      background: ${(props) => props.theme['yellow-light']};
      position: relative;

      a {
        text-decoration: none;
      }
      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }

      strong {
        width: 2rem;
        height: 2rem;
        border-radius: 999px;

        position: absolute;
        top: -8px;
        left: 31px;
        text-align: center;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['white']};
      }
    }
`