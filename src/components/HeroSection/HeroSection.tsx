import React from "react";
import {
  HeroSectionWrapper,
  Container,
  WindowHeader,
  WindowButtons,
} from "./HeroSection.styles";
import Tabs from "../Tabs";

interface HeroSectionProps {
  title: string;
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

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, children }) => {
  return (
    <>
      <Tabs />
      <HeroSectionWrapper>
        <WindowHeaderComponent />
        {title && <h1>{title}</h1>}
        <Container>
        {description && <p>{description}</p>}
          {children}
        </Container>
      </HeroSectionWrapper>
    </>
  );
};

export default HeroSection;
