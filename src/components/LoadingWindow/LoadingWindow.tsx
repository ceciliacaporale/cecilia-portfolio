import React from "react";
import { 
  LoadingWindowWrapper, 
  Header, 
  Content, 
  WindowButtons, 
  Loader 
} from "./LoadingWindow.styles";

interface LoadingWindowProps {
  onClose: () => void;
}

const LoadingWindow: React.FC<LoadingWindowProps> = ({ onClose }) => {
  return (
    <LoadingWindowWrapper>
      <WindowButtons>
        <span className="close" onClick={onClose}>✕</span>
      </WindowButtons>
      <Header>constante evolução</Header>
      <Content>
        <Loader>
          <div className="container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </Loader>
      </Content>
    </LoadingWindowWrapper>
  );
};

export default LoadingWindow;
