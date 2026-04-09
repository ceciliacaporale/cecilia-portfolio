import React from "react";
import styled from "styled-components";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import { ContainerMaintenance } from "./Files.styles";
import MaintenanceWindow from "../../components/MaintenanceWindow";
import ThemeWrapper from "../../ThemeWrapper";
import SearchInput from "@components/SearchInput";

const FilesPage: React.FC = () => {
  
  return (
      <ThemeWrapper>
        <ResponsiveLayout>
          <HeroSection 
            titleStrings={["Files", "Arquivos", "Archivos"]} 
            description="Welcome to my file collection! Here you'll find a mix of studies, notes, documents, and content related to my learning and evolution as a developer. Each item reflects a part of my journey, sharing the knowledge acquired, insights, and reflections along the way. Feel free to explore and follow my professional growth!"
          >
            <SearchInput
              searchQuery=""
              tags={["react", "nextjs", "design", "pixel", "typescript"]}
              onChange={() => {}}
              placeholder="Under construction..."
            />
            <ContainerMaintenance>
              <MaintenanceWindow />
            </ContainerMaintenance>
          </HeroSection>
        </ResponsiveLayout>
      </ThemeWrapper>
  );
};

export default FilesPage;