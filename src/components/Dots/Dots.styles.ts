import styled from "styled-components";

export const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Dot = styled.div<{ $colorKey: keyof ReturnType<typeof import("styled-components").useTheme>["colors"] }>`
  width: 12px;
  height: 12px;
  background: ${({ theme, $colorKey }) => theme.colors[$colorKey]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;