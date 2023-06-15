
import styled from "styled-components"
import AdminMessages from "../components/admin-messages";
import Footer from "../components/footer";

const Container = styled.div`
    background: white;
    box-sizing: border-box;
    padding: 150px 30px 10px 30px;
    @media (min-width: 800px) {
      padding: 170px 70px 70px 70px;
    }
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const Header = styled.h1`
  font-size: 27px;
  @media (min-width: 800px) {
    font-size: 35px;
  }
`;

const QuoteContainer = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 50px;
    @media (min-width: 800px) {
      width: 70%;
      margin-top: 100px;
    }
`;

const Quote = styled.q`
font-size: 18px;
font-weight: 400;
letter-spacing: 0.5px;
font-style: italic;
`;


const AboutUs = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          About / About Us
        </Header>
      </HeaderContainer>
        <QuoteContainer>
            <Quote>
            The education and training of children is among the most meritorious acts of human kind and draweth down the grace and favor of All-Merciful, for education is the indispensable foundation  of all human excellence and Alloweth man to work his way to heights and abiding glory.
            </Quote>
        </QuoteContainer>
        <AdminMessages />
        <Footer />
    </Container>
  )
}

export default AboutUs