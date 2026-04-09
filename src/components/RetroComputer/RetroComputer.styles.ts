import styled from "styled-components";

export const RetroComputerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.borderColor};
  width: 170px;
  user-select: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 666px) {
    width: 159px;
    padding: 7px;
  }

  @media (max-width: 384px) {
    box-shadow: none;
  }
`;

export const Monitor = styled.div`
  width: 140px;
  height: 110px;
  background: ${({ theme }) => theme.colors.lime};
  cursor: grab;
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  box-shadow: inset 0px 0px 8px rgba(255, 255, 255, 0.1);

  &:active {
    cursor: grabbing;
  }
`;

export const ScreenContent = styled.pre`
  color: ${({ theme }) => theme.colors.borderColor};
  font-size: 12.5px;
  padding: 4px;
  white-space: pre-wrap;
  font-family: "Pixelify Sans", monospace;
`;

export const Keyboard = styled.div`
  width: 125px;
  height: 55px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  padding: 1px;
`;

export const Key = styled.div`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.white};
  border: 1.7px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Tooltip = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: -20px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.black};
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 11px;
  font-family: "Pixelify Sans", monospace;
  white-space: nowrap;
  pointer-events: none; 
  
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(5px)")};
  transition: all 0.3s ease-in-out;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.blue} transparent transparent transparent;
  }
`;