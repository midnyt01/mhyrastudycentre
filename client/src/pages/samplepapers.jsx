
import styled from "styled-components";
import SamplePaperForm from "../components/samplepapers-form.";
import Footer from "../components/footer";

const Container = styled.div`
width: 100%;
box-sizing: border-box;
padding: 20px 20px;
margin-top: 100px;
background: white;
@media (min-width: 800px){
  padding: 50px 100px;
}
`;

const Heading  = styled.h1``;

const Content = styled.p`
    margin-top:  30px;

`;

const Wrapper = styled.div``;


const SamplePapers = () => {
  return (
    <Container>
        <Heading>
            Sample Papers
        </Heading>
        <Content>
        Elevate your exam preparation with our game-changing sample papers. Crafted by expert educators, these papers offer a realistic exam experience, covering key subjects and topics. Identify strengths, target weaknesses, and refine your study plan with our comprehensive solutions. Boost confidence and conquer exams with ease. Parents, support your child's academic journey by accessing progress tracking and engaging in their success. Don't miss this opportunity to excel. Download our sample papers today and unleash your true potential for exam success!
        </Content>
        <Wrapper>
            <SamplePaperForm />
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default SamplePapers