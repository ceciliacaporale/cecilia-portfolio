import React from "react";
import {
  MainWindowWrapper,
  Container,
  ContainerImage,
  WindowHeader,
  WindowButtons,
  ContainerSocialMedia
} from "./MainWindow.styles";
import Ceci from "../../assets/ceci.png?url";
import WindowImage from "../WindowImage";
import SocialMedia from "../SocialMedia";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import BioParagraph from "@components/BioParagraph";

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
            />
          </ContainerImage>
        </Container>
      </MainWindowWrapper>
      <ContainerSocialMedia>
        <SocialMedia />
      </ContainerSocialMedia>
    </>
  );
};

export default MainWindow;
