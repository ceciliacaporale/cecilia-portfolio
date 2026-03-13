import React, { type RefObject } from "react";
import {
  SkillsWrapper,
  Header,
  SkillsGrid,
  SkillIcon,
  Tooltip,
} from "./SoftwareSkills.styles";
import useDraggable from "../../hooks/useDraggable";
import Dots from "../Dots/Dots";
import { DEFAULT_SOFTWARES, type SoftwareItem } from "../../data/softwareSkillsData";

const INITIAL_X = 900;
const INITIAL_Y = 380;
const WIDTH = 160;
const HEIGHT = 140;

export interface SoftwareSkillsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  softwares?: SoftwareItem[];
}

const SoftwareSkills = ({
  containerRef,
  isDraggable = true,
  softwares = DEFAULT_SOFTWARES,
}: SoftwareSkillsProps) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    INITIAL_X,
    INITIAL_Y,
    containerRef as RefObject<HTMLDivElement>,
    WIDTH,
    HEIGHT
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
        <Dots />
      </Header>

      <SkillsGrid>
        {softwares.map((software) => {
          const Icon = software.icon;
          return (
            <SkillIcon key={software.name} aria-label={software.name}>
              <Icon />
              <Tooltip $colorKey={software.colorKey}>{software.name}</Tooltip>
            </SkillIcon>
          );
        })}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SoftwareSkills;