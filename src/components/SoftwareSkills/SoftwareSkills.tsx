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
  SiAdobeillustrator, 
  SiMiro, 
  SiGithub 
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import { useTheme } from "styled-components";

const softwares = [
  { icon: <DiVisualstudio />, name: "VS Code"},
  { icon: <FiFigma />, name: "Figma"},
  { icon: <SiAdobeillustrator />, name: "Illustrator"},
  { icon: <SiMiro />, name: "Miro"},
  { icon: <VscAzure />, name: "Azure"},
  { icon: <SiGithub />, name: "GitHub"},
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
        <DotsContainer>
          {dotColorKeys.map((colorKey, index) => (
            <Dot key={index} $colorKey={colorKey} />
          ))}
        </DotsContainer>
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
