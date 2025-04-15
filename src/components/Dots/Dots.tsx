import React from "react";
import { DotsContainer, Dot } from "./Dots.styles";
import { useTheme } from "styled-components";

type DotsProps = {
  colorKeys?: (keyof ReturnType<typeof useTheme>['colors'])[];
};

const Dots: React.FC<DotsProps> = ({ colorKeys }) => {
  const theme = useTheme();
  const dotColorKeys = colorKeys ?? ['pink', 'orange', 'lime'];

  return (
    <DotsContainer>
      {dotColorKeys.map((colorKey, index) => (
        <Dot key={index} $colorKey={colorKey} />
      ))}
    </DotsContainer>
  );
};

export default Dots;
