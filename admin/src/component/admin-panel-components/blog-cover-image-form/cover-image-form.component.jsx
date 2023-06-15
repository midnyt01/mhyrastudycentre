import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";

const Container = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px dashed #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Lable = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    cursor: pointer;
`;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5mb in bytes
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const Text = styled.span``

const CoverImageForm = ({type}) => {

  const {courseCoverImage, setCourseCoverImage, setCoverImageUrl} = useContext(EditorContext)


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      alert('Only JPG, JPEG, and PNG files are allowed.');
      return;
    }
  
    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds 5mb limit.');
      return;
    }
    setCourseCoverImage(file)
  }

  const handleSubmit = (event) => {
    console.log('hello')
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', courseCoverImage);

    // Send the file to the server for processing
    console.log(formData)
    //change this for cover image after backend is completed
    // if (type == "blog") {
    //   fetch('http://localhost:8000/admin/coverimage', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.url); // The URL of the uploaded image
    //   setBlogImageUrl(data.url);
    // })
    // .catch(error => console.error(error));
    // }
  }
    
      return (
        <Container onSubmit={handleSubmit}>
        <Input id="file-input" accept="image/*" type="file" onChange={handleFileInputChange} />
        <Lable for="file-input">
        <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up"size="2xl" />
          <Text>Upload Cover Image</Text>
        </Lable>
      </Container>
      
      );
    };

export default CoverImageForm