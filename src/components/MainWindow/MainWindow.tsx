import React from "react";
import { MainWindowWrapper, Container, ContainerImage } from "./MainWindow.styles";
import Alvo from "../../assets/alvo.png"; 
interface MainWindowProps {
  title?: string;
}

const MainWindow: React.FC<MainWindowProps> = () => {
  return (
    <MainWindowWrapper>
        <Container>
        <h1>Hello World</h1>
        <ContainerImage>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veniam in ipsum corrupti ratione fugit dicta consectetur voluptates tempora doloremque, aut praesentium eaque quisquam id labore rem, nam placeat. Expedita?</p>
        <img src={Alvo as unknown as string} alt="Imagem testeee" />
        </ContainerImage>
        </Container>
    </MainWindowWrapper>
  );
};

export default MainWindow;
