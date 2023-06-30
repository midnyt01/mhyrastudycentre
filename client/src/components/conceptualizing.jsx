import { faBuysellads, faSalesforce } from "@fortawesome/free-brands-svg-icons";
import FloatingImage from '../assets/conceptualizing_image.jpg'
import {
  faBookAtlas,
  faCertificate,
  faGlobe,
  faLaptop,
  faPenRuler,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { Slide } from "react-reveal";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px 0 150px 0;
  box-sizing: border-box;
  border-radius: 0 0 230px 0;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
  svg.fa-arrow-right,
  svg.fa-arrow-right-arrow-left,
  svg.fa-arrow-right-long {
    transition: transform 0.2s ease-in-out;
  }

  svg.fa-arrow-right:hover,
  svg.fa-arrow-right-arrow-left:hover,
  svg.fa-arrow-right-long:hover {
    transform: translateX(7px);
  }

  @media (min-width: 800px) { 
    border-radius: 0 0 350px 0;
    padding-bottom: 100px;
    }
`;

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const Heading = styled.h3`
  font-size: 25px;
  color: #1c3d72;
  line-height: 1.5;
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: underline;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`;

const SubHeading = styled.p`
margin-top: 40px;
width: 90%;
font-size: 17px;
font-weight: 600;
letter-spacing: 0.4px;
@media (min-width: 800px) {
  width: 52%;
}
`;

const ContentWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
flex-direction: column;
@media (min-width: 800px) {
  flex-direction: row;
}
`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
row-gap: 10px;
width: fit-content;
column-gap: 80px;

@media (min-width: 800px) { 
grid-template-columns: repeat(2,1fr);
}
`;

const InfoCard = styled.div`
display: flex;
column-gap: 30px;
align-items: flex-start;
box-sizing: border-box;
padding: 60px 0;
border-bottom: 3px dotted;
border-color: gray;
width: fit-content;
svg {
  font-size: 60px;
  width: 60px !important;
}
.svg-inline--fa {
  color: #1c3d72;
}
div {
  width: 100%;
}
@media (min-width: 800px) { 
  width: 350px;
  }
`;


const InfoContainer = styled.div`
font-size: 18px;
letter-spacing: 0.5px;
width: 50%;
`;


const Mover = keyframes`
    0% { transform: translateY(20px); }
    100% { transform: translateY(-20px); }
`


const ImageContainer = styled.div`
width: 100%;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 30px;
    animation: 3s infinite  alternate;
    animation-name: ${Mover};

    @media (min-width: 800px) {
      width: 90%;
      margin: auto;
      margin-left: 40px;
    }
  }

`;



const Conceptualizing = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Conceptualizing Courses Easy way</Heading>
        <SubHeading>
        A revolutionary approach that simplifies learning: say goodbye to overwhelming content and hello to clarity! Our innovative method breaks down complex subjects into digestible concepts making it effortless to grasp even the most challenging material. With interactive visuals, engaging activities and concise explanations our courses ensure a deep understanding of the subject matter. Unlock your potential and breeze through your studies with our user-friendly approach. Experience the joy of learning as you effortlessly absorb knowledge and achieve academic success. Discover the easy way to conceptualize courses today!
        </SubHeading>

      <ContentWrapper>
      <CardContainer>
        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faLaptop} />
          <InfoContainer>Better Evaluation of Students</InfoContainer>
        </InfoCard>
        </Slide>

        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faBookAtlas} />
          <InfoContainer>Better Strategies for struggling students</InfoContainer>
        </InfoCard>
          </Slide>

        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faVideo} />
          <InfoContainer>A Complete Media training kit</InfoContainer>
        </InfoCard>
          </Slide>

        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faPenRuler} />
          <InfoContainer>Practical Examples Creative Learning</InfoContainer>
        </InfoCard>
          </Slide>

        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faGlobe} />
          <InfoContainer>Helping All Students with concepts</InfoContainer>
        </InfoCard>
          </Slide>

        <Slide bottom >
        <InfoCard>
            <FontAwesomeIcon icon={faCertificate} />
          <InfoContainer>Comprehensive study experts</InfoContainer>
        </InfoCard>
          </Slide>
      </CardContainer>
      <ImageContainer>
        <img src={FloatingImage} alt="conceptualizing" />
      </ImageContainer>
      </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Conceptualizing;
