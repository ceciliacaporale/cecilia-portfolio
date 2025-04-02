import { WindowImageSecondaryWrapper, Header, Content, WindowButtons } from "./WindowImageSecondary.styles";
import { Dot } from "../Skills/Skills.styles";

interface WindowImageSecondaryProps {
  title?: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  headerColor?: string;
  dotColors?: [string, string, string];
}

const WindowImageSecondary: React.FC<WindowImageSecondaryProps> = ({ 
  title, 
  imageSrc, 
  width, 
  height, 
  headerColor = "#FDF28D", 
  dotColors = ["#FF5F56", "#FFBD2E", "#27C93F"]
}) => {
  
  return (
    <WindowImageSecondaryWrapper width={width} height={height}>
      <Header headerColor={headerColor}>
        <span>{title}</span> 
        <WindowButtons>
          {dotColors.map((color, index) => (
            <Dot key={index} color={color} />
          ))}
        </WindowButtons>
      </Header>
      <Content>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            width="100%" 
            height="auto" 
          />
        ) : (
          <p>Imagem indisponível :c</p>
        )}
      </Content>
    </WindowImageSecondaryWrapper>
  );
};

export default WindowImageSecondary;