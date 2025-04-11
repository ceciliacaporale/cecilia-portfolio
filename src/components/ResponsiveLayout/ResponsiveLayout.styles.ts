import styled from "styled-components";

const heightStyles = `
  height: 100vh;

  @media (min-height: 758px) and (max-height: 829px) {
    height: 110vh;
  }

  @media (min-height: 758px) and (max-height: 809px) {
    height: 110vh;
  }

  @media (min-height: 681px) and (max-height: 757px) {
    height: 123vh;
  }

  @media (min-height: 639px) and (max-height: 680px) {
    height: 130vh;
  }

  @media (min-height: 639px) and (max-height: 664px) {
    height: 130vh;
  }

  @media (min-height: 591px) and (max-height: 638px) {
    height: 140vh;
  }

  @media (min-height: 500px) and (max-height: 590px) {
    height: 150vh;
  }

  @media (min-height: 525px) and (max-height: 553px) {
    height: 160vh;
  }

  @media (min-height: 489px) and (max-height: 524px) {
    height: 170vh;
  }

  @media (min-height: 438px) and (max-height: 488px) {
    height: 190vh;
  }

  @media (min-height: 344px) and (max-height: 437px) {
    height: 240vh;
  }

  @media (max-height: 344px) {
    height: 380vh;
  }
  
`;
export const ProjectsWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;

  ${heightStyles}

  @media (min-height: 1346px) {
    justify-content: center;
  }
`;

export const ContainerMain = styled.div`
  margin-top: 4rem;
  height: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px 50px 0 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;

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
  padding: 0 3rem;
  height: 89%;

  @media (max-width: 795px) {
    width: 100%; 
    padding: 12px;
    height: 99%;
  }

  @media (min-width: 796px) and (max-width: 1250px) {
    width: 100%;
    padding: 0 12px;
    height: 96%;
  }
`;

export const ContainerToggle = styled.div`
  position: relative;
  top: 5.9rem;
  right: -24rem;

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