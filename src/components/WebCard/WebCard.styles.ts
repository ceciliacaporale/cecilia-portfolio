import styled from "styled-components";

export const WebCardWrapper = styled.div`
  width: 300px;
  height: 400px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.2s ease-in-out;
`;

export const Header = styled.div`
  height: 24px;
  border: 2px solid #000;
  margin: 3px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 6px 6px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0 10px;
  font-family: "Pixelify Sans", sans-serif;
  gap: 5px;
`;

export const Content = styled.div`
  border: 2px solid #000;
  border-radius: 0 0 6px 6px;
  margin: 3px;
  padding: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  height: 92%;
  box-sizing: border-box;
`;