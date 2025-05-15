import styled from "styled-components";


export const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  position: relative;
  top: 51px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 99;
  
  @media (max-width: 795px) {
    width: 100%;
    border-radius: 2rem;
    top: 4px;
  }

  @media (min-width: 606px) and (max-width: 1251px) {
    border-radius: 2rem;
    top: 16px;
  }

  h1 {
    padding: 20px 0 0 20px;
  }
`;

export const WindowHeader = styled.div`
  height: 35px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 1rem;

  span {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  .close {
    background:${({ theme }) => theme.colors.pink10};
  }
  
  .minimize {
    background: ${({ theme }) => theme.colors.orange};
  }
  
  .maximize {
    background: ${({ theme }) => theme.colors.lime};
  }
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
 
  p {
    font-size: 16px;
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }
`;

