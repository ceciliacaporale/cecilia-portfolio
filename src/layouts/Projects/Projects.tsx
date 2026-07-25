import React from "react";
import { ContainerProjects, StyledSwiper, StyledSwiperSlide } from "./Projects.styles";
import styled from "styled-components";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import DisplayCard from "../../components/DisplayCard";
import { projects } from "../../data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ThemeWrapper from "../../ThemeWrapper";
import LanguageWrapper, { useLanguage } from "../../LanguageWrapper";
import { PAGE_DESCRIPTIONS, PROJECT_DESCRIPTIONS } from "../../i18n/translations";

const ProjectsContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <ResponsiveLayout>
      <HeroSection
        titleStrings={["Projects", "Projetos", "Proyectos"]}
        description={PAGE_DESCRIPTIONS.projects[language]}
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
            {projects.map((project) => (
              <StyledSwiperSlide key={project.id}>
                <DisplayCard
                  title={project.title}
                  description={PROJECT_DESCRIPTIONS[project.id]?.[language] ?? project.description}
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
  );
};

const ProjectsPage: React.FC = () => {
  return (
      <ThemeWrapper>
        <LanguageWrapper>
          <ProjectsContent />
        </LanguageWrapper>
      </ThemeWrapper>
  );
};

export default ProjectsPage;