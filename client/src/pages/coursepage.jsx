import { faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CoursesContext } from "../context/courses.context";
import CourseMainCard from "../components/course-main-card";
import { httpGetCourseById } from "../utils/api";

const Container = styled.div`
  margin-top: 100px;
`;

const TopContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 50px 0 70px 0;
  box-sizing: border-box;
  @media (min-width: 800px) {
    padding: 50px 0 70px 100px;
    width: 65%;
    margin: 0;
  }
`;

const ActionLink = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0px;
`;

const Heading = styled.h1`
  font-size: 40px;
  margin-top: 30px;
`;

const Description = styled.p`
  font-size: 16px !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1.5;
  margin-top: 30px;
  color: #000;
  @media (min-width: 800px) {
    font-size: 21px;
  }
`;

const CourseDescriptionContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 25px;
  font-size: 21px;
  @media (min-width: 800px) {
    margin-top: 50px;
  }
`;

const CourseDescription = styled.p`
  margin: 10px 0;
`;

const BottomContainer = styled.div`
  background-color: white;
  padding: 750px 0 50px 0;
  box-sizing: border-box;
  @media (min-width: 800px) {
    padding: 50px 100px 100px 100px;
  }
`;

const BottomWrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  @media (min-width: 800px) {
    width: 65%;
    margin: 0;
  }
`;

const ContentHeading = styled.h4`
  font-size: 25px;
  text-align: center;
`;

const ContentWraper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Content = styled.div`
  font-size: 18px;
  display: flex;
`;

const CoursePage = () => {
  const { slug } = useParams();

  const { allCourses } = useContext(CoursesContext);
  const [courseDetails, setCourseDetails] = useState(null);


  useEffect(() => {
    async function getCourseDetails () {
      let response = await httpGetCourseById(slug);
      console.log({response})
      setCourseDetails(response)
    }

    getCourseDetails();
  }, [allCourses, slug]);

  if (courseDetails) {
    return (
      <Container>
        <TopContainer>
          <ActionLink>
            <Link to="/courses">
              <FontAwesomeIcon icon={faChevronLeft} /> Back to course
            </Link>
          </ActionLink>
          <Heading>{courseDetails.CourseTitle}</Heading>
          <Description>{courseDetails.Description}</Description>
          <CourseMainCard courseDetails={courseDetails} />
        </TopContainer>
        <BottomContainer>
          <BottomWrapper>
            <ContentHeading>Course Details</ContentHeading>
            <CourseDescriptionContainer>
              <CourseDescription>
                <b>Batch Duration : </b>
                {courseDetails.Duration}
              </CourseDescription>
              <CourseDescription>
                <b>Course Subjects : </b>
                {courseDetails.Subjects}
              </CourseDescription>

              {courseDetails.Note && (
                <CourseDescription>
                  <b>Note : </b>
                  {courseDetails.Note}
                </CourseDescription>
              )}
            </CourseDescriptionContainer>
          </BottomWrapper>
          <BottomWrapper style={{marginTop: '60px'}}>
            <ContentHeading>What you'll learn</ContentHeading>
            <ContentWraper>
              {courseDetails.Learnings.map((item) => {
                return (
                  <Content>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ margin: "3px 10px 0 0" }}
                      size="xl"
                    />{" "}
                    <p>{item.Content}</p>
                  </Content>
                );
              })}
            </ContentWraper>
          </BottomWrapper>
        </BottomContainer>
      </Container>
    );
  } else {
    <div>Loading...</div>;
  }
};

export default CoursePage;
