import {useState} from "react";
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
  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }
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
        <HeroContent>
          <HeroH1>Into the Wild</HeroH1>
          <HeroP>
            Free Your Mind. Become One With Nature. Visit The Green Kurpie.
          </HeroP>
          <BtnWrapper>
            <Button onMouseEnter={onHover} onMouseLeave={onHover} to="signin">
              Come In {hover ? <ArrowForward /> : <ArrowRight />}
            </Button >
          </BtnWrapper>
        </HeroContent>
      </HeroBg>
    </Container>
  );
};
