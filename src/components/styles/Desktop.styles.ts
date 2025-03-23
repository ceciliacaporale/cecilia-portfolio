import styled from "styled-components";

export const DesktopWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: center;
  position: absolute;

`;

export const ContentArea = styled.div`
  margin-top: 4rem;
  height: 90%;
  background-color: white;
  border-radius: 50px 50px 0 0; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0; 

 @media (max-width: 1900px ) {
  max-width: 80rem;
 }

  @media (min-width: 2232px) {
    max-width: 58% !important;
    background-color: red;
  }

  @media (min-width: 1901px) {
      max-width: 70%;
  }

  @media (max-width: 1391px) {
    width: 95%; 

  }
`;
