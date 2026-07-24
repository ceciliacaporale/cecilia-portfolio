import styled, { keyframes } from "styled-components";

const beat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
`;

export const HeartGrid = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  animation: ${beat} 1.6s ease-in-out infinite;
`;

export const HeartPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
`;
