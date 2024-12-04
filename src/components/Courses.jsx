import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import { useMobile } from '../contexts/MobileContext';
import { Book, Clock, DollarSign, ArrowRight, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const navigate = useNavigate()
    const { isMobile } = useMobile();

    return (
        <section className="text-[#003A2E] py-5 md:py-10 text-center">
             <div className={`w-[95%] mx-auto bg-[#fff9] ${isMobile?'px-2 py-10':'p-16'} rounded-2xl 2xl:rounded-3xl border border-white`}>
                 <h2 className="text-3xl lg:text-4xl lato-bold text-[#003A2E] mb-3">Featured Courses</h2>
                 <p className='merriweather light mb-8 px-5'>Explore our most important offerings designed for your success!</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                     {[...Array(6)].map((_, i) => (
                         <motion.div
                             key={i}
                             className="rounded 2xl:p-10 p-4 transform transition"
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
                             <motion.div 
                                 variants={{
                                     hover: { opacity:1,y:-20,scale: 1 },
                                     initial: { scale: .8 ,y:0,opacity:0}
                                 }}
                                 transition={{
                                    duration: .5, // Make animation slower (1.5 seconds)
                                    ease: 'easeInOut', // Use a smoother easing
                                 }}
                                 className='flex mt-10 justify-between w-full gap-5'>
                                 <button className='merriweather-light rounded-full flex justify-between px-3 py-2 text-md w-full border border-[#003A2E] bg-white'><span>About the course</span><ArrowRight/></button>
                                 <button className='rounded-full px-5 py-2 border border-[#744e0e] bg-[#BB914A]'><GraduationCap className='text-white'/></button>
                             </motion.div>
                         </motion.div>
                     ))}
                 </div>
                    <motion.button
                        onClick={()=>navigate('/courses')}
                        className="text-center mt-4 px-4 sm:px-6 py-2 bg-[#003A2E] merriweather-regular border border-[#BB914A] text-[#E9E3D4] rounded-full font-medium hover:bg-[#015343] hover:text-[#BB914A] transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View all Courses
                    </motion.button>
             </div>
         </section>
    );
};

export default Courses;
