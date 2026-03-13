import React, { useEffect, useState } from "react";
import {
  MemoryStorageWrapper,
  Header,
  HeaderTitle,
  StorageInfo,
  ProgressBar,
  BarSegment,
  Legend,
  LegendItem,
  ColorBox,
} from "./MemoryStorage.styles";
import useDraggable from "../../hooks/useDraggable";
import Dots from "../Dots";
import { DEFAULT_CATEGORIES, type StorageCategory } from "../../data/memoryStorageData";

const INITIAL_X = 350;
const INITIAL_Y = 380;
const WIDTH = 455;
const HEIGHT = 127;

export interface MemoryStorageProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  title?: string;
  storageLabel?: string;
  storageFreeText?: string;
  categories?: StorageCategory[];
  loadingDelay?: number;
}

const MemoryStorage: React.FC<MemoryStorageProps> = ({
  containerRef,
  isDraggable = true,
  title = "s t o r a g e",
  storageLabel = "Ceci HD",
  storageFreeText = "0.02 GB free of 24 GB",
  categories = DEFAULT_CATEGORIES,
  loadingDelay = 2000,
}) => {
  const [loading, setLoading] = useState(true);

  const { position, handleMouseDown, zIndex } = useDraggable(
    INITIAL_X,
    INITIAL_Y,
    containerRef as React.RefObject<HTMLDivElement> | undefined,
    WIDTH,
    HEIGHT
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loadingDelay);
    return () => clearTimeout(timer);
  }, [loadingDelay]);

  return (
    <MemoryStorageWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
      onMouseDown={isDraggable ? handleMouseDown : undefined}
    >
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Dots />
      </Header>

      <StorageInfo>
        <span>{storageLabel}</span>
        <span>{storageFreeText}</span>
      </StorageInfo>

      <ProgressBar>
        {categories.map((item) => (
          <BarSegment
            key={item.name}
            $colorKey={item.colorKey}
            $width={loading ? "0%" : item.percent}
          />
        ))}
      </ProgressBar>

      <Legend>
        {categories.map((item) => (
          <LegendItem key={item.name}>
            <ColorBox $colorKey={item.colorKey} />
            <span>{item.name}</span>
          </LegendItem>
        ))}
      </Legend>
    </MemoryStorageWrapper>
  );
};

export default MemoryStorage;