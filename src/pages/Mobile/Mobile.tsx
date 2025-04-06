import ThemeWrapper from "../../ThemeWrapper";
import MainWindowMobile from "../../components/MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea, ContainerMain, ContainerToggle } from "./Mobile.styles";
import ThemeToggleButton from "../../components/ThemeToggleButton";

const Mobile: React.FC = () => {
  return (
  <ThemeWrapper>
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
  </ThemeWrapper>
  );
};

export default Mobile;
