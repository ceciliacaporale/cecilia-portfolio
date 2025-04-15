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

const BioParagraph: React.FC<StyledParagraphProps> = ({
  fontSize,
  maxWidth,
  color,
  className
}) => (
  <StyledParagraph
    fontSize={fontSize}
    maxWidth={maxWidth}
    color={color}
    className={className}
  >
    Sou Maria Cecília, desenvolvedora front-end. Adoro transformar ideias em código e criar experiências interativas.
    Quando não estou programando, provavelmente estou estudando novas tecnologias ou repensando alguma solução.
    Iniciei minha carreira no início de 2022 e, desde então, sigo aprendendo e evoluindo a cada projeto.
    Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
    Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
  </StyledParagraph>
);

export default BioParagraph;