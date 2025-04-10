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
  "  nome: 'Cecília',",
  "  idade: 24,",
  "  local: 'Minas Gerais',",
  "  area: 'Front-end',",
  "};",
];

const RetroComputer: React.FC<{ containerRef?: React.RefObject<HTMLDivElement | null> }> = ({ containerRef }) => {
  const { position, handleMouseDown, zIndex } = useDraggable(INITIAL_X, INITIAL_Y, containerRef as RefObject<HTMLDivElement>, WIDTH, HEIGHT);  

  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  const fullText = perfil.join("\n");

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <RetroComputerWrapper
      style={{
        left: position.x,
        top: position.y,
        position: "absolute", 
        zIndex,
      }}
      onMouseDown={handleMouseDown}
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