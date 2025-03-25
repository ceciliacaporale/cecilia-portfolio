import React from "react";
import { RetroComputerWrapper, Monitor, ScreenContent, Keyboard, Key, keys } from "./RetroComputer.styles";
import useDraggable from "../../hooks/useDraggable"; 

const RetroComputer = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
    const { position, handleMouseDown, zIndex } = useDraggable(105, 400, containerRef, 180, 210); 

    const perfil = [
        "const perfil = {",
        "  nome: 'Cecília',",
        "  idade: 24,",
        "  local: 'Minas Gerais',",
        "  area: 'Front-end',",
        "};",
    ];
      
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
