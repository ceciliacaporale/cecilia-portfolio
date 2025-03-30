import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  align-items: center;
  position: absolute;


  @media (max-width: 795px) {
    width: 100%; 
  }
`;


export const ContainerMain = styled.div`
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


  @media (max-width: 1900px) {
    max-width: 80rem;
  }

  @media (min-width: 2380px) {
    max-width: 52% !important;
  }

  @media (min-width: 1901px) {
    max-width: 70%;
  }

  @media (min-width: 2063px) {
    max-width: 60%;
  }

  @media (max-width: 1391px) {
    width: 100%;
  }
`;


export const Container = styled.div`
  padding: 0 3rem 0 3rem;

  @media (max-width: 795px) {
  }
`;
