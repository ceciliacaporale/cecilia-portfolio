import styled, { css, keyframes } from 'styled-components';

const pulseShadowAnimation = (theme: any) => keyframes`
  0% {
    box-shadow: 8px 8px 0 ${theme.colors.pink10},
                8px 8px 0 1px ${theme.colors.borderColor};
  }
  33% {
    box-shadow: 8px 8px 0 ${theme.colors.blue},
                8px 8px 0 1px ${theme.colors.borderColor};
  }
  66% {
    box-shadow: 8px 8px 0 ${theme.colors.yellow},
                8px 8px 0 1px ${theme.colors.borderColor};
  }
  100% {
    box-shadow: 8px 8px 0 ${theme.colors.pink},
                8px 8px 0 1px ${theme.colors.borderColor};
  }
`;

export const DEFAULT_WIDTH = "235px";
export const DEFAULT_HEIGHT = "70px";

interface SocialMediaWrapperProps {
  width?: string;
  height?: string;
}

interface IconWrapperProps {
  $bgColor: string;
}

export const SocialMediaWrapper = styled.div<SocialMediaWrapperProps>`
  ${({ theme }) => css`
    width: ${DEFAULT_WIDTH};
    height: ${DEFAULT_HEIGHT};
    background: ${theme.colors.white};
    border-radius: 10px;
    position: absolute;
    top: 255px;
    left: 90px;
    transform: translate(-6px, -6px);
    border: 2px solid ${theme.colors.borderColor};
    transition: all 0.3s ease;
    animation: ${pulseShadowAnimation(theme)} 15s infinite ease-in-out;
    box-shadow: 8px 8px 0 ${theme.colors.pink10}, 
                8px 8px 0 1px ${theme.colors.borderColor};

    @media (max-width: 795px) {
      box-shadow: 4px 4px 0 ${theme.colors.pink10}, 
                  5px 5px 0 1px black, 
                  7px 7px 0 1px ${theme.colors.yellow};
      width: 250px;
      height: 60px;
      z-index: 999;
      top: 50%;
      left: 0;
      margin: 0 auto;
      position: relative;
    }

    img {
      user-select: none;
      pointer-events: none;
      -webkit-user-drag: none;
    }

    &:hover {
      transform: translate(-8px, -8px);
    }
  `}
`;

export const Header = styled.div`
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 795px) {
    padding: 14px;
    gap: 8px;
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  position: relative;
  display: inline-block;

  svg {
    fill: ${({ theme }) => theme.colors.black};
    transition: fill 0.3s ease;
  }

  &:hover svg {
    fill: ${({ $bgColor }) => $bgColor};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover span {
    opacity: 1;
  }
`;

export const Tooltip = styled.span<{ $bgColor: string }>`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ $bgColor }) => $bgColor};
  color: ${({ theme }) => theme.colors.borderColor};
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
`;

export const SmileWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: -48px;
`;