import React from "react";
import styled from "styled-components";
import AdminImage from "../assets/admin-image.jpeg";
import AdminImage2 from "../assets/admin-image-2.jpg";

const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 100px;
    @media (min-width: 800px) {
      width: 80%;
    }
`;

const MessageContainer = styled.div`
    margin: 100px 0;
`;

const Header = styled.h2``;

const Wrapper = styled.div`
display: flex;
column-gap: 100px;
margin-top: 30px;
flex-direction: column;

@media (min-width: 800px) {
  flex-direction: row;
}
`;

const ImageContainer = styled.div`

    img {
        width: 90%;
        height: auto;
        @media (min-width: 800px) {
          width: 200px;
        }
    }
`;

const InfoContainer = styled.div`
`;

const Message = styled.p`
width: 100%;
font-size: 17px;
margin: 15px 0;
`;
const BoldMessage = styled.p`
width: 90%;
font-size: 17px;
margin: 15px 0;
font-weight: 600;
`;

const AdminMessages = () => {
  return (
    <Container>
      <MessageContainer>
        <Header>
            From the Director’s desk : Suyog Nildawar
        </Header>
        <Wrapper>
          <ImageContainer>
            <img src={AdminImage} alt="admin-image" />
          </ImageContainer>
          <InfoContainer>
            <Message>Teaching is the only profession that give you an opportunity to build the future of the country. The students are the future of the country and we being a teacher can mould them in such a manner that the future of the student as well as the whole country should be CRISTAL BRIGHT. Our motive for students should not only be teaching but also building their overall personality, so that we can give a responsible citizen to the country for tomorrow.
            </Message>
            <BoldMessage>
            Mr. Suyog S. Nildawar
            </BoldMessage>
            <BoldMessage>
            Director
            </BoldMessage>
            <BoldMessage>
            Mhyra Study Centre Pvt. Ltd
            </BoldMessage>
          </InfoContainer>
        </Wrapper>
      </MessageContainer>

      <MessageContainer>
        <Header>
        From the Director’s desk: Vivek Gour
        </Header>
        <Wrapper>
          <ImageContainer>
            <img src={AdminImage} alt="admin-image" />
          </ImageContainer>
          <InfoContainer>
            <Message>In today’s scenario, we face new challenges every day.  Thus one requires an innovative approach , deep sensitization , bonding with the children and never emphasis to address these challenges in the context of our rapidly expanding society. The constant endeavor is to shape tomorrow’s children’s into well balance, academy sound, morally upright individuals brimiming with confidence and competence. Our vision  is to educate a generation who will be model citizen, ready to face the challenges of tomorrow.
            </Message>
            <Message>
            We believe each children is the most valuable asset of our society. Each child is unique and has a certain basic need which not realised at the right time will create a gap which eventually result into a stunt growth of the child teacher’s play a vital role to create efficient effective learning environment. We provide technology supported learning to the student . The technology skill will endure our children to prepare for the future with open minds while enhancing their learning experiences.
            </Message>
            <Message>
            I would like to conclude by sharing that our students have unimaginative ideas, only they need to be directed rightly.  Let us support them and give them time to reflect and search themselves.
            </Message>
            <BoldMessage>
            Mr. Vivek R. Gour
            </BoldMessage>
            <BoldMessage>
            Director
            </BoldMessage>
            <BoldMessage>
            Mhyra Study Centre Pvt. Ltd
            </BoldMessage>
          </InfoContainer>
        </Wrapper>
      </MessageContainer>

      <MessageContainer>
        <Header>
        Administrator Speech : Reena Shah
        </Header>
        <Wrapper>
          <ImageContainer>
            <img src={AdminImage2} alt="admin-image" />
          </ImageContainer>
          <InfoContainer>
            <BoldMessage>Message from the head of the administration
            </BoldMessage>
            <Message>
            I’m very pleased to welcome you and your child  to  “Mhyra Study Center Pvt. Ltd.” looking forward  to work with you and to provide your child with the best educational opportunities possible. 
            </Message>
            <Message>
            “Children are given to us” -- on loan for a very short period of time. They come to us like packets of seeds,  with no pictures on the cover and no guarantees . We do not know what they will look like, act like or have the potential to become in future.
            </Message>
            <Message>
            Our job like  the gardener is to  meet their needs as best as we can, “To give proper nourishment , love,  attention,  care and hope for the best”
            </Message>
            <Message>
            To reach the unreachable stars ……. a dream,  a vision , and an inspiration ……… this is what abscesses us at “ MHYRA STUDY CENTRE PVT. LTD.”
            </Message>
            <BoldMessage>
            Mrs. Reena N. Shah
            </BoldMessage>
            <BoldMessage>
            Administrator 
            </BoldMessage>
            <BoldMessage>
            Mhyra Study Centre Pvt. Ltd
            </BoldMessage>
          </InfoContainer>
        </Wrapper>
      </MessageContainer>
    </Container>
  );
};

export default AdminMessages;
