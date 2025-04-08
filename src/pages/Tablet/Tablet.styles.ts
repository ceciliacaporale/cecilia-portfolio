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

  @media (min-height: 291px) and (max-height: 797px) {
    margin-top: 6rem;
  }
`;

export const ContentArea = styled.div`
  width: 95%; 
  height: 71%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 979px) {
    height: 73%;
  }

  @media (max-width: 909px) {
    height: 77%;
  }

  @media (max-width: 850px) {
    height: 80%;
  }

`;

export const LoadingWindowContainer = styled.div`
  top: -2rem;
  display: flex;
  left: 2rem;
  position: relative;
`;

export const ContainerToggle = styled.div`
  position: absolute;
  top: 9.5rem;
  right: 10rem;
  
`