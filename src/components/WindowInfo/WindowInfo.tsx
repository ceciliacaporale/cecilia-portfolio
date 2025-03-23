import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { WindowInfoWrapper, Header, Content } from "./WindowInfo.styles";
import Star from "./../../assets/web.png?url";


interface WindowInfoProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement>; 
}

const WindowInfo: React.FC<WindowInfoProps> = ({ title, containerRef }) => {
  const { position, handleMouseDown } = useDraggable(100, 640, containerRef, 200, 80);

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
      </Header>

      <Content>
      <p>
      © {new Date().getFullYear()} Maria Cecilia. <br />
        Made with love and caffeine.
        </p>
        <div className="star">
          <img src={Star} alt="star" width="25" height="25" />
        </div>
      </Content>
    </WindowInfoWrapper>
  );
};

export default WindowInfo;
