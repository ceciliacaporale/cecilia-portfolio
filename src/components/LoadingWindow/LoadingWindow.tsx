import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Shape from "../../assets/shape.png?url";
import { Content, Header, Loader, LoadingWindowWrapper, WindowButtons } from "./LoadingWindow.styles";

interface LoadingWindowProps {
  onClose: () => void;
  delay?: number;
}

const DEFAULT_DELAY = 5000; 
const SHAPE_SIZE = 35;

const LoadingWindow: React.FC<LoadingWindowProps> = ({ 
  onClose, 
  delay = DEFAULT_DELAY 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <LoadingWindowWrapper>
      <WindowButtons>
        <button 
          className="close" 
          onClick={onClose}
          aria-label="Fechar janela"
        >
          ✕
        </button>
      </WindowButtons>
      
      <Header className="draggable-header">
        constant evolution
      </Header>
      
      <Content>
        <div className="star">
          <img 
            src={Shape} 
            width={SHAPE_SIZE} 
            height={SHAPE_SIZE}
            alt="Decoração estrela"
          />
        </div>
        
        <Loader>
          <div className="container">
            {[...Array(3)].map((_, i) => (
              <div key={`box-${i}`} className="box" />
            ))}
          </div>
        </Loader>
      </Content>
    </LoadingWindowWrapper>
  );
};

export default LoadingWindow;