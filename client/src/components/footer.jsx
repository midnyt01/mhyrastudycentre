import MainLogo from "../assets/mhyra-logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
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
    width: 40%;
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

const SectionWrapper = styled.div``;

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
          <LogoSubtitle>Truly Education</LogoSubtitle>
        </LogoContainer>
        <ExtraLinksContainer>
          <SectionWrapper flex={2}>
            <LinkHeader>Useful Links</LinkHeader>
            <LinkItem to="/"> Home</LinkItem>
            <LinkItem to="/courses"> Courses</LinkItem>
            <LinkItem to="/about/aboutus"> About us</LinkItem>
          </SectionWrapper>

          <SectionWrapper style={{ gridColumn: "span 2" }}>
            <LinkHeader>Contacts</LinkHeader>
            <LinkItem href="/">
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
              <a href="tel:8788080376"> 8788080376 |</a>
              <a href="tel:9890788729"> 9890788729 </a>
            </LinkItem>
            <LinkItem >
            <a href="mailto:info@mhyrastudycentre.com">
              {" "}
              <FontAwesomeIcon
                icon={faMailBulk}
                style={{ marginRight: "10px" }}
              />{" "}
              info@mhyrastudycentre.com{" "}
              </a>
            </LinkItem>
            <LinkItem href="/">
              {" "}
              <FontAwesomeIcon
                icon={faLocation}
                style={{ marginRight: "10px" }}
              />
              <a href="https://goo.gl/maps/xAJPfWTdKNMPcuh47">
                Plot 22, 2nd Floor, Above Canara Bank, Friends Colony, Katol Rd
                Nagpur- 440013
              </a>
            </LinkItem>
          </SectionWrapper>

          <SectionWrapper>
            <LinkHeader>Follow Us</LinkHeader>
            <SocialsContainer>
              <SocialWrapper>
                <a target="_blank" href="https://instagram.com/mhyrastudycentre?igshid=MzRlODBiNWFlZA=="><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                <a target="_blank" href="https://youtube.com/@MhyraStudyCentre"><FontAwesomeIcon icon={faYoutube} size="xl" /></a>
                <a target="_blank" href="https://twitter.com/mhyrapvtltd?s=11"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100092290983203&mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
              </SocialWrapper>
            </SocialsContainer>
          </SectionWrapper>
        </ExtraLinksContainer>
      </Wrapper>
        <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center", width: "85%", margin: "auto", marginTop: "20px" }}>
      <LinkItem
        href="/"
      >
        Design & Developed by Nitrosk- Web & AI Solutions
      </LinkItem>
      <p>© 2023 Mhyra Study Centre Pvt. Ltd</p> 
      </div>
    </Container>
  );
};

export default Footer;
