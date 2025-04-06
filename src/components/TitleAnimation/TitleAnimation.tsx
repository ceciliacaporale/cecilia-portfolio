import React from "react";
import { TitleAnimationWrapper } from "./TitleAnimation.style";
import Typewriter from "typewriter-effect";

interface TitleAnimationProps {
  strings: string[];
}

const TitleAnimation: React.FC<TitleAnimationProps> =  ({ strings }) => {
  return (
    <TitleAnimationWrapper>
         <Typewriter
            options={{
              strings: strings,
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
