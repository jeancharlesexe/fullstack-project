import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Arial, Helvetica, sans-serif;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    
    body {
        background-color: ${({ theme }) => theme.layout.background};
        color: ${({ theme }) => theme.typography.primary};	
        font-family: 'Roboto', sans-serif;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    a {
        color: ${({ theme }) => theme.typography.primary};
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;