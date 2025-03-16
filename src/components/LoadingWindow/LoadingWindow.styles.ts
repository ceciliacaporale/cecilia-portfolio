import styled from "styled-components";

export const LoadingWindowWrapper = styled.div`
  width: 300px;
  height: 100px;
  background: white;
  border-radius: 10px;
  position: absolute;
  border: 1px solid #000;
  top: 0px;
  right: 100px;
  z-index: 999;
`;

export const Header = styled.div`
  height: 15px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding: 5px;

  span {
    width: 8px;
    height: 8px;
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