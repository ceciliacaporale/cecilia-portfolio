import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { WindowInfoWrapper, Header, Content } from "./WindowInfo.styles";
import Pixel from "./../../assets/smilepixel.png?url"
import Close from "./../../assets/close.png?url"


interface WindowInfoProps {
  title?: string;
}

const WindowInfo: React.FC<WindowInfoProps> = ({ title }) => {
  const { position, handleMouseDown } = useDraggable(window.innerWidth - 1090, 430);

  return (
    <WindowInfoWrapper style={{ left: position.x, top: position.y }}>
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
