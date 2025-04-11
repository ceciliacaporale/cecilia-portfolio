import React from "react";
import HeroSection from "../../components/HeroSection";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import { ContainerMaintenance } from "./About.styles";
import ThemeWrapper from "../../ThemeWrapper";

const AboutMePage: React.FC = () => {
  
  return (
    <>
     <ThemeWrapper>
    <ResponsiveLayout>
        <HeroSection  titleStrings={["Sobre mim", "About me", "Sobre mí"]} description="Minha jornada na tecnologia começou quando ingressei na faculdade. Foi ali que me redescobri e percebi que desenvolver interfaces ia muito além de escrever código – era sobre dar vida a ideias, criar experiências e transformar a forma como as pessoas interagem com o digital.

A criatividade sempre esteve presente na minha vida, e no desenvolvimento front-end encontrei o equilíbrio perfeito entre lógica e expressão visual. Amo explorar novas tecnologias, aprender e experimentar maneiras inovadoras de construir interfaces que sejam funcionais e bonitas ao mesmo tempo.

Além da programação, sou movida por novas experiências. Viajar me inspira, comida japonesa é minha paixão, e adoro me aventurar em desafios que me tiram da zona de conforto. Seja criando um design, codificando uma animação ou descobrindo um novo destino, estou sempre buscando algo que desperte minha curiosidade e criatividade." />
      <ContainerMaintenance>
      </ContainerMaintenance>
      </ResponsiveLayout>
    </ThemeWrapper>
    </>
  );
};

export default AboutMePage;