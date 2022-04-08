import React from "react";
import {
  Nav,
  Container,
  Logo,
  MobileIcon,
  Menu,
  Item,
  NavLink,
  NavBtn,
  BtnLink,
} from "./Navbar.styles";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Container>
          <Logo to="/">Relax</Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <NavLink to="about">About</NavLink>
            </Item>
            <Item>
              <NavLink to="discover">Discover</NavLink>
            </Item>
            <Item>
              <NavLink to="relax">Into Forest</NavLink>
            </Item>
            <Item>
              <NavLink to="join">Join</NavLink>
            </Item>
          </Menu>
          <NavBtn>
            <BtnLink to="signin">Sign In</BtnLink>
          </NavBtn>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
