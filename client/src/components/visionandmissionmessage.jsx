import styled from "styled-components"


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
margin: 10px 0;
`;

const Content = styled.p`
font-size: 17px;
letter-spacing: 0.4px;
`;



const VisionAndMissionMessage = () => {
  return (
    <Container>
        <MessageContainer>
            <Header>
                Our Mission
            </Header>
            <Content>
            Our Mission is to educate all the students to the highest level of academic achievements, to enable them to reach and expand their potential and to prepare them become productive, responsible, ethical,  creative and compassionate members of society.
            </Content>
        </MessageContainer>

        <MessageContainer>
            <Header>
                Our Vision
            </Header>
            <Content>
                The three pillars of our institution  :- awareness, self-belief  and responsibility.
            </Content>
        </MessageContainer>
        <Content>
        Our vision is to be become one of the most admired brand(institution) in the education sector and help young aspirants make their dream comes through quality teaching –technology , enable system and commitment. We aim to train more such smart working and bright young minds towards their goals by producing double digit all India top hundred rank holders, with our clear– out straight forward result oriented strategies. We are nearing towards that dreams.
        </Content>
    </Container>
  )
}

export default VisionAndMissionMessage