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
      Sou Maria Cecília, desenvolvedora front-end. Transformo ideias em código e crio experiências interativas há mais de quatro anos.
      Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
      Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
    </MobileText>
    
    <DesktopText {...props}>
      Sou Maria Cecília, desenvolvedora front-end. Transformo ideias em código e crio experiências interativas há mais de quatro anos.
      Atualmente, trabalho com React e tudo o que envolve o ecossistema web. Adoro atuar nesse universo e contribuir para que ele continue sendo um espaço acessível, criativo e repleto de possibilidades.
      Estou sempre aberta a colaborações, então sinta-se à vontade para entrar em contato para qualquer oportunidade!
      Bem-vindo ao meu cantinho na internet e espero que aproveite a visita!
    </DesktopText>
  </>
);
export default BioParagraph;