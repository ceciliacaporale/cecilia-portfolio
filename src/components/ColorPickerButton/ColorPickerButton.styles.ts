import styled from 'styled-components';

export const ContainerToggle = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 99;
`;

export const ToggleButton = styled.button`
  display: flex;
  background: ${({ theme }) => theme.colors.blue};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 100px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Pixelify Sans", sans-serif;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-2px);
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.borderColor};
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
  }

  @media (max-width: 337px) {
    display: none;
  }
`;

export const Palette = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 18px;
  box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.borderColor};

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(-6px)')};
  transform-origin: top left;
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
`;

export const Swatch = styled.button<{ $color: string; $selected?: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ $color }) => $color};
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: ${({ $selected, theme }) =>
    $selected ? `0 0 0 2px ${theme.colors.white}, 0 0 0 4px ${theme.colors.black}` : 'none'};

  &:hover {
    transform: scale(1.25) translateY(-2px);
  }

  &:active {
    transform: scale(1.05);
  }
`;

export const ResetSwatch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  background: repeating-conic-gradient(
    ${({ theme }) => theme.colors.pink} 0deg 90deg,
    ${({ theme }) => theme.colors.lime} 90deg 180deg,
    ${({ theme }) => theme.colors.blue} 180deg 270deg,
    ${({ theme }) => theme.colors.orange} 270deg 360deg
  );
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.25) translateY(-2px);
  }

  &:active {
    transform: scale(1.05);
  }
`;
