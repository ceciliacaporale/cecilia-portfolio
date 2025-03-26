import styled from 'styled-components';


export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
  background: ${({ color }) => color};

  .close-tab {
    margin-left: 10px;
    font-size: 11px;
    color: #000;
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color:#fff;
      text-shadow: .01em .01em .01em #000;
    }
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


