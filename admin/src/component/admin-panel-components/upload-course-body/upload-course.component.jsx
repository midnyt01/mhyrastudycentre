import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";
import CoverImageForm from "../blog-cover-image-form/cover-image-form.component";
import MetaContainers from "../meta-containers/meta-containers.component";
import { httpCreateNewCourse } from "../../../utils/nodejs/admin";

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

const Action = styled.div`
  box-sizing: border-box;
  padding: 7px 20px;
  background: #4ec000;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
`;

const TitleInput = styled.input`
  font-size: 35px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  margin-top: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 30px;
  margin-top: 30px;
`;

const TextTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  @media (min-width: 800px) {
    font-size: 25px;
  }
`;

const RemoveButton = styled.div`
  scale: 0;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.32);
  box-sizing: border-box;
  padding: 1px 7px;
  top: 8px;
  z-index: 20;
  right: 12px;
  cursor: pointer;
  transition: all 0.2s ease 1s;
`;

const CoverImageContainer = styled.div`
  max-width: 200px;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  &:hover ${RemoveButton} {
    scale: 1;
    transition-delay: 0s;
  }
`;
const CoverImage = styled.img`
  width: 100%;
`;
const DescriptionInput = styled.textarea`
  font-size: 18px;
  font-family: inherit;
  padding: 5px 10px;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const FlexInput = styled.input`
  font-size: 16px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  @media (min-width: 800px) {
    width: 75%;
    font-size: 18px;
  }
`;

const LEARNINGS = {
  PointOne: "",
  PointTwo: "",
  PointThree: "",
  PointFour: "",
  PointFive: "",
  PointSix: "",
};

const INCLUDES = {
  PointOne: "",
  PointTwo: "",
  PointThree: "",
  PointFour: "",
};

const PREREQUISITE = {
  PointOne: "",
  PointTwo: "",
};

const UploadCourseBody = () => {
  const navigate = useNavigate();

  const [courseLearning, setCourseLearning] = useState(LEARNINGS);
  const [courseIncludes, setCourseIncludes] = useState(INCLUDES);
  const [coursePrerequisite, setCoursePrerequisite] = useState(PREREQUISITE);

  useEffect(() => {
    setLearning(courseLearning);
  }, [courseLearning]);

  useEffect(() => {
    setIncludes(courseIncludes);
  }, [courseIncludes]);

  useEffect(() => {
    setPrerequisite(coursePrerequisite);
  }, [coursePrerequisite]);

  const {
    allCourses,
    setAllCourse,
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
  } = useContext(EditorContext);

  const handleOnTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleOnDescriptionChange = (e) => {
    setCourseDescription(e.target.value);
  };

  const handleOnDurationChange = (e) => {
    setCourseDuration(e.target.value);
  };

  const handleOnSubjectsChange = (e) => {
    setCourseSubjects(e.target.value);
  };
  const handleOnNoteChange = (e) => {
    setCourseNote(e.target.value);
  };

  //sending request to backend and saving url
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', courseCoverImage);

    // Send the file to the server for processing
    console.log(formData)
    //if cover image form is from blog then do this
    try {
        let response = await fetch('https://api.mhyrastudycentre.com/admin/coursecoverimage', {
            method: 'POST',
            body: formData
          })
          let data = await response.json()
          console.log(data.url);
          setCoverImageUrl(data.url);
          return data.url;
    } catch (error) {
        console.error(error)
    }
  }

  const handlePublish = async () => {

    // let date = new Date();
    let ImageUrl = await handleSubmit();
    console.log(ImageUrl);

    const CourseData = {
      CourseImage: ImageUrl,
      CourseTitle: courseTitle,
      Description: courseDescription,
      MetaTitle: courseMetaTitle,
      MetaDescription: courseMetaDescription,
      Duration: courseDuration,
      Subjects: courseSubjects,
      Note: courseNote,
      CourseLearning: learning,
      CourseIncludes: includes,
      Prerequisites: prerequisite
    }
    console.log(CourseData);

    let response = await httpCreateNewCourse(CourseData)
    if (response.success) {
        alert('new post created successfully')
        let newCourse = {
          CourseId: response.CourseId,
          CourseTitle: courseTitle,
          MetaDescription: courseMetaDescription
        }
        setAllCourse([...allCourses, newCourse])
    } else {
        console.log(response)
        alert('error in creating course', response)
    }
}

  const handleRemoveCoverImage = () => {
    setCourseCoverImage(null);
  };

  const handleOnLearningChange = (e) => {
    const { name, value } = e.target;
    setCourseLearning({ ...courseLearning, [name]: value });
  };

  const handleOnIncludesChange = (e) => {
    const { name, value } = e.target;
    setCourseIncludes({ ...courseIncludes, [name]: value });
  };

  const handleOnPrerequisiteChange = (e) => {
    const { name, value } = e.target;
    setCoursePrerequisite({ ...coursePrerequisite, [name]: value });
  };

  return (
    <Wrapper>
      <Header>
        <PageTitle>Create New Course</PageTitle>
        <Action onClick={handlePublish}>Publish</Action>
      </Header>
      <BodyContainer>
        {!courseCoverImage && <CoverImageForm type={"blog"} />}
        {courseCoverImage && (
          <CoverImageContainer>
            <CoverImage src={URL.createObjectURL(courseCoverImage)} />
            <RemoveButton onClick={handleRemoveCoverImage}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </RemoveButton>
          </CoverImageContainer>
        )}
        <TitleContainer>
          <Title>Title</Title>
          <TitleInput
            value={courseTitle}
            type="text"
            onChange={handleOnTitleChange}
          />
        </TitleContainer>
        <MetaContainers />
        <TextContainer>
          <TextTitle>Description</TextTitle>
          <DescriptionInput
            value={courseDescription}
            type="text"
            onChange={handleOnDescriptionChange}
          />
        </TextContainer>

        <FlexContainer>
          <TextTitle>Course Duration</TextTitle>
          <FlexInput
            value={courseDuration}
            type="text"
            placeholder="In Years"
            onChange={handleOnDurationChange}
          />
        </FlexContainer>

        <FlexContainer>
          <TextTitle>Course Subjects</TextTitle>
          <FlexInput
            value={courseSubjects}
            type="text"
            placeholder="seprate subjects by comma"
            onChange={handleOnSubjectsChange}
          />
        </FlexContainer>

        <FlexContainer>
          <TextTitle>Course Note</TextTitle>
          <FlexInput
            value={courseNote}
            type="text"
            placeholder="special note for this course"
            onChange={handleOnNoteChange}
          />
        </FlexContainer>

        <TextContainer>
          <TextTitle> What You'll Learn :</TextTitle>
          <GridContainer>
            <FlexInput
              name="PointOne"
              value={courseLearning.PointOne}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point one"
            />
            <FlexInput
              name="PointTwo"
              value={courseLearning.PointTwo}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point two"
            />
            <FlexInput
              name="PointThree"
              value={courseLearning.PointThree}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point three"
            />
            <FlexInput
              name="PointFour"
              value={courseLearning.PointFour}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point four"
            />
            <FlexInput
              name="PointFive"
              value={courseLearning.PointFive}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point five"
            />
            <FlexInput
              name="PointSix"
              value={courseLearning.PointSix}
              onChange={handleOnLearningChange}
              type="text"
              placeholder="learning point six"
            />
          </GridContainer>
        </TextContainer>

        <TextContainer>
          <TextTitle> This Course Includes :</TextTitle>
          <GridContainer>
            <FlexInput
              name="PointOne"
              value={courseIncludes.PointOne}
              onChange={handleOnIncludesChange}
              type="text"
              placeholder="Includes point one"
            />
            <FlexInput
              name="PointTwo"
              value={courseIncludes.PointTwo}
              onChange={handleOnIncludesChange}
              type="text"
              placeholder="Includes point two"
            />
            <FlexInput
              name="PointThree"
              value={courseIncludes.PointThree}
              onChange={handleOnIncludesChange}
              type="text"
              placeholder="Includes point three"
            />
            <FlexInput
              name="PointFour"
              value={courseIncludes.PointFour}
              onChange={handleOnIncludesChange}
              type="text"
              placeholder="Includes point four"
            />
          </GridContainer>
        </TextContainer>

        <TextContainer>
          <TextTitle> Prerequisites :</TextTitle>
          <GridContainer>
            <FlexInput
              name="PointOne"
              value={coursePrerequisite.PointOne}
              onChange={handleOnPrerequisiteChange}
              type="text"
              placeholder="Prerequisite point one"
            />
            <FlexInput
              name="PointTwo"
              value={coursePrerequisite.PointTwo}
              onChange={handleOnPrerequisiteChange}
              type="text"
              placeholder="Prerequisite point two"
            />
          </GridContainer>
        </TextContainer>
      </BodyContainer>
    </Wrapper>
  );
};

export default UploadCourseBody;
