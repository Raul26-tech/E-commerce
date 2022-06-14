import styled from "styled-components";

export const Navbar = styled.div`
    height: 10vh;
    display: flex;
    background-image: linear-gradient(to right, #2C40B3, #654597);
    box-shadow: 0 0 15px 2px rgba(0,0,0, 0.5);

    
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
        width: 20px;
        height: 20px;
        margin-left: 91.5%;
        cursor: pointer;
    }

`