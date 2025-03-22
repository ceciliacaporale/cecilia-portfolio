import styled from "styled-components";

export const RetroComputerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:rgb(255, 255, 255);
  padding: 12px;
  border-radius: 10px;
  border: 3px solid black;
  box-shadow: 6px 6px 0px black;
  width: 170px;
  z-index: 9;

`;

export const Monitor = styled.div`
  width: 140px;
  height: 110px;
  background: #92EE96;
  border: 3px solid black;
  border-radius: 6px;
  position: relative;
  box-shadow: inset 0px 0px 8px rgba(255, 255, 255, 0.1);

  /* .star {
    position: absolute;
    right: -15px;
    top: 3rem;
  } */
`;

export const ScreenContent = styled.div`
  color: #000;
  font-family: monospace;
  font-size: 11px;
  padding: 4px;
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
  background: rgb(255, 255, 255);
  border: 1.7px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: black;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
`;

export const keys = "QWERTYUIOPASDFGHJKLZXCVB".split("");
