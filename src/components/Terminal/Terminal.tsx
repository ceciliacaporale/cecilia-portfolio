import React, { useEffect, useState, useRef } from "react";
import {
  TerminalWrapper,
  Header,
  TerminalContent,
  Cursor,
  Tooltip, 
} from "./Terminal.styles";
import Star from "./../../assets/staryellow.png?url";
import useDraggable from "../../hooks/useDraggable";
import { useTheme } from "styled-components";
import Dots from "../Dots/Dots";
import { useLanguage } from "../../LanguageWrapper";
import { TERMINAL_MESSAGES } from "../../i18n/translations";

interface TerminalProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isDraggable?: boolean;
  messages?: string[];
  typingSpeed?: number;
  showStar?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
  containerRef,
  isDraggable = true,
  messages,
  typingSpeed = 50,
  showStar = true,
}) => {
  const { language } = useLanguage();
  const resolvedMessages = messages ?? TERMINAL_MESSAGES[language];
  const { position, handleMouseDown, zIndex } = useDraggable(
    410,
    530,
    containerRef as React.RefObject<HTMLDivElement> | undefined,
    366,
    210
  );

  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const theme = useTheme();

  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (!isDraggable) return;
    
    setShowTooltip(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (messageIndex >= resolvedMessages.length) return;

    const currentMessage = resolvedMessages[messageIndex];

    const timeout = setTimeout(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayedText((prev) => prev + "\n");
        setMessageIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex, resolvedMessages, typingSpeed]);

  useEffect(() => {
    setDisplayedText("");
    setMessageIndex(0);
    setCharIndex(0);
  }, [resolvedMessages]);

  return (
    <TerminalWrapper
      style={
        isDraggable
          ? { left: position.x, top: position.y, position: "absolute", zIndex }
          : { position: "relative" }
      }
    >
      <Tooltip $visible={showTooltip}>click to drag</Tooltip>

      <Header 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={(e) => {
          setShowTooltip(false); 
          if (isDraggable) handleMouseDown(e);
        }}
      >
        <Dots />
      </Header>

      <TerminalContent>
        {displayedText}
        <Cursor>|</Cursor>
      </TerminalContent>

      {showStar && (
        <div className="star">
          <img
            src={Star}
            alt="Star icon"
            width="40"
            height="40"
          />
        </div>
      )}
    </TerminalWrapper>
  );
};

export default Terminal;