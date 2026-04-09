import React, { type RefObject, useState, useRef, useEffect } from "react";
import {
  SkillsWrapper,
  Header,
  SkillsGrid,
  SkillIcon,
  HeaderTitle,
  Tooltip,
  DragTooltip,
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

  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (!isDraggable) return;
    setShowTooltip(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <SkillsWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
    >
      <DragTooltip $visible={showTooltip}>click to drag</DragTooltip>

      <Header
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={(e) => {
          setShowTooltip(false);
          if (isDraggable) handleMouseDown(e);
        }}
      >
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