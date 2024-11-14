import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const Courses = () => (
    <section className="text-[#003A2E] py-10 text-center">
        <div className="container mx-auto bg-[#fff9] rounded-2xl p-16 border border-white">
            <h2 className="text-3xl text-[#003A2E] mb-8">Empower your skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="rounded p-4 transform transition min-h-[400px]"
                        whileHover="hover"
                        initial="initial"
                    >
                        <CourseCard/>
                        {/* <div className="h-48 overflow-hidden rounded-2xl">
                            <img
                                className='h-[130%] w-[130%]'
                                src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b637_pexels-shvets-production-9774368-p-500.jpg" alt="" />
                        </div> */}
                        <div className="mt-4">
                            <h3 className="text-xl text-[#003A2E]">Course Title</h3>
                            <p>Course description goes here</p>
                        </div>
                        <motion.button 
                            variants={{
                                hover: { opacity:1,scale: 1 },
                                initial: { scale: .5 ,opacity:0}
                            }}
                            className='rounded-full py-2 text-lg mt-10 w-full border border-[#003A2E]'>
                            About the course
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Courses;
