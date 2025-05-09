import styled from "styled-components";

export const SkillsMobileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 999;
  justify-content: center;

  @media (max-width: 450px) {
   display: none;
  } 
`;

export const Skills = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px 8px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  gap: 5px;
`;
