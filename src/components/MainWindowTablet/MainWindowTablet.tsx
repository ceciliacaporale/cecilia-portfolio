import { MainWindowTabletWrapper, ContainerSocialMedia,  Container, WindowHeader, WindowButtons, ContentWrapper, ContainerText } from "./MainWindowTablet.styles";
import Ceci from "../../assets/ceci.png?url"; 
import WindowImage from "../WindowImage";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";
import SocialMedia from "@components/SocialMedia";
import BioParagraph from "@components/BioParagraph";

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
            height="285px"
          />
          <ContainerText>
          <TitleAnimation strings={ ["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"]}/>
            <BioParagraph />
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