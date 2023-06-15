
import styled from "styled-components";
import { faAngleDoubleDown, faAngleDoubleUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
//icons for points

import book from "../assets/icons/book.png";
import test from "../assets/icons/education.png"
import skill from "../assets/icons/award.png";
import optimism from "../assets/icons/book_2.png"
import mentoring from "../assets/icons/presentation.png";
import practice from "../assets/icons/learning.png"
import sms from "../assets/icons/discussion.png";
import book2 from "../assets/icons/class.png"
import success from "../assets/icons/graduation.png";
import discipline from "../assets/icons/problem-solving.png";
import syllabus from "../assets/icons/online-class.png"
import bunk from "../assets/icons/hotel.png";

import AboutPoint from "./about-point";
import { Slide } from "react-reveal";

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  @media (min-width: 800px) {
    padding: 10px;
  }
`;


const Title = styled.h3`
  font-size: 24px;
  color: #1c3d72;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  @media (min-width: 800px) {
    font-size: 30px;
    width: 90%;
  }
`;

const Content = styled.ul`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  width: 100%;
  letter-spacing: 0.5px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  @media (min-width: 800px) {
    margin-top: 50px;
    font-size: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentPoint = styled.li`
  margin-top: 10px;
  color: #000;
`;

const BoldPoint = styled.span`
font-weight: 600;
`

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  @media (min-width: 800px) {
    margin-top: 200px;
  }

  img {
    width: 100%;
    margin: auto;
    height: auto;
    border-radius: 15px;
    @media (min-width: 800px) {
      width: 90%;
    }
  }
`;

const ActionButton = styled.div`
margin-top: 10px;
font-size: 20px;
font-weight: 600;
cursor: pointer;
color: #183B72;
`;

const OPTIMISTIC_MOTIVATION = [
  {
    id: 1,
    Key: 'Panel Demanding Spot',
    Point: 'The purpose of MSC is to help you to reach your potential W have incorporated academic sessions where we cover competitive studies & boards, to achieve students educational goals. ',
    Icon: book,
  },
  {
    id: 2,
    Key: 'High Exposure & Skill-full faculties',
    Point: 'Our faculties respond predictably to students behavior & establish a productive learning environment. Our teachings goal is a harmonious and progressive development of a child. ',
    Icon: test,
  },
  {
    id: 3,
    Key: 'Productive Consistent Test Series',
    Point: 'We have adopted a test-based learning approach where we provide daily practice problems along with weekly subjective and objective tests designed by our experts. ',
    Icon: skill,
  },
  {
    id: 4,
    Key: 'KNOWLEDGE IS POWER BUT PERSONALITY IS ELEMENTARY',
    Point: 'Marks give you recognition for your good performance but a great personality provides respect for your career. Our organization works to develop sharpen your professional and personal skills in 360 manner. ',
    Icon: optimism,
  },
  {
    id: 5,
    Key: 'Mentor ',
    Point: 'Students get overwhelmed with hurdles & distractions, They might not always be prepared for them. We have a mentors who shares their knowledge and experience to inspire students to reach their goals and guide them in all stream. ',
    Icon: mentoring,
  },
  {
    id: 6,
    Key: 'Hypothesis and implementation',
    Point: 'We are the only institution to perform practicals in reputed engineering colleges. We also promote visits of students for the medical workshop.',
    Icon: practice,
  },
  {
    id: 7,
    Key: 'SMS alerts',
    Point: 'We send regular SMS alerts about absentee, academic performance, selection for routine tests, and numerous other activities.  ',
    Icon: sms,
  },
  {
    id: 8,
    Key: 'BOC-HORD cum book house ',
    Point: 'The Smart BOC-HORD concept is where we provide a safe space for students to socialize, independently work, use computers, access the intemet, use equipment & research materials & share & learn from each other. This area has considered silent zone for peaceful learning We provide them with a conceal foundation.  ',
    Icon: book2,
  },
  {
    id: 9,
    Key: 'Escort outstanding up-shot ',
    Point: 'We are delivering 65% to 70% selections in the most reputed IT and NIT intitutes Likewise we have been creating results for the topmost medical institution. ',
    Icon: success,
  },
  {
    id: 10,
    Key: 'Preliminary syllabus concluded ',
    Point: 'We aim for a systematic approach towards syllabus completion so that every student gets to have at least five months of rigorous revision sessions with speed in addition to an accuracy development program ',
    Icon: syllabus,
  },
  {
    id: 11,
    Key: 'Discipline and Focal-point proceed hand in hand ',
    Point: 'We are known for our disciplinary approach and efforts toward creating a value-based environment. Hence we emphasize students to not have any smartphones or distractive devices. Students are not to leave the premises without their parental consent and monitor their attendance with a blometric identification. ',
    Icon: discipline,
  },
  {
    id: 12,
    Key: 'Youth hostel facilities ',
    Point: 'We have youth hostel facilities with good food quality and hygienic hospitality. We take care of our students around the clock. ',
    Icon: bunk,
  },
]

const AboutMe = () => {




  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>Why you should UNITE WITH US</Title>
          <Content>
            {
              OPTIMISTIC_MOTIVATION.map((Keypoint) => {
                const {id, Key, Point} = Keypoint
                 return  (
                  <Slide bottom key={Key} >
                  <AboutPoint Keypoint={Keypoint} />
                  </Slide>
                 )
              })
            }
          </Content>
            {/* <ActionButton>
             {
                 (mainPoints.length > 5) ? (
                  <div onClick={handleShowLess}>
                  <FontAwesomeIcon icon={faAngleDoubleUp} /> Show Less
                  </div>
                 ) : (
                  <div onClick={handleShowMore}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} /> Show More
                  </div>
                 )
              }
            </ActionButton> */}
        </InfoContainer>
        {/* <ImageContainer>
          <Fade bottom>
            <Image src={CoverImage} alt="cover image" />
          </Fade>
        </ImageContainer> */}
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
