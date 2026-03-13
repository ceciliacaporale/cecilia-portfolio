import styled from "styled-components";
import type { DotColorKey } from "./Dots";

export const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Dot = styled.div<{
  $colorKey: DotColorKey;
  $size: number;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: ${({ theme, $colorKey }) => theme.colors[$colorKey]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  flex-shrink: 0;
`;