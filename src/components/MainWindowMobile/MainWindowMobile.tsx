import { MainWindowMobileWrapper, Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContentSkills, ContainerSocialMedia } from "./MainWindowMobile.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SkillsMobile from "../SkillsMobile";
import SocialMedia from "../SocialMedia";
import BioParagraph from "@components/BioParagraph";

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
            <TitleAnimation strings={ ["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"]}/>
            <BioParagraph />
          </ContainerText>
        </ContentWrapper>
            <ContainerSocialMedia>
              <SocialMedia />
            </ContainerSocialMedia>
         <ContentSkills>
             <SkillsMobile />
          </ContentSkills>
      </Container>
    </MainWindowMobileWrapper>
  </>
  );
};

export default MainWindowMobile;