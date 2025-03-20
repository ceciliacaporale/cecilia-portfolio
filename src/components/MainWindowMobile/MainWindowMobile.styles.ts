import styled from "styled-components";

export const MainWindowMobileWrapper = styled.div`
  width: 96%;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 626px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 { 
    font-family: "Squada One", sans-serif;
    color: #FDF282;
    text-shadow: .05em .05em 0 #000;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 3rem;
    -webkit-text-stroke: .025em #000;
  }

  p {
    font-size: 18px;
    font-family: "Inter", sans-serif;
    text-align: center;
    @media (min-width: 626px) {
      text-align: left;
    }
  }

  @media (min-width: 626px) {
    h1, p {
      max-width: 50%;
    }
  }
`;
