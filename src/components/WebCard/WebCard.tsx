import React from "react";
import { WebCardWrapper, Header, Content } from "./WebCard.styles";

interface WebCardProps {
  title?: string;
}
const WebCard: React.FC<WebCardProps> = ({ 
  title,
}) => {

  return (
    <WebCardWrapper>
      <Header id="window-info-header">
    
      </Header>

      <Content>
      </Content>
    </WebCardWrapper>
  );
};

export default WebCard;
