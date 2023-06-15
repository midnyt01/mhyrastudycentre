import React, { useContext } from "react";
import styled from "styled-components";
import { EditorContext } from "../../../context/admin/editor.context";

const CheckboxContainer = styled.div``;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoriesTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CheckboxButton = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => (props.checked ? "#4CAF50" : "#FFFFFF")};
  color: ${(props) => (props.checked ? "#FFFFFF" : "#333333")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`;

const blogOptions = [
  { label: "Digital marketing", value: "digital marketing" },
  { label: "SEO-SERP", value: "seo" },
  { label: "Local SEO", value: "local-seo" },
  { label: "Google Ads", value: "google-ads" },
  { label: "Social Media Ads", value: "social-media" },
];

const caseStudyOptions = [
  { label: "Finance Businesss", value: "finance business" },
  { label: "E-Com Business", value: "e-com business" },
  { label: "Event Business", value: "event business" },
  { label: "Healt & Fitness Business", value: "health and fitness buisness" },
  { label: "Education Business", value: "education business" }, 
  { label: "Recycling Business", value: "recycling business" }, 
]

const CategoriesOptions = ({type}) => {
  const { blogCategories, setBlogCategories, caseStudyCategories, setCaseStudyCategories } = useContext(EditorContext);

  const handleCheckboxChange = (value) => {
    if (type == "blog") {
      const isChecked = blogCategories.includes(value);
    if (isChecked) {
      setBlogCategories(blogCategories.filter((v) => v !== value));
    } else {
      setBlogCategories([...blogCategories, value]);
    }
    } else if (type == "case") {
      const isChecked = caseStudyCategories.includes(value);
    if (isChecked) {
      setCaseStudyCategories(caseStudyCategories.filter((v) => v !== value));
    } else {
      setCaseStudyCategories([...caseStudyCategories, value]);
    }
    }
  };

  return (
    <CheckboxContainer>
      <CategoriesTitle>Select Categories</CategoriesTitle>
      <CheckboxGroup>
        {(type == 'blog') && 
        blogOptions.map(({ label, value }) => (
          <CheckboxButton
            key={value}
            checked={blogCategories.includes(value)}
            onClick={() => handleCheckboxChange(value)}
          >
            {label}
          </CheckboxButton>
        ))}
        {(type == 'case') && 
        caseStudyOptions.map(({ label, value }) => (
          <CheckboxButton
            key={value}
            checked={caseStudyCategories.includes(value)}
            onClick={() => handleCheckboxChange(value)}
          >
            {label}
          </CheckboxButton>
        ))}
      </CheckboxGroup>
    </CheckboxContainer>
  );
};

export default CategoriesOptions;
