import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  overflow-y: auto;

  @media (min-height: 1346px) {
    justify-content: center;
  }
`;

export const ContainerMain = styled.div`
  margin-top: 4rem;
  height: 840px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px 50px 0 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  z-index: 9;

  @media (max-height: 879px) {
    height: 767px;
  }

  @media (max-width: 712px) {
  height: 820px;
  }

  @media (min-height: 1120px) {
    bottom: 196px;
    height: 900px;
    border-radius: 50px;
  }

  @media (max-width: 1900px) {
    max-width: 80rem;
  }

  @media (min-width: 2380px) {
    max-width: 1300px !important;
  }

  @media (min-width: 1901px) {
    max-width: 1300px;
  }

  @media (min-width: 2063px) {
    max-width: 60%;
  }

  @media (max-width: 1391px) {
    width: 100%;
  }
`;

export const ContentArea = styled.div`
  padding: 0 2rem;
  height: 89%;

  @media (max-width: 795px) {
    width: 100%; 
    padding: 12px;
    height: 99%;
  }

  @media (min-width: 606px) and (max-width: 1250px) {
    width: 100%;
    padding: 0 12px;
    height: 96%;
  }
`;

export const ContainerToggle = styled.div`
  position: relative;
  top: 5.9rem;
  right: -24rem;

  
  @media (min-height: 1120px) {
    top: -8.3rem!important;
  }
  
  @media (max-width: 1251px) {
    top: 3.7rem;
  }

  @media (max-width: 993px) {
    right: -12rem;
  }

  @media (max-width: 604px) {
    right: -5rem;
  }
`