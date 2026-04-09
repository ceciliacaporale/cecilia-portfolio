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
      I'm Maria Cecília, a front-end developer. I've been turning ideas into code and creating interactive experiences for over four years.
      I'm always open to collaborations, so feel free to reach out for any opportunities!
      Welcome to my corner of the internet, I hope you enjoy your visit!
    </MobileText>
    
    <DesktopText {...props}>
      I'm Maria Cecília, a front-end developer. I've been turning ideas into code and creating interactive experiences for over four years.
      Currently, I work with React and everything involving the web ecosystem. I love working in this space and contributing to keeping it accessible, creative, and full of possibilities.
      I'm always open to collaborations, so feel free to reach out for any opportunities!
      Welcome to my corner of the internet, I hope you enjoy your visit!
    </DesktopText>
  </>
);
export default BioParagraph;