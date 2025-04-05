import styled from "styled-components";

const SIZES = {
  width: "300px",
  height: "230px",
  headerHeight: "30px",
};

export const MaintenanceWindowWrapper = styled.div`
  width: ${SIZES.width};
  height: ${SIZES.height};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: relative;
  z-index: 9999;
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  overflow: hidden;
`;

export const Header = styled.div`
  height: ${SIZES.headerHeight};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-bottom: 3px solid ${({ theme }) => theme.colors.black};
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
  }

 .construcao {
 }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.black};
`;
