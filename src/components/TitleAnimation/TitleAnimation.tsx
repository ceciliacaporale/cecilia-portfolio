import React from "react";
import { TitleAnimationWrapper } from "./TitleAnimation.style";
import Typewriter from "typewriter-effect";

const TitleAnimation = () => {
  return (
    <TitleAnimationWrapper>
         <Typewriter
            options={{
              strings: ["Hello World!", "Olá Mundo!", "¡Hola Mundo!", "Ciao Mondo!"],
              autoStart: true,
              loop: true,
              delay: 75, 
              deleteSpeed: 190,
            }}
          />
    </TitleAnimationWrapper>
  );
};

export default TitleAnimation;
