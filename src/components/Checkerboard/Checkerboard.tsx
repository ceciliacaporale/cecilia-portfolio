import React, { useRef } from "react";
import { CheckerboardWrapper } from "./Checkerboard.styles";
import useDraggable from "../../hooks/useDraggable";

const Checkerboard: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({ containerRef }) => {
  const { position, handleMouseDown } = useDraggable(50, 50, containerRef, 10, 10);

  return (
    <CheckerboardWrapper
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default Checkerboard;
