import React, { useContext } from "react";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 95%;
  margin-bottom: 20px;
  font-size: 17px;
  margin-top: 8px;
`;

const MetaContainers = () => {
  const {
    courseMetaTitle,
    setCourseMetaTitle,
    courseMetaDescription,
    setCourseMetaDescription
  } = useContext(EditorContext);

  const handleMetaTitleChange = (event) => {
    setCourseMetaTitle(event.target.value);
  };

  const handleMetaDescriptionChange = (event) => {
    setCourseMetaDescription(event.target.value);
  };
  

  return (
    <div>
    <Label htmlFor="metaTitle">Meta Title</Label>
    <Input
      type="text"
      id="metaTitle"
      placeholder="Enter meta Title"
      value={courseMetaTitle}
      onChange={handleMetaTitleChange}
    />
    <Label htmlFor="metaDescription">Meta Description</Label>
    <Input
      type="text"
      id="metaDescription"
      placeholder="Enter meta description"
      value={courseMetaDescription}
      onChange={handleMetaDescriptionChange}
    />
  </div>
  )
};

export default MetaContainers;
