// import React from "react";

// const Features = () => {
//   return (
//     <section className="bg-[#003A2E] text-[#E9E3D4] py-16">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-[#BB914A] p-8 rounded-lg">
//           <h3 className="font-bold text-xl">
//             Dive into a world where knowledge and possibility converge
//           </h3>
//           <p>To create a brighter future for you.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             { title: "Immersive Learning", description: "We leverage technology to create dynamic and interactive learning" },
//             { title: "Unique Teaching", description: "We blend modern with traditional teaching for a unique learning experience" },
//             { title: "Connect Communities", description: "Building bridges between students, instructors, and industries" },
//             { title: "Lifelong Learning", description: "Our courses are designed to be accessible, engaging and impactful" },
//           ].map((feature, index) => (
//             <div key={index} className="bg-[#BB914A] p-4 rounded-lg">
//               <h4 className="font-bold">{feature.title}</h4>
//               <p>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
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

  const highlights = [
  ];

  return (
    <div className="w-full h-[80vh] bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container h-full mx-auto grid md:grid-cols-3 gap-12 items-center px-16">
        {/* Left Column - Hero Section */}
        <div className="bg-[#BB914A] flex items-center h-full p-8 relative overflow-hidden rounded-2xl shadow-md">
          <div className="absolute top-4 left-4">
            <Sparkles className="w-8 h-8 text-[#003a2ec9] opacity-70" />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#003A2E] leading-tight">
              Dive into a world where knowledge and possibility converge to create a brighter future for you.
            </h1>
            <button className="bg-[#003a2ec9] text-white px-6 py-3 rounded-full hover:bg-[#003A2E] transition-colors">
              About us
            </button>
          </div>
        </div>

        {/* Right Column - Features Grid */}
        <div className="space-y-8 h-full col-span-2">
          {/* Main Features */}
          <div className="grid grid-cols-2 p-8 gap-x-10 h-full bg-[#fff9] backdrop-blur-md shadow-md rounded-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-cente">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#003A2E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md shadow-md rounded-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#003A2E] mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
