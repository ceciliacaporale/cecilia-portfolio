import styled from "styled-components";

export const WindowInfoWrapper = styled.div`
  width: 200px;
  height: 80px;
  background: #F0BAFD;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(219, 85, 85, 0.2);
  position: relative;
  z-index: 99;
  border: 1px solid #000;

  left: 50px;
  top: 100px;
`;


export const Header = styled.div`
  height: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #B7FF01;
  /* background-color: #90ED90; */
  border-bottom: 1px solid black;
  padding: 0 12px;
  font-family: "Pixelify Sans", sans-serif;
  position: relative;
  cursor: grab;
  user-select: none;
  gap: 5px;
  &:active {
    cursor: grabbing;
  }

  .close-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;


export const Content = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;

  p { 
    max-width: 115px;
    font-size: 16px;
    font-family: "Pixelify Sans", sans-serif;
  }
`;
