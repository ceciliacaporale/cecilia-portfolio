import React from "react";
import { WindowWrapper, Header, CloseButton, Content } from "./Window.styles";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose }) => {
  return (
    <WindowWrapper>
      <Header>
        {title}
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Content>{children}</Content>
    </WindowWrapper>
  );
};

export default Window;
