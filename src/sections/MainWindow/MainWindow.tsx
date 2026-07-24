import React, { useState } from "react";
import {
  MainWindowWrapper,
  Container,
  ContainerImage,
  WindowHeader,
  WindowButtons,
  ContainerSocialMedia
} from "./MainWindow.styles";
import Ceci from "../../assets/3d.png?url";
import WindowImage from "../../components/WindowImage";
import SocialMedia from "../../components/SocialMedia";
import Tabs from "../../components/Tabs";
import TitleAnimation from "../../components/TitleAnimation";
import BioParagraph from "@components/BioParagraph";
import AboutModal from "../../components/AboutModal";

interface MainWindowProps {
  title?: string;
}

const WindowHeaderComponent = () => (
  <WindowHeader>
    <WindowButtons>
      <span className="close"></span>
      <span className="minimize"></span>
      <span className="maximize"></span>
    </WindowButtons>
  </WindowHeader>
);

const MainWindow: React.FC<MainWindowProps> = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <Tabs />
      <MainWindowWrapper>
        <WindowHeaderComponent />
        <TitleAnimation strings={ ["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"]}/>
        <Container>
          <ContainerImage>
           <BioParagraph />
            <WindowImage
              title=""
              imageSrc={Ceci}
              width="250px"
              height="200px"
              shapeStar={true}
              onImageClick={() => setIsAboutOpen(true)}
            />
          </ContainerImage>
        </Container>
      </MainWindowWrapper>
      <ContainerSocialMedia>
        <SocialMedia />
      </ContainerSocialMedia>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
};

export default MainWindow;
