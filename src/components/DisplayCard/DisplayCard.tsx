import React from "react";
import { DisplayCardWrapper, Header, Content, DotsContainer, Dot, TechTagsContainer, TechTag } from "./DisplayCard.styles";
import { dotColors } from "../Skills/Skills.styles";

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

  return (
    <DisplayCardWrapper
      role="dialog"
      aria-labelledby="window-info-header"
    >
      <Header 
        id="window-info-header"
      >
        <DotsContainer>
          {dotColors.map((color: string, index: React.Key | null | undefined) => (
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
      </Content>
      {technologies.length > 0 && (
        <TechTagsContainer>
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechTagsContainer>
      )}
    </DisplayCardWrapper>
  );
};

export default DisplayCard;
