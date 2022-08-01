import styled from 'styled-components';

export const Navbar = styled.div`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
    }

    width: 100%;
    height: 10vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem;
    transition: 0.3s ease-in;

    background: rgba(67, 121, 222, 0.9);
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.5);

    > svg {
        color: white;
    }

    .cart-notification {
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: red;
        position: absolute;
        top: 25%;
        left: 96.3%;
        border-radius: 50%;
    }

    span {
        font-size: 10px;
        padding: 0.25rem;
        color: #f5f5f5;
    }

    /* Media queries */
    @media screen and (max-width: 978px) {
        .cart-notification {
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            position: absolute;
            top: 25%;
            left: 96.3%;
            border-radius: 50%;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1279px) {
        .cart-notification {
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            position: absolute;
            top: 25%;
            left: 95.8%;
            border-radius: 50%;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        .cart-notification {
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            position: absolute;
            top: 25%;
            left: 95.8%;
            border-radius: 50%;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        .cart-notification {
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            position: absolute;
            top: 25%;
            left: 88%;
            border-radius: 50%;
        }
    }
`;

export const Menu = styled.div`
    width: 20vw;
    height: 90%;
    display: flex;
    position: absolute;
    transition: 0.3s;
    z-index: 2;

    background: rgba(67, 121, 222, 0.9);

    ul {
        width: 100%;
        display: inline-block;
    }

    li {
        list-style: none;
        padding: 1rem;
        font-size: 1rem;
        transition: 0.2s ease-out;
    }

    .link {
        color: #f5f5f5;
        text-decoration: none;
        align-items: center;
        display: flex;
    }

    .icon {
        margin-left: 0.5rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
    }

    .shopping-cart {
        background: red;
    }

    li:hover {
        background: rgba(73, 74, 166, 0.8);
    }
`;
