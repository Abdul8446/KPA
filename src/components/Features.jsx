// // import React from 'react';
// // import { Sparkles } from 'lucide-react';

// // const Features = () => {
// //   const features = [
// //     {
// //       title: "Innovate Learning",
// //       description: "We leverage technology to create immersive and interactive learning experiences."
// //     },
// //     {
// //       title: "Inspire Growth",
// //       description: "Encouraging personal and professional development for learners of all backgrounds."
// //     },
// //     {
// //       title: "Connect Communities",
// //       description: "Building bridges between students, instructors, and industries."
// //     },
// //     {
// //       title: "Unique learning",
// //       description: "We blend technology with traditional teaching for a unique learning experience."
// //     },
// //     {
// //       title: "The power of education",
// //       description: "Since our inception, we've helped thousands unlock their potential."
// //     },
// //     {
// //       title: "Lifelong learning",
// //       description: "Our courses are designed to be accessible, engaging, and impactful"
// //     }
// //   ];

// //   const highlights = [
// //   ];

// //   return (
// //     <div className="w-full h-[80vh] bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
// //       <div className="container h-full mx-auto grid md:grid-cols-3 gap-12 items-center px-16">
// //         {/* Left Column - Hero Section */}
// //         <div className="bg-[#BB914A] flex items-center h-full p-8 relative overflow-hidden rounded-2xl shadow-md">
// //           <div className="absolute top-4 left-4">
// //             <Sparkles className="w-8 h-8 text-[#003a2ec9] opacity-70" />
// //           </div>
// //           <div className="space-y-6">
// //             <h1 className="text-4xl font-bold text-[#003A2E] leading-tight">
// //               Dive into a world where knowledge and possibility converge to create a brighter future for you.
// //             </h1>
// //             <button className="bg-[#003a2ec9] text-white px-6 py-3 rounded-full hover:bg-[#003A2E] transition-colors">
// //               About us
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Column - Features Grid */}
// //         <div className="space-y-8 h-full col-span-2">
// //           {/* Main Features */}
// //           <div className="grid grid-cols-2 p-8 gap-x-10 h-full bg-[#fff9] backdrop-blur-md shadow-md rounded-2xl">
// //             {features.map((feature, index) => (
// //               <div key={index} className="flex items-cente">
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-semibold text-[#003A2E] mb-2">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-gray-700">
// //                     {feature.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Additional Highlights */}
// //           <div className="grid gap-6">
// //             {highlights.map((highlight, index) => (
// //               <div key={index} className="bg-white/60 backdrop-blur-md shadow-md rounded-lg">
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold text-[#003A2E] mb-1">
// //                     {highlight.title}
// //                   </h3>
// //                   <p className="text-gray-700 text-sm">
// //                     {highlight.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Features;

// import React from 'react';
// import { Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Features = () => {
//   const features = [
//     {
//       title: "Innovate Learning",
//       description: "We leverage technology to create immersive and interactive learning experiences."
//     },
//     {
//       title: "Inspire Growth",
//       description: "Encouraging personal and professional development for learners of all backgrounds."
//     },
//     {
//       title: "Connect Communities",
//       description: "Building bridges between students, instructors, and industries."
//     },
//     {
//       title: "Unique learning",
//       description: "We blend technology with traditional teaching for a unique learning experience."
//     },
//     {
//       title: "The power of education",
//       description: "Since our inception, we've helped thousands unlock their potential."
//     },
//     {
//       title: "Lifelong learning",
//       description: "Our courses are designed to be accessible, engaging, and impactful"
//     }
//   ];

//   const highlights = [];

//   return (
//     <div className="">
//       <div className="w-[95%] mx-auto">
//         <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 md:gap-10">
//           {/* Left Column - Hero Section */}
//           <div className="bg-[#BB914A] flex items-center py-20 p-6 md:px-8 relative overflow-hidden rounded-2xl shadow-md">
//             <div className="absolute top-4 left-4">
//               <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#003a2ec9] opacity-70" />
//             </div>
//             <div className="">
//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003A2E] lato-regular leading-tight ">
//                 Dive into a world where knowledge and possibility converge to create a brighter future for you.
//               </h1>
//               <Link to={'/about'}>
//                 <button className="bg-[#003a2ec9] mt-4 md:mt-6 merriweather-light text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#003A2E] transition-colors text-sm md:text-base">
//                   About us
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Features Grid */}
//           <div className="h-full md:col-span-2">
//             {/* Main Features */}
//             <div className="bg-[#fff9] border border-white shadow-md rounded-2xl p-4 md:p-8 h-full">
//               <h1 className='text-center text-2xl md:text-4xl text-[#003A2E] lato-black mb-6'>Our Values</h1>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-10">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="p-2 md:p-4">
//                       <h3 className="lato-regular text-lg md:text-xl font-semibold text-[#003A2E] mb-1 md:mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="merriweather-light text-sm md:text-base text-gray-700">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Additional Highlights */}
//             {highlights.length > 0 && (
//               <div className="grid gap-4 md:gap-6 mt-6">
//                 {highlights.map((highlight, index) => (
//                   <div key={index} className="bg-white/60 backdrop-blur-md shadow-md rounded-lg">
//                     <div className="p-3 md:p-4">
//                       <h3 className="text-base md:text-lg font-semibold text-[#003A2E] mb-1">
//                         {highlight.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-gray-700">
//                         {highlight.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;



import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Users, Heart, Shield, TrendingUp, Zap, Network, Lightbulb, Compass, Smile } from 'lucide-react'
import { Link } from 'react-router-dom'
import kpaLogoHeadWhite from '../assets/svg/kpa-logo-head-white.svg'
// import Image from 'next/image'

const values = [
  { number: "01", title: "Excellence", description: "Striving for top-tier education standards", icon: BookOpen },
  { number: "02", title: "Inclusivity", description: "Creating a welcoming environment for all", icon: Users },
  { number: "03", title: "Empathy", description: "Providing personalized attention to students' needs", icon: Heart },
  { number: "04", title: "Integrity", description: "Upholding ethical standards", icon: Shield },
  { number: "05", title: "Growth", description: "Encouraging continuous development", icon: TrendingUp },
  { number: "06", title: "Empowerment", description: "Giving students tools to achieve goals", icon: Zap },
  { number: "07", title: "Community", description: "Fostering collaboration and respect", icon: Network },
  { number: "08", title: "Innovation", description: "Embracing new teaching methods and technologies", icon: Lightbulb },
  { number: "09", title: "Mentorship", description: "Guiding students on their educational journey", icon: Compass },
  { number: "10", title: "Compassion", description: "Caring for well-being and creating nurturing environments", icon: Smile }
]

export default function Features() {
  return (
    <div className="">
      <div className="w-[95%] py-16 mx-auto overflow-hidden border border-white px-4 relative rounded-2xl 2xl:rounded-3xl bg-gradient-to-br from-[#f5f0e6] to-[#E9E3D4]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-16 -left-16 w-64 h-64 bg-[#BB914A] rounded-full opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#003A2E] rounded-full opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#BB914A] to-[#d4ab62] flex flex-col gap-5 lg:flex-row rounded-2xl p-8 py-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-4 left-4">
            <Sparkles className="w-8 h-8 text-[#003a2ec9] opacity-70" />
          </div>
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-5xl lato-black text-white mb-6 leading-tight">
              Dive into a world of knowledge and possibility
            </h1>
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,58,46,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#003a2ec9] merriweather-regular text-white px-8 py-4 rounded-full hover:bg-[#003A2E] transition-all duration-300 text-lg font-semibold"
              >
                Explore Our Vision
              </motion.button>
            </Link>
          </div>
          <img
              src={kpaLogoHeadWhite}
              alt="Lion Logo"
              className="mx-auto h-52 aspect-square"
            />
        </motion.div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <img
              src={kpaLogoHeadWhite}
              alt="Lion Logo"
              width={120}
              height={120}
              className="mx-auto mb-6"
            /> */}
            <h2 className="text-[#003A2E] text-6xl lato-black mb-4">OUR VALUES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto merriweather-light">Guiding principles that shape our educational journey and foster a thriving learning community.</p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index*0.1 , duration: 0.8 }}
              // whileHover={{ 
              //   scale: 1.03, 
              //   boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
              //   y: -5
              // }}
              viewport={{once:true}}
              className="bg-white rounded-xl p-6 shadow-lg border border-[#003A2E]/10 flex flex-col items-start"
            >
              <div className="flex items-center mb-4">
                <span className="text-[#BB914A] text-3xl font-mono mr-3">{value.number}</span>
                <value.icon className="w-8 h-8 text-[#003A2E]" />
              </div>
              <h3 className="text-[#003A2E] text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 flex-grow">{value.description}</p>
              <motion.div
                className="w-12 h-1 bg-[#BB914A] mt-4"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
