import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#1a4710" : "white")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "white" : "#010606")};
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  font-weight: bold;

  &:hover {
    transition: all 200ms ease-in-out;
    color: #1a4710;
    background: ${({ primary }) =>
      primary ? "rgba(255,255,255, 1)" : "#1a4710"};
    border: 2px solid #1a4710;
  }
`;
