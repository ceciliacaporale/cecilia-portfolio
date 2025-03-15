import React from "react";
import { MainWindowWrapper, Container } from "./styles/MainWindow.styles";

interface MainWindowProps {
  title?: string;
}

const MainWindow: React.FC<MainWindowProps> = () => {
  return (
    <MainWindowWrapper>
        <Container>

        <h1>Hello World</h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veniam in ipsum corrupti ratione fugit dicta consectetur voluptates tempora doloremque, aut praesentium eaque quisquam id labore rem, nam placeat. Expedita?</p>
        </Container>
    </MainWindowWrapper>
  );
};

export default MainWindow;
