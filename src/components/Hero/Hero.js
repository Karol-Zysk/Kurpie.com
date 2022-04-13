import { useState } from "react";
import {
  HeroBg,
  Container,
  VideoBg,
  BtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroH1,
  HeroP,
  HeroContent,
} from "./Hero.styles";
import Video from "../../video/Video.mp4";
import { Button } from "../Button";

export const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          author="Wideo (autor: Matthias Groeneveld) z Pexels"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover Kurpie</HeroH1>
        <HeroP>
          Get to know the Kurpie tradition, discover nature in the Kurpie
          Forest.
        </HeroP>
        <BtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="signin"
            primary="true"
            dark="true"
          >
            Come In {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </Container>
  );
};
