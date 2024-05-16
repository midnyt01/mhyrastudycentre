import styled from "styled-components";
import StraightArrow from "../assets/straight-arrow.png";
import RoundtArrow from "../assets/round-arrow.png";
import { Zoom, Fade } from "react-reveal";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 100px 0;
  box-sizing: border-box;
  border-radius: 0 0 0 230px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
`;

const Heading = styled.h3`
  font-size: 24px;
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

const FlowContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 70px;
  @media (min-width: 800px) {
    margin-top: 100px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FlowWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 450px;
    justify-content: ${(props) => props.number % 2 == 0 ? "flex-start" : "flex-end"};
  }
`;

const FlowStepWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid black;
  background: #0DD2F7;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const FlowStepContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 3px dashed gray;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:hover {
    border-color: black;
  }

  &:hover ${FlowStepWrapper} {
    border: 4px solid #0DD2F7;
    background: black;
    color: white;
  }
`;

const FlowInfoContainer = styled.div``;

const FlowInfoHead = styled.div`
  margin-top: 30px;
  font-size: 27px;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
`;

const FlowInfoBody = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.7px;
  line-height: 1.5;
`;

const ArrowOne = styled.div`
display: none;
position: absolute;
bottom: -50px;
left: 330px;
width: 120px;
@media (min-width: 800px) {
  display: block;
  }
   img {
    width: 100%;
    rotate: 210deg;
    transform: scaleX(-1);
    height: fit-content;
   }
`;
const ArrowTwo = styled.div`
display: none;
position: absolute;
top: 130px;
left: 670px;
width: 170px;
@media (min-width: 800px) {
display: block;
}
   img {
    width: 100%;
    rotate: 10deg;
    height: fit-content;
   }
`;
const ArrowThree = styled.div`
display: none;
position: absolute;
bottom: -17px;
right: 178px;
width: 120px;
@media (min-width: 800px) {
  display: block;
  }
   img {
    width: 100%;
    rotate: 210deg;
    transform: scaleX(-1);
    height: fit-content;
   }
`;

const FLOW_ARRAY = [
  {
    id: 1,
    head: "Identify the task",
    content:
      "Encourage the tutee to initiate and Identify the foucs of the session.",
  },
  {
    id: 2,
    head: "breaking the tasks into parts",
    content:
      "Provide the opportunity for the tutee to break the task into manageable pieces.",
  },
  {
    id: 3,
    head: "Setting an agenda",
    content:
      "Discuss with the tutee the amount of time necessary to complete each part of their task.",
  },
  {
    id: 4,
    head: "Tutee summary of thought process",
    content:
      "Have the tutee summarize the process of addressing this type of task.",
  },
];

const Workflow = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our Course Workflow</Heading>
        <FlowContainer>
          {FLOW_ARRAY.map((flow) => {
            return (
              <FlowWrapper key={flow.id} number={flow.id}>
                <Zoom>
                <FlowStepContainer>
                  <FlowStepWrapper>{flow.id}</FlowStepWrapper>
                </FlowStepContainer>
                </Zoom>
                <Fade duration={2000}>
                <FlowInfoContainer>
                  <FlowInfoHead>{flow.head}</FlowInfoHead>
                  <FlowInfoBody>{flow.content}</FlowInfoBody>
                </FlowInfoContainer>
                </Fade>
              </FlowWrapper>
            );
          })}
        </FlowContainer>
        <ArrowOne>
          <img src={StraightArrow} alt="arrow" />
        </ArrowOne>
        <ArrowTwo>
        <img src={RoundtArrow} alt="arrow" />
        </ArrowTwo>
        <ArrowThree>
        <img src={StraightArrow} alt="arrow" />
        </ArrowThree>
      </Wrapper>
    </Container>
  );
};

export default Workflow;
