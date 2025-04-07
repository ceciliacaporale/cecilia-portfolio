import React from "react";
import { MaintenanceWindowWrapper, Header, Content, DotsContainer, Dot } from "./MaintenanceWindow.styles";
import Construcao from "./../../assets/construcao.png?url";
import Capacete from "./../../assets/capacete.png?url";
import Ferramenta from "./../../assets/ferramentas-de-construcao.png?url";
import { useTheme } from "styled-components";

interface MaintenanceWindowProps {
  title?: string;
}

const MaintenanceWindow: React.FC<MaintenanceWindowProps> = ({ 
  title, 
}) => {

  const theme = useTheme();
  const dotColorKeys: (keyof typeof theme.colors)[] = ['pink', 'orange', 'lime'];

  return (
    <MaintenanceWindowWrapper
      role="dialog"
      aria-labelledby="window-info-header"
    >
      <Header 
        id="window-info-header"
      >
        {title}
        <DotsContainer>
          {dotColorKeys.map((colorKey, index) => (
            <Dot key={index} $colorKey={colorKey} />
          ))}
        </DotsContainer>
      </Header>

      <Content>
        <p>
         página em construção
         <div className="construcao">
          <img 
            src={Construcao} 
            alt="Imagem de construção" 
            width="60" 
            height="60" 
          />
          <img 
            src={Capacete} 
            alt="Imagem de um capacete de obra." 
            width="60" 
            height="60" 
          />
          <img 
            src={Ferramenta} 
            alt="Imagem de uma ferramenta." 
            width="60" 
            height="60" 
          />
        </div>
        </p>
      </Content>
    </MaintenanceWindowWrapper>
  );
};

export default MaintenanceWindow;
