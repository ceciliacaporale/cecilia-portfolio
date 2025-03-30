import React from "react";
import { ProjectsWrapper, ContainerMain, Container } from "./ProjectsPage.styles";
import HeroSection from "../HeroSection";


const ProjectsPage: React.FC = () => {
  
  return (
    <>
    <ProjectsWrapper>
      <ContainerMain>
        <Container>
        <HeroSection />
        </Container>
      </ContainerMain>
    </ProjectsWrapper>
    </>
  );
};

export default ProjectsPage;