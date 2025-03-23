import React, { type RefObject } from "react";
import { SkillsWrapper, Header, SkillsGrid, SkillIcon, HeaderTitle, DotsContainer, Dot } from "./SoftwareSkills.styles";
import useDraggable from "../../hooks/useDraggable";
import { SiVisualstudiocode, SiFigma, SiAdobeillustrator, SiMiro, SiNotion, SiGithub } from "react-icons/si";
import { dotColors } from "../Skills/Skills.styles";

const softwares = [
  { icon: <SiVisualstudiocode />, name: "VS Code", favorite: true },
  { icon: <SiFigma />, name: "Figma", favorite: true },
  { icon: <SiAdobeillustrator />, name: "Illustrator", favorite: false },
  { icon: <SiMiro />, name: "Miro", favorite: false },
  { icon: <SiNotion />, name: "Notion", favorite: true },
  { icon: <SiGithub />, name: "GitHub", favorite: true },
];

interface SoftwareSkillsProps {
  containerRef: RefObject<HTMLDivElement>;
}

const SoftwareSkills = ({ containerRef }: SoftwareSkillsProps) => {
  const { position, handleMouseDown } = useDraggable(200, 400, containerRef, -50, 50); 

  return (
    <SkillsWrapper
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
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
          <SkillIcon key={index} title={software.name}>
            {software.icon}
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SoftwareSkills;