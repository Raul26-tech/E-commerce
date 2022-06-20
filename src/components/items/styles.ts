import styled from "styled-components"


export const Content = styled.div`
    margin: 1rem;
    padding: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
    border-radius: 1rem;
    /* box-shadow: 2px 2px 10px rgba(0,0,0,0.5); */
    transition: 0.5s;

    :hover {
        transform: translateY(1px);
    }

    h3 {
        align-items: center;
        justify-content: center;
        text-align: left;
        font-size: 1rem;
        padding: 0.5rem;
    }

    .cardItems {
        width: 40%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        padding: 0.15rem;
        align-items: center;
        border-radius: 1rem;
        background: #fff;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        outline: 0;
        margin: 1rem;
        transition: 0.2s;
    }

    .cardItems:hover {
        transform: translateY(2px);
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
        margin: 0.5rem;
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
        color: rgba(73, 74, 166,0.8);
    }

    .btn-buy {
        width: 50%;
    }


`