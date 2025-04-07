import styled from "styled-components";

interface WindowProps {
  width?: string;
  height?: string;
}

export const WindowImageWrapper = styled.div<WindowProps>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  z-index: 9;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  cursor: url("/cursoryellow.png"), pointer; 

  @media (max-width: 979px) and (min-width: 796px) {
    margin-top: 2rem;
    height: 200px;
  }

  &:hover::after {
    content: "Ceci";
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 9999;
}
`;

export const Header = styled.div`
  height: 20px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: ${({ theme }) => theme.colors.yellow};
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
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
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }

  .minimize, .close, .love {
    background: ${({ theme }) => theme.colors.whiteDark};
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const Tooltip = styled.div`
  position: fixed;
  background: #FFF982;
  font-family: "Pixelify Sans", sans-serif;
  color: ${({ theme }) => theme.colors.borderColor};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 10px;
  white-space: nowrap;
  z-index: 99999;
  pointer-events: none;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transform: translate(-50%, -100%);
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
`;