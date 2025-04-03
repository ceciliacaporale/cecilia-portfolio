import styled from "styled-components";

export const ContainerMain = styled.div`

`;

export const MobileWrapper = styled.div`
  width: 100vw;
  height: 1012px;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;

  @media (max-width: 430px) {
    height: 1143px;
  }
`;

export const ContentArea = styled.div`
  width: 100%; 
  height: 93%;
  background-color: white;
  border-radius: 2rem; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1901px) {
  }
  
`;
