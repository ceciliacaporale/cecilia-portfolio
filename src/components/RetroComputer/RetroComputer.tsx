import React, { type RefObject } from "react";
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
const WIDTH = 180;
const HEIGHT = 210;

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
        <ScreenContent>
          {perfil.map((linha, index) => (
            <React.Fragment key={index}>
              {linha} <br />
            </React.Fragment>
          ))}
        </ScreenContent>
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
