import styled from "styled-components";

export const RetroComputerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 3px solid black;
  box-shadow: 6px 6px 0px black;
  width: 170px;
  z-index: 9;
  cursor: grab;
  user-select: none;
`;

export const Monitor = styled.div`
  width: 140px;
  height: 110px;
  background: #92ee96;
  border: 3px solid black;
  border-radius: 6px;
  position: relative;
  box-shadow: inset 0px 0px 8px rgba(255, 255, 255, 0.1);
  
`;

export const ScreenContent = styled.pre`
  color: #000;
  font-family: monospace;
  font-size: 12.5px;
  padding: 4px;
  white-space: pre-wrap;
  font-family: "Pixelify Sans", sans-serif;
`;

export const Keyboard = styled.div`
  width: 125px;
  height: 55px;
  background: rgb(240, 240, 240);
  border: 2px solid black;
  border-radius: 6px;
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  padding: 1px;
`;

export const Key = styled.div`
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1.7px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: black;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
`;

export const keys = "QWERTYUIOPASDFGHJKLZXCVB".split("");
