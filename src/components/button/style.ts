import styled from 'styled-components';

export const Button = styled.button`
    width: 50%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border-radius: 5px;
    border: 0;
    color: #f5f5f5;
    font-size: 1rem;
    transition: 0.2s;
    background: #186fcc;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

    :active {
        transform: translateY(3px);
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        display: flex;
        width: 80%;
        height: 1.5rem;
        margin-top: 0.5rem;
        justify-content: center;
        font-size: 0.75rem;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 70%;
    }

    @media screen and (min-width: 769px) and (max-width: 1279px) {
        width: 70%;
    }
`;
