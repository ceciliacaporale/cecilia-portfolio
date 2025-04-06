import React, { useState, useRef } from "react";
import MainWindowTablet from "../../components/MainWindowTablet";
import { TabletWrapper, ContainerToggle, ContainerMain, ContentArea, LoadingWindowContainer } from "./Tablet.styles";
import LoadingWindow from "../../components/LoadingWindow";
import ThemeWrapper from "../../ThemeWrapper";
import ThemeToggleButton from "../../components/ThemeToggleButton";

const Tablet: React.FC = () => {

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  
  return (
  <ThemeWrapper>
    <ContainerToggle>
      <ThemeToggleButton />
    </ContainerToggle>
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
