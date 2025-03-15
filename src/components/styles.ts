import styled from "styled-components";

// Definições globais de estilo
export const colors = {
  primary: "#222",
  background: "#f0f0f0",
  text: "#000",
};

// Um wrapper global para a tela toda
export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;