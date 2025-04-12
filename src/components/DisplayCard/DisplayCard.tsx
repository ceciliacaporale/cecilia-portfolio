import React, { useState } from "react";
import {
  DisplayCardWrapper,
  Header,
  Content,
  DotsContainer,
  Dot,
  TechTagsContainer,
  TechTag,
  ImageWrapper,
  ImageSkeleton,
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
        <DotsContainer>
          {(["pink", "orange", "lime"] as Array<keyof typeof theme.colors>).map((color, index) => (
            <Dot
              key={index}
              color={typeof theme.colors[color] === "string" ? theme.colors[color] : ""}
            />
          ))}
        </DotsContainer>
      </Header>

      <Content>
        {imageSrc && (
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
