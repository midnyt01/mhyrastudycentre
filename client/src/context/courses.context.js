import { createContext, useContext, useEffect, useState } from "react";
import Coaching1 from "../assets/coaching1.jpg";
import Coaching2 from "../assets/coaching2.jpg";
import Coaching3 from "../assets/coaching3.jpg";
import { httpGetAllCourses } from "../utils/api";

const COURESES_ARRAY = [
  {
    CourseId: 1,
    CourseImage: Coaching1,
    CourseTitle: " XI+XII IIT-JEE",
    Subjects: "Physics + chemistry + Maths",
    Note: null,
    Duration: "2 Years",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    CourseContents: [
        'Completion of full syllabus and revision',
        'Access to all course related study materials',
        'One on one Doubt Session',
        'Access to full test series',
    ],
    PrerequisitesContent: [
        'Must be X pass',
        'A willingness and enthusiasm to learn'
    ],
    Learnings: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    CourseId: 2,
    CourseImage: Coaching2,
    CourseTitle: "XI+XII NEET",
    Subjects: "Physics + chemistry + Biology",
    Note: null,
    Duration: "2 Years",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      CourseContents: [
        'Completion of full syllabus and revision',
        'Access to all course related study materials',
        'One on one Doubt Session',
        'Access to full test series',
    ],
    PrerequisitesContent: [
        'Must be X pass',
        'A willingness and enthusiasm to learn'
    ],
    Learnings: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    CourseId: 3,
    CourseImage: Coaching3,
    CourseTitle: "VIII, IX & X: ICSE",
    Subjects: "Maths + Science + English + Social Studies",
    Note: null,
    Duration: "1 Year",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      CourseContents: [
        'Completion of full syllabus and revision',
        'Access to all course related study materials',
        'One on one Doubt Session',
        'Access to full test series',
    ],
    PrerequisitesContent: [
        'Basic understanding of maths and science',
        'A willingness and enthusiasm to learn'
    ],
    Learnings: [
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    CourseId: 4,
    CourseImage: Coaching1,
    CourseTitle: "VIII, IX & X: CBSE",
    Subjects: "Maths + Science + English + Social Studies",
    Note: null,
    Duration: "1 Year",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      CourseContents: [
        'Completion of full syllabus and revision',
        'Access to all course related study materials',
        'One on one Doubt Session',
        'Access to full test series',
    ],
    PrerequisitesContent: [
        'Basic understanding of maths and science',
        'A willingness and enthusiasm to learn'
    ],
    Learnings: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    CourseId: 5,
    CourseImage: Coaching2,
    CourseTitle: "IX & X: State",
    Subjects: ": Maths + Science + English",
    Note: "Hindi and Sanskrit on demand ",
    Duration: "1 Year",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      CourseContents: [
        'Completion of full syllabus and revision',
        'Access to all course related study materials',
        'One on one Doubt Session',
        'Access to full test series',
    ],
    PrerequisitesContent: [
        'Basic understanding of maths and science',
        'A willingness and enthusiasm to learn'
    ],
    Learnings: [
        'Lorem Ipsum is simply dummy text',
        'Lorem Ipsum is simply dummy text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
];

export const CoursesContext = createContext({
  allCourses: [],
});

export const CoursesProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    async function getCoursesArray () {
      const response = await httpGetAllCourses();
      console.log(response)
      setAllCourses(response)
    }
    getCoursesArray();
  }, [])
  


  const value = { allCourses };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
