import styled from 'styled-components';


export const Tab = styled.div`
  padding: 2px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  position: relative;
  font-family: "Pixelify Sans", sans-serif;
  background: ${({ color }) => color};
  border: 1px solid #000;

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
  @media (max-width: 1250px) {
    padding: 3px 19px;
  }
  
  @media (max-width: 652px) {
    padding: 10px 22px!important;
    background-color: red; //resolver depois 
   }


`;

export const TabsContainer = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;
  display: flex;
  transition: transform 0.2s ease-in-out;
  left: 5rem;

  @media (max-width: 652px) {
    top: -100px!important; //resolver
  }
  
  @media (max-width: 1250px) {
   top: -8px;
   left: 3.8rem;
  }


  :hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;


