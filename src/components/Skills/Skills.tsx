import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { SkillsWrapper, Header, Content, SmileWrapper } from "./Skills.styles";
import Hastag from "../../assets/hastag.png?url";

interface SkillsProps {
  title?: string;
  containerRef?: React.RefObject<HTMLDivElement>; 
  
}

const Skills: React.FC<SkillsProps> = ({ title, containerRef }) => {
  const { position, handleMouseDown } = useDraggable(1000, 380, containerRef, 200, 250);

  return (
    <SkillsWrapper style={{
      left: position.x,
      top: position.y,
      position: "absolute", 
    }}>
       <SmileWrapper>
        <img src={Hastag} alt="Smile" width="24" height="24" />
      </SmileWrapper>
    
      <Header onMouseDown={handleMouseDown}>
        {'skills'}
      </Header>
      <Content>
      <div className="card__tags">
    <ul className="tag">
      <li className="tag__name">JS</li>
      <li className="tag__name">react.js</li>
      <li className="tag__name">sass</li>
      <li className="tag__name">typeScript</li>
      <li className="tag__name">next</li>
      <li className="tag__name">storybook</li>
      <li className="tag__name">astro</li>
      <li className="tag__name">styledComponents</li>
      <li className="tag__name">css</li>
      <li className="tag__name">strapi</li>
      <li className="tag__name">figma</li>
      <li className="tag__name">illustrator</li>
    </ul>
    </div> 
      </Content>
    </SkillsWrapper>
  );
};

export default Skills;
