import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "green" : "blue")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "black" : "white")};
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    background: ${({ primary }) => (primary ? "blue" : "green")};
  }
`;
