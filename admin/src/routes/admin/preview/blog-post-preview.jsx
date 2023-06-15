import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from '../../../component/admin-panel-components/admin-topbar/topbar.component'
import { EditorContext } from '../../../context/admin/editor.context'
import { httpPostBlog } from '../../../utils/nodejs/admin'

const MONTHSMAP = {  0: "Jan",
1: "Feb",
2: "Mar",
3: "Apr",
4: "May",
5: "Jun",
6: "Jul",
7: "Aug",
8: "Sep",
9: "Oct",
10: "Nov",
11: "Dec"}

const findDate = () => {
    let ans = "";
    let todaysDate = new Date();
    let date = todaysDate.getDate();
    let month = todaysDate.getMonth();
    ans = date + " " + MONTHSMAP[month];
    return ans;
}


const Container = styled.div`
`
const Wrapper = styled.div`
width: 90%;
margin:auto;
margin-top: 85px;
box-sizing: border-box;
@media (min-width: 800px) {
    width: 80%;
}
`

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 15px 0px;
    column-gap: 20px;
`

const Action = styled.div`
    box-sizing: border-box;
    padding: 7px 20px;
    background: #4ec000;
    font-size: 20px;
    border-radius: 5px;
    color: white;
    font-weight: 400;
    cursor: pointer;
`

const Title = styled.h1`
width: 100%;
font-size: 35px;
box-sizing: border-box;
padding: 5px 15px;
margin-bottom: 0px;
@media (min-width: 800px) {
    width: 80%;
}
`
const SubInfo = styled.div`
    padding: 5px 16px;
`
const Author = styled.p`
    margin: 0;
`

const NewDate = styled.span`
    margin: 0;
`
const Read = styled.span`
    margin: 0;
    margin-left: 80px;
    @media (min-width: 800px) {
    margin-left: 200px;
    }
`

const HR = styled.hr`
    margin-bottom: 20px;
    margin-top: 17px;
    color: lightgray;
`

const CoverImageContainer = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    padding: 5px 15px;
    box-sizing: border-box;
    @media (min-width: 800px) {
    margin-bottom: 20px;
    }
`
const CoverImage = styled.img`
    width: 100%;
`

const Content = styled(ReactQuill)`
    h1 {
        font-size: 30px;
    }
    h2 {
        font-size: 25px;
    }
    p {
        font-size: 18px;
    }
    blockquote {
        font-size: 18px;
        color: #2f2f2f;
        border-left: 3px solid black;
        padding-left: 10px;
    }
    .ql-syntax {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        background-color: #eee;
        border-radius: 5px;
        font-size: 18px;
        box-sizing: border-box;
        padding: 2px 5px;
    }
`




const BlogPostPreview = () => {

    const navigate = useNavigate();

    const [readTime, setReadTime] = useState(null);
    const [createAt, setCreatedAt] = useState(null);
    const {blogMetaTitle, blogMetaDescription, blogTitle, blogContent, blogImageUrl, blogCategories, setBlogImageUrl, selectedBlogFile} = useContext(EditorContext);
    

    useEffect(() => {
        let words = blogContent.length/5;
        setReadTime(Math.floor(words/180));

        let date = findDate();
        setCreatedAt(date);      

    }, [])

    const handleSubmit = async () => {
        console.log('hello');
        const formData = new FormData();
        formData.append('file', selectedBlogFile);
    
        // Send the file to the server for processing
        console.log(formData)
        //if cover image form is from blog then do this
        try {
            let response = await fetch('http://localhost:8000/admin/blogcoverimage', {
                method: 'POST',
                body: formData
              })
              let data = await response.json()
              console.log(data.url);
              setBlogImageUrl(data.url);
              return data.url;
        } catch (error) {
            console.error(error)
        }
      }

    const handleOnEdit = () => {
        console.log('from nav', {blogContent})
        navigate('/create-blog-post')
    }

    const handlePublish = async () => {

        let date = new Date();
        let CreatedAt = date.getTime();
        let ImageUrl = await handleSubmit();
        let blogDetails = {
            MetaTitle : blogMetaTitle,
            MetaDescription: blogMetaDescription,
            Title: blogTitle,
            Content: blogContent,
            ImageUrl,
            Categories: blogCategories,
            Author: 'Saiyed Farhan',
            CreatedAt,
            ReadTime: readTime
        }
        let response = await httpPostBlog(blogDetails)
        if (response.success) {
            alert('blog post successfully')
        } else {
            console.log(response)
            alert('error in posting blog', response)
        }
    }

  return (
    <Container>
        <Topbar />
        <Wrapper>
            <Header>
                    <Action onClick={handleOnEdit}>Edit</Action>
                    <Action onClick={handlePublish  } >Publish</Action>
            </Header>
            {selectedBlogFile && <CoverImageContainer><CoverImage src={URL.createObjectURL(selectedBlogFile)} /></CoverImageContainer>}
            <Title>{blogTitle}</Title>
            <SubInfo>
                <Author>By Saiyed Farhan</Author>
                <NewDate>{createAt}</NewDate>
                <Read>{readTime} min Read</Read>
                <HR />
            </SubInfo>
            <Content readOnly theme='bubble' value={blogContent} />
        </Wrapper>
    </Container>
  )
}

export default BlogPostPreview