import React from 'react';
import { motion } from 'framer-motion';
import ParallaxCard from './ParallaxCard';
import { useMobile } from '../contexts/MobileContext';


const Hero = ({onScrollToStats}) => {
    const { isMobile } = useMobile(); // Move the hook outside of the return

    return (
        <section className={`text-[#003A2E] ${isMobile?'':''} text-center`}>
            <div
                className={`w-[95%] mx-auto rounded-2xl border ${isMobile?'py-5':'py-[10em]'} lg:px-[6vw] md:px-[6vw] sm:px-[6vw] border-[#ffffffe6]`}
                style={{ backgroundImage: 'linear-gradient(135deg, #ffffffb3, transparent)' }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl lg:text-7xl lato-regular font-semibold mb-4"
                >
                    Shape your <span className="text-[#BB914A]">success.</span> <br />
                    Explore courses that <br />
                    <span className="text-[#BB914A]">elevate</span> your life.
                </motion.h1>
                <p className='px-5 merriweather-light'>Future-proof your career. Master skills that matter today.</p>
                {/* Main button */}
                <button className={`${isMobile?'scale-75':'scale-100'} group mx-auto mt-6 text-[#003A2E] relative z-10 flex items-center justify-between w-[160px] min-h-[4em] px-7 py-4 rounded-full bg-[#BB914A] shadow-lg transition-all duration-500 hover:bg-[#e9b65e] hover:-translate-y-1 hover:shadow-slate-600`}
                    onClick={onScrollToStats}
                >
                    <p className="merriweather-light z-30">Discover</p>
                    <div className="z-30 flex items-center w-4 h-4">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                    {/* Background decorative elements */}
                    <div
                        className="absolute inset-0 z-0 bg-[#BB914A] rounded-full opacity-50 transition-all duration-300 group-hover:rotate-0 transform rotate-[-6deg]"
                    />
                    {/* Foreground decorative element */}
                    <div
                        className="absolute inset-0 border z-20 bg-[#BB914A] border-[#fcf0cf] rounded-full opacity-50 transition-all duration-300 group-hover:inset-[2px] group-hover:rotate-0 transform rotate-[6deg]"
                    />
                </button>
                <ParallaxCard />
            </div>
        </section>
    );
};

export default Hero;
