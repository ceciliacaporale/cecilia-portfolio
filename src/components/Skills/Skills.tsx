import React, { type RefObject, useMemo } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  DotsContainer, 
  Dot, 
  dotColors, 
  Tooltip
} from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { skillData } from "./skillsData";
import Favorite from "../../assets/favorite.png?url";
import { useTheme } from "styled-components";

interface SkillsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ containerRef }) => {
  const theme = useTheme();

  const { position, handleMouseDown, zIndex } = useDraggable(830, 550, containerRef as RefObject<HTMLDivElement>, 358, 168);

  const skillColors = useMemo(() => {
    const baseColors = [theme.colors.yellow, theme.colors.blue, theme.colors.lime, theme.colors.pink, theme.colors.orange, theme.colors.purple, theme.colors.pink10];
    return skillData.map((_, i) => baseColors[i % baseColors.length]);
  }, [theme]);

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
            <Tooltip>{skill.name}</Tooltip>
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
