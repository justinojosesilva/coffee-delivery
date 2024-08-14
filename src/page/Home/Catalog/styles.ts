import styled from "styled-components";

export const CatalogContainer = styled.section`
  padding: 3.2rem 16rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 5.4rem;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`
