import { styled, type DefaultTheme } from "styled-components";

export const MemoryStorageWrapper = styled.div`
  width: 440px;
  height: 119px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.borderColor};
  position: relative;
  padding: 0 10px;
  user-select: none;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 384px) { 
    box-shadow:  none;
  }

  &:hover {
    transform: scale(1.03);
  }  

  @media (max-width: 644px) { 
    width: 435px;
  }

  @media (max-width: 628px) { 
    width: 430px;
  }

  @media (max-width: 624px) { 
    width: 420px;
  }

  @media (max-width: 461px) { 
    width: 400px;
  }

  @media (max-width: 439px) { 
    width: 370px;
  }

  @media (max-width: 407px) { 
    width: 363px;
  }

  @media (max-width: 396px) { 
    width: 350px;
  }

  @media (max-width: 374px) { 
    width: 340px;
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

  &:active {
    cursor: grabbing;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 100;
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

  @media (max-width: 461px) { 
    font-size: 10px;
  }

  @media (max-width: 396px) { 
    font-size: 9.7px;
  }
  
  @media (max-width: 374px) { 
    font-size: 10px;
  }
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