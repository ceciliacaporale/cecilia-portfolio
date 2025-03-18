import styled from "styled-components";

export const MainWindowWrapper = styled.div`
  width: 92%;
  background: white;
  border-radius: 12px;
  position: relative;
  top: 51px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 240px;

  h1 { 
    margin-top: -1rem;
    padding: 20px 0 0 20px;
    font-family: "Squada One", sans-serif;
    color: #FDF282;
    text-shadow: .05em .05em 0 #000;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 38px;
    -webkit-text-stroke: .025em #000;
  }

  @media (max-width: 986px) {
    height: 360px;
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

  span {
    width: 12px;
    height: 12px;
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
    right: 5px;
    z-index: 9;
    position: absolute;
  }

  .star-pink { 
    top: 30px;
    right: 200px;
    z-index: 9;
    position: absolute;
  }
`;

export const ContainerImage = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;

  @media (max-width: 682px) {
    flex-direction: column;
  }
    
  & > div { 
    margin-top: -4rem; 
  }
`;

export const Tab = styled.div`
  background: white;
  border: 1px solid #000;
  padding: 2px 8px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  top: 12px;
  left: 2rem;
  position: relative;
  
  .close-tab {
    font-size: 10px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    padding: 0px;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: rgb(107, 105, 105);
    }
  }

  &:nth-child(1) {
    background: #D93487;
  }
  &:nth-child(2) {
    background: #0EB1BC; 
  }
  &:nth-child(3) {
    background: #90ee90;
  }
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: 17px;
  left: 60px;
  display: flex;
  z-index: 10;
  font-family: "Pixelify Sans", sans-serif;

  @media (max-width: 1735px) {
    left: 2rem;
  }

  @media (max-width: 1219px) {
    left: 2rem;
  }
`;

export const ContainerSocialMedia = styled.div`
  background-color: red;
  position: absolute;
  left: 1%;
  top: 2rem;

  @media (max-width: 1166px) {
    top: 3rem;
  }

  @media (max-width: 986px) {
    top: 7rem;
  }
`;
