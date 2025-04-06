import React from "react";
import {
  HeroSectionWrapper,
  Container,
  WindowHeader,
  WindowButtons,
} from "./HeroSection.styles";
import Tabs from "../Tabs";
import TitleAnimation from "../TitleAnimation";

interface HeroSectionProps {
  titleStrings: string[];
  description?: string;
  children?: React.ReactNode;
}

const WindowHeaderComponent = () => (
  <WindowHeader>
    <WindowButtons>
      <span className="close"></span>
      <span className="minimize"></span>
      <span className="maximize"></span>
    </WindowButtons>
  </WindowHeader>
);

const HeroSection: React.FC<HeroSectionProps> = ({ titleStrings, description, children }) => {
  return (
    <>
      <Tabs />
      <HeroSectionWrapper>
        <WindowHeaderComponent />
        {titleStrings && <TitleAnimation strings={titleStrings} />}
        <Container>
        {description && <p>{description}</p>}
          {children}
        </Container>
      </HeroSectionWrapper>
    </>
  );
};

export default HeroSection;
