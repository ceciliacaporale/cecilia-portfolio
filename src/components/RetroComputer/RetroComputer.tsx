import React, { type RefObject, useState, useRef, useEffect } from "react";
import {
  RetroComputerWrapper,
  Monitor,
  ScreenContent,
  Keyboard,
  Key,
  Tooltip,
} from "./RetroComputer.styles";
import { DEFAULT_PROFILE_LINES, KEYBOARD_KEYS } from "../../data/retroComputerData";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import useDraggable from "../../hooks/useDraggable";

const INITIAL_X = 105;
const INITIAL_Y = 400;
const WIDTH = 176;
const HEIGHT = 208;

export interface RetroComputerProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  lines?: string[];
  typingSpeed?: number;
}

const RetroComputer: React.FC<RetroComputerProps> = ({
  containerRef,
  isDraggable = true,
  lines = DEFAULT_PROFILE_LINES,
  typingSpeed = 60,
}) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    INITIAL_X,
    INITIAL_Y,
    containerRef as RefObject<HTMLDivElement>,
    WIDTH,
    HEIGHT
  );

  const displayedText = useTypingAnimation(lines, typingSpeed);

  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isGlitching, setIsGlitching] = useState(false);
  const [activeKeyIndex, setActiveKeyIndex] = useState<number | null>(null);

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

  const handleScreenClick = () => {
    if (isGlitching) return;
    setIsGlitching(true);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let ghostTimeout: ReturnType<typeof setTimeout>;

    const ghostInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * KEYBOARD_KEYS.length);
      setActiveKeyIndex(randomIndex);
      ghostTimeout = setTimeout(() => setActiveKeyIndex(null), 220);
    }, 650 + Math.random() * 500);

    return () => {
      clearInterval(ghostInterval);
      clearTimeout(ghostTimeout);
    };
  }, []);

  return (
    <RetroComputerWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={(e) => {
        setShowTooltip(false);
        if (isDraggable) handleMouseDown(e);
      }}
    >
      <Tooltip $visible={showTooltip}>click to drag</Tooltip>

      <Monitor
        $glitching={isGlitching}
        onClick={handleScreenClick}
        onAnimationEnd={() => setIsGlitching(false)}
      >
        <ScreenContent>{displayedText}</ScreenContent>
      </Monitor>

      <Keyboard>
        {KEYBOARD_KEYS.map((key, index) => (
          <Key key={key} $active={activeKeyIndex === index}>
            {key}
          </Key>
        ))}
      </Keyboard>
    </RetroComputerWrapper>
  );
};

export default RetroComputer;