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
        font-size: 0.75rem;
        padding: 0.75rem;
    }

    .cardItems {
        width: 22%;
        max-height: 20%;
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

    img {
        max-width: 15vw;
        height: 20vh;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
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
        font-size: 1.2rem;
        color: rgba(73, 74, 166, 0.8);
    }

    .btn {
        width: 100%;
        height: auto;
        padding: 0.25rem;
        display: flex;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        background-color: rgba(73, 74, 166, 0.3);
    }

    .btn-add-cart {
        background: rgba(67, 121, 222, 0.9);
        padding: 1rem;
        width: 100%;
    }

    .iconCart {
        margin-left: 0.5rem;
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

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.5rem;

    .content-products {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0.5rem;
    }

    .text {
        font-size: 0.95rem;
    }

    .section-product {
        width: 100%;
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
    }

    .image-product {
        width: 40%;
        height: 50%;
        margin: 2rem;
        background-repeat: no-repeat;
        background-size: contain;
        background: transparent;
    }

    .adding-product {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0.5rem;
        background: rgba(73, 74, 166, 0.2);
        border-radius: 1rem;
    }

    .add-quantity {
        width: 100%;
        height: 20%;
        margin: 1.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        color: rgba(73, 74, 166, 0.5);
        font-size: 2.5rem;
        margin: 2rem;
    }

    .button-adding,
    .button-decrease {
        background: rgba(67, 121, 222, 0.9);
        border-radius: 0.2rem;
        border: 0;
    }

    .amount {
        font-size: 1rem;
    }
`;
