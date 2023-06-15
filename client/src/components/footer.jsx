import MainLogo from "../assets/mhyra-logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding-top: 70px;
  color: black;
  padding: 40px 10px;
  @media (min-width: 800px) {
    padding-top: 100px;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  border-bottom: 3px dashed gray;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div``;
const LogoWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  img {
    width: 100px;
  }
`;

const LogoTitle = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const LogoSubtitle = styled.div`
  width: 70%;
  font-size: 16px;
  margin: 10px 0;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: block;
  font-weight: 600;
`;

const ExtraLinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SectionWrapper = styled.div`
`;

const LinkHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
`;

const LinkItem = styled(Link)`
  font-size: 16px;
  margin: 10px 0;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: block;
`;

const SocialsContainer = styled.div`
  width: 100%;
`;

const SocialWrapper = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;

  svg {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <LogoWrapper>
            <img src={MainLogo} alt="saiyed farhan" />
            <LogoTitle>
              MHYRA Study
              <br />
              Centre
            </LogoTitle>
          </LogoWrapper>
          <LogoSubtitle>
            Discuss with the tutee the amount of time necessary to complete each
            part of their task.
          </LogoSubtitle>
        </LogoContainer>
        <ExtraLinksContainer>
          <SectionWrapper flex={2}>
            <LinkHeader>Useful Links</LinkHeader>
            <LinkItem href="/"> Free Consultation</LinkItem>
            <LinkItem href="/"> Visit Us</LinkItem>
            <LinkItem href="/"> Chat With Us</LinkItem>
          </SectionWrapper>

          <SectionWrapper style={{gridColumn: 'span 2'}}>
            <LinkHeader>Contacts</LinkHeader>
            <LinkItem href="/">
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{marginRight: '10px'}} /> 8788080376, 9890788729{" "}
            </LinkItem>
            <LinkItem href="/">
              {" "}
              <FontAwesomeIcon icon={faMailBulk} style={{marginRight: '10px'}} /> info@mhyrastudycentre.com{" "}
            </LinkItem>
            <LinkItem href="/">
              {" "}
              <FontAwesomeIcon icon={faLocation} style={{marginRight: '10px'}} />Plot 22, 2nd Floor, Above Canara Bank, Friends Colony, Katol Rd Nagpur- 440013
            </LinkItem>
          </SectionWrapper>

          <SectionWrapper >
            <LinkHeader>Follow Us</LinkHeader>
            <SocialsContainer>
              <SocialWrapper>
                <FontAwesomeIcon icon={faInstagram} size="xl" />
                <FontAwesomeIcon icon={faYoutube} size="xl" />
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </SocialWrapper>
            </SocialsContainer>
          </SectionWrapper>
        </ExtraLinksContainer>
      </Wrapper>
      <LinkItem
        href="/"
        style={{ width: "85%", margin: "auto", marginTop: "20px" }}
      >
        Design & Developed by Nitrosk- Web & AI Solutions
      </LinkItem>
    </Container>
  );
};

export default Footer;
