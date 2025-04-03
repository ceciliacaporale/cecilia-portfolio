import { MainWindowMobileWrapper, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContentSkills } from "./MainWindowMobile.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SkillsMobile from "../SkillsMobile";

interface MainWindowMobileProps {
  title?: string;
}

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
            width="240px"
            height="240px"
             />
          <ContainerText>
            <TitleAnimation />
            <p>
              Sou Maria Cecília, desenvolvedora front-end.
              Adoro transformar ideias em código e criar experiências interativas. Quando não estou programando, provavelmente estou rabiscando alguma ilustração por aí.
              Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto. Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
              Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
            </p>
          </ContainerText>
        </ContentWrapper>
         <ContentSkills>
             <SkillsMobile />
          </ContentSkills>
      </Container>
    </MainWindowMobileWrapper>
  </>
  );
};

export default MainWindowMobile;