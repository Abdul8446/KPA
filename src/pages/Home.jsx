// import React from "react";
// import Testimonials from "../components/Testimonials";
// import PartnerWithUs from "../components/PartnerWithUs";
// import Faculties from "../components/Faculties";
// import SmoothScroll from "../components/SmoothScroll";
// import { HeroSection, AnimatedHeroSection } from "../components/HeroSection";
// import CourseSection from "../components/CourseSection";
// import WhySection from "../components/WhySection";
// import Footer from "../components/Footer";
// import ImageSlider from "../components/ImageSlider";
// import BubblesBackground from "../components/BubblesBackground";
// import ParticlesBackground from "../components/ParticlesBackground";
// import FloatingShapesBackground from "../components/FloatingShapesBackground";
// import WavePatternBackground from "../components/WavePatternBackground";
// import FallingLeavesBackground from "../components/Backgrounds/FallingLeavesBackground";
// import ParticleVideoOverlay from "../components/Backgrounds/FallingLeavesBackground";
// import LandingPage from "../components/LandingPage";
// import StatsSection from "../components/StatsSectoin";
// import HomePage from "../components/LandingPage2";
// import LandingPage3 from "../components/LandingPage3";
// import CategoriesSection from "../components/CategoriesSection";
// import DividerSection from "../components/DivederSection";


// function Home() {
//   return (
//     <SmoothScroll>
//       {/* <HeroSection/> */}
//       {/* <AnimatedHeroSection/> */}
//       {/* <StatsSection/> */}
//       {/* <CategoriesSection/> */}
//       <LandingPage/>
//       {/* <HomePage/> */}
//       {/* <LandingPage3/> */}
//       {/* <CourseSection/> */}
//       {/* <WhySection/>
//       <Testimonials/>
//       <PartnerWithUs/> */}
//       {/* <div data-scroll-section>

//       <Faculties/>
//       </div> */}
//       {/* <Footer/> */}
//       {/* <Layout/> */}
//       {/* <ImageSlider/> */}
//       {/* <BubblesBackground/>
//       <ParticlesBackground/>
//       <FloatingShapesBackground/>
//       <WavePatternBackground/> */}
//       {/* <ParticleVideoOverlay/> */}
//     </SmoothScroll>
//   );
// }

// export default Home;

// App.js
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Courses from '../components/Courses';
import Features from '../components/Features';
import EventsCalendar from '../components/EventsCalendar';
import SmoothScroll from "../components/SmoothScroll";
import Faculties from '../components/Faculties';
import Testimonials from '../components/Testimonials';
import LatestReads from '../components/LatestReads';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSectoin';

function Home() {
  const statsRef = useRef(null);

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

    return (
      <div className="bg-[#E9E3D4]">
            <div className="background-attachment"></div>
            <Header />
            <Hero onScrollToStats={scrollToStats}/>
            <StatsSection ref={statsRef}/>
          {/* <SmoothScroll> */}
            <Courses />
            <Features />
            <Faculties />
            {/* <EventsCalendar /> */}
            <Testimonials /> 
            <LatestReads/>
            <NewsletterSignup/>
            <Footer/>
          {/* </SmoothScroll> */}
      </div>
    );
}

export default Home;

