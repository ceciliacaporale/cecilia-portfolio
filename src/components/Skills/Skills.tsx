import React, { type RefObject, useMemo } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  DotsContainer, 
  Dot, 
  dotColors 
} from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { skillData } from "./skillsData";
import Favorite from "../../assets/favorite.png?url";

interface SkillsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ containerRef }) => {

  const { position, handleMouseDown, zIndex } = useDraggable(830, 550, containerRef as RefObject<HTMLDivElement>, 358, 180);

  const skillColors = useMemo(() => {
    const baseColors = ["#FFF98D", "#57C0C3", "#92EE96", "#ED83A2", "#FAC951", "#8C75F7", "#F74681"];
    return skillData.map((_, i) => baseColors[i % baseColors.length]);
  }, []);

  return (
    <SkillsWrapper style={{ left: position.x, top: position.y, zIndex }}>
      <Header onMouseDown={handleMouseDown}>
        <HeaderTitle />
        <DotsContainer>
          {dotColors.map((color, index) => (
            <Dot key={index} color={color} />
          ))}
        </DotsContainer>
      </Header>
      
      <SkillsGrid>
        {skillData.map((skill, index) => (
          <SkillIcon key={skill.name} title={skill.name} color={skillColors[index]}>
            {skill.icon}
            {skill.favorite && <img src={Favorite} alt="Favorite" width="20" height="20" className="favorite-icon" />}
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
