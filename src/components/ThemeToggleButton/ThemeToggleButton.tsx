import React from 'react';
import { useTheme } from '../../ThemeWrapper';
import {
  ContainerToggle,
  ToggleButton
} from "./ThemeToggleButton.styles";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ContainerToggle>
     <ToggleButton onClick={toggleTheme}
       aria-label={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`}
       title={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`}
       >
      {theme === 'light' ? (
        <>
          <IoMoonOutline size={20} />
        </>
      ) : (
        <>
          <IoSunnyOutline size={20} />
        </>
      )}
    </ToggleButton>
    </ContainerToggle>
  );
};

export default ThemeToggleButton;
