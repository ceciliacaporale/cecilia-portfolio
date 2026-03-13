import React from 'react';
import { useTheme } from '../../ThemeWrapper';
import { ContainerToggle, ToggleButton } from "./ThemeToggleButton.styles";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export interface ThemeToggleButtonProps {
  activeTheme?: 'light' | 'dark';
  onToggle?: () => void;
  iconSize?: number;
}

const ThemeToggleButton = ({ 
  activeTheme, 
  onToggle, 
  iconSize = 20
}: ThemeToggleButtonProps) => {
  
  const themeContext = useTheme();

  const currentTheme = activeTheme || themeContext?.theme || 'light';
  
  const handleToggle = onToggle || themeContext?.toggleTheme;

  return (
    <ContainerToggle>
     <ToggleButton 
       onClick={handleToggle}
       aria-label={`Ativar modo ${currentTheme === 'light' ? 'escuro' : 'claro'}`}
       title={`Ativar modo ${currentTheme === 'light' ? 'escuro' : 'claro'}`}
     >
      {currentTheme === 'light' ? (
        <IoMoonOutline size={iconSize} color="#000" />
      ) : (
        <IoSunnyOutline size={iconSize} color="#000" />
      )}
    </ToggleButton>
    </ContainerToggle>
  );
};

export default ThemeToggleButton;