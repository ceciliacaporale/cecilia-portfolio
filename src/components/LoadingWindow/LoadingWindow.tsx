import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Shape from "../../assets/shape.png?url";
import { Content, Header, Loader, LoadingWindowWrapper, WindowButtons } from "./LoadingWindow.styles";

interface LoadingWindowProps {
  onClose: () => void;
  onOpen: () => void;
  isVisible: boolean;
  delay?: number;
}

const DEFAULT_DELAY = 5000; 
const SHAPE_SIZE = 35;

const LoadingWindow: React.FC<LoadingWindowProps> = ({ 
  onClose, 
  onOpen,
  isVisible,
  delay = DEFAULT_DELAY 
}) => {
  const [internalVisible, setInternalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible || !internalVisible) return null;

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
            alt="Shape de uma estrela"
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