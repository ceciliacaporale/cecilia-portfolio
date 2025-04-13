import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { WindowInfoWrapper, Header, Content } from "./WindowInfo.styles";
import Star from "./../../assets/web.png?url";

interface WindowInfoProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  initialPosition?: { x: number; y: number };
  isDraggable?: boolean;
}

const DEFAULT_POSITION = { x: 190, y: 640 };
const DEFAULT_SIZE = { width: 150, height: 100 };

const WindowInfo: React.FC<WindowInfoProps> = ({ 
  title, 
  containerRef, 
  initialPosition = DEFAULT_POSITION,
  isDraggable = true
}) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    initialPosition.x, 
    initialPosition.y, 
    containerRef as React.RefObject<HTMLDivElement> | undefined,
    DEFAULT_SIZE.width, 
    DEFAULT_SIZE.height
  );

  const currentYear = new Date().getFullYear();

  return (
    <WindowInfoWrapper
      style={
        isDraggable
          ? { left: `${position.x}px`, top: `${position.y}px`, position: "absolute", zIndex }
          : { position: "relative" }
      }
      role="dialog"
      aria-labelledby="window-info-header"
      onMouseDown={isDraggable ? handleMouseDown : undefined}
    >
      <Header id="window-info-header">
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
