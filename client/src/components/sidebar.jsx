import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faChevronDown,
  faChevronUp,
  faClose,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainLogo from "../assets/mhyra-logo.png";
import { GlobalContext } from "../context/global.context";

const Container = styled.div`
  display: inline;
  width: 75%;
  background-color: white;
  position: fixed;
  color: white;
  top: 0;
  right: 0;
  height: 100vh;
  padding-bottom: 100px;
  box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028), 0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 10;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  position: relative;
  padding-top: 100px;
  align-items: flex-start;
  padding-left: 25px;
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  color: #000;
`;

const MainLogoContainer = styled.div`
  img {
    width: 100px;
  }
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const NavItems = styled.div`
  font-size: 18px;
  a {
    color: black !important;
  }
`;

const SubNavItems = styled.div`
  font-size: 17px;
  margin: 10px 0 10px 10px;
  a {
    color: black !important;
  }
`;

const ContactButtonLink = styled.div`
  padding: 6px 8px;
  box-sizing: border-box;
  background: white;
  font-size: 14px;
  letter-spacing: 0.6px;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const PoliciesContainer = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 15px;
`;
const Policy = styled.p`
  margin: 0;
  flex: 1;
  cursor: pointer;
  color: black;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
`;

const Social = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #000;
`;

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext);
  const containerRef = useRef(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef, setIsSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <Container isSidebarOpen={isSidebarOpen} ref={containerRef}>
      <Wrapper>
        <CloseContainer onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faClose} size="2xl" />
        </CloseContainer>
        <MainLogoContainer>
          <img src={MainLogo} alt="main-logo" />
        </MainLogoContainer>
        <NavItemContainer>
          <NavItems>
            <ContactButtonLink>
              <a href="tel:9890788729">
                <FontAwesomeIcon icon={faPhone} size="xl" />
              </a>
              &nbsp; Call Us
            </ContactButtonLink>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link to="/">Home</Link>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link to="/courses">Courses</Link>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link to="/samplepapers">Sample Papers</Link>
          </NavItems>
          <NavItems onClick={toggleDropDown}>
            <Link to="#">
              About{" "}
              <FontAwesomeIcon
                icon={isDropDownOpen ? faChevronUp : faChevronDown}
                style={{ marginLeft: "7px" }}
              />
            </Link>
            {isDropDownOpen && (
              <>
                <SubNavItems onClick={toggleSidebar}>
                  <Link to="/about/aboutus">About Us</Link>
                </SubNavItems>

                <SubNavItems onClick={toggleSidebar}>
                  <Link to="/about/visionandmission">Vission And Mission</Link>
                </SubNavItems>
              </>
            )}
          </NavItems>
        </NavItemContainer>
        {/* <PoliciesContainer>
          <Policy>Privacy Policy</Policy>
          <Policy>Terms and Conditions</Policy>
          <Policy>Return and refund policy</Policy>
        </PoliciesContainer> */}
        <SocialContainer>
          <Social>
            <a
              target="_blank"
              href="https://instagram.com/mhyrastudycentre?igshid=MzRlODBiNWFlZA=="
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </Social>
          <Social>
            <a target="_blank" href="https://youtube.com/@MhyraStudyCentre">
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </a>
          </Social>
          <Social>
            <a target="_blank" href="https://twitter.com/mhyrapvtltd?s=11">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </Social>
          <Social>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100092290983203&mibextid=LQQJ4d"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
          </Social>
        </SocialContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
