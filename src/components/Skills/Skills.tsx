import React, { type RefObject } from "react";
import {
  SkillsWrapper,
  Header,
  SkillsGrid,
  SkillIcon,
  HeaderTitle,
  Tooltip,
} from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { skillData, type SkillItem } from "../../data/skillsData";
import Favorite from "../../assets/favorite.png?url";
import Dots from "../Dots/Dots";

export interface SkillsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  skills?: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({
  containerRef,
  isDraggable = true,
  skills = skillData,
}) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    830,
    550,
    containerRef as RefObject<HTMLDivElement>,
    358,
    168
  );

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
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <SkillIcon key={skill.name} $colorKey={skill.colorKey}>
              <Icon />
              {skill.favorite && (
                <img src={Favorite} alt="Favorito" width="20" height="20" className="favorite-icon" />
              )}
              <Tooltip>{skill.name}</Tooltip>
            </SkillIcon>
          );
        })}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;