import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
  0% { transform: translateX(-30px); }
  100% { transform: translateX(150px); }
`;

export const LoadingWindowWrapper = styled.div`
  width: 200px;
  height: 85px;
  background: white;
  border-radius: 10px;
  position: absolute;
  border: 1px solid #000;
  z-index: 999;
`;

export const Header = styled.div`
  height: 25px;
  background:#FAC93E;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-bottom: 1px solid #000;
  font-size: 14px;
   user-select: none;
   font-family: "Pixelify Sans", sans-serif;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  .star {
    position: absolute;
    top: -16px;
    left: -10px;
  }

  .spiral {
    position: absolute;
    top: 60px;
    right: -10px;
  }
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding: 5px;
  position: absolute;
  top: 5px;
  right: 10px;

  .close {
    font-size: 10px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    padding: 0px;
    transition: color 0.2s ease-in-out;
  }
`;

export const Loader = styled.div`
  .container {
    width: 180px;
    height: 18px;
    border: 1px solid #000;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    padding: 2px 1px;
  }

  .box {
    width: 10px;
    height: 100%;
    background: linear-gradient(to bottom,rgb(199, 255, 108) 0%,rgb(105, 177, 22) 17%,rgb(60, 221, 233) 32%, #869ef3 45%,rgb(70, 245, 186) 59%,rgb(72, 249, 255) 100%);
    display: inline-block;
    margin-right: 2px;
    animation: ${loadAnimation} 2s infinite linear;
  }
`;
