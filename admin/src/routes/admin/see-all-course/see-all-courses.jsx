import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { EditorContext } from "../../../context/admin/editor.context";
import Topbar from "../../../component/admin-panel-components/admin-topbar/topbar.component";
import CourseCard from "../../../component/admin-panel-components/course-card/course-card";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 85px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 0px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 25px;
  @media (min-width: 800px) {
    font-size: 34px;
  }
`;

const ShipmentContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;
`;

const AllCourses = () => {
  const { allCourses } = useContext(EditorContext);
  console.log(allCourses)

  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Header>
          <PageTitle>All Courses</PageTitle>
        </Header>
        <ShipmentContainer>
          {allCourses.map((course) => {
            return (
              <CourseCard key={course.CourseId} course={course} />
            );
          })}
        </ShipmentContainer>
      </Wrapper>
    </Container>
  );
};

export default AllCourses;
