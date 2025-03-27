import styled from "styled-components";

export const SkillsMobileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 999;
  justify-content: center;
`;

export const Skills = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px 8px;
  box-shadow: 2px 2px 0px black;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 5px;
`;
