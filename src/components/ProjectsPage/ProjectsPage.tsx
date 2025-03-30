import React from "react";
// import { ProjectsWrapper, ContainerMain, Container } from "./ProjectsPage.styles";
import HeroSection from "../HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";


const ProjectsPage: React.FC = () => {
  
  return (
    <>
    <ResponsiveLayout>
        <HeroSection title="Projetos" description="Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada de aprendizado. Além de programá-los, também cuidei do design e da experiência visual, trazendo minha identidade para cada detalhe. Cada projeto representa um desafio superado e novas habilidades adquiridas!" />
      </ResponsiveLayout>
    </>
  );
};

export default ProjectsPage;