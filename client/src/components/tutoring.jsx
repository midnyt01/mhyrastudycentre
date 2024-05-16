import { faBookOpen, faFlaskVial, faGraduationCap, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
`;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  column-gap: 70px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
flex: 1;
`;


const LeftHead = styled.div`
font-size: 30px;
color: #1c3d72;
font-weight: bold;
width: fit-content;
padding-right: 100px;
box-sizing: border-box;
text-decoration: underline;
text-align: center;
`;
const LeftSubHead = styled.div`
margin-top: 50px;
font-size: 20px;
font-weight: bold;
color: #000;
letter-spacing: 0.6px;
width: 90%;
`;
const LeftContent = styled.div`
margin-top: 60px;
font-weight: 400;
color: #000;
letter-spacing: 0.3px;
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
margin-top: 60px;
@media (min-width: 800px) {
    margin-top: 0;
}
`;

const RightIconsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 50px;
row-gap: 50px;
@media (min-width: 800px) {  
grid-template-columns: repeat(4, 1fr);
}
`;
const RightIconWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const RightIcon = styled.div`
background: white;
color: #1c3d72;
width: 90px;
height: 90px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

svg {
    width: 40px !important;
    font-size: 40px;
}
`;
const RightIconTitle = styled.div`
margin-top: 10px;
font-size: 18px;
font-weight: 600;
color: #1c3d72;
width: 90%;
text-align: center;
`;
const RightContent = styled.div`
margin-top: 60px;
font-weight: 400;
color: #000;
letter-spacing: 0.3px;
`;


const Tutoring = () => {

    const navigate = useNavigate();

    const handleOnClickRouteChange = () => {
        navigate('/courses')
    }

  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <LeftHead>Live Tutoring</LeftHead>
                <LeftSubHead>
                    This is the best course tutors that will be the next generation training session begins now.
                </LeftSubHead>
                <LeftContent>
                  The majority have suffered alteration in some form by injected humour or randomise words which don't look even slightly believable.  
                </LeftContent>
                <LeftButton onClick={handleOnClickRouteChange}>
                    View Our Courses
                </LeftButton>
            </LeftContainer>
            <RightContainer>
                <RightIconsContainer>
                    <RightIconWrapper>
                        <RightIcon>
                            <FontAwesomeIcon icon={faPenRuler} size="3x" />
                        </RightIcon>
                        <RightIconTitle>Live Examples</RightIconTitle>
                    </RightIconWrapper>
                    <RightIconWrapper>
                        <RightIcon>
                            <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                        </RightIcon>
                        <RightIconTitle>University Approved</RightIconTitle>
                    </RightIconWrapper>
                    <RightIconWrapper>
                        <RightIcon>
                            <FontAwesomeIcon icon={faBookOpen} size="3x" />
                        </RightIcon>
                        <RightIconTitle>Updated Syllabus</RightIconTitle>
                    </RightIconWrapper>
                    <RightIconWrapper>
                        <RightIcon>
                            <FontAwesomeIcon icon={faFlaskVial} size="3x" />
                        </RightIcon>
                        <RightIconTitle>Practical Examples</RightIconTitle>
                    </RightIconWrapper>
                </RightIconsContainer>
                <RightContent>Our courses provide real-life scenarios, approved by universities, ensuring relevance and quality. Stay up-to-date with the latest syllabus and grasp concepts effortlessly with practical examples. Take your learning to the next level with our dynamic and comprehensive approach.</RightContent>
            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default Tutoring