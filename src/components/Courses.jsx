// import React from 'react';
// import { motion } from 'framer-motion';
// import CourseCard from './CourseCard';
// import { useMobile } from '../contexts/MobileContext';

// const Courses = () => (
//     const {isMobile} = useMobile()
//     return (
//         <section className="text-[#003A2E] py-10 text-center">
//             <div className={`w-[95%] mx-auto bg-[#fff9] ${isMobile?'':'p-16'} rounded-2xl border border-white`}>
//                 <h2 className="text-3xl text-[#003A2E] mb-8">Empower your skills</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//                     {[...Array(6)].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className="rounded p-4 transform transition min-h-[400px]"
//                             whileHover="hover"
//                             initial="initial"
//                         >
//                             <CourseCard/>
//                             <div className="mt-4">
//                                 <h3 className="text-xl text-[#003A2E]">Course Title</h3>
//                                 <p>Course description goes here</p>
//                             </div>
//                             <motion.button 
//                                 variants={{
//                                     hover: { opacity:1,scale: 1 },
//                                     initial: { scale: .5 ,opacity:0}
//                                 }}
//                                 className='rounded-full py-2 text-lg mt-10 w-full border border-[#003A2E]'>
//                                 About the course
//                             </motion.button>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// );

// export default Courses;


import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import { useMobile } from '../contexts/MobileContext';
import { Book, Clock, DollarSign, ArrowRight } from 'lucide-react';

const Courses = () => {
    const { isMobile } = useMobile();

    return (
        <section className="text-[#003A2E] py-10 text-center">
             <div className={`w-[95%] mx-auto bg-[#fff9] ${isMobile?'px-2 py-5':'p-16'} rounded-2xl border border-white`}>
                 <h2 className="text-3xl lg:text-4xl lato-bold text-[#003A2E] mb-3">Empower your skills</h2>
                 <p className='merriweather light mb-8 px-5'>Discover your potential with courses designed to inspire and empower. Start your journey to success with us today!</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                     {[...Array(6)].map((_, i) => (
                         <motion.div
                             key={i}
                             className="rounded p-4 transform transition min-h-[400px]"
                             whileHover={!isMobile && "hover"}
                             initial={!isMobile && "initial"}
                             whileInView={isMobile && "hover"}
                             viewport={{amount:.8}}
                         >
                             <CourseCard/>
                             <div className="mt-6">
                                  {/* Stats Row */}
                                <div className="flex items-center gap-6 text-xs">
                                    <div className="flex items-center gap-1">
                                        <Book size={16} />
                                        <span>STUDENTS</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>3 WEEKS</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className='text-sm'>BHD</span>
                                        <span>1175</span>
                                    </div>
                                </div>
                                 <h3 className="mt-4 text-xl text-[#003A2E] text-left lato-regular">Conquering Public Speaking: Confidence, Clarity, and Charisma</h3>
                                 {/* <p>Course description goes here</p> */}
                             </div>
                             <motion.button 
                                 variants={{
                                     hover: { opacity:1,scale: 1 },
                                     initial: { scale: .8 ,opacity:0}
                                 }}
                                 transition={{
                                    duration: .5, // Make animation slower (1.5 seconds)
                                    ease: 'easeInOut', // Use a smoother easing
                                 }}
                                 className='rounded-full flex justify-between px-3 py-2 text-md mt-10 w-full border border-[#003A2E] bg-white'>
                                 <span className='merriweather-light'>About the course</span><ArrowRight/>
                             </motion.button>
                         </motion.div>
                     ))}
                 </div>
             </div>
         </section>
    );
};

export default Courses;
