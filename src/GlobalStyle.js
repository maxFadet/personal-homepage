import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: ${({ theme }) => theme.color.whiteLilac};
        word-break: break-word;
    }
`;

export default GlobalStyle;