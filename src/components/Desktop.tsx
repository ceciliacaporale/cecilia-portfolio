import React, { useState } from "react";
import Window from "./Window/Window";
import { DesktopWrapper, ContentArea } from "./styles/Desktop.styles";
import MainWindow from "./MainWindow/MainWindow";
import WindowSmile from "./WindowSmile/WindowSmile";
import SocialMedia from "./SocialMedia/SocialMedia";
import LoadingWindow from "./LoadingWindow/LoadingWindow";

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: "Sobre Mim", content: "Texto sobre mim" },
    { id: 2, title: "Projetos", content: "Meus projetos legais" },
  ]);

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  const closeWindow = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  return (
    <DesktopWrapper>
      <ContentArea>
        {isLoadingVisible && <LoadingWindow onClose={() => setIsLoadingVisible(false)} />} 
        <MainWindow />
        {windows.map((win) => (
          <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)}>
            {win.content}
          </Window>
        ))}
         <WindowSmile />
      </ContentArea>
      <SocialMedia />
    </DesktopWrapper>
  );
};

export default Desktop;
