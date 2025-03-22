import styled from "styled-components";

export const MemoryStorageWrapper = styled.div`
  width: 450px;
  height: 119px;
  background: #ffff;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px 0px #000;
  position: relative;
  padding: 0 10px;
`;

export const Header = styled.div`
  text-align: center;
  font-family: "Pixelify Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 4px 8px;
  cursor: grab;
  user-select: none;
`;

export const HeaderTitle = styled.span`
  color: #000;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 50%;
  border: 1px solid black;
`;

export const dotColors = ["#FB44AC", "#FAC951", "#69EF84"];

export const StorageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #dcd6c8;
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  overflow: hidden;
  margin-top: 5px;
`;

export const BarSegment = styled.div<{ color: string; width: string }>`
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
`;

export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  margin-bottom: 6px;
  font-family: "Pixelify Sans", sans-serif;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  border-radius: 2px;
  border: 1.6px solid black;
`;

