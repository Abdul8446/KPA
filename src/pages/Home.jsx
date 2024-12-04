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
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSectoin';
import { LatestReads } from '../components/LatestReads';

function Home() {
  const statsRef = useRef(null);

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

    return (
      <>
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
        {/* </SmoothScroll> */}
      </>
    );
}

export default Home;

