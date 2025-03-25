import styled from "styled-components";

export const MainWindowWrapper = styled.div`
  width: 92%;
  background: white;
  border-radius: 12px;
  position: relative;
  top: 51px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 240px;
  height: 300px;
  -webkit-user-drag: none;
  pointer-events: none; 
  -webkit-user-drag: none;
    pointer-events: none;   
  z-index: 2;

  h1 { 
    padding: 20px 0 0 20px;
    font-family: "Squada One", sans-serif;
    color: #FDF282;
    text-shadow: .05em .05em 0 #000;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 42px;
    -webkit-text-stroke: .025em #000;
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
  padding: 20px;
  width: 100%;
 
  p {
    max-width: 70%;
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }

  .star-green { 
    top: 140px;
    right: 0px;
    z-index: 9;
    position: absolute;
  }

  .star-pink { 
    top: 36px;
    right: 250px;
    z-index: 9;
    position: absolute;
  }
`;

export const ContainerImage = styled.div`
  justify-content: space-between;
  display: flex;

  & > div { 
    @media (min-width: 1034px) {
    width: 250px;
    height: 260px;
    margin-top: -98px;
  }
  }
`;

export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  left: 2rem;
  position: relative;
  
  .close-tab {
    font-size: 9px;
    color: #000;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: rgb(107, 105, 105);
    }
  }

  &:nth-child(1) {
    background: #FE87A4;
  }
  &:nth-child(2) {
    background: #1CBFC1; 
  }
  &:nth-child(3) {
    background: #94EE9C;
  }
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;
  display: flex;
  font-family: "Pixelify Sans", sans-serif;
  left: 3rem;

  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;

export const ContainerSocialMedia = styled.div`
  position: absolute;
  left: 1%;
  z-index: 3;
  top: 3rem;
`;
