import React from "react";
import { ButtonWrapper, ContainerImg } from "./ProjectsButton.style";
import Smile from "./../../assets/smileface.svg?url";

const ProjetosButton = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <><ButtonWrapper onClick={handleClick}>
      Projetos
    </ButtonWrapper>
    <ContainerImg>
        <img src={Smile} alt="Smile" width="95" height="95" />
    </ContainerImg>
    </>
  );
};

export default ProjetosButton;