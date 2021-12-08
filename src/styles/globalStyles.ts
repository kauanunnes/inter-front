import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;

    }

    body{
        background-color: ${({theme}) => theme.colors.background};
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
    .primary-color {
      color: ${({theme}) => theme.colors.primary};
    }
    .font-bold {
      font-weight: bold;
    }

    .wallet {
      color: ${({theme}) => theme.colors.primary};
      font-size: 2rem;
      /* width: 100%; */
    }

    .h2 {
      color: ${({theme}) => theme.colors.secondary};

    }
`;

export default GlobalStyle;