import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    body {
        background: #282a36;
        color: #f8f8f2;
        overflow-x: hidden;
        line-height: 1.7;
    }
`;

export default GlobalStyles;
