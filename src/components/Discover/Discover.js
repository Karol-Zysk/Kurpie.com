import React from "react";
import {
  Container,
  Wrapper,
  Card,
  Image,
  DiscoverH2,
  DiscoverH1,
  DiscoverP,
} from "./Discover.styles";
import Img1 from "../../img/life.jpg";
import Img2 from "../../img/folclore.jpg";
import Img3 from "../../img/forest.jpg";

const Discover = () => {
  return (
    <Container id="discover">
      <DiscoverH1>Discover</DiscoverH1>
      <Wrapper>
        <Card>
          <Image src={Img1}></Image>
          <DiscoverH2>Everyday Life</DiscoverH2>
          <DiscoverP>
            You live in a typical Kurpie farm, trying to live everyday life of
            the local people.
          </DiscoverP>
        </Card>
        <Card>
          <Image src={Img2}></Image>
          <DiscoverH2>Learn About Folklore</DiscoverH2>
          <DiscoverP>
            Get to know the Kurpie folklore. As interesting as it is colorful
          </DiscoverP>
        </Card>
        <Card>
          <Image src={Img3}></Image>
          <DiscoverH2>Discover Wild Nature</DiscoverH2>
          <DiscoverP>
            Discover the Kurpie Forest with a guide. A forest that has lived
            without human interference for hundreds of years.
          </DiscoverP>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Discover;
