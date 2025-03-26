import styled from "styled-components";

const COLORS = {
  yellow: "#FDF282",
  pink: "#FE87A4",
  teal: "#1CBFC1",
  green: "#94EE9C",
  buttonRed: "rgb(252, 65, 174)",
  buttonYellow: "#ffbd2e",
  buttonGreen: "rgb(102, 240, 123)",
};

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
  pointer-events: none;
  z-index: 2;

  h1 { 
    padding: 20px 0 0 20px;
    font-family: "Squada One", sans-serif;
    color: ${COLORS.yellow};
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
    background: ${COLORS.buttonRed};
  }
  
  .minimize {
    background: ${COLORS.buttonYellow};
  }
  
  .maximize {
    background: ${COLORS.buttonGreen};
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

export const ContainerSocialMedia = styled.div`
  position: absolute;
  left: 1%;
  z-index: 3;
  top: 3rem;
`;