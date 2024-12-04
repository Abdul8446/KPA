import React, { useState, useEffect, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/hero-blogs-page.webp'
import { ArrowDown } from 'lucide-react';

const HeroBlogsPage = ({onScrollToCourseList}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])
  

  return (
    <section>
      <div ref={containerRef} className="relative w-[95%] rounded-2xl overflow-hidden mx-auto h-fit z-10"
      >
        <motion.div className='absolute -inset-y-16 -inset-x-2 bg-cover z-0 transition duration-[1.5s] ease-in-out'
          style={{backgroundImage:`url(${heroImage})`,y:imageY}}
        ></motion.div>
        <div className='absolute -inset-0 bg-gradient-to-r from-[#002e25] to-[#6cb185] opacity-80'></div>
      

        {/* Content Container */}
        <div className="relative z-10 mx-auto py-24 h-full flex flex-col overflow-hidden justify-center">
          {/* Text Content */}
          <motion.div
            className='w-[80%] mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="text-3xl lato-bold md:text-5xl font-bold text-white mb-4"
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.2 }}
            >
              News and Insights
            </div>
            
            <motion.p 
              className="text-purple-100 text-lg mb-8 merriweather-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Where Education Meets Inspiration
            </motion.p>

            {/* Button */}
            <motion.button
              onClick={onScrollToCourseList}
              className="inline-flex merriweather-light items-center px-6 py-3 bg-[#003A2E] border border-[#B68C49] hover:bg-[#015343] 
                        text-white rounded-full transition-colors duration-200 hover:text-[#B68C49]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Articles
              <ArrowDown size={18} className='ml-2 text-[#B68C49]'/>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroBlogsPage;