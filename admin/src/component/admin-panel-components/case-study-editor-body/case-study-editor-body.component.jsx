import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";
import CoverImageForm from "../blog-cover-image-form/cover-image-form.component";
import CategoriesOptions from "../categories/categories.component";
import MetaContainers from "../meta-containers/meta-containers.component";

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

const BlogContainer = styled.div``;

const BlogTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
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
`

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


const EditorBodyContainer = styled.div`
  height: 450px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    height: 700px;
  }
`;

const BlogBody = styled(ReactQuill)`
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;

  div {
    border-radius: 10px;
  }
  .ql-container.ql-snow {
    height: 73%;
    @media (min-width: 800px) {
      height: 90%;
    }
  }
`;
var toolbarOptions = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ header: 1 }, { header: 2 }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ align: [] }],
  [{ direction: "rtl" }],
  ["link", "video"],

  ["clean"],
];

const modules = {
  toolbar: toolbarOptions,
  clipboard: {
    matchVisual: false,
  },
};

const CaseStudyEditorBody = () => {

    const navigate = useNavigate();

    const {
      caseStudyTitle,
      setCaseStudyTitle,
      caseStudyContent,
      setCaseStudyContent,
      selectedCaseStudyFile,
      setSelectedCaseStudyFile
    } = useContext(EditorContext);
  
    const handleBlogContentChange = (content, delta, source, editor) => {
      setCaseStudyContent(editor.getHTML());
    };
  
    const handleOnTitleChange = (e) => {
      setCaseStudyTitle(e.target.value);
    };
  
    const handlePublish = () => {
      navigate("/case-study-preview");
    };
  
    const handleRemoveCoverImage = () => {
      setSelectedCaseStudyFile(null)
    }
  
  return (
    <Wrapper>
        <Header>
          <PageTitle>New Case Study</PageTitle>
          <Action onClick={handlePublish}>Preview</Action>
        </Header>
        <BodyContainer>
          {!selectedCaseStudyFile && <CoverImageForm type={"case"} />}
          {selectedCaseStudyFile && (
            <CoverImageContainer>
              <CoverImage src={URL.createObjectURL(selectedCaseStudyFile)} />
              <RemoveButton onClick={handleRemoveCoverImage} ><FontAwesomeIcon icon="fa-solid fa-xmark" /></RemoveButton>
            </CoverImageContainer>
          )}
          <TitleContainer>
            <Title>Title</Title>
            <TitleInput
              value={caseStudyTitle}
              type="text"
              onChange={handleOnTitleChange}
            />
          </TitleContainer>
          <CategoriesOptions type="case" />
          <MetaContainers type="case" />
          <BlogContainer>
            <BlogTitle>Content</BlogTitle>
            <EditorBodyContainer>
              <BlogBody
                theme="snow"
                value={caseStudyContent}
                onChange={handleBlogContentChange}
                modules={modules}
              />
            </EditorBodyContainer>
          </BlogContainer>
          {/* <ReactQuill readOnly theme="bubble" value={blogContent} /> */}
        </BodyContainer>
      </Wrapper>
  )
}

export default CaseStudyEditorBody