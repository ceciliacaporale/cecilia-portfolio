import styled from "styled-components";

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 16px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  width: 100%;
  padding: 8px 0 32px;
`;

export const EmptyState = styled.p`
  width: 100%;
  opacity: 0.7;
  padding: 24px 0;
`;
