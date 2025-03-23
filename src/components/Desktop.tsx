import React, { useState, useRef } from "react";
import { DesktopWrapper, ContentArea } from "./styles/Desktop.styles";
import MainWindow from "./MainWindow/MainWindow";
import WindowSmile from "./WindowSmile/WindowSmile";
import SocialMedia from "./SocialMedia/SocialMedia";
import LoadingWindow from "./LoadingWindow/LoadingWindow";
import Skills from "./Skills/Skills";
import WindowImage from "./WindowImage/WindowImage";
import WindowInfo from "./WindowInfo/WindowInfo";
import Smiling from "./Smiling/Smiling";
import Terminal from "./Terminal/Terminal";
import Checkerboard from "./Checkerboard/Checkerboard";
import MemoryStorage from "./MemoryStorage/MemoryStorage";
import RetroComputer from "./RetroComputer/RetroComputer";
import SoftwareSkills from "./SoftwareSkills/SoftwareSkills";
import ProjetosButton from "./ProjectsButton/ProjectsButton";

const Desktop: React.FC = () => {

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null); 

  return (
    <DesktopWrapper>
      <ContentArea  ref={containerRef}>
        {isLoadingVisible && <LoadingWindow onClose={() => setIsLoadingVisible(false)} />} 
        <MainWindow />
         {/* <WindowSmile containerRef={containerRef} /> */}
         <Skills containerRef={containerRef} width="400px" height="190px"/>
      <WindowInfo  containerRef={containerRef}  />
      <Terminal containerRef={containerRef}  />
      {/* <Checkerboard containerRef={containerRef}/> */}
      {/* <Smiling containerRef={containerRef} /> */}
      <MemoryStorage containerRef={containerRef}/>
      <RetroComputer containerRef={containerRef} />
      <SoftwareSkills containerRef={containerRef} />
      <ProjetosButton containerRef={containerRef}/>
      </ContentArea>
    </DesktopWrapper>
  );
};

export default Desktop;