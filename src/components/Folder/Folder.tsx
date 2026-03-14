import React, { useState, type RefObject } from "react";
import useDraggable from "../../hooks/useDraggable";
import {
  FolderClosed,
  FolderOpen,
  FolderTab,
  FolderWrapper,
  Paper,
  Tooltip,
} from "./Folder.styles";
import StarPink from "../../assets/starpink.png?url";

export interface FolderProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  href?: string;
  tooltipText?: string;
  showStar?: boolean;
  standalone?: boolean;
}

const Folder: React.FC<FolderProps> = ({
  containerRef,
  isDraggable = true,
  href = "/files",
  tooltipText = "Arquivos",
  showStar = true,
  standalone = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { position, handleMouseDown, zIndex } = useDraggable(
    1130, 400,
    containerRef as RefObject<HTMLDivElement>,
    100, 70
  );

  return (
    <a href={href} aria-label={tooltipText}>
      <FolderWrapper
        $standalone={standalone}
        onMouseDown={isDraggable ? handleMouseDown : undefined}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={
          isDraggable
            ? { left: position.x, top: position.y, position: "absolute", zIndex }
            : undefined
        }
      >
        <Tooltip className={isOpen ? "visible" : ""}>
          {tooltipText}
        </Tooltip>

        {showStar && (
          <div className="star-pink">
            <img src={StarPink} width={30} height={30} alt="Shape de um brilho rosa" />
          </div>
        )}

        <FolderTab />
        {isOpen ? <FolderOpen /> : <FolderClosed />}
        <Paper style={{ transform: isOpen ? "translateY(-5px)" : "translateY(20px)", opacity: isOpen ? 1 : 0 }} />
      </FolderWrapper>
    </a>
  );
};

export default Folder;