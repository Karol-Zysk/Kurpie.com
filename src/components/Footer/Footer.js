import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Container,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
} from "./Footer.styles.js";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Find Us </LinkTitle>
              <FLink to="/contact">Facebook</FLink>
              <FLink to="/contact">Tweeter</FLink>
              <FLink to="/contact">Instagram</FLink>
              <FLink to="/contact">YouTube</FLink>
              <FLink to="/contact">TikTok</FLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>More Info </LinkTitle>
              <FLink to="/contact">Kurpie Wiki</FLink>
              <FLink to="/contact">Kurpie Atlas</FLink>
              <FLink to="/contact">Kurpie Books</FLink>
              <FLink to="/contact">Palm Sunday</FLink>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Know Us </LinkTitle>
              <FLink to="/contact">Kurpie Food</FLink>
              <FLink to="/contact">Kurpie tradition</FLink>
              <FLink to="/contact">Folk Dancing</FLink>
              <FLink to="/contact">Cutouts</FLink>
              <FLink to="/contact">Folk Costumes</FLink>
              
            </LinkItems>
            <LinkItems>
              <LinkTitle>Find Us </LinkTitle>
              <FLink to="/contact">Recipes</FLink>
              <FLink to="/contact">"Rejbak"</FLink>
              <FLink to="/contact">Onion Water</FLink>
              <FLink to="/contact">Traditional Bread</FLink>
              
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kurpie
            </SocialLogo>
            <WebsiteRights>
              Kurpie © {new Date().getFullYear()} All Rights Reserved{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.google.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.google.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.google.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.google.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
};

export default Footer;
