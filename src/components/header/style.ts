import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(67, 121, 222, 0.9);
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.5);

    div {
        width: 100%;
        margin: 0 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        color: #f5f5f5;
    }

    > svg {
        position: relative;
        color: #f5f5f5;
        width: 20px;
        height: 20px;
        display: flex;
        margin: 1rem 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
    }

    .cart,
    .menu {
        /* position: relative; */
        width: 25px;
        height: 30px;
        cursor: pointer;
    }
`;
