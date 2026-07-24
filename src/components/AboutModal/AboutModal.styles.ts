import styled from 'styled-components';

export const Backdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, visibility 0.2s;
`;

export const Window = styled.div<{ $open: boolean }>`
  width: 300px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 12px;
  overflow: hidden;
  transform: ${({ $open }) => ($open ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(10px)')};
  transition: transform 0.2s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.yellow};
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.borderColor};
  line-height: 1;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Body = styled.div`
  padding: 1.4rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  font-family: "Pixelify Sans", sans-serif;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  object-fit: cover;
  object-position: top center;
`;

export const Name = styled.h2`
  font-size: 1.05rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const SpecsList = styled.dl`
  width: 100%;
  margin: 0.4rem 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.4rem 0.75rem;
  font-size: 0.78rem;

  dt {
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.55;
    text-align: right;
    white-space: nowrap;
  }

  dd {
    margin: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }
`;
