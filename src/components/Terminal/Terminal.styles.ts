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
  height: 200px;
  background-color: #ffff;
  color: #000;
  font-family: "Courier New", monospace;
  border-radius: 8px;
  box-shadow: 8px 8px 0 #fc54a9;
  position: absolute;
  bottom: -35px;
  right: 250px;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  z-index: 999;

  .star {
    position: absolute;
    top: 10px;
    right: -1rem;
  }

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
`;

export const Dot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border: 1px solid #000;
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
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 5px;
  background-color: #000;
  animation: ${blink} 0.7s step-end infinite;
`;