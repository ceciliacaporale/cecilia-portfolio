import styled from 'styled-components';


export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
  background: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  .close-tab {
    margin-left: 10px;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.borderColor};
    transition: color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }

  @media (max-width: 1250px) {
    padding: 3px 19px;
  }

  @media (max-width: 577px) {
    padding: 4.5px 13px;
    font-size: 12px;
  }
`;

export const TabsContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  transition: transform 0.2s ease-in-out;
  top: 30px;
  left: 80px;
  
  @media (max-width: 1250px) {
    top: -8px;
    left: 70px;
  }

  @media (max-width: 577px) {
   left: 40px;
  }

  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;


