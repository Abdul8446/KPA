import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const ParallaxCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const frameY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['10%' , '-10%'])
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
    <div ref={containerRef} className="relative flex w-full mt-16 items-center justify-center min-h-[calc(100vh-200px)] px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-10 bg-[#BB914A] rounded-3xl opacity-50 transition-all duration-300 transform rotate-[-6deg]"
      />
      
      {/* Foreground decorative element */}
      <div className="absolute inset-10 bg-[#BB914A] rounded-3xl opacity-50 transition-all duration-300 transform rotate-[6deg]" 
      />
      <motion.div
        style={{ y: frameY }}
        // ref={containerRef}
        className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden transition duration-1000 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >


        {/* Main Image */}
        <motion.div 
          className="relative w-full h-full transition duration-1000"
          style={{ y: imageY }}
        >
          <motion.div
            className="absolute -top-32 -left-32 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] object-cover rounded-3xl"
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
              backgroundImage:'url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg)'
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
          {/* Decorative Elements */}
          <motion.div 
          //   style={{ y: decorY }}
            className="absolute inset-0 pointer-events-none transition"
          >
            {/* Purple Badge */}
            <div className="flex absolute bottom-14 bg-[#692eaa] text-white px-6 py-6"
              style={{borderRadius:'22% 7% 22% 22% / 50% 7% 50% 50%'}}
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
            <div className="absolute flex right-0 top-14 bg-emerald-400 text-[#2A4965] px-6 py-4 rounded-full">
              <img className='w-[3rem] h-[3rem] mr-5' src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b49e_icon-element-2.svg" alt="" />
              <div>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs">Courses</p>
              </div>
            </div>

            {/* Decorative Flower */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
              <img src=" https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b49e_icon-element-2.svg" alt="" />
            </div>
          </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxCard;

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// const ParallaxCard = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const frameY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
//   const decorY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

//   const handleMouseMove = (event) => {
//     const bounds = event.currentTarget.getBoundingClientRect();
//     const mouseX = event.clientX - bounds.left;
//     const mouseY = event.clientY - bounds.top;
//     const xPct = (mouseX / bounds.width - 0.5) * 20;
//     const yPct = (mouseY / bounds.height - 0.5) * 20;
//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-8">
//       <motion.div
//         ref={containerRef}
//         className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Background Frame */}
//         <motion.div 
//           className="absolute inset-0 bg-white rounded-3xl shadow-xl"
//           style={{ y: frameY }}
//         />

//         {/* Main Image */}
//         <motion.div 
//           className="absolute top-1/2 left-1/2 w-[140%] h-[140%]"
//           style={{
//             x: mouseXSpring,
//             y: mouseYSpring,
//             backgroundImage:"url('https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg')",
//             transform: "translate(-50%, -50%)"
//         }}
//         >
//           {/* <img
//             src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b415_pexels-charlotte-may-5966011-p-1600.jpg"
//             alt="Student smiling"
//             className="w-full h-full object-cover rounded-2xl"
//           /> */}
//         </motion.div>

//         {/* Decorative Elements */}
//         <motion.div 
//           style={{ y: decorY }}
//           className="absolute inset-0 pointer-events-none"
//         >
//           {/* Purple Badge */}
//           <div className="absolute left-6 bottom-6 bg-purple-600 text-white px-6 py-2 rounded-full">
//             <p className="font-semibold">5K</p>
//             <p className="text-xs">Students</p>
//           </div>

//           {/* Green Badge */}
//           <div className="absolute right-6 top-6 bg-emerald-400 text-white px-6 py-2 rounded-full">
//             <p className="font-semibold">24</p>
//             <p className="text-xs">Courses</p>
//           </div>

//           {/* Decorative Flower */}
//           <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
//             <img src="https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b49e_icon-element-2.svg" alt="" />
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ParallaxCard;