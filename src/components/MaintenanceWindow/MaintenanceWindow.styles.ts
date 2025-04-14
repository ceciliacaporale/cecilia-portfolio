import { styled, type DefaultTheme } from "styled-components";

export const MaintenanceWindowWrapper = styled.div`
  width: 300px;
  height: 230px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: relative;
  z-index: 9999;
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.borderColor};
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.03);
    } 
`;

export const Header = styled.div`
  height: 30px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-bottom: 3px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0 10px;
  font-family: "Pixelify Sans", sans-serif;
  gap: 5px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;

  p { 
    text-align: center;
    font-family: "Pixelify Sans", sans-serif;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.black};
  }

 .construcao {
 }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div<{ $colorKey: keyof DefaultTheme["colors"] }>`
  width: 14px;
  height: 14px;
  background: ${({ theme, $colorKey }) => theme.colors[$colorKey]};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
`;