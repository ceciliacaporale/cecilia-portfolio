import React from "react";
import { SmilingWrapper, Header, Content } from "./Smiling.styles";
import Smile from "../../assets/smiling.png?url";


interface SmilingProps {
  title?: string;
}

const Smiling: React.FC<SmilingProps> = ({ title }) => {
  return (
    <SmilingWrapper>
      <Header>{title}</Header>
      <Content>
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
         <img src={Smile} alt="Smile" width="26" height="26" />
      </Content>
    </SmilingWrapper>
  );
};

export default Smiling;