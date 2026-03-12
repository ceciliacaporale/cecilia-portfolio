import React from "react";
import styled from "styled-components";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../ResponsiveLayout";
import { ContainerMaintenance } from "./Files.styles";
import MaintenanceWindow from "../../components/MaintenanceWindow";
import ThemeWrapper from "../../ThemeWrapper";
import SearchInput from "@components/SearchInput";

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #fddced;

  html.dark & {
    background-color: #181718;
  }
`;

const FilesPage: React.FC = () => {
  
  return (
    <PageWrapper>
      <ThemeWrapper>
        <ResponsiveLayout>
          <HeroSection titleStrings={["Arquivos", "Files", "Archivos"]} description="Bem-vindo à minha coleção de arquivos! Aqui você encontrará uma mistura de estudos, anotações, documentos e conteúdos relacionados ao meu aprendizado e evolução como desenvolvedora. Cada item reflete uma parte da minha jornada, compartilhando o conhecimento adquirido, insights e reflexões ao longo do caminho. Fique à vontade para explorar e acompanhar meu crescimento profissional!">
            <SearchInput
              searchQuery=""
              tags={["react", "nextjs", "design", "pixel", "typescript"]}
              onChange={() => {}}
              placeholder="Em construção..."
            />
            <ContainerMaintenance>
              <MaintenanceWindow />
            </ContainerMaintenance>
          </HeroSection>
        </ResponsiveLayout>
      </ThemeWrapper>
    </PageWrapper>
  );
};

export default FilesPage;