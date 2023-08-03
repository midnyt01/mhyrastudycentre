import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCat,
  faChevronDown,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MainLogo from "../assets/mhyra-logo.png";
import MainLogo2 from "../assets/mhyra-logo.png";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom"
import AboutCard from "./about-card";
import { GlobalContext } from "../context/global.context";
import Sidebar from "./sidebar";

const Container = styled.div`
background-color: white;
position: fixed;
width:100%;
top:0;
z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: transparent;
  margin: auto;
  padding: 10px 30px;
  box-sizing: border-box;
  text-transform: uppercase;
  box-shadow:
  0px 1.4px 2.2px rgba(0, 0, 0, 0.02),
  0px 3.3px 5.3px rgba(0, 0, 0, 0.028),
  0px 6.3px 10px rgba(0, 0, 0, 0.035),
  0px 11.2px 17.9px rgba(0, 0, 0, 0.042),
  0px 20.9px 33.4px rgba(0, 0, 0, 0.05),
  0px 50px 80px rgba(0, 0, 0, 0.07)
;
`;

const MainLogoContainer = styled.div`
  flex: 20 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  img {
    width: 100px;
  }
  @media(min-width: 800px) {
    padding-left: 25px;
  }
  
`;

const NavList = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: inline;
  }
`;
const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ListItem = styled.li`
  margin-right: 30px;
  font-size: 18px;
  cursor: pointer;

  img {
    border: 3px solid;
    border-radius: 50%;
  }
  svg {
    transition: transform 0.35s ease;
    transform: ${(props) => props.rot};
  }
`;

const ExtraItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
  align-items: center;
  margin-right: 20px;
  @media (min-width: 800px) {  
  column-gap: 30px;
  margin-right: 30px;
  }
`;

const ExtraItems = styled.div`
  font-size: 1.3rem;
  cursor: pointer;

  img {
    border: 3px solid;
    border-radius: 50%;
  }
`;

const SidebarIconContainer = styled.div`
display: block;
@media(min-width: 800px) {
  display: none;
}
`;

const TelephoneLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 800px) {
    display: none;
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

const Navbar = () => {
  const {
    theme,
    setIsSidebarOpen,
    isSidebarOpen,
    isProfileInfoOpen,
    setIsProfileInfoOpen,
    isServiceCardOpen,
    setIsServiceCardOpen,
    userFace,
  } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const toggleProfileInfoTab = () => {
    setIsProfileInfoOpen(!isProfileInfoOpen);
  };

  const toggleServiceCard = () => {
    setIsServiceCardOpen(!isServiceCardOpen);
  };

  return (
    <Container>
      <Wrapper>
        <MainLogoContainer>
          <Link to="/">
            {theme == "dark" ? (
              <img src={MainLogo} alt="Saiyed Farhan" />
            ) : (
              <img src={MainLogo2} alt="Saiyed Farhan" />
            )}
          </Link>
        </MainLogoContainer>
        <NavList>
          <UnorderedList>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            {/* <ListItem
              onClick={toggleServiceCard}
              rot={isServiceCardOpen ? "rotate(-180deg)" : "rotate(0deg)"}
            >
              Services <FontAwesomeIcon icon={faChevronDown} />
            </ListItem> */}
            <ListItem>
              <Link to="/samplepapers">Sample Papers</Link>
            </ListItem>
            <ListItem>
              <Link to="/courses">Courses</Link>
            </ListItem>
            <ListItem
              onClick={toggleServiceCard}
              rot={isServiceCardOpen ? "rotate(-180deg)" : "rotate(0deg)"}
            >
              About <FontAwesomeIcon icon={faChevronDown} />
            </ListItem>
            <AboutCard />
            <ListItem>
            <a href="tel:8788080376">
              <ContactButtonLink>
                <FontAwesomeIcon icon={faPhone} size="xl" />
                &nbsp; Call Us
              </ContactButtonLink>
              </a>
            </ListItem>
          </UnorderedList>
        </NavList>
        <ExtraItemContainer>
          {/* <ExtraItems>
            <ThemeToggle />
          </ExtraItems>
          <ExtraItems onClick={toggleProfileInfoTab}>
            <img
              src={userFace}
              alt="user"
              style={{ color: theme == "light" ? "black" : "white" }}
            />
          </ExtraItems> */}
          {/* <TelephoneLink>
          <Link to="tel:9890788729">
            <FontAwesomeIcon icon={faPhone} size="xl" />
          </Link>
          </TelephoneLink> */}
        </ExtraItemContainer>
        <SidebarIconContainer onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </SidebarIconContainer>
        <Sidebar />
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
