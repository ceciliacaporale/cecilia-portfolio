import React, { useState } from "react";
import Window from "./Window";
import { DesktopWrapper, ContentArea } from "./styles/Desktop.styles";
import MainWindow from "./MainWindow";

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: "Sobre Mim", content: "Texto sobre mim" },
    { id: 2, title: "Projetos", content: "Meus projetos legais" },
  ]);

  const closeWindow = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  return (
    <DesktopWrapper>
      <ContentArea>
        <MainWindow />
        {windows.map((win) => (
          <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)}>
            {win.content}
          </Window>
        ))}
      </ContentArea>
    </DesktopWrapper>
  );
};

export default Desktop;
