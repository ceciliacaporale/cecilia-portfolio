import React from "react";
import { MaintenanceWindowWrapper, Header, Content, DotsContainer, Dot } from "./MaintenanceWindow.styles";
import Construcao from "./../../assets/construcao.png?url";
import Capacete from "./../../assets/capacete.png?url";
import Ferramenta from "./../../assets/ferramentas-de-construcao.png?url";
import { dotColors } from "../Skills/Skills.styles";

interface MaintenanceWindowProps {
  title?: string;
}

const MaintenanceWindow: React.FC<MaintenanceWindowProps> = ({ 
  title, 
}) => {

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
          {dotColors.map((color: string, index: React.Key | null | undefined) => (
            <Dot key={index} color={color} />
          ))}
         </DotsContainer>
      </Header>

      <Content>
        <p>
         página em construção
         <div className="construcao">
          <img 
            src={Construcao} 
            alt="Decorative star" 
            width="60" 
            height="60" 
          />
          <img 
            src={Capacete} 
            alt="Decorative star" 
            width="60" 
            height="60" 
          />
          <img 
            src={Ferramenta} 
            alt="Decorative star" 
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
