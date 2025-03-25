import React, { useState } from "react";
import useDraggable from "../../hooks/useDraggable"; 
import { FolderClosed, FolderOpen, FolderTab, FolderWrapper, Paper, Tooltip } from "./Folder.styles";
import StarPink from "../../assets/starpink.png?url"; 

interface FolderProps {
  containerRef?: React.RefObject<HTMLDivElement>; 
}

const Folder: React.FC<FolderProps> = ({ containerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { position, handleMouseDown, zIndex } = useDraggable(1130, 400, containerRef, 100, 70);
  return (
    <FolderWrapper
      onMouseDown={handleMouseDown}
      style={{
        left: position.x,
        top: position.y,
        position: "absolute",
        zIndex 
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
    <Tooltip className={isOpen ? "visible" : ""} bgColor="#59C0C2">
        Arquivos
    </Tooltip>
        <div className="star-pink">
            <img src={StarPink} width={30} height={30} />
          </div>
      <FolderTab />
      {isOpen ? <FolderOpen /> : <FolderClosed />}
      <Paper style={{ transform: isOpen ? "translateY(-5px)" : "translateY(20px)", opacity: isOpen ? 1 : 0 }} />
    </FolderWrapper>
  );
};

export default Folder;
