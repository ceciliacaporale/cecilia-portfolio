import React, { type RefObject } from "react";
import { SkillsWrapper, Header, Title, SkillsGrid, SkillIcon, HeaderTitle, DotsContainer, Dot, dotColors } from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; 
import { SiStyledcomponents, SiTypescript, SiStrapi, SiStorybook } from "react-icons/si";
import Favorite from "./../../assets/favorite.png?url"

const skillColors = [
  "#EFD81E", 
  "#5ED3F3", 
  "#7CB804",
  "#2F74BF",
  "#E35A01",
  "#0191D4", 
  "#CE5FA7",
  "#8C75F7",
  "#F74681",
  "#FFF98D",
];

const skills = [
  { icon: <FaJs />, name: "JavaScript", favorite: true },
  { icon: <FaReact />, name: "React", favorite: true },
  { icon: <FaNodeJs />, name: "Node.js", favorite: false },
  { icon: <SiTypescript />, name: "TypeScript", favorite: true },
  { icon: <FaHtml5 />, name: "HTML", favorite: false },
  { icon: <FaCss3Alt />, name: "CSS", favorite: false },
  { icon: <SiStyledcomponents />, name: "Styled Components", favorite: false },
  { icon: <SiStrapi />, name: "Strapi", favorite: true },
  { icon: <SiStorybook />, name: "Storybook", favorite: false },
  { icon: <FaGitAlt />, name: "Git", favorite: false },
];

interface SkillsProps {
  containerRef: RefObject<HTMLDivElement>;
}

const Skills = ({ containerRef }: SkillsProps) => {
  const { position, handleMouseDown } = useDraggable(150, 350, containerRef, -50, 50); 

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
        {skills.map((skill, index) => (
          <SkillIcon key={index} title={skill.name} color={skillColors[index]}>
            {skill.icon}
            {skill.favorite && (
              <img
                src={Favorite}
                alt="Favorite"
                width="20px"
                height="20px"
                style={{ position: "absolute", top: "-8px", right: "-10px" }}
              />
            )}
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;