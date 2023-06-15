import { createContext, useEffect, useState } from "react";
import { httpGetAllCourses } from "../../utils/nodejs/admin";

export const EditorContext = createContext({
  courseCoverImage: null,
  setCourseCoverImage: () => {},
  coverImageUrl: null,
  setCoverImageUrl: () => {},
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
  allCourses: null,
  setAllCourse: () => {},
});

export const EditorPorvider = ({ children }) => {

  const [courseCoverImage, setCourseCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseMetaTitle, setCourseMetaTitle] = useState("");
  const [courseMetaDescription, setCourseMetaDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseSubjects, setCourseSubjects] = useState("");
  const [courseNote, setCourseNote] = useState("");
  const [learning, setLearning] = useState([]);
  const [includes, setIncludes] = useState([]);
  const [prerequisite, setPrerequisite] = useState([]);

  const [allCourses, setAllCourse] = useState([]);

  const value = {
    courseCoverImage,
    setCourseCoverImage,
    coverImageUrl,
    setCoverImageUrl,
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
    allCourses,
    setAllCourse,
  };

  useEffect(() => {
    const getAllCourses = async () => {
      let response = await httpGetAllCourses();
      setAllCourse(response);
    }
    getAllCourses();
  }, [])



  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};
