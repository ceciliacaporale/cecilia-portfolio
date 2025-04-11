import { styled, type DefaultTheme } from "styled-components";

export const MemoryStorageWrapper = styled.div`
  width: 450px;
  height: 119px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.borderColor};
  position: relative;
  padding: 0 10px;
  user-select: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }  
`;

export const Header = styled.div`
  text-align: center;
  font-family: "Pixelify Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 4px 8px;
  cursor: grab;
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 100;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Dot = styled.div<{ $colorKey: keyof DefaultTheme['colors'] }>`
  width: 12px;
  height: 12px;
  background: ${({ theme, $colorKey }) => theme.colors[$colorKey]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const StorageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #dcd6c8;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  overflow: hidden;
  margin-top: 5px;
`;

export const BarSegment = styled.div<{ color: string; width: string }>`
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
  transition: width 3s ease-in-out;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 6px;
  font-family: "Pixelify Sans", sans-serif;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ColorBox = styled.div<{ color: string }>`
 width: 12px;
  height: 12px;
  display: inline-block;
  background: ${({ color }) => color};
  border-radius: 2px;
  border: 1.6px solid ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;