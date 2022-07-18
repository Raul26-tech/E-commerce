import styled from 'styled-components';

export const Content = styled.div`
    margin: 1rem;
    padding: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
    border-radius: 1rem;
    transition: 0.5s;

    :hover {
        transform: translateY(1px);
    }

    h3 {
        align-items: center;
        justify-content: center;
        text-align: left;
        font-size: 1rem;
        padding: 0.75rem;
    }

    .cardItems {
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        align-items: center;
        border-radius: 1rem;
        background: #fff;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        outline: 0;
        margin: 1rem;
        transition: 0.2s;
    }

    .cardItems:hover {
        transform: translateY(2px);
    }

    .content-products {
        background: red;
    }

    img {
        width: 60%;
        height: 40vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 0.75rem;
        border-radius: 1rem;
    }

    span {
        margin: 0.75rem;
    }

    article {
        font-size: 0.85rem;
        padding: 0.75rem;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    .price {
        margin: 0.5rem;
        font-size: 1.5rem;
        color: rgba(73, 74, 166, 0.8);
    }

    .btn {
        width: 100%;
        height: auto;
        padding: 0.5rem;
        display: flex;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        background-color: rgba(73, 74, 166, 0.3);
    }

    .btn-add-cart {
        background: rgba(67, 121, 222, 0.9);
        padding: 0.5rem;
    }

    .iconCart {
        margin-left: 0.5rem;
    }

    /* Estilização do Modal */

    .section-product {
        background: red;
    }

    .text {
        color: red;
    }

    @media screen and (max-width: 820px) and (max-width: 1100px) {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .cardItems {
            width: 80%;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .cardItems {
            width: 100%;
            margin: 1rem auto;
            display: flex;
            height: auto;
        }

        img {
            height: 50%;
        }
    }
`;
