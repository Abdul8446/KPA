import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alexa Morrison",
    image: "https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b475_pexels-shvets-production-9772760-p-500.jpg",
    text: "Joining Thema's courses was a turning point in my career. The skills I gained have opened new doors for me professionally, and the support from instructors was phenomenal. Highly recommend to anyone looking to upskill."
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b474_pexels-gustavo-rangel-9092315-p-500.jpg",
    text: "The community has been incredibly supportive since day one. The curriculum is incredibly engaging and the instructors are true professionals."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className='pt-10'>
        <div className="w-[95%] rounded-2xl border bg-[#fff9] border-white mx-auto px-4 py-16 relative">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lato-regular text-4xl font-bold text-[#003A2E] text-center mb-16"
        >
            Hear From Our Learners
        </motion.h1>

        <div className="relative h-80">
            <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
            >
                <div className="flex flex-col items-center">
                <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mb-6 object-cover"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.p
                    className="text-center text-lg text-[#BB914A] max-w-2xl mb-4 merriweather-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {testimonials[currentIndex].text}
                </motion.p>
                <motion.p
                    className="text-[#003A2E] font-medium lato-regular"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {testimonials[currentIndex].name}
                </motion.p>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="p-2 rounded-full border border-[#bb924acb] hover:bg-purple-50 transition-colors"
            >
            <ChevronLeft className="w-6 h-6 text-[#856735]" />
            </motion.button>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-2 rounded-full border border-[#bb924acb] hover:bg-purple-50 transition-colors"
            >
            <ChevronRight className="w-6 h-6 text-[#856735]" />
            </motion.button>
        </div>
        </div>
    </section>
  );
};

export default Testimonials;