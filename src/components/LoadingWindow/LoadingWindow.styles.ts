import styled, { keyframes } from "styled-components";

const COLORS = {
  gradient: `linear-gradient(to bottom,
    rgb(199, 255, 108) 0%,
    rgb(105, 177, 22) 17%,
    rgb(60, 221, 233) 32%,
    #869ef3 45%,
    rgb(70, 245, 186) 59%,
    rgb(72, 249, 255) 100%)`
};

const loadAnimation = keyframes`
  0% { transform: translateX(-30px); }
  100% { transform: translateX(150px); }
`;

export const LoadingWindowWrapper = styled.div`
  width: 200px;
  height: 85px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  position: absolute;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  z-index: 999;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  height: 25px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};;
  font-size: 14px;
  user-select: none;
  font-family: "Pixelify Sans", sans-serif;
  text-transform: lowercase;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  position: relative;

  .star {
    position: absolute;
    top: -16px;
    left: -10px;
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.borderColor});
  }
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding: 5px;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 1;

  .close {
    font-size: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.borderColor};
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 180px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    padding: 2px 1px;
    background: rgba(0, 0, 0, 0.05);
  }

  .box {
    width: 10px;
    height: 100%;
    background: ${COLORS.gradient};
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    margin-right: 2px;
    animation: ${loadAnimation} 2s infinite linear;
  }
`;