import React from "react";
import { LoadingWindowWrapper, Header, Content, WindowButtons } from "./LoadingWindow.styles";

interface LoadingWindowProps {
  title: string;
}

const LoadingWindow: React.FC<LoadingWindowProps> = ({ title }) => {
  return (
    <LoadingWindowWrapper>
       <WindowButtons>
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </WindowButtons>
      <Header>
        {title}
      </Header>
      <Content>constante evolução</Content>
    </LoadingWindowWrapper>
  );
};

export default LoadingWindow;
