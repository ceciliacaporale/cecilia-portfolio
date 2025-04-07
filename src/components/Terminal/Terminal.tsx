import React, { useEffect, useState } from "react";
import {
  TerminalWrapper,
  Header,
  Dot,
  TerminalContent,
  Cursor,
} from "./Terminal.styles";
import Star from "./../../assets/staryellow.png?url"
import useDraggable from "../../hooks/useDraggable"; 
import { useTheme } from "styled-components";

interface TerminalProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const messages = [
    "$ initializing...",
    "✔ carregando habilidades...",
    "✔ renderizando projetos...",
    "✔ conectando criatividade e código...",
    "✔ pronto! explore meu portfólio :)",
    "..."
  ];
  
  const Terminal: React.FC<TerminalProps> = ({ containerRef }) => {
    const { position, handleMouseDown, zIndex } = useDraggable(
      410,
      530,
      containerRef as React.RefObject<HTMLDivElement> | undefined,
      366,
      210
    );
    const [displayedText, setDisplayedText] = useState<string>("");
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const theme = useTheme();
  
    useEffect(() => {
      if (messageIndex >= messages.length) return;
    
      const currentMessage = messages[messageIndex];
      
      const timeout = setTimeout(() => {
        if (charIndex < currentMessage.length) {
          setDisplayedText((prev) => prev + currentMessage[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setDisplayedText((prev) => prev + "\n");
          setMessageIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, 50);
    
      return () => clearTimeout(timeout);
    }, [charIndex, messageIndex]);
    
    return (
        <>
        <TerminalWrapper 
           style={{
            left: position.x,
            top: position.y,
            position: "absolute", 
            zIndex,
          }}>
                <Header onMouseDown={handleMouseDown}>
                    <Dot color={theme.colors.pink} />
                    <Dot color={theme.colors.orange} />
                    <Dot color={theme.colors.lime} />
                </Header>
                <TerminalContent>
                    {displayedText}
                    <Cursor>|</Cursor>
                </TerminalContent>
                <div className="star">
                  <img src={Star} alt="Imagem de uma estrela" width="40" height="40" />
                </div>
            </TerminalWrapper></>
    );
  };
  
  export default Terminal;
  