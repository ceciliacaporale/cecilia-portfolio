import { useState, useEffect } from 'react';
import { MainWindowTabletWrapper, ContainerSocialMedia, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText } from "./MainWindowTablet.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SocialMedia from "@components/SocialMedia";
import BioParagraph from "@components/BioParagraph";

const MainWindowTablet: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 719);
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bioText = "Olá, sou a Maria Cecília, desenvolvedora front-end. Transformo ideias em código e crio experiências digitais. Apaixonada por aprender e resolver desafios técnicos. Na programação desde 2022, evoluindo a cada projeto. Sempre aberta a novas conexões e oportunidades. Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!"

  return (
    <>
      <Tabs />
      <MainWindowTabletWrapper>
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
              imageSrc={Ceci}
              width="auto"
              height="285px"
            />
            <ContainerText>
              <TitleAnimation strings={["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"]}/>
              {isMobile ? <p>{bioText}</p> : <BioParagraph />}
            </ContainerText>
          </ContentWrapper>
        </Container>
      </MainWindowTabletWrapper>
      <ContainerSocialMedia>
        <SocialMedia /> 
      </ContainerSocialMedia>
    </>
  );
};

export default MainWindowTablet;