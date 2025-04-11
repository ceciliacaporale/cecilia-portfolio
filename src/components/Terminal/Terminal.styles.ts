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
`;

export const Dot = styled.span<{ color: string }>`
  width: 11px;
  height: 11px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
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