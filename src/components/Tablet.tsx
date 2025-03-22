import React from "react";
import MainWindowTablet from "./MainWindowTablet/MainWindowTablet";
import { TabletWrapper, ContentArea } from "./styles/Tablet.styles";

const Tablet: React.FC = () => {
  return (
    <TabletWrapper>
     <ContentArea>
    <MainWindowTablet />
     </ContentArea>
    </TabletWrapper>
  );
};

export default Tablet;
