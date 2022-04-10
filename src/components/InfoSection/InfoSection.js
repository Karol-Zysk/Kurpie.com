import React from "react";
import { Button } from "react-scroll/modules";
import { Column2, ImgWrapper, TopLine, Image, Heading,  } from "./InfoSection.styles";

const InfoSection = () => {
  return (
    <>
      <Container id={id}>
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <SubTitle>Subtitle</SubTitle>
                <BtnWrap>
                  <Button to="home">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Image  />
              </ImgWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default InfoSection;
