import React from "react";
import { ContainerProjects, StyledSwiper, StyledSwiperSlide } from "./Projects.styles";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import DisplayCard from "../../components/DisplayCard";
import { projects } from "../../data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ThemeWrapper from "../../ThemeWrapper";

const ProjectsPage: React.FC = () => {
  return (
    <ThemeWrapper>
    <ResponsiveLayout>
    <HeroSection 
      titleStrings={["Projetos", "Projects", "Proyectos"]} 
      description="Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada de aprendizado. Além de programá-los, também cuidei do design e da experiência visual, trazendo minha identidade para cada detalhe. Cada projeto representa um desafio superado e novas habilidades adquiridas!" 
    >
      <ContainerProjects>
        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <StyledSwiperSlide key={index}>
              <DisplayCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
                link={project.link}
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </ContainerProjects>
    </HeroSection>
  </ResponsiveLayout>
   </ThemeWrapper>
  );
};

export default ProjectsPage;
