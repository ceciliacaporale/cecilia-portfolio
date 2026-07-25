import styled from "styled-components";

export const ContainerMaintenance = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 32px;
  width: 100%;
  padding: 48px 0 40px;

  @media (max-width: 795px) {
    justify-content: center;
  }
`;

export const CategoryTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 160px;

  span {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    max-width: 150px;
  }

  p {
    font-size: 12px !important;
    text-align: center;
    max-width: 140px;
    opacity: 0.7;
    margin: 0 !important;
  }
`;

export const EmptyState = styled.p`
  width: 100%;
  text-align: center;
  opacity: 0.7;
  padding: 24px 0;
`;
