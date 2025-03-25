import styled from "styled-components";

export const FolderWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 70px;
  cursor: pointer;
  right: -30rem;
  user-select: none;

  .star-pink {
    position: absolute;
    z-index: 9999;
    top: 7px;
    right: -0.4rem;
  }
`;

export const FolderClosed = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FAC95F;
  border: 3px solid black;
  z-index: 999;
  border-radius: 8px;
  position: absolute;
  transition: transform 0.3s ease-in-out;
`;

export const FolderTab = styled.div`
  width: 53%;
  height: 20px;
  background-color: #FAC95F;
  border: 3px solid black;
  border-radius: 6px;
  position: absolute;
  top: -8px;
  left: 5px;
`;

export const FolderOpen = styled(FolderClosed)`
  transform: rotateX(30deg);
  background-color: #FAC95F;
`;

export const Paper = styled.div`
  width: 65px;
  height: 53px;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  position: absolute;
  bottom: 15px;
  left: 18px;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const Tooltip = styled.span<{ bgColor: string }>`
  position: absolute;
  transform: translateX(-50%);
  background: ${({ bgColor }) => bgColor};
  color: black;
  left: 50%;
  bottom: 4.6rem;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  
  &.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;
