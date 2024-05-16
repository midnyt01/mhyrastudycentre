
import React from 'react'
import AllCourses from '../components/all-courses'
import { Route, Routes, useParams } from 'react-router-dom'
import CoursePage from './coursepage'
import Footer from '../components/footer'


const Courses = () => {
    const params = useParams();

    console.log(params)
  return (
    <>
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/:slug" element={<CoursePage />} />
        <Route path="/:slug" element={<Footer />} />
      </Routes>
    </>
  )
}

export default Courses