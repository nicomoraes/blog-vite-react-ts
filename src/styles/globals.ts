import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, span, button, input {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  }

  div {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Lato', sans-serif;
  }

  button, input {
    border: none;
    outline: none;
    font-weight: 500;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_WHITE_200};
  }

  html, body {
    min-height: 100%;
  }
`;
