// import React, { useEffect, useRef } from 'react'
// import { motion } from "framer-motion";
// import { X } from 'lucide-react';
// import { useMobile } from '../contexts/MobileContext';

// function ToggleMenu({ isOpen, onClose }) {
//     const {isMobile} = useMobile()
//     const containerRef = useRef(null); 
//     const menuItems = [
//         "Home",
//         "Courses",
//         "About",
//         "Events",
//         "Blog",
//         "Contact",
//         "Store",
//         "Questions",
//       ];

//     // Animation Variants
//     const menuVariants = {
//         hidden: { x: "100%" }, // Initially off the screen (to the right)
//         visible: { x: 0 }, // Slide into view
//     };
    
//     // Scroll to top when the component mounts
//     useEffect(() => {
//         if (containerRef.current && isMobile) {
//             containerRef.current.scrollTo({ top: 0 });
//         }
//         console.log(containerRef.current)
//     }, [isOpen, isMobile]);

//   return (
//     <motion.div
//         className="h-full fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-green-100 to-blue-50 flex items-center justify-center p-8 z-[60]"
//         initial="hidden"
//         animate={isOpen ? "visible" : "hidden"}
//         variants={menuVariants}
//         transition={{ type: "spring", stiffness: 70, damping: 15, duration: 0.3,delay:isOpen?0:1 }}
//     >
//       <div ref={containerRef} className={`absolute flex ${isMobile?'flex-col overflow-scroll inset-2':'flex-row-reverse inset-14'} gap-6`}>
//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity:isOpen?1:0 }}
//             transition={{ duration: isOpen?1:.5, delay:0.2 }}
//             className={`shadow-lg relative  flex justify-center rounded-3xl p-6 m-4 ${isMobile?'w-[90%] mx-auto':'w-full md:w-1/2'} `}
//         >
//             <div className='absolute inset-0 border transform rounded-3xl bg-white z-[61]'></div>
//             <div className='absolute inset-0 border border-white transform -rotate-3 rounded-3xl z-[60]'></div>
//             <div className='absolute inset-0 transform rotate-3 bg-white bg-opacity-50 rounded-3xl z-[59]'></div>
//             <motion.ul 
//                 initial={{ opacity: 0 , y: 20}}
//                 whileInView={{ opacity: 1 , y: 0}}
//                 transition={{ duration: 0.6, delay:0.5 }}
//                 className="relative space-y-4 min-w-48 z-[100]"
//             >
//                 {menuItems.map((item, index) => (
//                 <li
//                     key={index}
//                     className="group text-purple-800 flex items-center font-bold cursor-pointer"
//                 >
//                     <div 
//                         className='bg-purple-800 h-0 w-0 transform rotate-45 mr-0 group-hover:h-4 group-hover:w-4 group-hover:mr-4 rounded-sm transition-all duration-300 ease-linear'
//                     ></div>
//                     <span className='text-3xl lato-bold'>{item}</span>
//                 </li>
//                 ))}
//             </motion.ul>
//         </motion.div>
//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity:isOpen?1:0 }}
//             transition={{ duration: isOpen?1:.5, delay:0.2 }}
//             className={`bg-white flex justify-center shadow-lg rounded-3xl p-6 m-4 ${isMobile?'w-[90%] mx-auto':'w-full md:w-1/2'}`}
//         >
//             <motion.div 
//                 initial={{ opacity: 0 , y: 20}}    
//                 whileInView={{ opacity: 1 , y: 0}}
//                 transition={{ duration: 0.6, delay:0.5 }}
//                 className='max-w-[80%]'
//             >
//                 <h2 className="text-3xl lato-bold font-bold text-purple-800 mb-6">
//                     Contact 
//                 </h2>
//                 <p className='merriweather-light text-gray-600 mb-4'>VISIT US</p>
//                 <p className="merriweather-light text-gray-600 mb-4">
//                     We welcome you to our offices for a more personal interaction. Our
//                     address is:
//                 </p>
//                 <address className="merriweather-light text-purple-800 font-semibold not-italic">
//                     123 Learning Avenue,
//                     <br />
//                     Suite 100
//                     <br />
//                     Education City, EC 45678
//                 </address>
//             </motion.div>
          
//         </motion.div>
//         {/* Close Button */}
//         <div>
//             <motion.button
//                 initial={{opacity:0}}
//                 whileInView={{opacity:isOpen?1:0}}
//                 transition={{ duration: isOpen?1:.5,delay:0.2 }}
//                 onClick={onClose}
//                 className={`${isMobile?'fixed top-0 right-0':''} merriweather-light px-4 py-4 flex bg-purple-700 text-white rounded-3xl hover:bg-purple-800`}
//             >
//                 <X/> {!isMobile && <>Close</>}
//             </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ToggleMenu

import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { X } from 'lucide-react';
import { useMobile } from '../contexts/MobileContext';

function ToggleMenu({ isOpen, onClose }) {
    const {isMobile} = useMobile()
    const containerRef = useRef(null); 
    const menuItems = [
        "Home",
        "Courses",
        "About",
        "Events",
        "Blog",
        "Contact",
        "Store",
        "Questions",
      ];

    // Animation Variants
    const menuVariants = {
        hidden: { x: "100%" }, // Initially off the screen (to the right)
        visible: { x: 0 }, // Slide into view
    };
    
    // Scroll to top when the component mounts
    useEffect(() => {
        if (containerRef.current && isMobile) {
            containerRef.current.scrollTo({ top: 0 });
        }
        console.log(containerRef.current)
    }, [isOpen, isMobile]);

  return (
    <motion.div
        className="h-full fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-[#003A2E] to-[#BB914A] flex items-center justify-center p-8 z-[60]"
        // className="h-full fixed top-0 right-0 bottom-0 left-0 toggle-menu-background flex items-center justify-center p-8 z-[60]"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 70, damping: 15, duration: 0.3,delay:isOpen?0:1 }}
    >
      <div ref={containerRef} className={`absolute flex ${isMobile?'flex-col overflow-scroll inset-y-14 inset-2':'flex-row-reverse inset-14'} gap-6`}>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity:isOpen?1:0 }}
            transition={{ duration: isOpen?1:.5, delay:0.2 }}
            className={`shadow-lg relative  flex justify-center rounded-3xl p-6 m-4 ${isMobile?'w-[90%] mx-auto':'w-full md:w-1/2'} `}
        >
            <div className='absolute inset-0 border transform rounded-3xl bg-[#E9E3D4] z-[61]'></div>
            <div className='absolute inset-0 border border-[#E9E3D4] transform -rotate-3 rounded-3xl z-[60]'></div>
            <div className='absolute inset-0 transform rotate-3 bg-[#E9E3D4] bg-opacity-50 rounded-3xl z-[59]'></div>
            <motion.ul 
                initial={{ opacity: 0 , y: 20}}
                whileInView={{ opacity: 1 , y: 0}}
                transition={{ duration: 0.6, delay:0.5 }}
                className="relative space-y-4 min-w-48 z-[100]"
            >
                {menuItems.map((item, index) => (
                <li
                    key={index}
                    className="group text-[#003A2E] flex items-center font-bold cursor-pointer"
                >
                    <div 
                        className='bg-[#BB914A] h-0 w-0 transform rotate-45 mr-0 group-hover:h-4 group-hover:w-4 group-hover:mr-4 rounded-sm transition-all duration-300 ease-linear'
                    ></div>
                    <span className='text-3xl lato-bold'>{item}</span>
                </li>
                ))}
            </motion.ul>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity:isOpen?1:0 }}
            transition={{ duration: isOpen?1:.5, delay:0.2 }}
            className={`bg-[#E9E3D4] flex justify-center shadow-lg rounded-3xl p-6 m-4 ${isMobile?'w-[90%] mx-auto':'w-full md:w-1/2'}`}
        >
            <motion.div 
                initial={{ opacity: 0 , y: 20}}    
                whileInView={{ opacity: 1 , y: 0}}
                transition={{ duration: 0.6, delay:0.5 }}
                className='max-w-[80%]'
            >
                <h2 className="text-3xl lato-bold font-bold text-[#003A2E] mb-6">
                    Contact 
                </h2>
                <p className='merriweather-light text-[#BB914A] mb-4'>VISIT US</p>
                <p className="merriweather-light text-[#003A2E] mb-4">
                    We welcome you to our offices for a more personal interaction. Our
                    address is:
                </p>
                <address className="merriweather-light text-[#BB914A] font-semibold not-italic">
                    123 Learning Avenue,
                    <br />
                    Suite 100
                    <br />
                    Education City, EC 45678
                </address>
            </motion.div>
          
        </motion.div>
        {/* Close Button */}
        <div>
            <motion.button
                initial={{opacity:0}}
                whileInView={{opacity:isOpen?1:0}}
                transition={{ duration: isOpen?1:.5,delay:0.2 }}
                onClick={onClose}
                className={`${isMobile?'fixed top-2 right-2':''} merriweather-light px-4 py-4 flex bg-[#BB914A] text-[#003A2E] rounded-3xl hover:bg-opacity-80`}
            >
                <X/> {!isMobile && <>Close</>}
            </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ToggleMenu