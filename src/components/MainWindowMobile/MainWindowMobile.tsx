import { MainWindowMobileWrapper, Container, RowContainer, ContainerComponents, WindowHeader, WindowButtons, ContentWrapper, ContainerText, ContentSkills, ContainerSocialMedia } from "./MainWindowMobile.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SocialMedia from "../SocialMedia";
import BioParagraph from "@components/BioParagraph";
import Skills from "@components/Skills";
import SoftwareSkills from "@components/SoftwareSkills";
import RetroComputer from "@components/RetroComputer";
import MemoryStorage from "@components/MemoryStorage";
import Terminal from "@components/Terminal";
import WindowInfo from "@components/WindowInfo";

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
            <ContainerComponents>
            <div className="memory">
              <MemoryStorage  isDraggable={false} />
            </div>
            <Terminal isDraggable={false} />
            <Skills isDraggable={false} />
            <RowContainer>
            <SoftwareSkills isDraggable={false} />
            <RetroComputer isDraggable={false} />
            </RowContainer>
            <WindowInfo isDraggable={false} />  
            </ContainerComponents>
        
      </Container>
    </MainWindowMobileWrapper>
  </>
  );
};

export default MainWindowMobile;