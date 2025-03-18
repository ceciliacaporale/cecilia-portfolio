import React from "react";
import { WindowSmileWrapper, Header, Content } from "./WindowSmile.styles";
// import Love from "./../../assets/love.png?url"
interface WindowSmileProps {
  title?: string;
}

const WindowSmile: React.FC<WindowSmileProps> = ({ title }) => {
  console.log("Styled Components carregado!");
  return (
    <WindowSmileWrapper>
      <Header>
        {title}
      </Header>
      <Content>
      {/* <img src={Love} alt="GitHub" width="80px" height="80px" /> */}
      </Content>
    </WindowSmileWrapper>
  );
};

export default WindowSmile;
