
import {
  faArrowRightFromBracket,
  faChartLine,
  faCircleInfo,
  faClose,
  faCrosshairs,
  faFlag,
  faPlaneUp,
  faPowerOff,
  faTrafficLight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/global.context";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: white;
  position: absolute;
  right: 110px;
  width: 250px;
  max-height: 250px;
  top: ${(props) => props.top};
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  z-index: 10;
  border-radius: 12px;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: black;
  box-sizing: border-box;
  box-shadow: 1.4px 1.1px 2.2px rgba(0, 0, 0, 0.028),
    3.3px 2.7px 5.3px rgba(0, 0, 0, 0.04), 6.3px 5px 10px rgba(0, 0, 0, 0.05),
    11.2px 8.9px 17.9px rgba(0, 0, 0, 0.06),
    20.9px 16.7px 33.4px rgba(0, 0, 0, 0.072), 50px 40px 80px rgba(0, 0, 0, 0.1);
`;

const ServicesWrapper = styled.div`
  width: 100%;
  padding: 10px 25px;
  text-transform: capitalize;
  font-size: 19px;
`;

const ServiceItem = styled.div`
  margin: 12px 0;
  font-weight: 600;
  letter-spacing: 0.7px;
  width: 100%;
  color: #6b6b6b;
  cursor: pointer;
  display: flex;
  column-gap: 13px;
  align-items: center;
  &:hover {
    color: black;
  }
`;

const ServiceName = styled.span``

// const ALL_SERVICES = ["branding","sales", "traffic", "leads"];
const ALL_SERVICES = [
  {
    name: "About Us",
    linkTo: 'aboutus',
    icon: faCircleInfo,
  },
  {
    name: "Vision & Mission",
    linkTo: 'visionandmission',
    icon: faFlag,
  },
];

const AboutCard = () => {
    
  const navigate = useNavigate();

  const { isServiceCardOpen, setIsServiceCardOpen } = useContext(GlobalContext);

  return (
    <Container
      top={`${isServiceCardOpen ? "90px" : "70px"}`}
      opacity={`${isServiceCardOpen ? "1" : "0"}`}
      visibility={`${isServiceCardOpen ? "visible" : "hidden"}`}
    >
      <ServicesWrapper>
        {ALL_SERVICES.map((service) => {
          const {name, icon, linkTo} = service
          return (
            <ServiceItem
              key={name}
              onClick={() => {
                navigate(`/about/${linkTo}`);
                setIsServiceCardOpen(false);
              }}
            >
              <FontAwesomeIcon icon={icon} style={{width: '20px'}} />
              <ServiceName>
              {name}
              </ServiceName>
            </ServiceItem>
          );
        })}
      </ServicesWrapper>
    </Container>
  );
};

export default AboutCard;
