import styled from "styled-components";

interface WindowProps {
  width?: string;
  height?: string;
}

interface HeaderProps {
  headerColor?: string;
}

export const WindowImageWrapper = styled.div<WindowProps>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  background: white;
  border-radius: 10px;
  position: relative;
  z-index: 9;
  border: 1px solid #000;
  overflow: hidden;
  cursor: url("/cursoryellow.png"), pointer; 

  &:hover::after {
    content: "Ceci";
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 9999;
  }
`;

export const Header = styled.div<HeaderProps>`
  height: 20px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: ${(props) => props.headerColor || "rgb(253, 103, 153)"};
  border-bottom: 1px solid black;
  padding: 0 12px;
  border-radius: 10px 10px 0 0;
  position: relative;
  font-weight: bold;
  font-size: 14px;
`;

export const CodeSymbol = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

export const Content = styled.div`
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 5px;

  span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }

  .minimize {
    background: rgb(255, 255, 255);
  }
  .close {
    background: rgb(255, 255, 255);
  }
  .love {
    background: rgb(255, 255, 255);
  }
`;

export const Tooltip = styled.div`
  position: fixed;
  background: #FFF982;
  color: black;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 10px;
  white-space: nowrap;
  z-index: 9999;
  pointer-events: none;
  border: 1px solid #000;
`;