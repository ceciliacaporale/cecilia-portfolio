import ThemeWrapper from "../../ThemeWrapper";
import MainWindowMobile from "../../components/MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea, ContainerMain } from "./Mobile.styles";
import ThemeToggleButton from "../../components/ThemeToggleButton/ThemeToggleButton";

const Mobile: React.FC = () => {
  return (
  <ThemeWrapper>
    <ThemeToggleButton />
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
