import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 160px;
  height: 137px;
  background: #ffffff;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px;
  position: absolute;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid black;
  cursor: grab;
  user-select: none;
`;

export const HeaderTitle = styled.span`

`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 1px solid #000;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
  justify-items: center;
`;

export const SkillIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 2px 2px 0px black;
  border: 1px solid #000;
  position: relative;
  font-size: 24px;
  color: #000;
  
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;