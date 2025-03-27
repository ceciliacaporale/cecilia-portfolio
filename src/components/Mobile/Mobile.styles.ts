import styled from "styled-components";

export const MobileWrapper = styled.div`
  width: 100vw;
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
/* 
  @media (min-width: 1901px) {
      padding-top: 4rem;
  } */
`;

export const ContentArea = styled.div`
  width: 95%; 
  height: 80%;
  background-color: white;
  border-radius: 50px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* @media (min-width: 1901px) {
      max-width: 60%;
  } */
  
`;
