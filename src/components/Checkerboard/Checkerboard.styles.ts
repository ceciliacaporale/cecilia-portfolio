import styled from "styled-components";

export const CheckerboardWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: 
    linear-gradient(45deg, black 25%, white 25%, white 50%, black 50%, black 75%, white 75%, white) 0 0 / 20px 20px;
  border: 2px solid black;
  border-radius: 10px;
  position: fixed;
  z-index: 1;
  user-select: none;
  cursor: grab;
`;