import styled from "styled-components";

export const DisplayCardWrapper = styled.div`
  width: 280px;
  max-height: 400px;
  background: ${({ theme }) => theme.colors.white};
  border: 2.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 422px) {
    box-shadow: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.borderColor};
  }
`;

export const Header = styled.div`
  min-height: 34px;
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
   
  @media (max-width: 422px) {
    padding: 6px;
  }
`;

export const ImageWrapper = styled.div`
    position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 12px;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: "Pixelify Sans", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
  font-weight: 200;
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

export const TechTag = styled.span<{ color: string }>`
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-size: 11px;
  border-radius: 8px;
  background: ${({ color }) => color};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 422px) {
    font-size: 10px;
    padding: 4px 7px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const ImageSkeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160px;
  border-radius: 6px;
  background: ${({ theme }) =>
    theme.colors.darkMode
      ? "linear-gradient(90deg, #e0e0e0 25%, #f4f4f4 50%, #e0e0e0 75%)"
      : "linear-gradient(90deg, #777 25%, #666 50%, #555 75%)"};
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
