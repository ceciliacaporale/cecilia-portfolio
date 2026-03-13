import styled from "styled-components";

export const WindowInfoWrapper = styled.div<{
  $width?: number;
  $height?: number;
  $backgroundColor?: string;
  $borderColor?: string;
}>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;

  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.colors.white};

  border-radius: 10px;
  position: absolute;

  border: 2px solid
    ${({ $borderColor, theme }) => $borderColor || theme.colors.borderColor};

  box-shadow: 3px 3px 0px
    ${({ $borderColor, theme }) => $borderColor || theme.colors.borderColor};

  user-select: none;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Header = styled.div<{
  $headerColor?: string;
  $borderColor?: string;
}>`
  height: 24px;
  border-radius: 8px 8px 0 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: ${({ $headerColor, theme }) =>
    $headerColor || theme.colors.blue};

  border-bottom: 2px solid
    ${({ $borderColor, theme }) => $borderColor || theme.colors.borderColor};

  padding: 0 10px;
  font-family: "Pixelify Sans", sans-serif;
  cursor: grab;
  gap: 5px;

  &:active {
    cursor: grabbing;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  height: calc(100% - 24px);

  p {
    max-width: 117px;
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }

  .star-decoration {
    position: absolute;

    img {
      top: -30px;
      left: 110px;
      position: relative;

      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
