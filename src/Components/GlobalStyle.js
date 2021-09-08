import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
*{
    color:#f7f7f7;
}

    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin:0;
        background-color: rgba(20, 20, 20, 1);
    }
`;

export default GlobalStyle;