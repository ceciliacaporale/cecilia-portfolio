import ThemeWrapper from "../../../ThemeWrapper";
import LanguageWrapper from "../../../LanguageWrapper";
import MainWindowMobile from "../../../sections/MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea, ContainerMain, ContainerToggle } from "./Mobile.styles";
import ThemeToggleButton from "../../../components/ThemeToggleButton";
import LanguageToggleButton from "../../../components/LanguageToggleButton";

const Mobile: React.FC = () => {
  return (
  <ThemeWrapper>
    <LanguageWrapper>
    <LanguageToggleButton />
    <ContainerToggle>
       <ThemeToggleButton />
    </ContainerToggle>
    <ContainerMain>
    <MobileWrapper>
     <ContentArea>
    <MainWindowMobile />
     </ContentArea>
    </MobileWrapper>
    </ContainerMain>
    </LanguageWrapper>
  </ThemeWrapper>
  );
};

export default Mobile;
