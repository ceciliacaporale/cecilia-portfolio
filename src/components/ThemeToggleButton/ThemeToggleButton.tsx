import React from 'react';
import { useTheme } from '../../ThemeWrapper';
import { ContainerToggle, ToggleButton } from "./ThemeToggleButton.styles";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

// 1. Criamos a tipagem das props
export interface ThemeToggleButtonProps {
  /** Permite forçar o estado do tema (Excelente para testar no Storybook) */
  activeTheme?: 'light' | 'dark';
  /** Função de clique customizada. Se vazia, usa a do contexto. */
  onToggle?: () => void;
  /** Permite alterar o tamanho do ícone dinamicamente */
  iconSize?: number;
}

const ThemeToggleButton = ({ 
  activeTheme, 
  onToggle, 
  iconSize = 20 // Valor padrão caso não seja passado
}: ThemeToggleButtonProps) => {
  
  // 2. Puxamos o contexto original
  const themeContext = useTheme();

  // 3. A mágica da flexibilidade: 
  // Usa a prop 'activeTheme' se ela existir. Se não, usa o tema do contexto. Se falhar, padrão é 'light'.
  const currentTheme = activeTheme || themeContext?.theme || 'light';
  
  // Mesma lógica para a função de clique
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