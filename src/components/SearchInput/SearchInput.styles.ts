import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  font-family: "Pixelify Sans", sans-serif;
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export const TagsWrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TagItem = styled.button<{ $active: boolean }>`
  padding: 3px 6px;
  font-size: 11px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.white};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.black};
  box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.borderColor};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
