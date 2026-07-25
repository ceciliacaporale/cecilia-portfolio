import styled from "styled-components";

export const FileIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const FileShape = styled.div`
  position: relative;
  width: 72px;
  height: 88px;
  background: ${({ theme }) => theme.colors.white};
  border: 2.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.borderColor};
  padding: 10px 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FileTag = styled.span<{ $color: string }>`
  width: 18px;
  height: 6px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const FileLine = styled.span`
  display: block;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.keyActive};

  &:nth-of-type(1) {
    width: 100%;
  }
  &:nth-of-type(2) {
    width: 80%;
  }
  &:nth-of-type(3) {
    width: 60%;
  }
`;

export const FileLabel = styled.span`
  margin-top: 8px;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.2;
`;

export const FileMeta = styled.span`
  margin-top: 2px;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
`;
