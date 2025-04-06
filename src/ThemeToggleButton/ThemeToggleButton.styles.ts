import styled from 'styled-components';

export const ContainerToggle = styled.div`
  position: absolute;
  top: 1.8rem;
  z-index: 9999;
  right: 26rem;

  @media (max-width: 1250px) {
  top: 9.5rem;
  right: 7rem;
  }

  @media (max-width: 795px) {
    top: 3.5rem;
    right: 4rem
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.borderColor};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 100px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Pixelify Sans", sans-serif;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-2px);
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.borderColor};
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
  }
`;