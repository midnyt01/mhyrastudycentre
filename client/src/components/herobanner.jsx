import banner1 from "../assets/mhyra-banner-mobile.png";
import pcbanner from '../assets/mhyra-banner-pc.png'
import { Slide } from "react-reveal";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  background-color: #fff;
  background-image: url(${banner1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 680px;
  margin-top: 100px;

  @media (min-width: 800px) {
  display: none !important;
}
`;

const Desktopcontainer = styled.div`
  display: none;
  background-color: #fff;
  @media (min-width: 800px) {
  display: block !important; 
  width: 100%;
  padding-top: 100px;
  background-image: url(${pcbanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
  height: 715px;
}
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-end;
    height: 400px;
}
`;

const InnerWrapper = styled.div`
@media (min-width: 800px) {
  margin-top: 115px !important;
}
`;

const HeroBannerContainer = styled.div`
margin-top: -30px;
line-height:1.2;
`;

const Title = styled.h1`
font-size: 5rem !important;
font-weight: 100;
color: #1c3d72 !important;
letter-spacing: 5px;
/* text-align: right; */
font-family: ALGERIA  !important;
   @media(min-width: 800px) {
  font-size: 120px;
    letter-spacing: 27px;
    text-align: left;
   }
`;

const Subtitle = styled.h2`
color: #FFF;
text-transform: uppercase;
font-size: 1.6rem !important;
text-align: right;
letter-spacing: 2px;
margin-top: 10px !important;
text-transform: uppercase;
font-weight: 100;
font-family: BrushScriptMt !important;
letter-spacing: 5px !important;
@media(min-width: 800px) {
color: #000;
    font-size: 40px;
    letter-spacing: 20px;
    margin-top: -20px;
    margin-right: 10px;
    text-align: left;
    letter-spacing: 10px !important;
   }

`;

const HeroBanner = () => {
  

  return (
    <div>
    <Container image={banner1}>
      <Wrapper>
        <Slide left>
        <HeroBannerContainer>
            <Title style={{marginTop: '20px'}}>MHYRA </Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Study</Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Centre</Title>
            <Subtitle>Truly Education</Subtitle>
        </HeroBannerContainer>
        </Slide>
      </Wrapper>
    </Container>
    <Desktopcontainer image={pcbanner}>
      <Wrapper>
      <Slide left>
        <HeroBannerContainer>
            <Title style={{marginTop: '20px'}}>MHYRA </Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Study</Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Centre</Title>
            <Subtitle>Truly Education</Subtitle>
        </HeroBannerContainer>
        </Slide>
      </Wrapper>
    </Desktopcontainer>
      </div>
  );
};

export default HeroBanner;
