import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {
        --theme: #F5F5F5;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu';
        background-image: url("../../assets/background.jpg");
    }

    body {
        height: 100%;
    }

`