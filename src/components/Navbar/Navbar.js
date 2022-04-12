import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Container>
          <Logo to="/" onClick={toggleHome}>
            Kurpie
          </Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Menu>
            <Item>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </Item>

            <Item>
              <NavLink
                to="culture"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Culture
              </NavLink>
            </Item>
            <Item>
              <NavLink
                to="forest"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Primeval Forest
              </NavLink>
            </Item>
            <Item>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
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
