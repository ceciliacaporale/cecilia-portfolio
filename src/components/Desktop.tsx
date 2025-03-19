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

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: "Sobre Mim", content: "Texto sobre mim" },
    { id: 2, title: "Projetos", content: "Meus projetos legais" },
  ]);

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  const closeWindow = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };
  const containerRef = useRef<HTMLDivElement>(null); 

  return (
    <DesktopWrapper>
      <ContentArea  ref={containerRef}>
        {isLoadingVisible && <LoadingWindow onClose={() => setIsLoadingVisible(false)} />} 
        <MainWindow />
         <WindowSmile containerRef={containerRef} />
         <Skills containerRef={containerRef} />
      <WindowInfo  containerRef={containerRef}  />
      <Terminal containerRef={containerRef}  />
      {/* <Smiling containerRef={containerRef} /> */}
      {/* <Checkerboard /> */}
      </ContentArea>
    </DesktopWrapper>
  );
};

export default Desktop;