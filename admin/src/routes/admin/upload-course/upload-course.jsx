
import styled from "styled-components";
import Topbar from "../../../component/admin-panel-components/admin-topbar/topbar.component";
import "react-quill/dist/quill.snow.css";

import "./upload-course.styles.css";
import UploadCourseBody from "../../../component/admin-panel-components/upload-course-body/upload-course.component";


const Container = styled.div`
  width: 100%;
`;

const UploadCourse = () => {

  return (
    <Container>
      <Topbar />
      <UploadCourseBody />
    </Container>
  );
};

export default UploadCourse;
