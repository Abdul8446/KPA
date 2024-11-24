import React, { useState, useEffect, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/hero-courses-page.webp'
import { ArrowDown } from 'lucide-react';

const HeroCoursesPage = ({onScrollToCourseList}) => {
  const [fontSize, setFontSize] = useState(calculateFontSize(window.innerWidth));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])
  // Function to calculate font size based on screen width
  function calculateFontSize(width) {
    // Adjust the formula based on your needs
    // Example: Make the font size scale between 12px and 100px based on screen width
    const minSize = 12; // Minimum font size in pixels
    const maxSize = 490; // Maximum font size in pixels
    const screenWidth = 1920; // Base screen width for max font size (adjust as needed)
    
    // Scale the font size based on the width of the window
    const calculatedSize = (width / screenWidth) * maxSize;
    console.log(width,screenWidth,maxSize)
    console.log(Math.max(minSize, Math.min(calculatedSize, maxSize)))
    // Clamp the font size between minSize and maxSize
    return Math.max(minSize, Math.min(calculatedSize, maxSize));
  }

  // Effect to handle window resize and update font size
  useEffect(() => {
    const handleResize = () => {
      setFontSize(calculateFontSize(window.innerWidth));
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div ref={containerRef} className="relative w-[95%] rounded-2xl overflow-hidden mx-auto h-fit z-10"
      >
        <motion.div className='absolute -inset-y-16 -inset-x-2 bg-cover z-0 transition duration-[1.5s] ease-in-out'
          style={{backgroundImage:`url(${heroImage})`,y:imageY}}
        ></motion.div>
        <div className='absolute -inset-0 bg-gradient-to-r from-[#002e25] to-green-500 opacity-80'></div>
        {/* Animated background squares */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 bg-[#003A2E]/30 rounded-lg"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 180,
              opacity: 0.3
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Content Container */}
        <div className="relative z-10 mx-auto pt-12 pb-6 h-full flex flex-col overflow-hidden justify-center">
          {/* Text Content */}
          <motion.div
            className='w-[80%] mx-auto mb-16'
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
              Transform Your Career Path
            </div>
            
            <motion.p 
              className="text-purple-100 text-lg mb-8 merriweather-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Elevate your career with our targeted professional courses.
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
              Our offer
              <ArrowDown size={18} className='ml-2 text-[#B68C49]'/>
            </motion.button>
          </motion.div>

          {/* Large "Courses" Text */}
          <motion.h1
            className={`mx-auto mt-auto leading-[0.8] w-fit lato-regular text-[#B68C49] box-border`}
            style={{fontSize:`${fontSize}px`}}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Courses
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroCoursesPage;