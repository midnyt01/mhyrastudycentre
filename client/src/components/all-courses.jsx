import styled from "styled-components";
import { useContext } from "react";
import { CoursesContext } from "../context/courses.context";
import CourseCard from "./course-card";
import { useState } from "react";
import { useEffect } from "react";

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
  width: 90%;
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
`;

const CourseCategory = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AllCourses = () => {
  const { allCourses } = useContext(CoursesContext);
  const [competitive, setCompetitive] = useState([]);
  const [classX, setClassX] = useState([]);
  const [classIX, setClassIX] = useState([]);
  const [classVIII, setClassVIII] = useState([]);
  const [extras, setExtras] = useState([]);

  console.log("updating");
  useEffect(() => {
    //competitive
    const compi = [];
    const class10 = [];
    const class9 = [];
    const class8 = [];
    const extra = [];
    allCourses.map((course) => {
      if (course.CourseTitle.includes("JEE")) {
        compi.push(course);
      } else if (course.CourseTitle.includes("NEET")) {
        compi.push(course);
      } else if (course.CourseTitle.includes("X ")) {
        class10.push(course);
      } else if (course.CourseTitle.includes("IX ")) {
        class9.push(course);
      } else if (course.CourseTitle.includes("VIII ")) {
        class8.push(course);
      } else {
        extra.push(course);
      }
    });

    setCompetitive(compi);
    setClassX(class10);
    setClassIX(class9);
    setClassVIII(class8);
    setExtras(extra);
  }, [allCourses]);

  return (
    <Container>
      <Wrapper>
        <Header>Courses Detailes</Header>
        <CourseContainer>
          {competitive.length != 0 && (
            <CourseCategory>
              {competitive.map((course) => {
                return <CourseCard key={course.CourseId} course={course} />;
              })}
            </CourseCategory>
          )}

          {classX.length != 0 && (
            <CourseCategory>
              {classX.map((course) => {
                return <CourseCard key={course.CourseId} course={course} />;
              })}
            </CourseCategory>
          )}

          {classIX.length != 0 && (
            <CourseCategory>
              {classIX.map((course) => {
                return <CourseCard key={course.CourseId} course={course} />;
              })}
            </CourseCategory>
          )}

          {classVIII.length != 0 && (
            <CourseCategory>
              {classVIII.map((course) => {
                return <CourseCard key={course.CourseId} course={course} />;
              })}
            </CourseCategory>
          )}

          {extras.length != 0 && (
            <CourseCategory>
              {extras.map((course) => {
                return <CourseCard key={course.CourseId} course={course} />;
              })}
            </CourseCategory>
          )}
        </CourseContainer>
      </Wrapper>
    </Container>
  );
};

export default AllCourses;
