import { Link, useLocation } from "react-router-dom";
import "./admin-sidebar.css";
import SFLogo from "../../assets/SF-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { AdminAuthContext, NavList } from "../../context/admin/auth.context";
import styled from "styled-components";

const SidebarContainer = styled.div`
    background-color: rgb(246, 245, 245);
    height: 100%;
    position: fixed;
    top: 0px;
    left: ${props => props.left};
    transition: all 0.35s ease-in-out;
    z-index: 10;
    width: 270px;
    overflow: scroll;
    z-index: 10;
    border-right: 1px solid lightgray;
    box-shadow:
  4.2px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  10px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  18.8px 12.5px 10px rgba(0, 0, 0, 0.035),
  33.5px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  62.7px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  150px 100px 80px rgba(0, 0, 0, 0.07);
    @media (min-width: 800px) {
      overflow: hidden;
      width: 280px;
      box-shadow: none;
    }
`
const LogoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px 0px;
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    height: 60px;
    padding: 0;
    margin-bottom: 20px;
  }
`
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  @media (min-width: 800px) {
    display: none;
  }
`

const Logo = styled.img`
  width: 150px;
  margin: auto;
`
const SidebarTitle = styled.h1`
  width: 60%;
  text-align: left;
  margin-right: 55px;
  text-transform: uppercase;
  @media (min-width: 800px) {
    width: 100%;
    text-align: center;
    color: white;
    background-color: rgb(71, 95, 148);
    margin: 0px;
    padding-top: 18px;
    font-size: 25px;
  }
`

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  row-gap: 10px;
  margin-bottom: 25px;
`

const NavHeading = styled.span`
  width: 75%;
  font-size: 20px;
  color: gray;
  font-weight: 400;
  margin: 14px 0 0 0;
  text-transform: uppercase;
`

const NavItemTitle = styled.span`
  font-size: 15px;
  @media (min-width: 800px) {
    font-size: 16px;
  }
`

const NavItem = styled(Link)`
  width: 75%;
  padding: 10px 15px;
  background-color: ${({ active }) => (active ? "#0685b7" : "transparent")};
  color: ${({ active }) => (active ? "white" : "none")};
  border-radius: ${({ active }) => (active ? "8px" : "0px")};
  transition: all 0.35s ease;
`


const AdminSidebar = () => {

  const sidebarRef = useRef(null);

  const {isSidebarOpen, setIsSidebarOpen, activeItem, setActiveItem} = useContext(AdminAuthContext)



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleOnClickNavItem = (item) => {
    if (window.innerWidth < 800) {
        setIsSidebarOpen(false);
    }
    setActiveItem(item.Link)
  }


  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (window.innerWidth < 800) {
        setIsSidebarOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  })
  

  return (
    <SidebarContainer ref={sidebarRef} left={`${isSidebarOpen ? '0px' : '-281px'}`}>
      <LogoContainer>
        <CloseButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" />
        </CloseButton>
        <SidebarTitle>mhyra admin</SidebarTitle>
      </LogoContainer>
      <NavItemContainer>
        {
          NavList.map((item) => {
            const {Id, Title, Link} = item;
           if (!Link) {
            return (
              <NavHeading key={Id}>{Title}</NavHeading>
            )
           } else {
            return (    
              <NavItem key={Id} to={`${Link}`} active={item.Link === activeItem} onClick={(item) => handleOnClickNavItem(item)} >
                <FontAwesomeIcon icon={`fa-solid ${item.Icon}`} style={{marginRight: '25px'}} />
                <NavItemTitle>{Title}</NavItemTitle>
              </NavItem>
            )
           }
          })
        }
      </NavItemContainer>

  </SidebarContainer>
  );
};

export default AdminSidebar;
