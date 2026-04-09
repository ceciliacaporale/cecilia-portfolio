import styled from "styled-components";
import type { DotColorKey } from "../Dots/Dots";

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
  padding: 4px;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
  justify-items: center;
`;

export const Tooltip = styled.div<{ $colorKey: DotColorKey }>`
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
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
  transition: opacity 0.3s ease, transform 0.3s ease;
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
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${Tooltip} {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

export const DragTooltip = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%) ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(5px)")};
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.black};
  padding: 3px 6px;
  border-radius: 4px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 11px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1000;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.purple} transparent transparent transparent;
  }
`;