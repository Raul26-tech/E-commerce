import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    background: rgba(67, 121, 222, 0.9);
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.5);

    div {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f5f5f5;
    }

    > svg {
        position: fixed;
        color: #f5f5f5;
        width: 20px;
        height: 20px;
        margin-top: 1.2rem;
        margin-left: 1.5rem;
        cursor: pointer;
    }

    .cart {
        position: relative;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;
