import React, { type RefObject } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  Tooltip,  
} from "./SoftwareSkills.styles";
import useDraggable from "../../hooks/useDraggable";
import { 
  SiAdobeillustrator, 
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import { useTheme } from "styled-components";
import Dots from "@components/Dots";
import { FaDocker } from "react-icons/fa";

const softwares = [
  { icon: <SiGithub />, name: "GitHub"},
  { icon: <FiFigma />, name: "Figma"},
  { icon: <SiOpenai />, name: "OpenAI"},
  { icon: <FaDocker />, name: "Docker"},
  { icon: <SiAdobeillustrator />, name: "Illustrator"},
  { icon: <VscAzure />, name: "Azure"},
];

interface SoftwareSkillsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
}

const SoftwareSkills = ({ containerRef, isDraggable = true }: SoftwareSkillsProps) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    900,
    380,
    containerRef as RefObject<HTMLDivElement>,
    160,
    140
  ); 
  const theme = useTheme();

  const tooltipColorKeys: (keyof typeof theme.colors)[] = [
    "blue", 
    "pink", 
    "orange", 
    "yellow",
    "lime",
    "pink10"
  ];

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
        {softwares.map((software, index) => (
          <SkillIcon key={index} aria-label={software.name}>
            {software.icon}
            <Tooltip $colorKey={tooltipColorKeys[index]}>
              {software.name}
            </Tooltip>
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SoftwareSkills;
