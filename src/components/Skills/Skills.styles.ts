import { styled, type DefaultTheme } from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.borderColor};
  width: 350px;
  height: 160px;
  z-index: 9;
  position: absolute; 
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }  

  @media (max-width: 394px) {
    width: 330px;
  }

  @media (max-width: 370px) {
    width: 310px;
  }

  @media (max-width: 384px) { 
    box-shadow:  none;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 4px;
  margin-bottom: 6px;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.colors.borderColor};
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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

export const SkillIcon = styled.div<{ color: string }>`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${(props) => props.color}; 
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  position: relative;

  svg {
    font-size: 32px;
  }

  &:hover {
    transform: scale(1.1);
  }

  .favorite-icon {
    position: absolute;
    top: -8px;
    right: -10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }   
  }

  &:hover ${Tooltip} {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

export const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;
