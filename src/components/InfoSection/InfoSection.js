import React from "react";
import { Button } from "../Button";

import {
  Column2,
  ImgWrapper,
  TopLine,
  Image,
  Heading,
  BtnWrapper,
  TextWrapper,
  Column1,
  SubTitle,
  Container,
  Wrapper,
  Row,
} from "./InfoSection.styles";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrapper>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Image src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default InfoSection;
