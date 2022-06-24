import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #3277e6;
    display: flex;

    .linkNavigation {
        color: #f5f5f5;
        font-size: 1rem;
        text-decoration: none;
    }

    .content-main {
        width: 90%;
        height: 90vh;
        margin: 2rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
        border-radius: 1.5rem;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    }

    .content-image {
        width: 50%;
        height: 90vh;
        position: relative;
        margin-left: -50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px 0 0 20px;
    }

    .content-image img {
        width: 70%;
        background-size: cover;
        transition: 0.2s ease-in;
    }

    .content-image img:hover {
        transform: translateY(3px);
    }

    .content-input {
        width: 50%;
        height: 90vh;
        position: relative;
        margin-right: -50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0 20px 20px 0;
        background: rgba(12, 39, 193, 1);
    }

    h1 {
        color: #f5f5f5;
        margin: 0 auto;
        position: absolute;
        display: flex;
        top: 2rem;
    }
    span {
        color: #f5f5f5;
        margin: 0 auto;
        position: absolute;
        display: flex;
        top: 6.5rem;
        font-size: 24px;
    }

    .box {
        position: fixed;
        top: 0;
        transform: rotate(80deg);
        left: 0;
    }

    .wave {
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.4;
        position: absolute;
        top: 3%;
        left: 10%;
        background: #0af;
        width: 1500px;
        height: 1300px;
        margin-left: -150px;
        margin-top: -250px;
        transform-origin: 50% 48%;
        border-radius: 43%;
        animation: drift 7000ms infinite linear;
    }

    .wave.-three {
        animation: drift 7500ms infinite linear;
        position: fixed;
        background-color: #77daff;
    }

    .wave.-two {
        animation: drift 3000ms infinite linear;
        opacity: 0.1;
        background: black;
        position: fixed;
    }

    .box:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        transform: translate3d(0, 0, 0);
    }

    @keyframes drift {
        from {
            transform: rotate(0deg);
        }
        from {
            transform: rotate(360deg);
        }
    }

    /*LOADING SPACE*/

    .contain {
        animation-delay: 4s;
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        background: #25a7d7;
        background: -webkit-linear-gradient(#25a7d7, #2962ff);
        background: linear-gradient(#25a7d7, #25a7d7);
    }

    .icon {
        width: 100px;
        height: 100px;
        margin: 0 5px;
    }

    /*Animation*/
    .icon:nth-child(2) img {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
    }
    .icon:nth-child(3) img {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    .icon:nth-child(4) img {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
    }

    .icon img {
        -webkit-animation: anim 2s ease infinite;
        animation: anim 2s ease infinite;
        -webkit-transform: scale(0, 0) rotateZ(180deg);
        transform: scale(0, 0) rotateZ(180deg);
    }

    @-webkit-keyframes anim {
        0% {
            -webkit-transform: scale(0, 0) rotateZ(-90deg);
            transform: scale(0, 0) rotateZ(-90deg);
            opacity: 0;
        }
        30% {
            -webkit-transform: scale(1, 1) rotateZ(0deg);
            transform: scale(1, 1) rotateZ(0deg);
            opacity: 1;
        }
        50% {
            -webkit-transform: scale(1, 1) rotateZ(0deg);
            transform: scale(1, 1) rotateZ(0deg);
            opacity: 1;
        }
        80% {
            -webkit-transform: scale(0, 0) rotateZ(90deg);
            transform: scale(0, 0) rotateZ(90deg);
            opacity: 0;
        }
    }

    @keyframes anim {
        0% {
            -webkit-transform: scale(0, 0) rotateZ(-90deg);
            transform: scale(0, 0) rotateZ(-90deg);
            opacity: 0;
        }
        30% {
            -webkit-transform: scale(1, 1) rotateZ(0deg);
            transform: scale(1, 1) rotateZ(0deg);
            opacity: 1;
        }
        50% {
            -webkit-transform: scale(1, 1) rotateZ(0deg);
            transform: scale(1, 1) rotateZ(0deg);
            opacity: 1;
        }
        80% {
            -webkit-transform: scale(0, 0) rotateZ(90deg);
            transform: scale(0, 0) rotateZ(90deg);
            opacity: 0;
        }
    }

    /* Media queries */
    @media screen and (max-width: 978px) {
        font-size: 15px;

        .content-input {
            width: 100%;
            border-radius: 20px;
            margin: 0 auto;
        }

        span {
            font-size: 15px;
        }

        .content-image {
            display: none;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1279px) {
        display: inline-grid;

        h1 {
            font-size: 20px;
            margin-top: 5rem;
        }

        span {
            font-size: 15px;
            margin-top: 5rem;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        display: inline-grid;

        h1,
        span {
            font-size: 15px;
            margin-top: 5rem;
        }

        .content-image {
            display: grid;
            align-items: center;
            justify-items: center;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        .content-main {
            align-items: center;
            justify-items: center;
            justify-content: center;
        }

        .content-input {
            width: 100%;
            border-radius: 20px;
            margin: 0 auto;
        }

        .content-image {
            display: none;
        }

        h1 {
            margin-top: 5rem;
            font-size: 20px;
        }

        span {
            margin-top: 5rem;
        }
    }
`;
