import React, { useState, useEffect } from "react";
import Shape from "../../assets/shape.png?url";
import {
  Content,
  Header,
  Loader,
  LoadingWindowWrapper,
  WindowButtons,
} from "./LoadingWindow.styles";
import type { DotColorKey } from "../Dots/Dots";

const DEFAULT_DELAY = 5000;
const DEFAULT_SHAPE_SIZE = 35;

export interface LoadingWindowProps {
  onClose: () => void;
  isVisible: boolean;
  delay?: number;
  title?: string;
  headerColorKey?: DotColorKey;
  shapeSize?: number;
  showStar?: boolean;
  skipDelay?: boolean;
}

const LoadingWindow: React.FC<LoadingWindowProps> = ({
  onClose,
  isVisible,
  delay = DEFAULT_DELAY,
  title = "constant evolution",
  headerColorKey = "orange",
  shapeSize = DEFAULT_SHAPE_SIZE,
  showStar = true,
  skipDelay = false,
}) => {
  const [internalVisible, setInternalVisible] = useState(skipDelay);

  useEffect(() => {
    if (skipDelay) {
      setInternalVisible(true);
      return;
    }
    const timer = setTimeout(() => setInternalVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay, skipDelay]);

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

      <Header $colorKey={headerColorKey}>
        {title}
      </Header>

      <Content>
        {showStar && (
          <div className="star">
            <img
              src={Shape}
              width={shapeSize}
              height={shapeSize}
              alt="Shape decorativo"
            />
          </div>
        )}

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