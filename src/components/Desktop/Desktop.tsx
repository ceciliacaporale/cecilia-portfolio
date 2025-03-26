import React, { useState, useRef } from "react";
import { DesktopWrapper, ContentArea } from "./Desktop.styles";
import LoadingWindow from "../LoadingWindow";
import MainWindow from "../MainWindow";
import RetroComputer from "../RetroComputer";
import Folder from "../Folder";
import SoftwareSkills from "../SoftwareSkills";
import MemoryStorage from "../MemoryStorage";
import Skills from "../Skills";
import Terminal from "../Terminal";
import WindowInfo from "../WindowInfo";

const Desktop: React.FC = () => {
  
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <DesktopWrapper>
      <ContentArea ref={containerRef}>
        {isLoadingVisible && (
          <LoadingWindow onClose={() => setIsLoadingVisible(false)} />
        )}
        <MainWindow />
        <Skills containerRef={containerRef} />
        <WindowInfo containerRef={containerRef} />
        <Terminal containerRef={containerRef} />
        <MemoryStorage containerRef={containerRef} />
        <RetroComputer containerRef={containerRef} />
        <SoftwareSkills containerRef={containerRef} />
        <Folder containerRef={containerRef} />
      </ContentArea>
    </DesktopWrapper>
  );
};

export default Desktop;