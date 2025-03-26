import React, { useState, useRef } from "react";
import { DesktopWrapper, ContentArea } from "./Desktop.styles";
import LoadingWindow from "../LoadingWindow";
import MainWindow from "../MainWindow";
// import WindowInfo from "../WindowInfo/WindowInfo";
import RetroComputer from "../RetroComputer/RetroComputer";
import Folder from "../Folder/Folder";
import SoftwareSkills from "../SoftwareSkills";
// import WindowInfo from "../WindowInfo/WindowInfo";
import MemoryStorage from "../MemoryStorage/MemoryStorage";
import Skills from "../Skills/Skills";
import Terminal from "../Terminal/Terminal";
import WindowInfo from "../WindowInfo";


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
      <Folder containerRef={containerRef} />
      </ContentArea>
    </DesktopWrapper>
  );
};

export default Desktop;