import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body{
        margin: 0;
        background-color: #8FE3CF;
        font-family:'Source Sans Pro', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`