import React from "react";
import MainWindowTablet from "../../../components/MainWindowTablet";
import ThemeWrapper from "../../../ThemeWrapper";
import ResponsiveLayout from "src/layouts/ResponsiveLayout";
import { ContainerComponents } from "./Tablet.styles";
import Skills from "@components/Skills";
import SoftwareSkills from "@components/SoftwareSkills";
import MemoryStorage from "@components/MemoryStorage";
import RetroComputer from "@components/RetroComputer";
import WindowInfo from "@components/WindowInfo";
import Folder from "@components/Folder";

const Tablet: React.FC = () => {
  return (
  <ThemeWrapper>
    <ResponsiveLayout >
    <MainWindowTablet />
    <ContainerComponents>
      <div className="skills"><Skills isDraggable={false} /></div>
      <div className="software"><SoftwareSkills isDraggable={false} /></div>
      <div className="memory"><MemoryStorage isDraggable={false} /></div>
      <div className="retro">
        <RetroComputer isDraggable={false} />
      </div>
      <div className="info">
      <WindowInfo isDraggable={false} />
      </div>
      <div  className="folder">
      <Folder isDraggable={false} />
      </div>
    </ContainerComponents>
    </ResponsiveLayout>
  </ThemeWrapper>
  );
};

export default Tablet;
