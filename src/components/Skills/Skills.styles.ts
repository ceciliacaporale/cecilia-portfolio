import styled from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 6px 6px 0px black;
  width: 350px;
  height: 160px;
  z-index: 9;
  position: absolute; 
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 16px;
  border-bottom: 1px solid black;
  padding-bottom: 4px;
  margin-bottom: 6px;
  cursor: grab;
  user-select: none;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const SkillIcon = styled.div<{ color: string }>`
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${(props) => props.color}; 
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 0px black;
  position: relative;

  svg {
    font-size: 32px;
  }

  &:hover {
    transform: scale(1.1);
  }

  .favorite-icon {
    position: absolute;
    top: -8px;
    right: -10px;
  }
`;

export const HeaderTitle = styled.span`
  color: #000;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 1px solid black;
`;

export const dotColors = ["#FB44AC", "#FAC951", "#69EF84"];
