import React, { useRef ,useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useMobile } from '../contexts/MobileContext';

const images = [
  'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg',
  'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b40d_pexels-alexander-suhorucov-6457562%20(1).webp',
  'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b42f_pexels-william-fortunato-6140676.webp',
];

const ParallaxCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { isMobile } = useMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the index to the next image
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);
 
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const frameY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])
  const frameMobY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const imageMobY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

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
    <div ref={containerRef} className="relative flex w-full mt-16 items-center justify-center aspect-[4/5] md:aspect-[4/5] lg:aspect-[5/4] 2xl:aspect-[5/3] px-4">
      {/* Background decorative elements */}
      <div className={`absolute ${isMobile?'inset-y-7 inset-x-7':'inset-10 lg:inset-10'} bg-[#fff9] border border-white rounded-2xl sm:rounded-3xl 2xl:rounded-[3rem] opacity-50 transition-all duration-300 transform rotate-[-6deg]`}
      />
      
      {/* Foreground decorative element */}
      <div className={`absolute ${isMobile?'inset-y-7 inset-x-7':'inset-10 lg:inset-10'} bg-[#fff9] border border-white rounded-2xl sm:rounded-3xl 2xl:rounded-[3rem] opacity-50 transition-all duration-300 transform rotate-[4deg]`} 
      />
      <motion.div
        style={{ y: isMobile?frameMobY:frameY }}
        // ref={containerRef}
        className={`relative w-[98%] h-[95%] ${isMobile?'rounded-2xl transition duration-1000 ease-in-out':'rounded-3xl transition duration-[1.5s] ease-in-out'} overflow-hidden `}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >


        {/* Main Image */}
        <motion.div 
          className={`absolute lg:-inset-x-10 md:-inset-x-10 sm:-inset-x-10 lg:-inset-y-28 md:-inset-y-24 sm:-inset-y-8 -inset-x-10 -inset-y-16 bg-black ${isMobile?'transition duration-1000':'transition duration-[1.5s]'}`}
          style={{ y: isMobile?imageMobY:imageY }}
        >
          <AnimatePresence initial={false}>
            <div className="absolute inset-0">
              {/* Current Image */}
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                className="w-full h-full object-cover absolute top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1, ease: 'easeInOut' } }}
                style={{
                  x: mouseXSpring,
                  y: mouseYSpring,
                }} 
              />
              
              {/* Next Image to Overlap Transition */}
              <motion.img
                key={images[(currentIndex + 1) % images.length]} // Preview the next image
                src={images[(currentIndex + 1) % images.length]}
                className="w-full h-full object-cover absolute top-0 left-0"
                style={{
                  visibility: currentIndex === (currentIndex + 1) % images.length ? 'hidden' : 'visible',
                  x: mouseXSpring,
                  y: mouseYSpring,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} // Keep this image semi-visible during transition
                transition={{ opacity: { duration: 1, ease: 'easeInOut' } }}
              />
            </div>
          </AnimatePresence>
          
        </motion.div>

        
      </motion.div>
      <motion.div
        style={{ y: isMobile?frameMobY:frameY }}
        // ref={containerRef}
        className={`absolute w-[98%] h-[95%] rounded-3xl ${isMobile?'transition duration-1000':'transition duration-[1.5s]'} ease-in-out`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
          {/* Decorative Elements */}
          <motion.div 
          //   style={{ y: decorY }}
            className="absolute inset-0 pointer-events-none transition"
          >
            {/* Purple Badge */}
            <div className={`flex absolute ${isMobile?'scale-[.6] bottom-20 -translate-x-11 rounded-xl':'sm:scale-75 md:scale-100 bottom-28 sm:-left-12 md:-left-7'} bg-[#692eaa] text-white px-6 py-6`}
              style={{borderRadius:isMobile?'':'22% 7% 22% 22% / 50% 7% 50% 50%'}}
            >
              <div>
                <h1 className="text-3xl font-bold">5K</h1>
                <p className="text-xs">Students</p>
              </div>
              <div className='w-[8em] ml-2 flex justify-center flex-col'>
                <div className='h-[7px] w-full bg-[#a361ec] rounded'></div>
                <div className='h-[7px] w-[60%] mt-3 bg-[#a361ec] rounded'></div>
              </div>
            </div>

            {/* Green Badge */}
            <div className={`absolute flex -right-7 top-14 ${isMobile?'scale-[.6] rounded-xl':'sm:scale-75 md:scale-100 rounded-full'} bg-emerald-400 text-[#2A4965] px-4 py-4`}>
              <img className='w-[3rem] h-[3rem] mr-5' src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b49e_icon-element-2.svg" alt="" />
              <div className='mr-2'>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs">Courses</p>
              </div>
            </div>

            {/* Decorative Flower */}
            <div className={`absolute -right-8 -bottom-12 ${isMobile?'scale-[.5]':'sm:scale-75 md:scale-100'} w-32 h-32 opacity-20`}>
              <img src=" https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b49e_icon-element-2.svg" alt="" />
            </div>
          </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxCard;

