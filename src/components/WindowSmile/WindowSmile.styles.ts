import styled from "styled-components";

export const WindowSmileWrapper = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(219, 85, 85, 0.2);
  position: absolute;
  top: 500px;
  left: 200px;
`;

export const Header = styled.div`
  height: 35px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 0 12px;
  position: relative;
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

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  .close {
    background:rgb(252, 65, 174);
  }
  .minimize {
    background: #ffbd2e;
  }
  .maximize {
    background:rgb(102, 240, 123);
  }
`;