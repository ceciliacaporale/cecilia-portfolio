import React from "react";
import { DisplayCardWrapper, Header, Content, DotsContainer, Dot, TechTagsContainer, TechTag } from "./DisplayCard.styles";
import { useTheme } from "styled-components";

interface DisplayCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  technologies?: string[];
}

const DisplayCard: React.FC<DisplayCardProps> = ({ 
  title, 
  imageSrc,
  description,
  technologies = [],
}) => {

  const theme = useTheme();
  const dotColorKeys: (keyof typeof theme.colors)[] = ['pink', 'orange', 'lime'];

  return (
    <DisplayCardWrapper
      role="dialog"
      aria-labelledby="window-info-header"
    >
      <Header 
        id="window-info-header"
      >
        <DotsContainer>
          {dotColorKeys.map((color: string, index: React.Key | null | undefined) => (
            <Dot key={index} color={color} />
          ))}
         </DotsContainer>
      </Header>
      <Content>
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={title} 
            width="100%" 
            height="140px"
          />
        )}
      <h2>{title}</h2>
      <p>{description}</p>
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
