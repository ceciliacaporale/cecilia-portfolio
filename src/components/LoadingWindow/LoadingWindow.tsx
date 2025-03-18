import React from "react";
import Shape from "../../assets/shape.png?url";

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
    <LoadingWindowWrapper 
    
    >
      <WindowButtons>
        <span className="close" onClick={onClose}>✕</span>
      </WindowButtons>
      <Header className="draggable-header" >
      constant evolution
      </Header>
      <Content>
        <div className="star">
        <img src={Shape} width={35}/>
        </div>
        <Loader>
          <div className="container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </Loader>
        <div className="spiral">
        {/* <img src={Spiral} width={30}/> */}
        </div>
      </Content>
    </LoadingWindowWrapper>
  );
};

export default LoadingWindow;
