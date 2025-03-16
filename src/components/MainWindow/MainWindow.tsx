import React from "react";
import { MainWindowWrapper, Container, ContainerImage, TabsContainer, WindowHeader, WindowButtons, Tab } from "./MainWindow.styles";
import Alvo from "../../assets/alvo.png"; 
interface MainWindowProps {
  title?: string;
}

const MainWindow: React.FC<MainWindowProps> = () => {
  return (
    <><TabsContainer>
      <Tab>home  <span className="close-tab">✕</span></Tab>
      <Tab>sobre mim <span className="close-tab">✕</span></Tab>
      <Tab>blog <span className="close-tab">✕</span></Tab>
    </TabsContainer>
    <MainWindowWrapper>
        <WindowHeader>
          <WindowButtons>
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </WindowButtons>
        </WindowHeader>

        <Container>
          <h1>Hello World</h1>
          <ContainerImage>
          <p>
            Sou desenvolvedora front-end e minha trajetória começou no início de
            2022, quando iniciei a faculdade de Engenharia de Software. Logo
            ingressei no mercado de trabalho, onde venho evoluindo constantemente,
            sempre em busca de aprimoramento.
            Ao longo desses anos, me especializei no desenvolvimento de
            aplicações front-end escaláveis e responsivas, utilizando tecnologias
          </p>
            <img src={Alvo} alt="Imagem teste" />
          </ContainerImage>
        </Container>
      </MainWindowWrapper></>
);
};

export default MainWindow;
