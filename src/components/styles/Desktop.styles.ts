import styled from "styled-components";

export const DesktopWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: center;
  position: absolute;

  @media (min-width: 1901px) {
      padding-top: 4rem;
  }

`;

export const ContentArea = styled.div`
  width: 90%; 
  max-width: 100%;
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

  @media (min-width: 1901px) {
      max-width: 60%;
  }
  
`;
