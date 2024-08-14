import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['background']};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }


  .col-x-1 {
    width: 6rem;
  }

  .col-x-2 {
    width: 20rem;
  }

  .col-x-3 {
    width: 27.6rem;
  }

  .col-x-4 {
    width: 34.8rem;
  }

  .col-x-5 {
    width: 56rem;
  }
`
