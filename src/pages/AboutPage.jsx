import React,{ useRef } from 'react'
import HeroAboutPage from '../components/HeroAboutPage'
import MissionVision from '../components/MissionVision'
import Milestones from '../components/Milestones'
import NewsletterSignup from '../components/NewsletterSignup'

function AboutPage() {
  const aboutContentRef = useRef(null);

  const scrollToAboutContent = () => {
    aboutContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className=''>
        <HeroAboutPage onScrollToAboutContent={scrollToAboutContent}/>
        <MissionVision ref={aboutContentRef}/>
        <Milestones/>
        <NewsletterSignup/>
    </div>
  )
}

export default AboutPage
