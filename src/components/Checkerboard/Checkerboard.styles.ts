import styled from "styled-components";

export const CheckerboardWrapper = styled.div`
  width: 170px;
  height: 150px;
  background: 
    linear-gradient(45deg, black 25%, white 25%, white 50%, black 50%, black 75%, white 75%, white) 0 0 / 20px 20px;
  border: 2px solid black;
  border-radius: 10px;
  position: fixed;
  bottom: 14rem;
  left: 28rem;
  z-index: 1;
`;