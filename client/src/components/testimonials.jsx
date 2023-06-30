import styled from "styled-components";
import TestimonailCard from "./testimonial-card";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 100px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
`

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`

const Title = styled.h3`
font-size: 24px;
color: #1c3d72 !important;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-align: center;
font-weight: 600;
letter-spacing: 1px;
@media (min-width: 800px) {
    font-size: 30px;
    width: 50%;
    margin: auto;
}
`;

const DesktopSlider = styled.div`
    display: none;
    @media (min-width: 800px) {
        display: inline;
    }

`;

const MobileSlider = styled.div`
    display: inline;
    @media (min-width: 800px) {
        display: none;
    }
`;

const TestimoniesContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-top: 50px;

    /* Customize scrollbar */
    scrollbar-width: thin;
    scrollbar-color: rgb(67, 97, 255) #fcd21c;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:rgb(67, 97, 255);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgb(67, 97, 255);
    }

    &::-webkit-scrollbar-track {
        background-color: white;
        border-radius: 10px;
    }
`;

const TestimoniesWrapper = styled.div`
    display: flex !important;
    margin-bottom: 35px;
`;
const HR = styled.hr`
width: 90%;
margin: auto;
box-sizing: border-box;
margin-top: 70px;
`

const TESTIMONIALS = [0,1,2,3,4]




const Testimonials = () => {

    const settings = {
        accessibility: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // vertical: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease",
        draggable: true,
        fade: false,
        focusOnSelect: false,
        pauseOnHover: true,
        swipe: true,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        variableWidth: false,
        adaptiveHeight: false
      };

      const settings1 = {
        accessibility: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // vertical: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease",
        draggable: true,
        fade: false,
        focusOnSelect: false,
        pauseOnHover: true,
        swipe: true,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        variableWidth: false,
        adaptiveHeight: false
      };



  return (
    <Container>
        <Wrapper>
            <Title>
                What Parents And Students Say About Us
            </Title>
            {/* <TestimoniesContainer> */}
            <DesktopSlider>
            <Slider {...settings}>
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />

              </Slider>
              </DesktopSlider>
              <MobileSlider>
            <Slider {...settings1}>
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />
            <TestimonailCard />

              </Slider>
              </MobileSlider>
                {/* <TestimoniesWrapper>
                    {
                        TESTIMONIALS.map((testimonial) => {
                            return (
                                <TestimonailCard key={testimonial} id={testimonial} />
                            )
                        })
                    }
                </TestimoniesWrapper> */}
            {/* </TestimoniesContainer> */}
        </Wrapper>
    </Container>
  )
}

export default Testimonials