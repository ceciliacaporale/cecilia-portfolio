import { useState, useEffect } from "react";

const useDraggable = (
  initialX: number,
  initialY: number,
  containerRef?: React.RefObject<HTMLDivElement>,
  componentWidth: number = 190, // Default para o SkillsWrapper
  componentHeight: number = 238
) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
  
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setPosition({ x: initialX, y: initialY }); // Resetar para a posição inicial
      }, 1000); // Espera 1 segundo após parar de redimensionar
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [initialX, initialY]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    if (containerRef?.current) {
      const container = containerRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - (container.left + position.x),
        y: e.clientY - (container.top + position.y),
      });
    } else {
      setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef?.current) return;

    const container = containerRef.current.getBoundingClientRect();
    
    const minX = 0;
    const maxX = container.width - componentWidth;
    const minY = 0;
    const maxY = container.height - componentHeight;

    let newX = e.clientX - container.left - offset.x;
    let newY = e.clientY - container.top - offset.y;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const adjustPositionOnResize = () => {
      if (!containerRef?.current) return;
      const container = containerRef.current.getBoundingClientRect();

      setPosition((prev) => ({
        x: Math.max(0, Math.min(prev.x, container.width - componentWidth)),
        y: Math.max(0, Math.min(prev.y, container.height - componentHeight)),
      }));
    };

    window.addEventListener("resize", adjustPositionOnResize);
    return () => window.removeEventListener("resize", adjustPositionOnResize);
  }, [containerRef, componentWidth, componentHeight]);

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