import styled from "styled-components";

const COLORS = {
  background: "#ffffff",
  header: "#fff",
  border: "#000000",
};

export const DisplayCardWrapper = styled.div`
  width: 300px;
  height: auto;
  background: ${COLORS.background};
  border-radius: 10px;
  position: relative;
  z-index: 9999;
  border: 2px solid ${COLORS.border};
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Header = styled.div`
  height: 30px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.header};
  border-bottom: 2px solid ${COLORS.border};
  padding: 0 10px;
  gap: 5px;
  background-color: #FDF28D;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  
  p, h2 {
    padding: 12px 12px 0 12px;
  }

  img {
    object-fit: cover;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`;

export const Dot = styled.div<{ color: string }>`
  width: 11px;
  height: 11px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 1px solid #000;
`;

export const TechTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  justify-content: center;
  margin: 12px 0 12px 0;
`;

export const TechTag = styled.span`
  background-color: #fff;
  color: #000;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid #000;
  box-shadow: 2px 2px 0 0 #000;

  &:hover {
    background-color: #FE87A4;
  }
`;
