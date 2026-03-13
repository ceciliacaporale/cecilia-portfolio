import React, { type RefObject } from "react";
import {
  RetroComputerWrapper,
  Monitor,
  ScreenContent,
  Keyboard,
  Key,
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

  return (
    <RetroComputerWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
      onMouseDown={isDraggable ? handleMouseDown : undefined}
    >
      <Monitor>
        <ScreenContent>{displayedText}</ScreenContent>
      </Monitor>

      <Keyboard>
        {KEYBOARD_KEYS.map((key) => (
          <Key key={key}>{key}</Key>
        ))}
      </Keyboard>
    </RetroComputerWrapper>
  );
};

export default RetroComputer;