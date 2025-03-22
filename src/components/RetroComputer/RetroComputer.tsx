import React from "react";
import { RetroComputerWrapper, Monitor, ScreenContent, Keyboard, Key, keys } from "./RetroComputer.styles";
// import Star from "./../../assets/staryellow.png?url";

const RetroComputer = () => {

    const perfil = [
        "const perfil = {",
        "  nome: 'Cecília',",
        "  idade: 14,",
        "  local: 'Minas Gerais',",
        "  area: 'Front-end',",
        "};",
      ];
      
    return (
      <RetroComputerWrapper>
        <Monitor>
        {/* <div className="star">
          <img src={Star} alt="star" width="30" height="30" />
        </div> */}
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
  