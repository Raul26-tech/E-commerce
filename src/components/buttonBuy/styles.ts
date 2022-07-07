import styled from 'styled-components';

export const BuyButton = styled.button`
    width: 45%;
    min-width: 40%;
    height: 8vh;
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1rem;
    color: #f5f5f5;
    background: rgba(73, 74, 166);

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 70%;
        font-size: 0.75rem;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.5rem;
`;
