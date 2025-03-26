import styled from 'styled-components';

const COLORS = {
    pink: "#FE87A4",
    teal: "#1CBFC1",
    green: "#94EE9C",
};

export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;

  .close-tab {
    margin-left: 10px;
    font-size: 9px;
    color: #000;
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: rgb(107, 105, 105);
    }
  }

  &:nth-child(1) {
    background: ${COLORS.pink};
  }

  &:nth-child(2) {
    background: ${COLORS.teal};
  }

  &:nth-child(3) {
    background: ${COLORS.green};
  }
`;

export const TabsContainer = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;
  display: flex;
  transition: transform 0.2s ease-in-out;
  left: 5rem;

  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;


