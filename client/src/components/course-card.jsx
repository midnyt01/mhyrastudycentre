import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
  }
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CourseHead = styled.h3`
width: 90%;
margin: auto;
  margin-top: 20px;
  font-size: 25px;
`;

const CourseDescriptionContainer = styled.div`
width: 90%;
margin: auto;
  margin-top: 30px;
  font-size: 17px;
`;

const CourseDescription = styled.p`
  margin: 10px 0;
`;

const ActionButton = styled.div`
    width: 90%;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  box-sizing: border-box;
  padding: 13px 60px;
  font-size: 20px;
  font-weight: 500;
  background: #183b72;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background: #204d94;
  }
`;

const CourseCard = ({ course }) => {
  const {
    CourseId,
    CourseTitle,
    CourseImage,

  } = course;

  const navigate = useNavigate();

  const handleOnClickRouteChange = () => {
    navigate(`/courses/${CourseId}`)
  }

  return (
    <Container onClick={handleOnClickRouteChange}>
      <ImageContainer>
        <img src={CourseImage} alt={CourseTitle} />
      </ImageContainer>
      <InfoContainer>
        <CourseHead>{CourseTitle}</CourseHead>
        <ActionButton>Enroll Now !</ActionButton>
      </InfoContainer>
    </Container>
  );
};

export default CourseCard;
