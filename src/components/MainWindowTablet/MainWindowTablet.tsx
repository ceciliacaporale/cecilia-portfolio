import { MainWindowTabletWrapper, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContainerSocialMedia, ContentSkills } from "./MainWindowTablet.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import SocialMedia from "../SocialMedia";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SkillsMobile from "../SkillsMobile";

const MainWindowTablet: React.FC = () => {
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
            height="253px"
          />
          <ContainerText>
          <TitleAnimation strings={ ["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"]}/>
            <p>
            Sou Maria Cecília, desenvolvedora front-end. Adoro transformar ideias em código e criar experiências interativas. Quando não estou programando, provavelmente estou estudando novas tecnologias ou repensando alguma solução. Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto. Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade! Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
            </p>
          </ContainerText>
        </ContentWrapper>
        <ContentSkills>
          <SkillsMobile />
        </ContentSkills>
      </Container>
    </MainWindowTabletWrapper>
      <ContainerSocialMedia>
        <SocialMedia />
      </ContainerSocialMedia></>
  );
};

export default MainWindowTablet;