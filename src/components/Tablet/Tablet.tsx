import React, { useState, useRef } from "react";
import MainWindowTablet from "../MainWindowTablet";
import { TabletWrapper, ContainerMain, ContentArea, LoadingWindowContainer } from "./Tablet.styles";
import LoadingWindow from "../LoadingWindow";
import ThemeWrapper from "../../ThemeWrapper";

const Tablet: React.FC = () => {

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  
  return (
  <ThemeWrapper>
    <ContainerMain>
    <TabletWrapper>
     <ContentArea>
    <MainWindowTablet />
    <LoadingWindowContainer>
    {isLoadingVisible && <LoadingWindow onClose={() => setIsLoadingVisible(false)} />} 
    </LoadingWindowContainer>
     </ContentArea>
    </TabletWrapper>
    </ContainerMain>
  </ThemeWrapper>
  );
};

export default Tablet;
