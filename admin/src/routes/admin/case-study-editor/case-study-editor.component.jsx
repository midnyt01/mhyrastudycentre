import styled from "styled-components";
import Topbar from "../../../component/admin-panel-components/admin-topbar/topbar.component";
import CaseStudyEditorBody from "../../../component/admin-panel-components/case-study-editor-body/case-study-editor-body.component";

const Container = styled.div`
  width: 100%;
`;



const CaseStudyEditor = () => {

  return (
    <Container>
      <Topbar />
      <CaseStudyEditorBody />
    </Container>
  );
};

export default CaseStudyEditor;
