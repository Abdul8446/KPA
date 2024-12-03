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
        <div className="w-[95%] border border-white bg-[#fff9] rounded-2xl mx-auto items-center justify-center px-4 md:px-24 lg:px-52 py-16 md:py-24 lg:py-32">
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
                  className="flex-1 relative group"
                  >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="merriweather-light w-full z-10 relative px-4 md:px-6 py-3 md:py-4 rounded-full border border-[#003A2E] focus:outline-none transition-colors text-sm md:text-base bg-white bg-opacity-50"
                    />
                    <div className="z-0 absolute inset-0 border opacity-50 border-[#003A2E] -bottom-1.5 top-1.5 rounded-full group-hover:translate-y-0 group-hover:-inset-1.5 transition-all duration-300 ease-in-out"></div>
                  </motion.div>

                  <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex-1 relative group"
                  >
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="merriweather-light z-10 relative w-full px-4 md:px-6 py-3 md:py-4 rounded-full border border-[#003A2E] focus:outline-none transition-colors text-sm md:text-base bg-white bg-opacity-50 "
                    />
                    <div className="z-0 absolute inset-0 border opacity-50 border-[#003A2E] -bottom-1.5 top-1.5 rounded-full group-hover:translate-y-0 group-hover:-inset-1.5 transition-all duration-300 ease-in-out"></div>
                  </motion.div>

                  {/* <motion.div
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
                  </motion.div> */}
                  <motion.button className={`group sm:mx-[unset] whitespace-nowrap  relative flex 2xl:transform 2xl:scale-125 items-center justify-between px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#003A2E] transition-all duration-500 hover:shadow-slate-600`}
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      // onClick={onScrollToAboutContent}
                  >
                      <p className="group-active:text-opacity-50 merriweather-light z-30 text-white">
                      Send Message
                      </p>
                      {/* background */}
                      <div className='absolute inset-0 bg-[#003A2E] rounded-full z-10'></div>
                      
                      {/* Background decorative elements */}
                      <div
                          className="absolute inset-0 z-0 bg-[#003A2E] rounded-full opacity-50 transition-all duration-300 group-hover:rotate-0 transform rotate-[-6deg]"
                      />
                      {/* Foreground decorative element */}
                      <div
                          className="absolute inset-0 border z-20 border-[#003A2E] rounded-full opacity-50 transition-all duration-300 group-hover:rotate-0 transform rotate-[6deg]"
                      />
                  </motion.button>
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