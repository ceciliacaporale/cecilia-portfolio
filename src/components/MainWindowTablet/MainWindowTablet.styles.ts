import styled from "styled-components";

export const MainWindowTabletWrapper = styled.div`
  width: 100%;
  height: 48%;
  max-height: 400px!important;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  top: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 913px) and (min-width: 845px) {
    height: 45%!important;
  }

  @media (max-width: 912px) {
    height: 50%;
  }
`;

export const WindowHeader = styled.div`
  border-radius: 12px 12px 0 0;
  padding: 0 12px;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 1rem;
  span {
    width: 16px;
    height: 16px;
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
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding: 10px;

  p {
    font-size: 18px;
    font-family: "Inter", sans-serif;
    text-align: left;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: -5px;
  z-index: 1;
  display: flex;
  transition: transform 0.2s ease-in-out;
  left: 3.5rem;

  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;


export const ContainerSocialMedia = styled.div`
  position: absolute;
  top: 5rem;
  z-index: 999;
  left: 59%;

  @media (max-width: 913px) and (min-width: 845px) {
    top: 5rem!important;
  }

  @media (max-width: 912px) {
    left: 53%;
    top: 6.8rem;
  }

  @media (min-height: 894px) {
  }
`;
