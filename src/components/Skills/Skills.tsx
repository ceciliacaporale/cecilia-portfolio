import React from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { SkillsWrapper, Header, Content, SmileWrapper } from "./Skills.styles";
import Cursor from "../../assets/cursor.png?url";

interface SkillsProps {
  title?: string;
}

const Skills: React.FC<SkillsProps> = ({ title }) => {
  const { position, handleMouseDown } = useDraggable(window.innerWidth - 380, 290);

  return (
    <SkillsWrapper style={{ left: position.x, top: position.y }}>
       <SmileWrapper>
        <img src={Cursor} alt="Smile" width="24" height="24" />
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
