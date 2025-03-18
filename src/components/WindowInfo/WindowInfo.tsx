import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { WindowInfoWrapper, Header, Content } from "./WindowInfo.styles";
import Pixel from "./../../assets/smilepixel.png?url"


interface WindowInfoProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement>; 
}

const WindowInfo: React.FC<WindowInfoProps> = ({ title, containerRef }) => {
  const { position, handleMouseDown } = useDraggable(200, 470, containerRef, 200, 80);

  return (
      <WindowInfoWrapper
          style={{
            left: position.x,
            top: position.y,
            position: "absolute", 
          }}
      >
      <Header onMouseDown={handleMouseDown}>
        {title}
        <p>_</p>
        <p>Д</p>
        <p>X</p>
      </Header>

      <Content>
      <p>
        código, design e ilustração
        </p>
      <img src={Pixel} alt="a" width={22} height={22}/>
      </Content>
    </WindowInfoWrapper>
  );
};

export default WindowInfo;
