import styled from "styled-components";

export const MainWindowTabletWrapper = styled.div`
  width: 96%;
  height: 370px;
  background: white;
  border-radius: 2rem;
  top: 1rem;
  border: 1px solid #000;
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

  .star-green {
    position: absolute;
    top: 14rem;
    left: 13.7rem;
    z-index: 9999;
  }

  .star-pink {
    position: absolute;
    top: 5rem;
    left: -4px;
    z-index: 9999;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding: 10px;

  /* @media (max-width: 696px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 255, 0, 0.2); 
  } */

  h1 { 
    font-family: "Squada One", sans-serif;
    color: #FDF282;
    text-shadow: .05em .05em 0 #000;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 3rem;
    -webkit-text-stroke: .025em #000;
    margin-bottom: 8px;
  }

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
/* 
  @media screen and (min-width: 600px) {
    background-color: red !important;
  } */
/* @media (max-width: 696px) {
  align-items: center;
  text-align: center;
} */
`;

export const ContainerSocialMedia = styled.div`
  position: absolute;
  top: 2rem;
  width: 50%;

  @media (max-width: 986px) {
    top: 5.5rem;
  }

  @media (min-width: 987px) {
    top: 4.8rem;
  }

  @media (min-width: 1034px) {
    top: 3rem;
    left: 3rem;
  }
`;