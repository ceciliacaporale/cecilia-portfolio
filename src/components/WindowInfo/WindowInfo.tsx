import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { WindowInfoWrapper, Header, Content } from "./WindowInfo.styles";
import Star from "./../../assets/web.png?url";

interface WindowInfoProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  initialPosition?: { x: number; y: number };
}

const DEFAULT_POSITION = { x: 190, y: 640 };
const DEFAULT_SIZE = { width: 150, height: 100 };

const WindowInfo: React.FC<WindowInfoProps> = ({ 
  title, 
  containerRef, 
  initialPosition = DEFAULT_POSITION 
}) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    initialPosition.x, 
    initialPosition.y, 
    containerRef, 
    DEFAULT_SIZE.width, 
    DEFAULT_SIZE.height
  );

  const currentYear = new Date().getFullYear();

  return (
    <WindowInfoWrapper
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
      role="dialog"
      aria-labelledby="window-info-header"
    >
      <Header 
        onMouseDown={handleMouseDown}
        id="window-info-header"
      >
        {title}
      </Header>

      <Content>
        <p>
          © {currentYear} Maria Cecilia. <br />
          Made with love and caffeine.
        </p>
        <div className="star-decoration">
          <img 
            src={Star} 
            alt="Decorative star" 
            width="25" 
            height="25" 
            draggable="false"
          />
        </div>
      </Content>
    </WindowInfoWrapper>
  );
};

export default WindowInfo;