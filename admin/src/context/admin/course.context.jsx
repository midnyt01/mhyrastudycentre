import { createContext, useEffect, useState } from "react";
import { httpGetAllCourses, httpGetCourseById } from "../../utils/nodejs/admin";

export const CourseContext = createContext({
  courseId: null,
  setCourseId: () => {},
  courseTitle: null,
  setCourseTitle: () => {},
  courseDescription: null,
  setCourseDescription: () => {},
  courseMetaTitle: null,
  setCourseMetaTitle: () => {},
  courseMetaDescription: null,
  setCourseMetaDescription: () => {},
  courseDuration: null,
  setCourseDuration: () => {},
  courseSubjects: null,
  setCourseSubjects: () => {},
  courseNote: null,
  setCourseNote: () => {},
  learning: null,
  setLearning: () => {},
  includes: null,
  setIncludes: () => {},
  prerequisite: null,
  setPrerequisite: () => {},
});

export const CourseProvider = ({ children }) => {
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseMetaTitle, setCourseMetaTitle] = useState("");
  const [courseMetaDescription, setCourseMetaDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseSubjects, setCourseSubjects] = useState("");
  const [courseNote, setCourseNote] = useState("");
  const [learning, setLearning] = useState({});
  const [includes, setIncludes] = useState({});
  const [prerequisite, setPrerequisite] = useState({});

  useEffect(() => {
    const getCourseDetails = async () => {
      let response = await httpGetCourseById(courseId);
      console.log(response);
      const {
        CourseTitle,
        Description,
        MetaTitle,
        MetaDescription,
        Duration,
        Subjects,
        Note,
        CourseLearning,
        CourseIncludes,
        Prerequisites,
      } = response;
      setCourseTitle(CourseTitle);
      setCourseDescription(Description);
      setCourseMetaTitle(MetaTitle);
      setCourseMetaDescription(MetaDescription);
      setCourseDuration(Duration);
      setCourseSubjects(Subjects);
      setCourseNote(Note);
      setIncludes({ ...CourseIncludes });
      setLearning({ ...CourseLearning });
      setPrerequisite({ ...Prerequisites });
    };
    getCourseDetails();
  }, [courseId]);

  const value = {
    courseId,
    setCourseId,
    courseTitle,
    setCourseTitle,
    courseDescription,
    setCourseDescription,
    courseMetaTitle,
    setCourseMetaTitle,
    courseMetaDescription,
    setCourseMetaDescription,
    courseDuration,
    setCourseDuration,
    courseSubjects,
    setCourseSubjects,
    courseNote,
    setCourseNote,
    learning,
    setLearning,
    includes,
    setIncludes,
    prerequisite,
    setPrerequisite,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
