import React,{ useRef } from 'react'
import { HeroCourseDetails } from '../components/HeroCourseDetails'
import AboutCourse from '../components/AboutCourse'
import ContactForm from '../components/ContactForm'

function CourseDetailsPage() {
  const aboutCourseRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToAboutCource = () => {
    aboutCourseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
        <HeroCourseDetails onScrollToAboutCourse={scrollToAboutCource}/>
        <AboutCourse ref={aboutCourseRef} onScrollToContactForm={scrollToContactForm}/>
        <ContactForm ref={contactFormRef}/>
    </div>
  )
}

export default CourseDetailsPage