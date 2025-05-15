import React from "react";
import styled from "styled-components";
import Shape from "../../assets/shape.png?url";

const SHAPE_SIZE = 37;

const IconButton = styled.button`
  position: absolute;
  top: 18rem;
  left: 2.2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 998;
  transition: transform 0.2s ease-in-out;
  
  .star {
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.borderColor});
  }

  &:hover {
    transform: scale(1.1);
  }
`;

interface ToggleIconProps {
  onClick: () => void;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="Abrir janela de loading">
      <img 
        src={Shape} 
        width={SHAPE_SIZE} 
        height={SHAPE_SIZE}
        className="star"
        alt="Ícone para abrir janela"
      />
    </IconButton>
  );
};

export default ToggleIcon;