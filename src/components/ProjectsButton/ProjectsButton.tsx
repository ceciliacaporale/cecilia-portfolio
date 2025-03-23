import React from "react";
import { ButtonWrapper } from "./ProjectsButton.style";
import Smile from "./../../assets/smileface.svg?url";

const ProjetosButton = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <ButtonWrapper onClick={handleClick}>
        Projetos
        <div className="smile">
          <img src={Smile} alt="Smile" width="95" height="95" />
        </div>
    </ButtonWrapper>
  );
};

export default ProjetosButton;