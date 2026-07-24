import styled, { keyframes } from "styled-components";

export const CupGrid = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const CupPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
`;

const rise = keyframes`
  0% { transform: translateY(0) scaleX(1); opacity: 0; }
  35% { opacity: 0.6; }
  100% { transform: translateY(-9px) scaleX(0.5); opacity: 0; }
`;

export const Steam = styled.div<{ $active: boolean }>`
  position: absolute;
  top: -7px;
  left: 3px;
  width: 8px;
  height: 7px;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

export const SteamWisp = styled.span<{ $index: number }>`
  position: absolute;
  bottom: 0;
  left: ${({ $index }) => $index * 3}px;
  width: 1.5px;
  height: 4px;
  background: ${({ theme }) => theme.colors.black};
  opacity: 0.3;
  animation: ${rise} 1.4s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.3}s;
`;
