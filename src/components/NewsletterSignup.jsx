// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const NewsletterSignup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <section className='pt-10'>
//         <div className="container bg-[#fff9] border border-white rounded-2xl mx-auto items-center justify-center px-52 py-32">
//             <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-center mb-8"
//             >
//             <span className="bg-[#bb924a96] text-[#6b532a] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
//                 NEWSLETTER
//             </span>
//             <h2 className="text-3xl font-bold text-[#003A2E] mt-4">
//                 <span className='text-[#BB914A]'>Weekly</span> Insights Await
//             </h2>
//             </motion.div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col md:flex-row gap-4">
//                 <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex-1"
//                 >
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-6 py-4 rounded-full border border-[#003a2e60] focus:outline-none focus:border-[#003a2ecc] transition-colors"
//                 />
//                 </motion.div>

//                 <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex-1"
//                 >
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-6 py-4 rounded-full border border-[#003a2e60] focus:outline-none focus:border-[#003a2ecc] transition-colors"
//                 />
//                 </motion.div>

//                 <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6 }}
//                 >
//                 <button
//                     type="submit"
//                     className="w-full md:w-auto px-8 py-4 bg-[#003A2E] text-white rounded-full hover:bg-[#016853] transition-colors font-medium"
//                 >
//                     Subscribe Now
//                 </button>
//                 </motion.div>
//             </div>

//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="flex items-center justify-center gap-2 mt-6"
//             >
//                 <input
//                 type="checkbox"
//                 id="terms"
//                 checked={isChecked}
//                 onChange={() => setIsChecked(!isChecked)}
//                 className="w-4 h-4 rounded border-[#003a2e6b] text-[#003A2E] focus:ring-[#003A2E]"
//                 />
//                 <label htmlFor="terms" className="text-sm text-[#003A2E]">
//                 By clicking this button, you agree to our{' '}
//                 <a href="#" className="underline hover:text-purple-600">
//                     Terms of Service
//                 </a>
//                 </label>
//             </motion.div>
//             </form>
//         </div>
//     </section>
//   );
// };

// export default NewsletterSignup;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className='pt-6 md:pt-10'>
        <div className="w-[95%] bg-white/10 border border-white rounded-2xl mx-auto items-center justify-center px-4 md:px-24 lg:px-52 py-16 md:py-24 lg:py-32">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6 md:mb-8"
            >
            <span className="merriweather-light bg-[#bb924a96] text-[#6b532a] px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 inline-block">
                NEWSLETTER
            </span>
            <h2 className="lato-regular text-2xl md:text-3xl font-bold text-[#003A2E] mt-3 md:mt-4">
                <span className='text-[#BB914A]'>Monthly</span> Insights Await
            </h2>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1"
                >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="merriweather-light w-full px-4 md:px-6 py-3 md:py-4 rounded-full border border-[#003a2e60] focus:outline-none focus:border-[#003a2ecc] transition-colors text-sm md:text-base"
                />
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1"
                >
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="merriweather-light w-full px-4 md:px-6 py-3 md:py-4 rounded-full border border-[#003a2e60] focus:outline-none focus:border-[#003a2ecc] transition-colors text-sm md:text-base"
                />
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full md:w-auto"
                >
                <button
                    type="submit"
                    className="merriweather-light w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#003A2E] text-white rounded-full hover:bg-[#016853] transition-colors font-medium text-sm md:text-base"
                >
                    Subscribe Now
                </button>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-2 mt-4 md:mt-6"
            >
                <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-3 h-3 md:w-4 md:h-4 rounded border-[#003a2e6b] text-[#003A2E] focus:ring-[#003A2E]"
                />
                <label htmlFor="terms" className="merriweather-light text-xs md:text-sm text-[#003A2E]">
                By clicking this button, you agree to our{' '}
                <a href="#" className="underline hover:text-[#BB914A]">
                    Terms of Service
                </a>
                </label>
            </motion.div>
            </form>
        </div>
    </section>
  );
};

export default NewsletterSignup;