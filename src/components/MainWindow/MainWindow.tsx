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
import Star from "../../assets/star.png?url";
import StarPink from "../../assets/starpink.png?url";
import WindowImage from "../WindowImage/WindowImage";
import SocialMedia from "../SocialMedia";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";

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
        <TitleAnimation/>
        <Container>
          <ContainerImage>
            <p>
              Sou Maria Cecília, desenvolvedora front-end.
              Adoro transformar ideias em código e criar experiências interativas. 
              Quando não estou programando, provavelmente estou rabiscando alguma 
              ilustração por aí. Iniciei minha carreira no início de 2022 e, desde 
              então, sigo aprendendo e evoluindo a cada projeto. Estou sempre 
              aberta a colaborações, então sinta-se à vontade para entrar em contato 
              para qualquer oportunidade! Bem-vindo ao meu cantinho na internet e 
              espero que aproveite a visita!
            </p>
            <WindowImage
              title=""
              imageSrc={Ceci}
              width="200px"
              height="200px"
              $headerColor="#FFF982"
            />
          </ContainerImage>
          <div className="star-green">
            <img src={Star} width={40} height={40} alt="Estrela verde" />
          </div>
          <div className="star-pink">
            <img src={StarPink} width={40} height={40} alt="Estrela rosa" />
          </div>
        </Container>
      </MainWindowWrapper>
      <ContainerSocialMedia>
        <SocialMedia />
      </ContainerSocialMedia>
    </>
  );
};

export default MainWindow;
