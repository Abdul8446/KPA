// import { motion } from "framer-motion";
// import { Facebook, Linkedin, Instagram, MapPin, Clock, Phone, Mail, ChevronDown } from "lucide-react";
// import { useState } from "react";

// export default function HeroContactPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 pt-12 lg:pt-20">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
//               Let&apos;s Connect:
//               <br />
//               <span className="text-purple-700">Your Next Step</span>
//               <br />
//               Begins Here
//             </h1>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative"
//           >
//             <img
//               src="/placeholder.svg?height=400&width=600"
//               alt="Students learning"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-xl"
//             />
            
//             {/* Stats Badges */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5 }}
//               className="absolute -top-4 right-4 bg-amber-400 text-purple-900 px-4 py-2 rounded-full font-semibold shadow-lg"
//             >
//               <div className="flex items-center gap-2">
//                 <svg
//                   className="w-6 h-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 4L3 7V20L12 23L21 20V7L12 4Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span>5K</span>
//                 <span className="text-sm">Students</span>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.7 }}
//               className="absolute top-1/2 -left-8 bg-white text-purple-900 px-4 py-3 rounded-xl font-semibold shadow-lg"
//             >
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-purple-600" />
//                 <span>20</span>
//                 <span className="text-sm">years of<br />experience</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9 }}
//           className="mt-12 flex justify-center"
//         >
//           <button className="group relative bg-white text-purple-900 px-8 py-4 rounded-full shadow-lg flex items-center gap-3 hover:shadow-xl transition-shadow">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-red-500" />
//               <span className="w-2 h-2 rounded-full bg-yellow-500" />
//               <span className="w-2 h-2 rounded-full bg-green-500" />
//             </div>
//             <span className="font-medium">Let&apos;s Connect and Transform Your Learning Journey</span>
//             <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
//           </button>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-24 bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-12">
//             {/* Contact */}
//             <div>
//               <h3 className="text-xl font-semibold text-purple-900 mb-6">Contact</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-purple-600 mt-1" />
//                   <div>
//                     <p className="font-medium">VISIT US</p>
//                     <p className="text-gray-600">
//                       123 Learning Avenue, Suite 100
//                       <br />
//                       Education City, EC 45678
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Clock className="w-5 h-5 text-purple-600 mt-1" />
//                   <div>
//                     <p className="font-medium">OUR DOORS ARE OPEN</p>
//                     <p className="text-gray-600">Monday to Friday, from 9 AM to 5 PM.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Get in Touch */}
//             <div>
//               <h3 className="text-xl font-semibold text-purple-900 mb-6">Get in Touch</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-purple-600" />
//                   <div>
//                     <p className="font-medium">EMAIL US</p>
//                     <a href="mailto:name@example.com" className="text-purple-600 hover:text-purple-700">
//                       name@example.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-purple-600" />
//                   <div>
//                     <p className="font-medium">CALL US</p>
//                     <a href="tel:+12345678954" className="text-purple-600 hover:text-purple-700">
//                       +12 (34) 567 851 54
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div>
//               <h3 className="text-xl font-semibold text-purple-900 mb-6">Social Media</h3>
//               <p className="text-gray-600 mb-6">
//                 Follow us on our social platforms to stay updated with the latest news, courses, and
//                 community events.
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Facebook, Linkedin, Instagram, MapPin, Clock, Phone, Mail, ChevronDown, ArrowDown } from 'lucide-react';

export default function EducationLanding() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });
  
    const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])  

    return (
    <section className='pb-48 sm:pb-20 md:pb-0 lg:pb-8 2xl:pb-10'>
        <div ref={containerRef} className="w-[95%] mx-auto rounded-2xl 2xl:rounded-3xl bg-[#fff9] py-10 md:py-0 md:pt-10 px-8 sm:px-10 lg:px-20 border relative border-white">
        {/* Hero Section */}
            <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between mx-auto md:px-6 md:pt-8 lg:pt-16">
            {/* Left Column */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-2xl sm:text-5xl 2xl:text-7xl lato-black leading-tight">
                <span className="bg-gradient-to-r from-[#003A2E] to-[#078a70] bg-clip-text text-transparent">
                    Let's Connect:
                    <br />
                    Your Next Step
                    <br />
                    Begins Here
                </span>
                </h1>
            </motion.div>

            {/* Right Column */}
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full lg:w-[60%] aspect-[5/4] md:aspect-[4/2] lg:aspect-[5/4]"
            >
                <div className='absolute inset-0 overflow-hidden rounded-2xl 2xl:rounded-3xl'>
                    <motion.div
                        style={{y:imageY,backgroundImage:"url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b40c_pexels-alexander-suhorucov-6457549-p-800.jpg)"}}
                        alt="Students collaborating"
                        className="absolute inset-x-0 -inset-y-10 md:-inset-y-16 bg-cover transition duration-[1.5s] ease-in-out"
                    ></motion.div>
                </div>
                
                {/* Stats Badge - Students */}
                <div
                // initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                // transition={{ delay: 0.5 }}
                className="absolute top-5 -right-9 sm:-right-8 lg:-right-5 bg-amber-400/90 transform 2xl:scale-125 lg:scale-100 sm:scale-75 scale-[0.65] backdrop-blur-sm px-4 py-2 border border-white rounded-2xl font-medium shadow-lg"
                >
                <div className="flex items-center gap-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-[#003A2E]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className='flex flex-col text-center'>
                        <span className="text-[#003A2E] text-3xl lato-black">5K</span>
                        <span className="text-[#003A2E] text-sm merriweather-regular">Students</span>
                    </div>
                </div>
                </div>

                {/* Stats Badge - Experience */}
                <div
                className="absolute top-1/2 -left-8 bg-white/80 border border-[#003A2E] transform 2xl:scale-125 lg:scale-100 sm:scale-75 scale-[0.6] px-4 py-4 rounded-2xl font-medium shadow-lg"
                >
                    <div className="flex flex-col items-center text-center">
                        <MapPin className="w-8 h-8 text-[#003A2E] mb-1" />
                        <span className="text-[#003A2E] text-3xl lato-black">7</span>
                        <span className="text-[#003A2E]/80 text-sm whitespace-nowrap">years of<br />experience</span>
                    </div>
                </div>
            </div>

        
            </div>

            {/* CTA Button */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute inset-x-0 md:inset-x-[unset] md:flex md:justify-center md:w-full md:relative z-20 "
            >
                <button className="group translate-y-14 inset-x-0 md:translate-y-1/2 border border-[#003A2E] md:hover:translate-y-[40%] transition duration-300 absolute top-[100%] md:relative transform md:scale-75 lg:scale-100 md:w-[80%] lg:w-[63%] 2xl:w-1/2 bg-white px-8 py-4 rounded-xl md:rounded-full shadow-lg flex flex-col sm:flex-row items-center gap-4 justify-between hover:shadow-xl">
                    <div className="flex items-center">
                        <div className='w-12 2xl:w-20 h-12 2xl:h-20 z-30 bg-center bg-cover rounded-full'
                            style={{backgroundImage:'url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b437_pexels-daria-liudnaya-7354792-p-500.jpg)'}}
                        ></div>
                        <div className='w-12 2xl:w-20 h-12 2xl:h-20 z-20 -translate-x-2 bg-center bg-cover rounded-full'
                            style={{backgroundImage:'url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b435_pexels-daria-liudnaya-7354544-p-500.jpg)'}}
                        ></div>
                        <div className='w-12 2xl:w-20 h-12 2xl:h-20 z-10 -translate-x-4 bg-center bg-cover rounded-full'
                            style={{backgroundImage:'url(https://cdn.prod.website-files.com/66cdea42c062fe4a0348b29d/66cdea42c062fe4a0348b451_pexels-artem-podrez-7242502-p-500.jpg)'}}
                        ></div>
                    </div>
                    <div className="flex flex-col items-center 2xl:text-lg text-[#BB914A] merriweather-light">
                    <span className="">Let's Connect and Transform</span>
                    <span className="">Your Learning Journey</span>
                    </div>
                    <div className='h-full flex items-center '>
                        <ArrowDown className="w-8 2xl:w-10 h-8 2xl:h-10 text-[#003A2E]" />
                    </div>
                </button>
            </motion.div>
            <div 
                className="z-10 w-[90%] h-[1px] mx-auto" 
                style={{
                    background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(168, 100%, 11%, 1) 50%, hsla(0, 0%, 100%, 1) 100%)",
                    position: "absolute",
                    inset: "auto 0 0",
                }}
            ></div>

        {/* Footer */}
        {/* <footer className="mt-32 bg-white rounded-t-[2.5rem] py-16">
            <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16"> */}
                {/* Contact */}
                {/* <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
                    Contact
                </h3>
                <div className="space-y-6">
                    <div>
                    <p className="text-purple-900 font-medium uppercase text-sm tracking-wider mb-2">VISIT US</p>
                    <p className="text-purple-600/80 leading-relaxed">
                        We welcome you to our offices for a more personal
                        interaction. Our address is:
                    </p>
                    <p className="text-purple-900 mt-2">
                        123 Learning Avenue, Suite 100
                        <br />
                        Education City, EC 45678
                    </p>
                    </div>
                    <div>
                    <p className="text-purple-900 font-medium uppercase text-sm tracking-wider mb-2">OUR DOORS ARE OPEN</p>
                    <p className="text-purple-900">
                        Monday to Friday, from 9 AM to 5 PM.
                    </p>
                    </div>
                </div>
                </div> */}

                {/* Get in Touch */}
                {/* <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
                    Get in Touch
                </h3>
                <div className="space-y-6">
                    <div>
                    <p className="text-purple-900 font-medium uppercase text-sm tracking-wider mb-2">EMAIL US</p>
                    <a href="mailto:name@example.com" className="text-purple-600 hover:text-purple-700">
                        name@example.com
                    </a>
                    </div>
                    <div>
                    <p className="text-purple-900 font-medium uppercase text-sm tracking-wider mb-2">CALL US</p>
                    <a href="tel:+12345678954" className="text-purple-600 hover:text-purple-700">
                        +12 (34) 5678-954
                    </a>
                    </div>
                </div>
                </div> */}
                {/* Social Links */}
                {/* <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
                    Follow Us
                </h3>
                <div className="flex gap-8">
                    <a href="#" target="_blank" className="text-purple-600 hover:text-purple-700">
                    <Facebook size={32} />
                    </a>
                    <a href="#" target="_blank" className="text-purple-600 hover:text-purple-700">
                    <Linkedin size={32} />
                    </a>
                    <a href="#" target="_blank" className="text-purple-600 hover:text-purple-700">
                    <Instagram size={32} />
                    </a>
                </div>
                </div> */}
            {/* </div>
            </div>
        </footer> */}
        </div>
    </section>
  );
}
