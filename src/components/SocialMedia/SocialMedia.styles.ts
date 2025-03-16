import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  width: 235px;
  height: 70px;
  background: white;
  border-radius: 10px;
  position: absolute;
  box-shadow: 8px 8px 0 #ecaeef;
  top: 360px;
  left: 150px;
  translate: -6px -6px;
  border: 2px solid #000000;
  transition: all 0.3s ease, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translate(-2px, -2px);
  }
`;

export const Header = styled.div`
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
`;



export const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover span {
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #B4FCA8;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;

export const SmileWrapper = styled.div`
  position: absolute;
  top: -40px; 
  left: -48px; 
`;