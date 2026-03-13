import React from "react";
import { DotsContainer, Dot } from "./Dots.styles";
import type { DefaultTheme } from "styled-components";

export type DotColorKey = keyof DefaultTheme["colors"];
export type DotSize = "sm" | "md" | "lg";

const DOT_SIZES: Record<DotSize, number> = {
  sm: 8,
  md: 12,
  lg: 16,
};

const DEFAULT_COLOR_KEYS: DotColorKey[] = ["pink", "orange", "lime"];

export interface DotsProps {
  colorKeys?: DotColorKey[];
  size?: DotSize;
}

const Dots: React.FC<DotsProps> = ({
  colorKeys = DEFAULT_COLOR_KEYS,
  size = "md",
}) => {
  const sizePx = DOT_SIZES[size];

  return (
    <DotsContainer>
      {colorKeys.map((colorKey, index) => (
        <Dot key={index} $colorKey={colorKey} $size={sizePx} />
      ))}
    </DotsContainer>
  );
};

export default Dots;