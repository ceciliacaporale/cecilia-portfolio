import React, { useState, useRef } from "react";
import MainWindowTablet from "../MainWindowTablet";
import { TabletWrapper, ContainerMain, ContentArea, LoadingWindowContainer } from "./Tablet.styles";
import LoadingWindow from "../LoadingWindow";

const Tablet: React.FC = () => {

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  
  return (
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
  );
};

export default Tablet;
