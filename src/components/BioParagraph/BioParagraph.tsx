import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../LanguageWrapper";
import { BIO_SHORT, BIO_FULL } from "../../i18n/translations";

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

const BioParagraph: React.FC<StyledParagraphProps> = (props) => {
  const { language } = useLanguage();

  return (
    <>
      <MobileText {...props}>{BIO_SHORT[language]}</MobileText>
      <DesktopText {...props}>{BIO_FULL[language]}</DesktopText>
    </>
  );
};
export default BioParagraph;