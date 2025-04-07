import React, { useState, type RefObject } from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { 
  FolderClosed, 
  FolderOpen, 
  FolderTab, 
  FolderWrapper, 
  Paper, 
  Tooltip 
} from "./Folder.styles";
import StarPink from "../../assets/starpink.png?url"; 

interface FolderProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const Folder: React.FC<FolderProps> = ({ containerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { position, handleMouseDown, zIndex } = useDraggable(1130, 400, containerRef as RefObject<HTMLDivElement>, 100, 70);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <a href="/files" aria-label="Página de arquivos">
    <FolderWrapper
      onMouseDown={handleMouseDown}
      style={{
        left: position.x,
        top: position.y,
        position: "absolute",
        zIndex 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tooltip className={isOpen ? "visible" : ""}>
        Arquivos
      </Tooltip>
      <div className="star-pink">
        <img src={StarPink} width={30} height={30} alt="Shape de um brilho rosa"/>
      </div>
      <FolderTab />
      {isOpen ? <FolderOpen /> : <FolderClosed />}
      <Paper style={{ transform: isOpen ? "translateY(-5px)" : "translateY(20px)", opacity: isOpen ? 1 : 0 }} />
    </FolderWrapper>
      </a> 
  );
};

export default Folder;
