import React, { type RefObject, useMemo } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  Tooltip
} from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { skillData } from "./skillsData";
import Favorite from "../../assets/favorite.png?url";
import { useTheme } from "styled-components";
import Dots from "@components/Dots";

interface SkillsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ containerRef, isDraggable = true }) => {
  const theme = useTheme();

  const { position, handleMouseDown, zIndex } = useDraggable(
    830, 
    550, 
    containerRef as RefObject<HTMLDivElement>, 
    358, 
    168
  );

  const skillColors = useMemo(() => {
    const baseColors = [theme.colors.yellow, theme.colors.blue, theme.colors.lime, theme.colors.pink, theme.colors.orange, theme.colors.purple, theme.colors.pink10];
    return skillData.map((_, i) => baseColors[i % baseColors.length]);
  }, [theme]);

  const dotColorKeys: (keyof typeof theme.colors)[] = ['pink', 'orange', 'lime'];

  return (
    <SkillsWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
      onMouseDown={isDraggable ? handleMouseDown : undefined}
    >
      <Header>
        <HeaderTitle />
        <Dots />
      </Header>
      
      <SkillsGrid>
        {skillData.map((skill, index) => (
          <SkillIcon key={skill.name} title={skill.name} color={skillColors[index]}>
            {skill.icon}
            {skill.favorite && <img src={Favorite} alt="Favorito" width="20" height="20" className="favorite-icon" />}
            <Tooltip>{skill.name}</Tooltip>
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
