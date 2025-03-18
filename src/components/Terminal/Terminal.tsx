import React, { useEffect, useState } from "react";
import {
  TerminalWrapper,
  Header,
  Dot,
  TerminalContent,
  Cursor,
} from "./Terminal.styles";
import Star from "./../../assets/staryellow.png?url"
// import Shine from "./../../assets/shineblue.png?url"

const messages = [
    "$ initializing...",
    "✔ carregando habilidades...",
    "✔ renderizando projetos...",
    "✔ conectando criatividade e código...",
    "✔ pronto! explore meu portfólio :)",
    "..."
  ];
  
  const Terminal: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
  
    useEffect(() => {
      if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
          setTimeout(() => {
            setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          }, 50);
        } else {
          setTimeout(() => {
            setDisplayedText((prev) => prev + "\n");
            setMessageIndex((prev) => prev + 1);
            setCharIndex(0);
          }, 500);
        }
      }
    }, [charIndex, messageIndex]);
  
    return (
        <>
        <TerminalWrapper>
                <Header>
                    <Dot color="#ED83A2" />
                    <Dot color="#FAC93E" />
                    <Dot color="#AFE90A" />
                </Header>
                <TerminalContent>
                    {displayedText}
                    <Cursor>|</Cursor>
                </TerminalContent>
                <div className="star">
                  <img src={Star} alt="Smile" width="40" height="40" />
                </div>
                {/* <div className="shine">
                  <img src={Shine} alt="Smile" width="40" height="40" />
                </div> */}
            </TerminalWrapper></>
    );
  };
  
  export default Terminal;
  