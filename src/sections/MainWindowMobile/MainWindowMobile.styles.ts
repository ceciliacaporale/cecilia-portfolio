import styled from "styled-components";

export const MainWindowMobileWrapper = styled.div`
  width: 96%;
  height: 98%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  top: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  position: absolute;
  flex-direction: column;
  overflow: visible;
  z-index: 9;
`;

export const WindowHeader = styled.div`
  border-radius: 12px 12px 0 0;
  padding: 0 12px;
`;

export const ContainerComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: 372px) {
    gap: 0.5rem;
  }
`;


export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 1rem;
  span {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  .close {
    background: ${({ theme }) => theme.colors.pink10};
  }
  .minimize {
    background: ${({ theme }) => theme.colors.orange};
  }
  .maximize {
    background: ${({ theme }) => theme.colors.lime};
  }
`;

export const Container = styled.div`
  padding: 10px;

  .star-green {
    position: absolute;
    top: 20rem;
    right: 13rem;
    z-index: 9999;
  }

  .star-pink {
    position: absolute;
    top: 5rem;
    left: 13rem;
    z-index: 9999;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  
  p {
    font-size: 18px;
    text-align: center;
    padding: 10px;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSocialMedia = styled.div`
  margin-bottom: 2rem;
`