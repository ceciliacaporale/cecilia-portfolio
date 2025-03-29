import MainWindowMobile from "../MainWindowMobile/MainWindowMobile";
import { MobileWrapper, ContentArea, ContainerMain } from "./Mobile.styles";

const Mobile: React.FC = () => {
  return (
    <ContainerMain>
    <MobileWrapper>
     <ContentArea>
    <MainWindowMobile />
     </ContentArea>
    </MobileWrapper>
    </ContainerMain>
  );
};

export default Mobile;
