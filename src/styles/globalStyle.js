import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Maax, avenir, sans-serif;
        background: black;
    }
    p, li{
        margin-top: 1em;
    }
`

export default GlobalStyle
