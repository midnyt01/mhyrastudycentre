import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;
  @media (min-width: 800px) {
    width: 80%;
    margin-top: 100px;
  }
`;

const MessageContainer = styled.div`
  margin: 40px 0;
`;

const Header = styled.h2`
  margin: 10px 0 20px 0px;
`;

const Content = styled.ul`
  font-size: 17px;
  letter-spacing: 0.4px;
  li {
    margin-bottom: 10px;
  }
`;

const VisionAndMissionMessage = () => {
  return (
    <Container>
      <MessageContainer>
        <Header>Our Mission</Header>
        <Content>
          <li>To provide quality education to all the students to attain highest levels of academic achievements.</li>
            <li>To enrich the knowledge and student’s understanding so that they could reach their desired potentials in their lives.</li>
            <li>To educate the students to get their thoughts organised in such a way that they become more creative and productive in their desired work.</li>
            <li>To establish ethics in students so that they have compassion and become responsible members of society.</li>
            <li>To provide training to the students so they score well in all competitive exams and bring us glory.</li>
        </Content>
      </MessageContainer>

      <MessageContainer>
        <Header>Our Vision</Header>
        <Content>
    <li>Our primary vision is to become the provider of proper guidance towards academics and non-academics to the students who has mere resources.</li>
	<li>We envisage the technology enabled teaching practices will bring a new era of learning so that the students will be prepared thoroughly for the future and we provide these facilities in our institutions.</li>
	<li>Student oriented, faculty training fetches us the potential to generate result oriented strategies so that the students score more in academic exams and entrance tests.</li>
	<li>Within two years, we see ourselves in one of the top Institutions, students desire to make their guide and take admissions for their education.</li>
	<li>Your Commitment is our Guaranty. We want to see as you parents do, your child in flying colours and we work for it with your child.</li>
        </Content>
      </MessageContainer>
    </Container>
  );
};

export default VisionAndMissionMessage;
