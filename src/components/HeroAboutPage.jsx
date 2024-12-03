import React, { useState, useEffect, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/hero-courses-page.webp'
import { ArrowDown } from 'lucide-react';

function HeroAboutPage({onScrollToAboutContent}) {
  const containerRef = useRef(null);  
  return (
    <section className='w-full'>
      <div ref={containerRef} className="relative w-[95%] rounded-2xl 2xl:rounded-3xl overflow-hidden mx-auto h-fit 2xl:h-[85vh] z-10"
      >
        <video className="absolute top-0 object-cover h-full w-auto sm:h-full sm:w-auto lg:w-screen lg:h-[700px] 2xl:w-screen 2xl:h-[1000px]" autoPlay loop muted src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b51e_766018-cd2c-884c-22f6-cf126a78c7-transcode.webm">
        {/* <source src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b51e_766018-cd2c-884c-22f6-cf126a78c7-transcode.webm" type="video/mp4" /> */}
        Your browser does not support the video tag.
        </video>
        <div className='absolute -inset-0 bg-[#002e25] opacity-80'></div>
       
        {/* Content Container */}
        <div className="relative z-10 mx-auto py-24 px-8 md:px-12 h-full md:flex 2xl:flex-col overflow-hidden">
          {/* Text Content */}
          <motion.div
            className='md:w-[75%] lg:w-1/2 2xl:w-[75%] 2xl:text-center my-auto mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl sm:text-left 2xl:text-center lato-bold md:text-5xl 2xl:text-8xl font-bold text-white mb-4">
              Nurturing <span className='text-[#BB914A]'>Minds,</span><br/>
              <span className='text-[#BB914A]'>Shaping</span> Futures
            </div>
            
            <motion.p 
              className="text-purple-100 md:text-lg merriweather-light lg:w-[80%] 2xl:text-2xl 2xl:mx-auto 2xl:w-[60%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to Kingpins, an educational institute committed to
              equipping students with the essential skills and knowledge
              for success in their chosen fields. Since our establishment in
              2017, we have been dedicated to nurturing potential and
              fostering excellence through a diverse range of programs
              tailored to meet various learning preferences.
            </motion.p>

          </motion.div>
          {/* Button */}
          <div className=' flex items-center w-full md:w-1/2 2xl:w-full 2xl:h-[20%] 2xl:items-start 2xl:mb-0'>

            {/* Main button */}
            <button className={`group mx-auto sm:mr-auto sm:mx-[unset] md:mx-auto mt-6 text-[#003A2E] whitespace-nowrap scale-75 md:scale-100 relative flex 2xl:transform 2xl:scale-125 items-center justify-between px-7 py-4 rounded-full bg-[#003A2E] transition-all duration-500 hover:bg-[#e9b65e] hover:-translate-y-1 hover:shadow-slate-600`}
                  onClick={onScrollToAboutContent}
              >
                  <p className="group-hover:text-[#B68C49] merriweather-light z-30 text-white">
                  Get to Know Us
                  </p>
                  <ArrowDown size={18} className='ml-2 text-[#B68C49] z-30'/>

                  {/* background */}
                  <div className='absolute inset-0 bg-[#003A2E] rounded-full z-10'></div>
                  
                  {/* Background decorative elements */}
                  <div
                      className="absolute inset-0 z-0 bg-[#BB914A] rounded-full opacity-50 transition-all duration-300 group-hover:rotate-0 transform rotate-[-6deg]"
                  />
                  {/* Foreground decorative element */}
                  <div
                      className="absolute inset-0 border z-20 border-[#BB914A] rounded-full group-hover:opacity-100 opacity-50 transition-all duration-300 group-hover:rotate-0 transform rotate-[6deg]"
                  />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAboutPage