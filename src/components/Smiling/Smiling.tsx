import React, { useRef } from "react";
import { SmilingWrapper, Content } from "./Smiling.styles";
import Smile from "../../assets/smiling.png?url";
import useDraggable from "../../hooks/useDraggable";

interface SmilingProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Smiling: React.FC<SmilingProps> = ({ containerRef }) => {
  const smilingRef = useRef<HTMLDivElement>(null);
  const { position, handleMouseDown } = useDraggable(900, 500, containerRef, 235, 45);

  return (
    <SmilingWrapper
      ref={smilingRef}
      className="draggable"
      onMouseDown={handleMouseDown}
      style={{ left: position.x, top: position.y, position: "absolute" }}
    >
      <Content>
        {[...Array(7)].map((_, index) => (
          <img key={index} src={Smile} alt="Smile" width="26" height="26" />
        ))}
      </Content>
    </SmilingWrapper>
  );
};

export default Smiling;
