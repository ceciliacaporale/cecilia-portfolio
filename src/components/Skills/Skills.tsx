import React, { type RefObject } from "react";
import { SkillsWrapper, Header, Title, SkillsGrid, SkillIcon, HeaderTitle, DotsContainer, Dot, dotColors } from "./Skills.styles";
import useDraggable from "../../hooks/useDraggable";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; 
import { SiStyledcomponents, SiTypescript, SiStrapi, SiStorybook } from "react-icons/si";
import Favorite from "./../../assets/favorite.png?url"

const skillColors = [
  "#FFF98D", 
  "#57C0C3", 
  "#92EE96",
  "#ED83A2",
  "#FAC951",
  "#ED83A2", 
  "#FAC951",
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
  const { position, handleMouseDown } = useDraggable(890, 550, containerRef, 358, 180); 

  return (
    <SkillsWrapper
    style={{
      left: position.x,
      top: position.y,
      position: "absolute", 
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