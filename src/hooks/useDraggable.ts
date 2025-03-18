import { useState, useEffect } from "react";

const useDraggable = (
  initialX: number,
  initialY: number,
  containerRef?: React.RefObject<HTMLDivElement>
) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef?.current) return;

    setIsDragging(true);

    const container = containerRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - (container.left + position.x),
      y: e.clientY - (container.top + position.y),
    });

    e.preventDefault(); // Evita comportamento inesperado ao arrastar
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef?.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const minX = 0;
    const maxX = container.width - 200; // Considera a largura do WindowInfo
    const minY = 0;
    const maxY = container.height - 80; // Considera a altura do WindowInfo

    let newX = e.clientX - container.left - offset.x;
    let newY = e.clientY - container.top - offset.y;

    newX = Math.min(Math.max(newX, minX), maxX);
    newY = Math.min(Math.max(newY, minY), maxY);

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return { position, handleMouseDown };
};

export default useDraggable;
