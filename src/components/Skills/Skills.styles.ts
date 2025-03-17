import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 190px;
  height: 238px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(219, 85, 85, 0.2);
  position: absolute;
  z-index: 99;
  border: 1px solid #000;
  box-shadow: 8px 8px 0 #7AEBC9;
`;

export const Header = styled.div`
  height: 20px;
  border-radius: 9px 9px 0 0;
  display: flex;
  align-items: center;
  background-color:#FF86A4; 
  border-bottom: 1px solid black;
  padding: 0 12px;
  position: relative;
  cursor: grab;
  font-family: "Pixelify Sans", sans-serif;
  justify-content: center;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const Content = styled.div`
  padding: 6px;
  color: black;

  .tag__name {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  background-color:rgb(39, 34, 36);
  padding: 3px 13px 5px;
  border-radius: 10px;
  margin: 6px 4px 4px 0;
  position: relative;
  text-transform: lowercase;
  transition: all 0.3s ease-in-out;
}

.tag__name:hover {
  transform: scale(1.1);
  background-color:rgb(221, 51, 122);
}
`;

export const SmileWrapper = styled.div`
  position: absolute;
  top: -7px; 
  right: 10px; 
  z-index: 9999;
`;