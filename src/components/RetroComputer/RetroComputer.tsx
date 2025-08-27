import React, { useEffect, useState, type RefObject } from "react";
import { 
  RetroComputerWrapper, 
  Monitor, 
  ScreenContent, 
  Keyboard, 
  Key, 
  keys 
} from "./RetroComputer.styles";
import useDraggable from "../../hooks/useDraggable"; 

const INITIAL_X = 105;
const INITIAL_Y = 400;
const WIDTH = 176;
const HEIGHT = 208;

const perfil = [
  "const perfil = {",
  "  name: 'Cecília',",
  "  age: 25,",
  "  location: 'Brazil',",
  "  area: 'Front-end',",
  "};",
];

type RetroComputerProps = {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
};

const RetroComputer: React.FC<RetroComputerProps> = ({
  containerRef,
  isDraggable = true,
}) => {
  const { position, handleMouseDown, zIndex } = useDraggable(
    INITIAL_X,
    INITIAL_Y,
    containerRef as RefObject<HTMLDivElement>,
    WIDTH,
    HEIGHT
  );

  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  const fullText = perfil.join("\n");

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <RetroComputerWrapper
      style={
        isDraggable
          ? {
              left: position.x,
              top: position.y,
              position: "absolute",
              zIndex,
            }
          : {
              position: "relative", 
            }
      }
      onMouseDown={isDraggable ? handleMouseDown : undefined}
    >
      <Monitor>
        <ScreenContent>{displayedText}</ScreenContent>
      </Monitor>

      <Keyboard>
        {keys.map((key) => (
          <Key key={key}>{key}</Key>
        ))}
      </Keyboard>
    </RetroComputerWrapper>
  );
};

export default RetroComputer;