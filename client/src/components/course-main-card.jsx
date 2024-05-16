
import styled from "styled-components"


const Container = styled.div`
width: 90vw;
position: absolute;
border-radius: 7px;
background: white;
top: 660px;
right: 0;
left: 0;
margin-left: auto;
margin-right: auto;
box-shadow:
  0px 0px 2.2px rgba(0, 0, 0, 0.048),
  0px 0px 5.3px rgba(0, 0, 0, 0.069),
  0px 0px 10px rgba(0, 0, 0, 0.085),
  0px 0px 17.9px rgba(0, 0, 0, 0.101),
  0px 0px 33.4px rgba(0, 0, 0, 0.122),
  0px 0px 80px rgba(0, 0, 0, 0.17)
;
 @media (min-width: 800px) {
    width: 400px;
    top: 230px;
    right: 100px;
    left: auto;
    margin-left: 0;
    margin-right: 0;
 }
`;

const ImageContainer = styled.div`
img {
    width: 100%;
    height: auto;
    border-radius: 7px 7px 0 0;
}
`;


const CTAButton = styled.div`
    width: fit-content;
    margin: auto;
    margin-top: 20px;
    padding: 10px 35px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 600;
    background: #183B72;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
        background: #204d94;
      }

    @media (min-width: 800px) {
        font-size: 20px;
        padding: 10px 50px;
    }
`;

const CourseContentContainer = styled.ul`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

const CourseContentHead = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    box-sizing: border-box;
`;

const TextContent = styled.li`
    margin: 10px 15px;
    font-weight: 200;
    font-size: 17px;
`;

const PrerequisitesContainer = styled.ul`
width: 100%;
padding: 0 20px 20px 20px;
box-sizing: border-box;
`

const PrerequisitesHead = styled.div`
text-align: center;
font-size: 20px;
font-weight: bold;
padding: 10px 0;
box-sizing: border-box;
`;

const PrerequisitesLi = styled.li`
margin: 10px 15px;
font-weight: 200;
font-size: 17px;
`;

const CourseMainCard = ({courseDetails}) => {
    const {CourseImage, CourseIncludes, Prerequisites} = courseDetails;
  return (
    <Container>
        <ImageContainer>
            <img src={CourseImage} alt="course image" />
        </ImageContainer>
        <CTAButton>ENROLL COURSE NOW !</CTAButton>
        <CourseContentContainer>
            <CourseContentHead>This course includes :</CourseContentHead>
            {
                CourseIncludes.map((item) => {
                    return (
                        <TextContent>
                            {item.Content}
                        </TextContent>
                    )
                })
            }
        </CourseContentContainer>
        <PrerequisitesContainer>
            <PrerequisitesHead>Prerequisites :</PrerequisitesHead>
            {
                Prerequisites.map((item) => {
                    console.log(item)
                    return (
                        <PrerequisitesLi >{item.Content}</PrerequisitesLi>
                    )
                })
            }
        </PrerequisitesContainer>
    </Container>
  )
}

export default CourseMainCard