import styled from "styled-components"


export const Content = styled.div`
    margin: 1rem;
    width: 30%;
    background: gray;
    border-radius: 0.2rem;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    transition: 0.5s;

    :hover {
        transform: translateY(1px);
    }

    h3 {
        align-items: center;
        justify-content: center;
        text-align: center;
    }

`