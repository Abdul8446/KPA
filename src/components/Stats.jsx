import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Stats = () => {
  return (
    <section className=" text-[#003A2E] pt-10 text-center">
        <div className="container mx-auto min-h-[60vh] bg-[#fff9] px-8 py-16 rounded-xl relative overflow-hidden border border-white">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-yellow-200/80" />
        <div className="absolute top-24 left-24 w-4 h-4 rounded-full bg-purple-300/60" />
        <div className="absolute top-4 right-8 w-4 h-4 rounded-full bg-purple-400/60" />
        <div className="absolute bottom-12 left-1/2 text-yellow-400 text-2xl">✧</div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">

            <div className=" lg:grid-cols-4 gap-6 mt-12 grid grid-cols-2 gap-x-16 gap-y-16 w-full">

            <div className='flex items-center'>
                <h2 className="text-[#003A2E] text-2xl md:text-3xl font-bold mb-8">
                By the numbers:
                <br />
                Our Impact
                </h2>
            </div>
            <div className='relative'>
                <StatCard
                    number="5K"
                    label="Satisfied"
                    label2='students'
                    bgColor="bg-white"
                    mainRotation={-4}
                    backgroundRotation={5}
                />
                <div className={`absolute z-0 inset-0 border border-[white] rounded-2xl transform rotate-0`}></div>
            </div>
            <div className='relative'>
                <StatCard
                    number="7"
                    label="Years of"
                    label2='experience'
                    bgColor="bg-yellow-50"
                    mainRotation={4}
                    backgroundRotation={-4}
                />
                <div className={`absolute z-0 inset-0 border border-[white] rounded-2xl transform rotate-0`}></div>
            </div>
            <div className='relative'>
                <StatCard
                    number="16"
                    label="Learning"
                    label2='programs'
                    bgColor="bg-purple-50"
                    mainRotation={-4}
                    backgroundRotation={5}
                />
                <div className={`absolute z-0 inset-0 border border-[white] rounded-2xl transform rotate-0`}></div>
            </div>
            
            </div>
        </div>
        </div>
    </section>
  );
};

const StatCard = ({ number, label, label2, bgColor, mainRotation, backgroundRotation }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1, rotate: mainRotation } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${bgColor} rounded-2xl p-6 shadow-sm relative z-10`}
    >
      {/* <div className={`absolute inset-0 bg-[#BB914A] rounded-2xl transform rotate-[${backgroundRotation}deg]`}></div>   */}
      <div className="text-4xl md:text-5xl font-bold text-[#003A2E] mb-2">
        {number}
      </div>
      <div className="text-[#003A2E] text-lg">
        {label}
      </div>
      <div className="text-[#003A2E] text-lg">
        {label2}
      </div>
    </motion.div>
  );
};

export default Stats;