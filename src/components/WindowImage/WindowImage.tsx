import { useState } from "react";
import { WindowImageWrapper, Header, Content, WindowButtons, CodeSymbol, Tooltip } from "./WindowImage.styles";
import Star from "../../assets/star.png?url";
import StarPink from "../../assets/starpink.png?url";
import { FaRegHeart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { PiCodeSimpleBold } from "react-icons/pi";

interface WindowImageProps {
  title?: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  shapeStar?: boolean;
}

const WindowImage: React.FC<WindowImageProps> = ({ title, imageSrc, shapeStar, width, height }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    setTooltipPosition({ x: e.clientX + 28, y: e.clientY + 50 });
    setShowTooltip(true);
  };
  
  return (
    <WindowImageWrapper width={width} height={height}>
      {shapeStar && (
        <><div className="star-green">
          <img src={Star} width={40} height={40} alt="Shape de uma estrela verde" />
        </div><div className="star-pink">
            <img src={StarPink} width={40} height={40} alt="Shape de um brilho rosa" />
          </div></>
      )}
      <Header>
        <PiCodeSimpleBold size={15}/>
        <span>{title}</span> 
        <WindowButtons>
          <span className="minimize">-</span>
          <span className="close"><IoClose size={10}/></span>
          <span className="love"><FaRegHeart size={10}/></span>
        </WindowButtons>
      </Header>
      <Content>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            width={width || 900} 
            height={height || 600}
            className="responsive-img"
            loading="lazy"
            onMouseMove={handleMouseMove} 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
        ) : (
          <p>Imagem indisponível :c</p>
        )}
      </Content>

      {showTooltip && (
        <Tooltip style={{ left: tooltipPosition.x, top: tooltipPosition.y, transform: "translate(-50%, -100%)" }}>
          Ceci
        </Tooltip>
      )}
    </WindowImageWrapper>
  );
};

export default WindowImage;
