import React, { useEffect, useState } from "react";
import { 
  MemoryStorageWrapper, 
  Header, 
  HeaderTitle, 
  DotsContainer, 
  Dot, 
  StorageInfo, 
  ProgressBar, 
  BarSegment, 
  Legend, 
  LegendItem, 
  ColorBox,
  dotColors
} from "./MemoryStorage.styles";

const categories = [
  { name: "code & tech", percent: "35%", color: "#FAC951" },
  { name: "coffe", percent: "25%", color: "#12BFC2" },
  { name: "travel & adventures", percent: "20%", color: "#FFF98D" },
  { name: "art & creativity", percent: "19%", color: "#FE87A4" }
];

const INITIAL_X = 350;
const INITIAL_Y = 380;
const WIDTH = 460;
const HEIGHT = 140;

const MemoryStorage: React.FC<{ containerRef?: React.RefObject<HTMLDivElement | null> }> = ({ containerRef }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MemoryStorageWrapper
      style={{ 
        left: INITIAL_X, 
        top: INITIAL_Y, 
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Header>
        <HeaderTitle>s t o r a g e</HeaderTitle>
        <DotsContainer>
          {dotColors.map((color, index) => (
            <Dot key={index} color={color} />
          ))}
        </DotsContainer>
      </Header>

      <StorageInfo>
        <span>Ceci HD</span>
        <span>0.02 GB free of 24 GB</span>
      </StorageInfo>

      <ProgressBar>
        {categories.map((item) => (
          <BarSegment
            key={item.name}
            color={item.color}
            width={loading ? "0%" : item.percent}
          />
        ))}
      </ProgressBar>

      <Legend>
        {categories.map((item) => (
          <LegendItem key={item.name}>
            <ColorBox color={item.color} />
            <span>{item.name}</span>
          </LegendItem>
        ))}
      </Legend>
    </MemoryStorageWrapper>
  );
};

export default MemoryStorage;
