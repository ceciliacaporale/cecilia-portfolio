import styled from "styled-components";

export const WindowSmileWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 10px;
  position: absolute;
  border: 1px solid black;
  box-shadow: 
    8px 8px 0 #FC54A9, 
    8px 8px 0 1px black, 
    16px 16px 0 #5B5BFF, 
    16px 16px 0 1px black; 
  z-index: 99;
`;

export const Header = styled.div`
  height: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  background-color: #6DCBE2;
  border-bottom: 1px solid black;
  padding: 0 12px;
  position: relative;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 20px;
  color: black;
`;
