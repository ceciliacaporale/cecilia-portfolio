import styled from 'styled-components';

export const ContainerToggle = styled.div`
  position: fixed;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 999;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 100px;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.pink};
    transform: translateY(-2px);
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.borderColor};
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 1px 1px 0px ${({ theme }) => theme.colors.borderColor};
  }

  @media (max-width: 606px) {
    padding: 0.3rem 0.55rem;
    font-size: 0.62rem;
    gap: 0.25rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Dropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 150px;
  padding: 0.4rem;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 14px;
  box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.borderColor};

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(-6px)')};
  transform-origin: top right;
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
`;

export const Option = styled.button<{ $active: boolean; $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme, $active }) => ($active ? theme.colors.keyActive : 'transparent')};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 10px;
  padding: 0.4rem 0.55rem;
  cursor: pointer;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  text-align: left;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.keyActive};
  }
`;

export const OptionDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const OptionCheck = styled.span`
  margin-left: auto;
  font-size: 0.7rem;
`;
