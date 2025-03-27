import React, { useMemo } from "react";
import { Skills, SkillsMobileWrapper } from "./SkillsMobile.style";
import { skillData } from "../Skills/skillsData";

const SkillsMobile = () => {
  const skillColors = useMemo(() => {
    const baseColors = ["#FFF98D", "#57C0C3", "#92EE96", "#ED83A2", "#FAC951", "#8C75F7", "#ED83A2"];
    return skillData.map((_, i) => baseColors[i % baseColors.length]);
  }, []);

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
