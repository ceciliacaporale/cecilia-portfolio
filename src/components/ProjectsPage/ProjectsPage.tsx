import React from "react";
import { ContainerProjects } from "./ProjectsPage.styles";
import HeroSection from "../HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import DisplayCard from "../DisplayCard";
import { projects } from "../../data/projects";


const ProjectsPage: React.FC = () => {
  
  return (
    <>
    <ResponsiveLayout>
        <HeroSection title="Projetos" description="Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada de aprendizado. Além de programá-los, também cuidei do design e da experiência visual, trazendo minha identidade para cada detalhe. Cada projeto representa um desafio superado e novas habilidades adquiridas!"
        />
       
      <ContainerProjects>
        {projects.map((project, index) => (
          <DisplayCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
          />
        ))}
      </ContainerProjects>

      </ResponsiveLayout>
    </>
  );
};

export default ProjectsPage;