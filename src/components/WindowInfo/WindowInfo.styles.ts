import styled from "styled-components";

export const WindowInfoWrapper = styled.div`
  width: 150px;
  height: 100px;
  background: #ffff;
  border-radius: 10px;
  position: relative;
  z-index: 99;
  box-shadow: 3px 3px 0px black;
  border: 2px solid #000;
`;

export const Header = styled.div`
  height: 24px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #57C0C3;
  border-bottom: 2px solid black;
  padding: 0 10px;
  font-family: "Pixelify Sans", sans-serif;
  cursor: grab;
  user-select: none;
  gap: 5px;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;

  .star {
    position: absolute;
    img {
        top: -30px;
        left: 110px;
        position: relative;
    }
  }

  p { 
    max-width: 117px;
    font-size: 12px;
  }
`;
