import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#1a4710" : "transparent")};
  height: 10vh;
  margin-top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 800ms ease-in-out;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  cursor: pointer;
  height: 100%;
  transition: all 200ms ease-in-out;
  border-bottom: 3px solid transparent;

  &.active {
    border-bottom: 3px solid white;
    transition: all 200ms ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background-color: white;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background-color: #010606;
  }
`;
