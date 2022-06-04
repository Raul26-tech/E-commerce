import styled from "styled-components";

export const InputForm = styled.input`
  width: 50%;
  height: 2.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 5px;
  outline: 0;
  color: #0c27c1;
  font-family: "Ubuntu";
  font-size: 1rem;
  cursor: pointer;

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
