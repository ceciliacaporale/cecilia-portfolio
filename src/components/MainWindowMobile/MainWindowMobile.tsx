import React from "react";
import { MainWindowMobileWrapper, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContainerSocialMedia, TabsContainer, Tab } from "./MainWindowMobile.styles";
import Ceci from "../../assets/ceci.png?url"; 
import Star from "../../assets/star.png?url"; 
import StarPink from "../../assets/starpink.png?url"; 
import WindowImage from "../WindowImage/WindowImage";
import SocialMedia from "../SocialMedia";

interface MainWindowMobileProps {
  title?: string;
}

const Tabs = () => (
  <TabsContainer>
    <Tab>
      home <span className="close-tab">✕</span>
    </Tab>
    <Tab>
      sobre mim <span className="close-tab">✕</span>
    </Tab>
    <Tab>
      projetos <span className="close-tab">✕</span>
    </Tab>
  </TabsContainer>
);

const MainWindowMobile: React.FC<MainWindowMobileProps> = () => {
  return (
      <>
      <Tabs />
      <MainWindowMobileWrapper>
      <WindowHeader>
        <WindowButtons>
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </WindowButtons>
      </WindowHeader>
      <Container>
        <ContentWrapper>
          <WindowImage
            title=""
            imageSrc={Ceci}
            width="400px"
            height="400px"
            $headerColor="#FFF982" />
          <ContainerText>
            <h1>Hello World!</h1>
            <p>
              Sou Maria Cecília, desenvolvedora front-end.
              Adoro transformar ideias em código e criar experiências interativas. Quando não estou programando, provavelmente estou rabiscando alguma ilustração por aí.
              Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto. Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
              Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
            </p>
          </ContainerText>
        </ContentWrapper>
        <div className="star-green">
          <img src={Star} width={70} height={70} />
        </div>
        <div className="star-pink">
          <img src={StarPink} width={70} height={70} />
        </div>
      </Container>
    </MainWindowMobileWrapper>
    <ContainerSocialMedia>
        <SocialMedia  width="360px" height="84px" iconSize="45px" />
    </ContainerSocialMedia></>
  );
};

export default MainWindowMobile;