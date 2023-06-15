
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/global.context";
import { makeid } from "../context/helper-functions";


const Container = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 100px;
    padding-bottom: 70px;
`;

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
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
    background: rgb(254, 254, 254);
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
    background: rgb(254, 254, 254);
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
    background: rgb(254, 254, 254);
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
    padding: 12px 40px;
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
    font-size: 20px;
    color: #000;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
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

const DEFAULT_FORM_FIELD = {
    FullName: "",
    Email:"",
    PhoneNumber: "",
    Service: "",
    Message: ""
}


const ContactMeForm = () => {

    const [formField, setFormField] = useState(DEFAULT_FORM_FIELD);
    const {FullName, Email, PhoneNumber, Service, Message} = formField;

    const {addNotifiction} = useContext(GlobalContext)


    const clearFormFileds = () => {
        setFormField(DEFAULT_FORM_FIELD)
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormField({...formField, [name]: value})
    }

    const handleOnSubmitForm = async (e) => {
        e.preventDefault();
        try {
            if(FullName.length == 0 || Email.length == 0 || Service.length == 0 || PhoneNumber.length == 0) {
                console.log(`length doesn't match`) 
                return;
            }
            // let response = await httpPostContactDetails(formField);
            let response = {success: true}
            if (response.success) {
                console.log(response)
                addNotifiction(makeid(5), "success", "Demo request has been send");
                clearFormFileds();
            } else {
                addNotifiction(makeid(5), "danger", "Error in making contact, try again later")
                console.error('error in posting form details',response)
            }
        } catch (error) {
            addNotifiction(makeid(5), "danger", "Error in making contact, try again later")
            console.log('error in contact posting',error)
        }
    }

  return (
    <Container>
        <Wrapper>
            <Title>
                Contact us
            </Title>
            <ContactForm onSubmit={handleOnSubmitForm}>
                <FormInput
                    placeholder="Full Name"
                    name="FullName"
                    value={FullName}
                    onChange={handleOnChange}
                />
                <FormInput
                    placeholder="Email"
                    name="Email"
                    value={Email}
                    onChange={handleOnChange}
                />
                <FormInput
                    placeholder="Phone Number"
                    name="PhoneNumber"
                    value={PhoneNumber}
                    type="tel"
                    onChange={handleOnChange}
                />
                <FromSelect name="Service" onChange={handleOnChange} value={Service}>
                    <FormOption value="" disabled hidden>Course</FormOption>
                    <FormOption value="Class-VII">Class VII</FormOption>
                    <FormOption value="Class-IX-X">Class IX & X</FormOption>
                    <FormOption value="Traffic">JEE</FormOption>
                    <FormOption value="Leads">NEET</FormOption>
                </FromSelect>
                <MessageBox
                    placeholder="Write your message here (Optional)"
                    name="Message"
                    value={Message}
                    onChange={handleOnChange}
                />
                <SubmitButton>Book a demo class</SubmitButton>
            </ContactForm>
        </Wrapper>
        <HR />
        <SocialsContainer>
            <SocialTitle>
                Find us on social platforms
            </SocialTitle>
            <SocialWrapper>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </SocialWrapper>
        </SocialsContainer>
    </Container>
  )
}

export default ContactMeForm