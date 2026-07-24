import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CupGrid, CupPixel, Steam, SteamWisp } from "./CoffeeCup.styles";

const CELL = 2;
const COFFEE_COLOR = "#C08552";
const FILL_STEP_MS = 550;

// 8x8 pixel grid, slender body (cols 0-5, handle cols 6-7)
const OUTLINE: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
  [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
  [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5],
];

const HANDLE: [number, number][] = [
  [2, 6], [2, 7], [3, 7], [4, 7], [5, 7], [5, 6],
];

const INTERIOR_ROWS = [1, 2, 3, 4, 5, 6];
const INTERIOR_COLS = [1, 2, 3, 4];
const MAX_FILL = INTERIOR_ROWS.length;

const CoffeeCup: React.FC = () => {
  const theme = useTheme();
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setFillLevel((level) => (level >= MAX_FILL ? 0 : level + 1));
    }, FILL_STEP_MS);

    return () => clearInterval(tick);
  }, []);

  const pixels: string[] = [];

  [...OUTLINE, ...HANDLE].forEach(([row, col]) => {
    pixels.push(`${col * CELL}px ${row * CELL}px 0 ${theme.colors.borderColor}`);
  });

  INTERIOR_ROWS.forEach((row) => {
    const isFilled = INTERIOR_ROWS.length - row < fillLevel;
    const color = isFilled ? COFFEE_COLOR : theme.colors.white;

    INTERIOR_COLS.forEach((col) => {
      pixels.push(`${col * CELL}px ${row * CELL}px 0 ${color}`);
    });
  });

  return (
    <CupGrid
      role="img"
      aria-label="Xícara de café pixelada enchendo"
      title="tic-tac, mais um café"
      onClick={() => setFillLevel(0)}
    >
      <CupPixel style={{ boxShadow: pixels.join(", ") }} />
      <Steam $active={fillLevel >= MAX_FILL - 2}>
        <SteamWisp $index={0} />
        <SteamWisp $index={1} />
        <SteamWisp $index={2} />
      </Steam>
    </CupGrid>
  );
};

export default CoffeeCup;
