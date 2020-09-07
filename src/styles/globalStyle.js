import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Maax, avenir, sans-serif;
    }
    p, li{
        margin-top: 1em;
    }

    h1 {
        font-size: 5rem;
    }

    caption {
        font-size: 0.66rem;
        color: gray;
    }

    .fixed {
        position: fixed;
    }
`

export default GlobalStyle
