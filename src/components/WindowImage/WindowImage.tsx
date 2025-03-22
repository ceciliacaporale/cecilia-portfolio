import React, { useState } from "react";
import { WindowImageWrapper, Header, Content, WindowButtons, CodeSymbol, Tooltip } from "./WindowImage.styles";

interface WindowImageProps {
  title?: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  $headerColor?: string;
}

const WindowImage: React.FC<WindowImageProps> = ({ title, imageSrc, width, height, $headerColor }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    <WindowImageWrapper width={width} height={height}>
      <Header headerColor={$headerColor}>
        <CodeSymbol>&lt;  &gt;</CodeSymbol> 
        <span>{title}</span> 
        <WindowButtons>
          <span className="minimize">-</span>
          <span className="close">x</span>
          <span className="love">♥</span>
        </WindowButtons>
      </Header>
      <Content>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            width="100%" 
            height="auto" 
            onMouseMove={handleMouseMove} 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
        ) : (
          <p>Imagem indisponível :c</p>
        )}
        {showTooltip && <Tooltip style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>Ceci</Tooltip>}
      </Content>
    </WindowImageWrapper>
  );
};

export default WindowImage;
