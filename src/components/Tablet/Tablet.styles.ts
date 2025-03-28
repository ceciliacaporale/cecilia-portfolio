import styled from "styled-components";

export const ContainerMain = styled.div`

`;

export const TabletWrapper = styled.div`
  width: 100vw;
  height: 700px;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const ContentArea = styled.div`
  width: 95%; 
  height: 71%;
  background-color: white;
  border-radius: 50px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const LoadingWindowContainer = styled.div`
  top: -2rem;
  display: flex;
  left: 10rem;
  position: relative;
`;
