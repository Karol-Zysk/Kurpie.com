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

const Sidebar = () => {
  return (
    <Container>
      <Icon>
        <CloseIcon />
      </Icon>
      <Wraper>
        <Menu>
          <SidebarLink to="about">About</SidebarLink>
        </Menu>
        <Menu>
          <SidebarLink to="discover">Discover</SidebarLink>
        </Menu>
        <Menu>
          <SidebarLink to="relax">Into Forest</SidebarLink>
        </Menu>
        <Menu>
          <SidebarLink to="join">Join</SidebarLink>
        </Menu>
        <BtnWrapper>
          <Btn to="/signin">Sign In</Btn>
        </BtnWrapper>
      </Wraper>
    </Container>
  );
};

export default Sidebar;
