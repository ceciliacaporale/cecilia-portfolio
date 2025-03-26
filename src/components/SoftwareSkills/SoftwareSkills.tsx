import React, { type RefObject } from "react";
import { 
  SkillsWrapper, 
  Header, 
  SkillsGrid, 
  SkillIcon, 
  HeaderTitle, 
  DotsContainer, 
  Dot,  
} from "./SoftwareSkills.styles";
import useDraggable from "../../hooks/useDraggable";
import { 
  SiVisualstudiocode, 
  SiFigma, 
  SiAdobeillustrator, 
  SiMiro, 
  SiNotion, 
  SiGithub 
} from "react-icons/si";
import { dotColors } from "../Skills/Skills.styles";

const softwares = [
  { icon: <SiVisualstudiocode />, name: "VS Code"},
  { icon: <SiFigma />, name: "Figma"},
  { icon: <SiAdobeillustrator />, name: "Illustrator"},
  { icon: <SiMiro />, name: "Miro"},
  { icon: <SiNotion />, name: "Notion"},
  { icon: <SiGithub />, name: "GitHub"},
];

interface SoftwareSkillsProps {
  containerRef: RefObject<HTMLDivElement>;
}

const SoftwareSkills = ({ containerRef }: SoftwareSkillsProps) => {
  const { position, handleMouseDown, zIndex } = useDraggable(900, 380, containerRef, 160, 145); 

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
          <SkillIcon key={index}  aria-label={software.name}>
            {software.icon}
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SoftwareSkills;
