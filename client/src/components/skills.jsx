import styled from "styled-components";
import BackgroundImage from "../assets/background.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCubes, faIdBadge, faPencil, faSortAlphaAsc } from "@fortawesome/free-solid-svg-icons";
import { Zoom, Fade } from "react-reveal";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";



const Container = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  padding: 70px 0 120px 0;
  box-sizing: border-box;
  border-radius: 0 0 350px 0;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
  @media (min-width: 800px) {
    padding: 100px 0 150px 0;

  }
`;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  column-gap: 70px;
  align-items: center;
  @media(min-width: 800px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
flex: 1;
`;


const LeftHead = styled.div`
font-size: 30px;
font-weight: bold;
width: fit-content;
box-sizing: border-box;
text-decoration: underline;
`;

const LeftContent = styled.div`
margin-top: 60px;
font-weight: 400;
font-size: 18px;
letter-spacing: 0.3px;
`;
const LeftSubHead = styled.div`
margin-top: 50px;
font-size: 20px;
font-weight: bold;
letter-spacing: 0.6px;
width: 90%;
`;

const LeftButton = styled.div`
margin-top: 50px;
padding: 10px 15px;
box-sizing: border-box;
background: white;
width: fit-content;
font-weight: 600;
font-size: 18px;
letter-spacing: 0.6px;
border: 3px solid black;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background: #183B72;
    color: white;
}
`;



const RightContainer = styled.div`
flex: 1;
width: auto;
display: none;
@media (min-width: 800px) {
    display: inline;
}
`;

const RightBackgroundImage = styled.div`
    // width: 550px;
    // height: 550px;
    // background-image: url(${BackgroundImage});
    // margin: auto;
    // border-radius: 50%;
`;

const RightWrapper = styled.div`
    width: 650px;
    height: 650px;
    background: #1c3d72;
    margin: auto;
    border-radius: 50%;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
`;

const RightItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 30px;
    transition: all 0.35s ease;
    &:hover {
        transform: ${props => props.id % 2 == 0 ? 'translateX(-10px)': 'translateX(10px)'}; 
    }
`;

const HR = styled.hr`
    width: 50px;
    height: 0;
    border: 2px solid black;
`;

const RightIconContainer = styled.div`
    background: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SkillName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

const Skills = () => {
  return (
    <Container>
        <Wrapper>
            <Fade duration={2000}>
            <LeftContainer>
                <LeftHead>
                    We Teach the following skills
                </LeftHead>
                <LeftContent>
                At our institute, we are dedicated to equipping our students with a diverse range of essential skills. Our comprehensive curriculum covers various areas to ensure holistic development. We focus on fostering critical thinking, effective communication, problem-solving, teamwork, time management, adaptability, and leadership skills. Additionally, we provide hands-on training in technical skills such as coding, digital literacy, data analysis, and more. With our well-rounded approach, we empower our students to excel in their personal and professional endeavors.
                </LeftContent>
                <LeftSubHead>
                    Combined With the Proven Teaching Methods for Easy Understanding & Technical Concepts
                </LeftSubHead>
                <LeftButton>
                    What We Teach
                </LeftButton>
            </LeftContainer>
            </Fade>
            <Zoom>
            <RightContainer>
                    <RightWrapper>
                        <RightItemContainer id={1} >
                            <HR />
                            <RightIconContainer>
                                <FontAwesomeIcon icon={faCubes} size="2x" />
                            </RightIconContainer>
                            <SkillName>Comprehensive Curriculum</SkillName>
                        </RightItemContainer >
                        <RightItemContainer id={2}>
                            <RightIconContainer>
                                <FontAwesomeIcon icon={faSortAlphaAsc} size="2x" />
                            </RightIconContainer>
                            <SkillName>Holistic Development</SkillName>
                        </RightItemContainer>
                        <RightItemContainer id={3} >
                            <HR />
                            <RightIconContainer>
                                <FontAwesomeIcon icon={faPencil} size="2x" />
                            </RightIconContainer>
                            <SkillName>Technical Expertise</SkillName>
                        </RightItemContainer >
                        <RightItemContainer  id={4}>
                            <RightIconContainer>
                            <FontAwesomeIcon icon={faChartBar} size="2x" />
                            </RightIconContainer>
                            <SkillName>Hands-on Training</SkillName>
                        </RightItemContainer>
                        <RightItemContainer id={5} >
                            <HR />
                            <RightIconContainer>
                                <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                            </RightIconContainer>
                            <SkillName>Empowerment for Success</SkillName>
                        </RightItemContainer>
                    </RightWrapper>
            </RightContainer>
            </Zoom>
        </Wrapper>
    </Container>
  )
}

export default Skills