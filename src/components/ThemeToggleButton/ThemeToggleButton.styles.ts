import styled from 'styled-components';

export const ContainerToggle = styled.div`
  position: absolute;
  z-index: 999;
`;

export const ToggleButton = styled.button`
  display: flex;
  background: ${({ theme }) => theme.colors.pink};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 100px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Pixelify Sans", sans-serif;

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