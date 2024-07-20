import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/outfit";

export const GlobalStyle = createGlobalStyle`

    :root{
        --font: 'Outfit Variable', sans-serif;

        --cream: #FEFAF6;
        --coffe: #322C2B;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font);
        //user-select: none;
    }

    html{
        font-size: 62.5%
    }

    body {
        font-size: 1.8rem;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        transition: all 0.3s linear;
    }

    a{
        text-decoration: none;
        color: var(--coffe);
        font-weight: 600;
    }

    ul{
        list-style: none;
    }

    ::-webkit-scrollbar{
        display: none;
    }

    button{
        border: none;
    }

    
`;
