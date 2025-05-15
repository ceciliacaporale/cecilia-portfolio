import styled from "styled-components";

export const ContainerMain = styled.div`

`;

export const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
`;

export const ContentArea = styled.div`
  width: 100%; 
  height: 1550px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 1580px;
  }
`;

export const ContainerToggle = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 7rem;
`