// import React from 'react';
// import { Sparkles } from 'lucide-react';

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

//   const highlights = [
//   ];

//   return (
//     <div className="w-full h-[80vh] bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
//       <div className="container h-full mx-auto grid md:grid-cols-3 gap-12 items-center px-16">
//         {/* Left Column - Hero Section */}
//         <div className="bg-[#BB914A] flex items-center h-full p-8 relative overflow-hidden rounded-2xl shadow-md">
//           <div className="absolute top-4 left-4">
//             <Sparkles className="w-8 h-8 text-[#003a2ec9] opacity-70" />
//           </div>
//           <div className="space-y-6">
//             <h1 className="text-4xl font-bold text-[#003A2E] leading-tight">
//               Dive into a world where knowledge and possibility converge to create a brighter future for you.
//             </h1>
//             <button className="bg-[#003a2ec9] text-white px-6 py-3 rounded-full hover:bg-[#003A2E] transition-colors">
//               About us
//             </button>
//           </div>
//         </div>

//         {/* Right Column - Features Grid */}
//         <div className="space-y-8 h-full col-span-2">
//           {/* Main Features */}
//           <div className="grid grid-cols-2 p-8 gap-x-10 h-full bg-[#fff9] backdrop-blur-md shadow-md rounded-2xl">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-cente">
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-[#003A2E] mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-700">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Highlights */}
//           <div className="grid gap-6">
//             {highlights.map((highlight, index) => (
//               <div key={index} className="bg-white/60 backdrop-blur-md shadow-md rounded-lg">
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-[#003A2E] mb-1">
//                     {highlight.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm">
//                     {highlight.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';
import { Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Innovate Learning",
      description: "We leverage technology to create immersive and interactive learning experiences."
    },
    {
      title: "Inspire Growth",
      description: "Encouraging personal and professional development for learners of all backgrounds."
    },
    {
      title: "Connect Communities",
      description: "Building bridges between students, instructors, and industries."
    },
    {
      title: "Unique learning",
      description: "We blend technology with traditional teaching for a unique learning experience."
    },
    {
      title: "The power of education",
      description: "Since our inception, we've helped thousands unlock their potential."
    },
    {
      title: "Lifelong learning",
      description: "Our courses are designed to be accessible, engaging, and impactful"
    }
  ];

  const highlights = [];

  return (
    <div className="w-full min-h-screen md:h-[80vh] bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full">
        <div className="h-full flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Hero Section */}
          <div className="bg-[#BB914A] flex items-center py-16 p-6 md:p-8 relative overflow-hidden rounded-2xl shadow-md h-full">
            <div className="absolute top-4 left-4">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#003a2ec9] opacity-70" />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003A2E] lato-regular leading-tight">
                Dive into a world where knowledge and possibility converge to create a brighter future for you.
              </h1>
              <button className="bg-[#003a2ec9] merriweather-light text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#003A2E] transition-colors text-sm md:text-base">
                About us
              </button>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="h-full md:col-span-2">
            {/* Main Features */}
            <div className="bg-[#fff9] backdrop-blur-md shadow-md rounded-2xl p-4 md:p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-2 md:p-4">
                      <h3 className="lato-regular text-lg md:text-xl font-semibold text-[#003A2E] mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <p className="merriweather-light text-sm md:text-base text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Highlights */}
            {highlights.length > 0 && (
              <div className="grid gap-4 md:gap-6 mt-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-md shadow-md rounded-lg">
                    <div className="p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold text-[#003A2E] mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;