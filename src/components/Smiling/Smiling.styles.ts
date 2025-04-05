import styled from "styled-components";

export const SmilingWrapper = styled.div`
  width: 235px;
  height: 45px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 8px 8px 0 ${({ theme }) => theme.colors.black};
  position: relative;
  top: 350px;
  translate: -6px -6px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  z-index: 99999;
  user-select: none;
  cursor: grab;

  img {
    -webkit-user-drag: none;
    pointer-events: none; 
  }
  `;


export const Content = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
`;


