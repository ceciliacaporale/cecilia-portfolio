import React, { useEffect, useState, useRef } from "react";
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
  Tooltip,
} from "./MemoryStorage.styles";
import useDraggable from "../../hooks/useDraggable";
import Dots from "../Dots";
import { DEFAULT_CATEGORIES, type StorageCategory } from "../../data/memoryStorageData";
import { useLanguage } from "../../LanguageWrapper";
import { MEMORY_STORAGE_TITLE, MEMORY_STORAGE_FREE_TEXT, MEMORY_CATEGORY_LABELS } from "../../i18n/translations";

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
  title,
  storageLabel = "Ceci HD",
  storageFreeText,
  categories = DEFAULT_CATEGORIES,
  loadingDelay = 2000,
}) => {
  const { language } = useLanguage();
  const resolvedTitle = title ?? MEMORY_STORAGE_TITLE[language];
  const resolvedFreeText = storageFreeText ?? MEMORY_STORAGE_FREE_TEXT[language];
  const [loading, setLoading] = useState(true);

  const { position, handleMouseDown, zIndex } = useDraggable(
    INITIAL_X,
    INITIAL_Y,
    containerRef as React.RefObject<HTMLDivElement> | undefined,
    WIDTH,
    HEIGHT
  );

  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (!isDraggable) return;
    setShowTooltip(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
    >
      <Tooltip $visible={showTooltip}>click to drag</Tooltip>

      <Header
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={(e) => {
          setShowTooltip(false);
          if (isDraggable) handleMouseDown(e);
        }}
      >
        <HeaderTitle>{resolvedTitle}</HeaderTitle>
        <Dots />
      </Header>

      <StorageInfo>
        <span>{storageLabel}</span>
        <span>{resolvedFreeText}</span>
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
            <span>{MEMORY_CATEGORY_LABELS[item.name]?.[language] ?? item.name}</span>
          </LegendItem>
        ))}
      </Legend>
    </MemoryStorageWrapper>
  );
};

export default MemoryStorage;