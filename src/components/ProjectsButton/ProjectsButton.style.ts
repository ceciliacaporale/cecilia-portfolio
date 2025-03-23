import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: #ffff;
  color: black;
  font-size: 20px;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 7px;
  font-weight: bold;
  box-shadow: 
    6px 6px 0 #FC54A9, 
    6px 6px 0 1px black, 
    12px 12px 0 #92EE96, 
    12px 12px 0 1px black; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 9999999;
  

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 1px 1px 0px black;
    transform: translate(2px, 2px);
  }

  .smile {
    position: absolute;
    img {
        top: -40px;
        right: -50px;
        position: relative;
    }
  }
`;
