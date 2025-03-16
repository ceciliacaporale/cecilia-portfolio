import styled from "styled-components";

export const MainWindowWrapper = styled.div`
  width: 90%;
  max-width: 80%px;
  background: white;
  border-radius: 12px;
  position: absolute;
  top: 50px;
  left: 50px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 1630px) {
    width: 94%;
  }
`;

export const WindowHeader = styled.div`
  width: 100%;
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
  }

  .close {
    background:rgb(252, 65, 174);
  }
  .minimize {
    background: #ffbd2e;
  }
  .maximize {
    background:rgb(102, 240, 123);
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  width: 80%;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 60%;
    margin-bottom: 1rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Tab = styled.div`
  background: white;
  border: 1px solid #000;
  padding: 2px 8px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  top: 12px;
  position: relative;
  
  .close-tab {
    font-size: 10px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    padding: 0px;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: #ff5555;
    }
  }

  &:nth-child(1) {
    background: #ffcccb;
  }
  &:nth-child(2) {
    background: #add8e6; 
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
`;
