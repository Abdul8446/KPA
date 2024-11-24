import React, { useRef } from 'react'
import HeroCoursesPage from '../components/HeroCoursesPage'
import CourseList from '../components/CourseList'

function CoursesPage() {
  const courseListRef = useRef(null);

  const scrollToCourseList = () => {
    courseListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
        <HeroCoursesPage onScrollToCourseList={scrollToCourseList}/>
        <CourseList ref={courseListRef}/>
    </>
  )
}

export default CoursesPage