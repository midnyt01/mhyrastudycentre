import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { EditorContext } from "../../../context/admin/editor.context";
import { httpDeleteCourseById } from "../../../utils/nodejs/admin";


const ShipmentWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 30px;
`;

const Shipment = styled.div`
  flex: 2;
  font-size: 22px;
`;

const ActionContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  column-gap: 50px;
`;

const Action = styled.div`
cursor: pointer;
`;

const DeleteCard = styled.div`
    position: fixed;
    top: 300px;
    background-color: white;
    border-radius: 10px;
    width: 350px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow:
  0px 0px 2.2px rgba(0, 0, 0, 0.02),
  0px 0px 5.3px rgba(0, 0, 0, 0.028),
  0px 0px 10px rgba(0, 0, 0, 0.035),
  0px 0px 17.9px rgba(0, 0, 0, 0.042),
  0px 0px 33.4px rgba(0, 0, 0, 0.05),
  0px 0px 80px rgba(0, 0, 0, 0.07)
;
`;

const CloseDelete = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 0 0;
    margin: 0;
    text-align: right;

`

const DeleteText = styled.div`
    width: 90%;
    margin: 20px auto;
    text-align: center;
    font-size: 16px;
`;

const Confirmation = styled.div`
    width: 60%;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
`

const Yes = styled.div`
    box-sizing: border-box;
    padding: 5px 30px;
    color: white;
    background-color: coral;
    font-weight: 600;
    cursor: pointer;
`;

const No = styled.div`
    box-sizing: border-box;
    padding: 5px 20px;
    color: white;
    background-color: greenyellow;
    font-weight: 600;
    cursor: pointer;`;


const CourseCard = ({course}) => {
  const {CourseId ,CourseTitle} = course

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const {allCourses, setAllCourse} = useContext(EditorContext)

    const navigate = useNavigate();

    const toggleDeleteCard = () => {
        setIsDeleteOpen(!isDeleteOpen);
    }

    const handleOnEdit = () => {
      navigate(`/edit-course/${CourseId}`)
    }

    const confirmDeleteCourse = async () => {
        try {
            let response = await httpDeleteCourseById(CourseId);
            console.log(response)
        if (response.success) {
            toggleDeleteCard();
            let newCourseArray = allCourses.filter((course) => {return (course.CourseId != CourseId)});
            setAllCourse(newCourseArray)
        }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <ShipmentWrapper>
      <Shipment>
        <b>Course Title : </b>
        {CourseTitle}
      </Shipment>
      <ActionContainer>
        <Action onClick={handleOnEdit}>
          <FontAwesomeIcon icon={faEdit} size="xl" />
        </Action>
        <Action onClick={toggleDeleteCard}>
          <FontAwesomeIcon icon={faRemove} size="xl" />
        </Action>
      </ActionContainer>
      {
        isDeleteOpen && <DeleteCard>
        <CloseDelete>
            <FontAwesomeIcon icon={faRemove} size="xl" style={{cursor: 'pointer'}} onClick={toggleDeleteCard}/>
        </CloseDelete>
        <DeleteText>Are you sure you want to delete course with course title <b>{course.CourseTitle}</b></DeleteText>
        <Confirmation>
            <No onClick={toggleDeleteCard}>No</No>
            <Yes onClick={confirmDeleteCourse} >Yes</Yes>
        </Confirmation>
      </DeleteCard>
      }
    </ShipmentWrapper>
  );
};

export default CourseCard;
