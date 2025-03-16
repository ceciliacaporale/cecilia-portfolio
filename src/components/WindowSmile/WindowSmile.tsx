import React from "react";
import { WindowSmileWrapper, Header, Content, WindowButtons } from "./WindowSmile.styles";

interface WindowSmileProps {
  title: string;
}

const WindowSmile: React.FC<WindowSmileProps> = ({ title }) => {
  return (
    <WindowSmileWrapper>
      <Header>
          <WindowButtons>
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
            </WindowButtons>
        {title}
      </Header>
      <Content>aa</Content>
    </WindowSmileWrapper>
  );
};

export default WindowSmile;
