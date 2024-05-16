
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/global.context";
import { makeid } from "../context/helper-functions";


import {
    Button,
    TextField,
    Box,
    Grid,
    Typography,
    Avatar,
    Container,
    CssBaseline,
    Checkbox,
    FormControlLabel,
    Select,
    MenuItem,
    InputLabel,
  } from "@mui/material";
  import { useFormik } from "formik";
import { SamplePaperSchema } from "../schema/schema.index";
import { httpPostSamplePaperQuery } from "../utils/api";


const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 100px;
    padding-bottom: 70px;
`;

const Wrapper = styled.div`
    // width: 90%;
    // margin: auto;
`;

const Title = styled.h3`
font-size: 24px;
color: #1c3d72;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-align: center;
font-weight: 600;
letter-spacing: 1px;
@media (min-width: 800px) {
    font-size: 50px;
    width: 50%;
    margin: auto;
}
`;

const ContactForm = styled.form`
    width: 90%;
    margin: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 30px;
`;

const FormInput = styled.input`
    width: 110%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    background: rgb(225, 226, 216);
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const FromSelect = styled.select`
    width: 110%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    background: rgb(225, 226, 216);
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const FormOption = styled.option`
    font-size: 17px;
    font-weight: 400;
    outline: none;
    background: rgba(225, 226, 216, 0.5);
`;

const MessageBox = styled.textarea`
    width: 110%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 17px;
    letter-spacing: 0.7px;
    font-weight: 400;
    color: black;
    border-radius: 8px;
    height: 150px;
    background: rgb(225, 226, 216);
    font-family: inherit;
    outline: none;
    border: none;
    @media(min-width: 800px) {
        width: 50%;
    }
`;

const SubmitButton = styled.button`
    border: 2px solid black;
    margin-top: 30px;
    box-sizing: border-box;
    padding: 12px 35px;
    letter-spacing: 0.5px;
    background: white;
    color: black;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: rgb(67, 97, 255);
    }
    @media (min-width: 800px){
        margin-top: 50px;
        padding: 15px 50px;
        font-size: 18px;
    }
`;

const HR = styled.hr`
width: 50%;
margin: auto;
box-sizing: border-box;
margin-top: 70px;
`

const SocialsContainer = styled.div`
    width: 100%;
`;

const SocialTitle = styled.div`
text-align: center;
margin-top: 70px;
font-size: 24px;
font-weight: 600;
letter-spacing: 0.5px;
`;

const SocialWrapper = styled.div`
width: 300px;
margin: auto;
margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;

svg {
    cursor: pointer;
}

`;


const StyledBox = styled(Box)`
  width: 100%;

  div {
    color: inherit;
  }
  label {
    color: inherit;
    z-index: 2;
    font-family: Roboto-Regular !important;
  }
  input {
    color: inherit;
  }
  fieldset {
    border-color: black;
  }

  svg {
    color: black;
  }

  @media (min-width: 800px) {
    width: 100%;
  }
`;

const DEFAULT_FORM_FIELD = {
    FullName: "",
    Standard:"",
    PhoneNumber:"",
    SchoolName: "",
    Course: "none",
}

const courses = [
    { label: "Class VIII", value: "classVIII" },
    { label: "Class IX & X", value: "classIX&X" },
    { label: "NEET", value: "neet" },
    { label: "JEE", value: "jee" },
  ];


const SamplePaperForm = () => {

    const [formField, setFormField] = useState(DEFAULT_FORM_FIELD);
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState(null);

    const {addNotifiction} = useContext(GlobalContext)

    function updateMessage (status, message) {
      setMessage({
        success: status,
        text: message
      });
      setTimeout(() => {
        setMessage(null);
      }, 2500);
    }

    const handleCourseChange = (e) => {
        console.log(e.target.value);
        setCourse(e.target.value);
      };
    
      const { values, errors, touched,resetForm, handleBlur, handleChange, handleSubmit } =
        useFormik({
          initialValues: DEFAULT_FORM_FIELD,
          validationSchema: SamplePaperSchema,
          onSubmit: async (values) => {
            console.log({ ...values, Course: course });
            let response = await httpPostSamplePaperQuery({ ...values, Course: course });
            if (response.success) {
              updateMessage(true,"enquiry send successfully")
              console.log("success")
            } else {
              updateMessage(false,"error in sending enquiry, please try again later")
            }
            resetForm(DEFAULT_FORM_FIELD)
          },
        });

  return (
    <MainContainer>
        <Wrapper>
            <Title>
                Get Sample Papers
            </Title>
            {message && <p style={{textAlign: 'center', color: message.success ? 'green' : 'red'}}>{message.text}</p>}
            {/* <ContactForm onSubmit={handleOnSubmitForm}>
                <FormInput
                    placeholder="Full Name"
                    name="FullName"
                    value={FullName}
                    onChange={handleOnChange}
                />
                <FormInput
                    placeholder="Standard"
                    name="Standard"
                    value={Standard}
                    onChange={handleOnChange}
                />
                <FormInput
                    placeholder="Phone Number"
                    name="PhoneNumber"
                    type="number"
                    value={PhoneNumber}
                    onChange={handleOnChange}
                />
                <FormInput
                    placeholder="School Name"
                    name="SchoolName"
                    value={SchoolName}
                    onChange={handleOnChange}
                />
                <FromSelect name="Service" onChange={handleOnChange} value={Service}>
                    <FormOption value="" disabled hidden>Course</FormOption>
                    <FormOption value="Class-VII">Class VII</FormOption>
                    <FormOption value="Class-IX-X">Class IX & X</FormOption>
                    <FormOption value="Traffic">JEE</FormOption>
                    <FormOption value="Leads">NEET</FormOption>
                </FromSelect>
                <SubmitButton>Get Sample Paper Now !</SubmitButton>
            </ContactForm> */}
                    <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StyledBox component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="FullName"
                label="Full Name"
                name="FullName"
                autoComplete="full name"
                type="text"
                value={values.FullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.FullName && Boolean(errors.FullName)}
                helperText={touched.FullName && errors.FullName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Standard"
                label="Standard"
                name="Standard"
                autoComplete="standard"
                type="text"
                value={values.Standard}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Standard && Boolean(errors.Standard)}
                helperText={touched.Standard && errors.Standard}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="PhoneNumber"
                label="Phone Number"
                name="PhoneNumber"
                autoComplete="Phone number"
                type="text"
                value={values.PhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.PhoneNumber && Boolean(errors.PhoneNumber)}
                helperText={touched.PhoneNumber && errors.PhoneNumber}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="SchoolName"
                label="School Name"
                name="SchoolName"
                autoComplete="School Name"
                type="text"
                value={values.SchoolName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.SchoolName && Boolean(errors.SchoolName)}
                helperText={touched.SchoolName && errors.SchoolName}
                style={{ marginBottom: "1.5rem" }} // Add margin-bottom style
              />
              <Select
                native
                defaultValue="none"
                value={course}
                onChange={handleCourseChange}
                fullWidth
                margin="normal"
                id="course"
                name="course"
                onBlur={handleBlur}
                error={touched.Course && Boolean(errors.Course)}
                helperText={touched.Course && errors.Course}
                style={{ marginBottom: "1rem" }} // Add margin-bottom style
              >
                <option value="none">Select a Course</option>
                {courses.map((course) => (
                  <option key={course.value} value={course.value}>
                    {course.label}
                  </option>
                ))}
              </Select>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, textAlign: "center", fontSize: "1.2rem" }}
              >
                Get Sample Paper Now !
              </Button>
                </div>
              
            </StyledBox>
          </Box>
        </Container>
        </Wrapper>
        <HR />
        {/* <SocialsContainer>
            <SocialTitle>
                Find us on social platforms
            </SocialTitle>
            <SocialWrapper>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </SocialWrapper>
        </SocialsContainer> */}
    </MainContainer>
  )
}

export default SamplePaperForm;