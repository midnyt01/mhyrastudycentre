import { Route, Routes } from "react-router-dom";
import Topbar from "../../component/admin-panel-components/admin-topbar/topbar.component";
import EditCourseComponent from "../../component/admin-panel-components/edit-course-componenet";


const EditCourse = () => {
  return (
    <Routes>
      <Route index element={<Topbar />} />
      <Route path="/:Id" element={<EditCourseComponent />} />
    </Routes>
  );
};

export default EditCourse;
