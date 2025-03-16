import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  width: 350px;
  height: 110px;
  background: white;
  border-radius: 10px;
  position: absolute;
  box-shadow: 10px 10px 0 #000000;
  top: 360px;
  left: 150px;
  translate: -6px -6px;
  border: 2px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  transition: all 0.3s ease; //add animação de transitionnnnn
`;

export const Header = styled.div`
  height: 35px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 20px;
  color: black;
`;
