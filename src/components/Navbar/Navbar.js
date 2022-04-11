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
          <Logo to="/">Kurpie</Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <NavLink to="about">About</NavLink>
            </Item>

            <Item>
              <NavLink to="culture">Culture</NavLink>
            </Item>
            <Item>
              <NavLink to="forest">Primeval Forest</NavLink>
            </Item>
            <Item>
              <NavLink to="discover">Discover</NavLink>
            </Item>
          </Menu>
          <NavBtn>
            <BtnLink to="contact">Contact</BtnLink>
          </NavBtn>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
