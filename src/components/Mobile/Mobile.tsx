import ThemeWrapper from "../../ThemeWrapper";
import MainWindowMobile from "../MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea, ContainerMain } from "./Mobile.styles";

const Mobile: React.FC = () => {
  return (
  <ThemeWrapper>
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
