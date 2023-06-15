import styled from "styled-components";
import { useContext } from "react";
import { CoursesContext } from "../context/courses.context";
import CourseCard from "./course-card";

const Container = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 100px 0;
  margin-top: 40px;
 @media (min-width: 800px) {
 }
`;

const Wrapper = styled.div`
width: 90%;
margin: auto;
`;

const Header = styled.h1`
  font-size: 40px;
  width:90%;
  margin: auto;
  text-decoration: underline;
`;

const CourseContainer = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
    @media (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;




const AllCourses = () => {

  const {allCourses} = useContext(CoursesContext)

  return (
    <Container>
      <Wrapper>
      <Header>Courses Detailes</Header>
        <CourseContainer>
            {
                allCourses && allCourses.map((course) => {
                    return (
                        <CourseCard key={course.CourseId} course={course} />
                    )
                })
            }
        </CourseContainer>
      </Wrapper>
    </Container>
  );
};

export default AllCourses;
