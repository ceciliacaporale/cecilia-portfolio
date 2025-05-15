import React from "react";
import styled from "styled-components";

interface StyledParagraphProps {
  fontSize?: string;
  maxWidth?: string;
  color?: string;
  className?: string;
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-family: "Inter", sans-serif;
`;

const MobileText = styled(StyledParagraph)`
  display: none;
  
  @media (max-width: 756px) {
    display: block;
    font-size: 15px;
  }
`;

const DesktopText = styled(StyledParagraph)`
  display: block;
  
  @media (max-width: 756px) {
    display: none;
  }
`;

const BioParagraph: React.FC<StyledParagraphProps> = (props) => (
  <>
    <MobileText {...props}>
      Sou a Maria Cecília, desenvolvedora front-end. Transformo ideias em código e crio experiências digitais.
      Apaixonada por aprender e resolver desafios técnicos. Na programação desde 2022, evoluindo a cada projeto.
      Sempre aberta a novas conexões e oportunidades. Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
    </MobileText>
    
    <DesktopText {...props}>
      Sou Maria Cecília, desenvolvedora front-end. Adoro transformar ideias em código e criar experiências interativas.
      Quando não estou programando, provavelmente estou estudando novas tecnologias ou repensando alguma solução.
      Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto.
      Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
      Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
    </DesktopText>
  </>
);
export default BioParagraph;