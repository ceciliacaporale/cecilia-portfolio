import React, { useState } from "react";
import useDraggable from "../../hooks/useDraggable";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import { WindowInfoWrapper, Header, Content, Cursor, IconRow } from "./WindowInfo.styles";
import CoffeeCup from "./CoffeeCup";
import PixelHeart from "./PixelHeart";
import Star from "./../../assets/web.png?url";
import { useLanguage } from "../../LanguageWrapper";
import { WINDOW_INFO_TEXT } from "../../i18n/translations";

const TypedText: React.FC<{ lines: string[]; speed: number }> = ({ lines, speed }) => {
  const displayed = useTypingAnimation(lines, speed);
  const parts = displayed.split("\n");

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {part}
        </React.Fragment>
      ))}
      <Cursor>_</Cursor>
    </>
  );
};

interface WindowInfoProps {
  title?: string;
  text?: string;
  showStar?: boolean;
  width?: number;
  height?: number;
  headerColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  initialPosition?: { x: number; y: number };
  isDraggable?: boolean;
}

const DEFAULT_POSITION = { x: 190, y: 640 };
const DEFAULT_SIZE = { width: 150, height: 100 };

const WindowInfo: React.FC<WindowInfoProps> = ({
  title,
  text,
  showStar = true,
  width = DEFAULT_SIZE.width,
  height = DEFAULT_SIZE.height,
  headerColor,
  backgroundColor,
  borderColor,
  containerRef,
  initialPosition = DEFAULT_POSITION,
  isDraggable = true
}) => {
  const { language } = useLanguage();
  const resolvedText = text ?? WINDOW_INFO_TEXT[language];
  const { position, handleMouseDown, zIndex } = useDraggable(
    initialPosition.x,
    initialPosition.y,
    containerRef as React.RefObject<HTMLDivElement> | undefined,
    DEFAULT_SIZE.width,
    DEFAULT_SIZE.height,
  );

  const currentYear = new Date().getFullYear();
  const [typingKey, setTypingKey] = useState(0);

   return (
    <WindowInfoWrapper
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      style={
        isDraggable
          ? {
              left: `${position.x}px`,
              top: `${position.y}px`,
              position: "absolute",
              zIndex
            }
          : { position: "relative" }
      }
      role="dialog"
      aria-labelledby="window-info-header"
      onMouseDown={(e) => {
        setTypingKey((key) => key + 1);
        if (isDraggable) handleMouseDown(e);
      }}
    >
      <Header
        id="window-info-header"
        $headerColor={headerColor}
        $borderColor={borderColor}
      >
        {title}
      </Header>

      <Content>
        <p>
          <TypedText key={typingKey} lines={[`© ${currentYear}`, resolvedText]} speed={40} />
        </p>

        {showStar && (
          <div className="star-decoration">
            <img
              src={Star}
              alt="Decorative star"
              width="25"
              height="25"
              draggable="false"
            />
          </div>
        )}

        <IconRow>
          <PixelHeart />
          <CoffeeCup />
        </IconRow>
      </Content>
    </WindowInfoWrapper>
  );
};

export default WindowInfo;