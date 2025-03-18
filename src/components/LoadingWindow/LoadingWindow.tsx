import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import Shape from "../../assets/shape.png?url";
import Spiral from "../../assets/spiral.png?url";

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
  const { elementRef, position, handleMouseDown } = useDraggable(window.innerWidth - 390, -50);

  return (
    <LoadingWindowWrapper 
      ref={elementRef}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <WindowButtons>
        <span className="close" onClick={onClose}>✕</span>
      </WindowButtons>
      <Header className="draggable-header" onMouseDown={handleMouseDown}>
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
