import React from "react";
import {
  DisplayCardWrapper,
  Header,
  Content,
  DotsContainer,
  Dot,
  TechTagsContainer,
  TechTag,
  ImageWrapper,
  Title,
  Description,
} from "./DisplayCard.styles";
import { useTheme } from "styled-components";

interface DisplayCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  technologies?: string[];
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  title,
  description,
  imageSrc,
  technologies = [],
}) => {
  const theme = useTheme();
  const dotColorKeys: (keyof typeof theme.colors)[] = ["pink", "orange", "lime"];

  return (
    <DisplayCardWrapper role="region" aria-label={`Projeto: ${title}`}>
      <Header>
        <DotsContainer>
          {dotColorKeys.map((color, index) => (
            <Dot key={index} color={typeof theme.colors[color] === "string" ? theme.colors[color] : ""} />
          ))}
        </DotsContainer>
      </Header>

      <Content>
        {imageSrc && (
          <ImageWrapper>
            <img src={imageSrc} alt={`Imagem do projeto ${title}`} />
          </ImageWrapper>
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>

        {technologies.length > 0 && (
          <TechTagsContainer>
            {technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechTagsContainer>
        )}
      </Content>
    </DisplayCardWrapper>
  );
};

export default DisplayCard;
