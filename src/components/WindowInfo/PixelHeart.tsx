import React from "react";
import { useTheme } from "styled-components";
import { HeartGrid, HeartPixel } from "./PixelHeart.styles";

const CELL = 2;

// 5x5 pixel heart
const HEART_CELLS: [number, number][] = [
  [0, 1], [0, 3],
  [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
  [3, 1], [3, 2], [3, 3],
  [4, 2],
];

const PixelHeart: React.FC = () => {
  const theme = useTheme();

  const pixels = HEART_CELLS
    .map(([row, col]) => `${col * CELL}px ${row * CELL}px 0 ${theme.colors.pink}`)
    .join(", ");

  return (
    <HeartGrid role="img" aria-label="Coração pixelado">
      <HeartPixel style={{ boxShadow: pixels }} />
    </HeartGrid>
  );
};

export default PixelHeart;
