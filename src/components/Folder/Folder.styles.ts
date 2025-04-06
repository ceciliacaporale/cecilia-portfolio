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
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FolderClosed = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  z-index: 999;
  border-radius: 8px;
  position: absolute;
  transition: transform 0.3s ease-in-out;
`;

export const FolderTab = styled.div`
  width: 53%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: 3px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  position: absolute;
  top: -8px;
  left: 5px;
`;

export const FolderOpen = styled(FolderClosed)`
  transform: rotateX(30deg);
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const Paper = styled.div`
  width: 65px;
  height: 53px;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 4px;
  position: absolute;
  bottom: 15px;
  left: 18px;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const Tooltip = styled.span`
  position: absolute;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.lime};
  color: ${({ theme }) => theme.colors.borderColor};
  left: 50%;
  bottom: 4.8rem;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  font-family: "Pixelify Sans", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
  
  &.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;
