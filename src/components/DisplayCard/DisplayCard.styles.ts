import styled from "styled-components";

export const DisplayCardWrapper = styled.div`
  width: 280px;
  max-height: 400px;
  background: ${({ theme }) => theme.colors.white};
  border: 2.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 10px 10px 0px ${({ theme }) => theme.colors.borderColor};
  }
`;

export const Header = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: "Pixelify Sans", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px!important;
  color: ${({ theme }) => theme.colors.black};
`;

export const TechTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: auto;
`;

export const TechTag = styled.span`
  padding: 4px 8px;
  border: 1px solid #000;
  font-size: 11px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.borderColor};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.borderColor};
  transition: #000 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
  }
`;
