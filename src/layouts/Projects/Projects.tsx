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

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #acf3f5;

  html.dark & {
    background-color: #181718;
  }
`;

const ProjectsPage: React.FC = () => {
  return (
    <PageWrapper>
      <ThemeWrapper>
        <ResponsiveLayout>
          <HeroSection
            titleStrings={["Projects", "Projetos", "Proyectos"]}
            description="Here are some of the projects I've developed along my learning journey. In addition to coding them, I also took care of the design and visual experience, bringing my personal touch to every detail. Each project represents a challenge overcome and new skills acquired!"
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
    </PageWrapper>
  );
};

export default ProjectsPage;