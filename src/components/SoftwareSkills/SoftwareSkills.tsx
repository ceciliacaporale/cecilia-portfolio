import React, { type RefObject } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  DotsContainer, 
  Dot,
  Tooltip,  
} from "./SoftwareSkills.styles";
import useDraggable from "../../hooks/useDraggable";
import { 
  SiVisualstudiocode, 
  SiFigma, 
  SiAdobeillustrator, 
  SiMiro, 
  SiMicrosoftazure, 
  SiGithub 
} from "react-icons/si";
import { dotColors } from "../Skills/Skills.styles";

const tooltipColors = [
  "#1CBFC1", 
  "#FE87A4", 
  "#FAC95F", 
  "#FFF996",
  "#94EE9C",
  "#EA527F"
];

const softwares = [
  { icon: <SiVisualstudiocode />, name: "VS Code"},
  { icon: <SiFigma />, name: "Figma"},
  { icon: <SiAdobeillustrator />, name: "Illustrator"},
  { icon: <SiMiro />, name: "Miro"},
  { icon: <SiMicrosoftazure />, name: "Azure"},
  { icon: <SiGithub />, name: "GitHub"},
];

interface SoftwareSkillsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const SoftwareSkills = ({ containerRef }: SoftwareSkillsProps) => {
  const { position, handleMouseDown, zIndex } = useDraggable(900, 380, containerRef as RefObject<HTMLDivElement>, 160, 140); 

  return (
    <SkillsWrapper
      style={{
        left: position.x,
        top: position.y,
        position: "absolute", 
        zIndex,
      }}>
      <Header onMouseDown={handleMouseDown}>
        <HeaderTitle></HeaderTitle>
        <DotsContainer>
          {dotColors.map((color: string, index: React.Key | null | undefined) => (
            <Dot key={index} color={color} />
          ))}
        </DotsContainer>
      </Header>
      <SkillsGrid>
        {softwares.map((software, index) => (
          <SkillIcon key={index} aria-label={software.name}>
            {software.icon}
            <Tooltip bgColor={tooltipColors[index]}>{software.name}</Tooltip>
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SoftwareSkills;
