import { styled, type DefaultTheme } from "styled-components";

export const SkillsWrapper = styled.div`
  width: 160px;
  height: 137px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  padding: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  cursor: grab;
  user-select: none;
  
  &:active {
    cursor: grabbing;
  }
`;

export const HeaderTitle = styled.span`

`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
  justify-items: center;
`;

export const Tooltip = styled.div<{ $colorKey: keyof DefaultTheme["colors"] }>`
  position: absolute;
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme, $colorKey }) => theme.colors[$colorKey]};
  color: ${({ theme }) => theme.colors.borderColor};
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
`;


export const SkillIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  position: relative;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }

  &:hover ${Tooltip} {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;
