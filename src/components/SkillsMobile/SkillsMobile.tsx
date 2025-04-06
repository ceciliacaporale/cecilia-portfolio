import React, { useMemo } from "react";
import { Skills, SkillsMobileWrapper } from "./SkillsMobile.style";
import { skillData } from "../Skills/skillsData";
import { useTheme } from "styled-components";

const SkillsMobile = () => {
  const theme = useTheme();

  const skillColors = useMemo(() => {
    const baseColors = [
      theme.colors.yellow,
      theme.colors.blue,
      theme.colors.lime,
      theme.colors.pink,
      theme.colors.orange,
      theme.colors.purple,
      theme.colors.pink,
    ];
    return skillData.map((_, i) => baseColors[i % baseColors.length]);
  }, [theme]);

  return (
    <SkillsMobileWrapper>
      {skillData.map((skill, index) => (
        <Skills key={skill.name} title={skill.name} color={skillColors[index]}>
          {skill.icon} {skill.name}
        </Skills>
      ))}
    </SkillsMobileWrapper>
  );
};

export default SkillsMobile;
