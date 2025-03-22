import React, { useState, useRef } from "react";
import MainWindowTablet from "./MainWindowTablet/MainWindowTablet";
import { TabletWrapper, ContentArea, LoadingWindowContainer } from "./styles/Tablet.styles";
import LoadingWindow from "./LoadingWindow/LoadingWindow";

const Tablet: React.FC = () => {

  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  
  return (
    <TabletWrapper>
     <ContentArea>
    <MainWindowTablet />
    <LoadingWindowContainer>
    {isLoadingVisible && <LoadingWindow onClose={() => setIsLoadingVisible(false)} />} 
    </LoadingWindowContainer>

     </ContentArea>
    </TabletWrapper>
  );
};

export default Tablet;
