import styled from "styled-components";

const COLORS = {
  pink: "#FE87A4",
  teal: "#1CBFC1",
  green: "#94EE9C",
};


export const MainWindowTabletWrapper = styled.div`
  width: 96%;
  height: auto;
  background: white;
  border-radius: 2rem;
  top: 1rem;
  border: 2px solid #000;
  display: flex;
  position: absolute;
  flex-direction: column;
  overflow: hidden;
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
    border: 1px solid #000;
  }

  .close {
    background: rgb(252, 65, 174);
  }
  .minimize {
    background: #ffbd2e;
  }
  .maximize {
    background: rgb(102, 240, 123);
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
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerSocialMedia = styled.div`
  position: absolute;
  top: 12rem;
  width: 50%;

  @media (max-width: 911px) {
    top: 14rem;
  }

  @media (max-width: 840px) {
    top: 15rem;
  }

  @media (max-width: 797px) {
    top: 17rem;
  }
`;

export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
  
  .close-tab {
    font-size: 9px;
    color: #000;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: rgb(107, 105, 105);
    }
  }

  &:nth-child(1) {
    background: ${COLORS.pink};
  }
  
  &:nth-child(2) {
    background: ${COLORS.teal}; 
  }
  
  &:nth-child(3) {
    background: ${COLORS.green};
  }
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

export const ContentSkills = styled.div`
padding: 20px 150px;
margin-bottom: 2rem;
`;
