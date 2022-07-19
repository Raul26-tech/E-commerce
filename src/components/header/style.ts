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
        padding: 0.5rem;
        font-size: 1rem;
        transition: 0.2s ease-out;
    }

    .link {
        color: #f5f5f5;
        text-decoration: none;
    }

    li:hover {
        background: rgba(73, 74, 166, 0.8);
    }
`;
