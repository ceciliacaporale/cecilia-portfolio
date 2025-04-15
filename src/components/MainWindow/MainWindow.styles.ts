import styled from "styled-components";

export const MainWindowWrapper = styled.div`
  width: 92%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  position: relative;
  top: 51px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 240px;
  height: 300px;
  z-index: 2;
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
    background: ${({ theme }) => theme.colors.pink10};
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
    max-width: 70%;
  }

  .star-green { 
    top: 140px;
    right: 0px;
    z-index: 9;
    position: absolute;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  .star-pink { 
    top: 36px;
    right: 250px;
    z-index: 9;
    position: absolute;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ContainerImage = styled.div`
  justify-content: space-between;
  display: flex;

  p{
    font-size: 15.3px;
  }

  & > div { 
    @media (min-width: 1034px) {
      width: 250px;
      height: 260px;
      margin-top: -98px;
    }
  }
`;

export const ContainerSocialMedia = styled.div`
  position: absolute;
  left: 1%;
  z-index: 3;
  top: 3rem;
`;