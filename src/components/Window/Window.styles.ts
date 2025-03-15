import styled from "styled-components";

export const WindowWrapper = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100px;
  left: 100px;
`;

export const Header = styled.div`
  background: #222;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 20px;
  color: black;
`;
