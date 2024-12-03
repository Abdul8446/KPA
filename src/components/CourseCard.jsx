import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useMobile } from '../contexts/MobileContext';

const CourseCard = () => {
  const {isMobile} = useMobile() 
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const courses = [
    {
        img:'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b637_pexels-shvets-production-9774368-p-500.jpg',
        title:'',
        category:'',
        duration:'',
        price:''
    }
  ]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const frameY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])
  const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;
    const xPct = (mouseX / bounds.width - 0.5) * 20;
    const yPct = (mouseY / bounds.height - 0.5) * 20;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={containerRef} className={`relative flex ${isMobile?'aspect-[5/3]':'lg:aspect-square md:aspect-square sm:aspect-[5/3]'} w-full items-center justify-center `}>
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 bg-[#bd9d66] z-0 rounded-3xl transition-all duration-1000 transform rotate-[-4deg]"
      />
      
      {/* Foreground decorative element */}
      <motion.div 
        variants={{
            hover:{rotate:-8}
        }}
        transition={{
          duration: .3, // Make animation slower (1.5 seconds)
          ease: 'easeInOut', // Use a smoother easing
        }}
        className="absolute inset-0 bg-[#79918c] -z-10 rounded-3xl transform rotate-[-4deg]" 
      />
      <motion.div
        variants={{
            hover: { rotate:2 },
        }}
        transition={{
          duration: .5, // Make animation slower (1.5 seconds)
          ease: 'easeInOut', // Use a smoother easing
        }}
        className={`relative w-full h-full ${isMobile?'rounded-xl':'rounded-3xl'} overflow-hidden`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >


        {/* Main Image */}
        <motion.div 
          className="absolute -inset-10 transition duration-1000"
          style={{ y: imageY }}
        >
          <img
            src='https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg'
            className="transform w-full h-full object-cover rounded-3xl"
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
            //   backgroundImage:'url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg)'
            }}
          />
        </motion.div>

        
      </motion.div>
      <motion.div
        style={{ y: frameY }}
        // ref={containerRef}
        className="absolute w-full aspect-[4/3] rounded-3xl transition duration-1000 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
      </motion.div>
    </div>
  );
};

export default CourseCard;

