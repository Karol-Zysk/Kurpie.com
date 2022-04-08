import React from "react";
import {
  Icon,
  CloseIcon,
  Container,
  SidebarLink,
  Menu,
  Wraper,
  BtnWrapper,
  Btn,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon  />
      </Icon>
      <Wraper>
        <Menu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>

          <SidebarLink to="relax" onClick={toggle}>Into Forest</SidebarLink>

          <SidebarLink to="join" onClick={toggle}>Join</SidebarLink>
        </Menu>
        <BtnWrapper>
          <Btn to="/signin" onClick={toggle}>Sign In</Btn>
        </BtnWrapper>
      </Wraper>
    </Container>
  );
};

export default Sidebar;
