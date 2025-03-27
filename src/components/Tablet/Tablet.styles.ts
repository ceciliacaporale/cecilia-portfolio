import styled from "styled-components";

export const TabletWrapper = styled.div`
  width: 100vw;
  height: 1075px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

    @media (max-width: 320px) {
      background-color: red;
    }

`;

export const ContentArea = styled.div`
  width: 95%; 
  height: 44%;
  background-color: white;
  border-radius: 50px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 1233px) {
    height: 41%;
  }
`;

export const LoadingWindowContainer = styled.div`
top: -2rem;
display: flex;
left: 10rem;
position: relative;
`;