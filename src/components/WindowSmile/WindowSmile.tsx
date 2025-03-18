import React from "react";
import { WindowSmileWrapper, Header, Content } from "./WindowSmile.styles";
// import Love from "./../../assets/love.png?url"
import useDraggable from "../../hooks/useDraggable";

interface WindowSmileProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement>; 
}

const WindowSmile: React.FC<WindowSmileProps> = ({ title, containerRef}) => {
  const { position, handleMouseDown } = useDraggable(40, 380, containerRef, 220, 230);
  return (
    <WindowSmileWrapper 
    style={{
      left: position.x,
      top: position.y,
      position: "absolute", 
    }}
    >
      <Header onMouseDown={handleMouseDown}>
        {title}
      </Header>
      <Content>
      {/* <img src={Love} alt="GitHub" width="80px" height="80px" /> */}
      </Content>
    </WindowSmileWrapper>
  );
};

export default WindowSmile;
