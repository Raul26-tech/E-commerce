import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --theme:#F5F5F5;
        --background: #f5f5f5;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu';
    }

    body {
        height: 100%;
    }

    .overlay-modal {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        width: 100%;
        max-width: 600px;
        background: var(--background);
        position: relative;
        border-radius: 0.24rem;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            width: 100%;
            max-width: 300px;
        }
    }

    .btn-close {
        position: absolute;
        right: 1.5rem;
        top: 0.25rem;
        border: 0;
        background: transparent;
    }

    

`;
