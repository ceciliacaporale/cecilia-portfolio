import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% { opacity: 0; }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const TerminalWrapper = styled.div`
  width: 355px;
  max-width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: "Courier New", monospace;
  border-radius: 8px;
  box-shadow: 8px 8px 0 ${({ theme }) => theme.colors.pink};
  position: absolute;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  z-index: 999;
  transition: transform 0.2s ease-in-out;

   &::selection {
    background: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }
  *::selection {
    background: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 384px) { 
    box-shadow: 4px 4px 0 ${({ theme }) => theme.colors.pink};
  }

  &:hover {
    transform: scale(1.03);
  }  

  .star {
    position: absolute;
    top: 10px;
    right: -1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const TerminalContent = styled.div`
  padding: 10px;
  height: 100%;
  position: relative;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Cursor = styled.span`
  animation: ${blink} 0.7s step-end infinite;
`;

export const Tooltip = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: -25px;
  left: 10px; 
  background: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.black};
  padding: 3px 6px;
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 11px;
  font-weight: bold;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1000;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(5px)")};
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 15px; 
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.pink} transparent transparent transparent;
  }
`;