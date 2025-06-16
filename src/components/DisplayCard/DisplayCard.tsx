import React, { useState } from "react";
import {
  DisplayCardWrapper,
  Header,
  Content,
  TechTagsContainer,
  TechTag,
  ImageWrapper,
  ImageSkeleton,
  Title,
  Description,
} from "./DisplayCard.styles";
import { useTheme } from "styled-components";
import Dots from "@components/Dots";

interface DisplayCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  technologies?: string[];
  link?: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  title,
  description,
  imageSrc,
  technologies = [],
  link
}) => {
  const theme = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const techColors = [
    theme.colors.pink,
    theme.colors.orange,
    theme.colors.lime,
    theme.colors.blue,
    theme.colors.purple,
    theme.colors.yellow,
  ];

  return (
    <DisplayCardWrapper role="region" aria-label={`Projeto: ${title}`}>
      <Header>
        <Dots />
      </Header>
      <Content>
        {imageSrc && (
          <a href={link} target="_blank">
            <ImageWrapper>
              <img
                src={imageSrc}
                alt={`Imagem do projeto ${title}`}
                loading="lazy"
                onLoad={() => setIsImageLoaded(true)}
                onError={() => setIsImageLoaded(true)} 
                style={{
                  opacity: isImageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {!isImageLoaded && <ImageSkeleton />}
            </ImageWrapper>
          </a>
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>

        {technologies.length > 0 && (
          <TechTagsContainer>
            {technologies.map((tech, index) => (
              <TechTag
                key={index}
                color={techColors[index % techColors.length]}
              >
                {tech}
              </TechTag>
            ))}
          </TechTagsContainer>
        )}
      </Content>
    </DisplayCardWrapper>
  );
};

export default DisplayCard;
