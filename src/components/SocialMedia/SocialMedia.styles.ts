import styled from "styled-components";

export const DEFAULT_WIDTH = "235px";
export const DEFAULT_HEIGHT = "70px";
export const SHADOW_COLOR = "#FB56A7";

interface SocialMediaWrapperProps {
  width?: string;
  height?: string;
}

interface TooltipProps {
  bgColor: string;
}

export const SocialMediaWrapper = styled.div<SocialMediaWrapperProps>`
  width: ${({ width }) => width || DEFAULT_WIDTH};
  height: ${({ height }) => height || DEFAULT_HEIGHT};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: absolute;
  box-shadow: 8px 8px 0 ${SHADOW_COLOR}, 8px 8px 0 1px ${({ theme }) => theme.colors.black};
  top: 255px;
  left: 90px;
  transform: translate(-6px, -6px);
  border: 2px solid ${({ theme }) => theme.colors.black};
  transition: all 0.3s ease, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;


  @media (max-width: 795px) {
    box-shadow: 4px 4px 0 ${SHADOW_COLOR}, 5px 5px 0 1px black, 7px 7px 0 1px ${({ theme }) => theme.colors.yellow};
    width: 200px;
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
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

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
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.black};
`;

export const SmileWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: -48px;
`;