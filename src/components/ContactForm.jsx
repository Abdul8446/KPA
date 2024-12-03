import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

const ContactForm= forwardRef((props, ref ) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
    newsletter: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section ref={ref} className='pt-10'>
        <div className="min-h-screen py-10 px-5 border border-white w-[95%] rounded-2xl 2xl:rounded-3xl mx-auto flex flex-col items-center justify-center bg-[#fff9]">
            <h1 className="text-2xl lato-bold text-center mb-8 text-[#003A2E]">
                Secure Your <span className="lato-black underline decoration-[#BB914A]">Spot Now</span>
            </h1>
            <div className="w-full max-w-xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl z-10 shadow-xl p-8 w-full max-w-xl relative border border-[#BB914A]"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {[
                            { label: "Name", value: formData.name, placeholder: "Sophia", key: "name" },
                            { label: "Surname", value: formData.surname, placeholder: "Thompson", key: "surname" },
                            { label: "Email", value: formData.email, placeholder: "example@email.com", key: "email" },
                            { label: "Phone", value: formData.phone, placeholder: "123-456-7890", key: "phone" },
                        ].map((field, index) => (
                            <div key={index} className="relative group">
                                <span className="z-20 absolute merriweather-light left-4 top-5 bg-[#BB914A] text-[#003A2E] px-2 text-sm rounded-full">
                                    {field.label}
                                </span>
                                <input
                                    type={field.key === "email" ? "email" : "text"}
                                    placeholder={field.placeholder}
                                    className="relative merriweather-light z-10 w-full pl-24 px-5 py-4 rounded-full border border-[#003A2E] text-[#003A2E] bg-white bg-opacity-50 focus:outline-none"
                                    value={field.value}
                                    required
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                                    }
                                />
                                <div className="z-0 absolute inset-0 border opacity-50 border-[#003A2E] -bottom-1.5 top-1.5 rounded-full group-hover:translate-y-0 group-hover:-inset-1.5 transition-all duration-300 ease-in-out"></div>
                            </div>
                        ))}

                        <div className="relative">
                            <span className="absolute merriweather-light left-4 top-5 bg-[#BB914A] text-[#003A2E] px-2 text-sm rounded-full">
                                Message
                            </span>
                            <textarea
                                placeholder="Type your message here..."
                                rows={4}
                                className="w-full merriweather-light pl-24 px-4 py-3 rounded-2xl border border-[#003A2E] text-[#003A2E] focus:outline-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox sm:h-5 sm:w-5 text-[#003A2E] border-[#003A2E] rounded focus:ring-[#003A2E]"
                                    checked={formData.terms}
                                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                                />
                                <span className="text-xs sm:text-sm merriweather-light text-gray-600">
                                    By clicking this button, you agree to our{" "}
                                    <a href="#" className="text-[#BB914A] hover:underline">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-[#BB914A] hover:underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>

                            <label className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    className="form-checkbox sm:h-5 sm:w-5 text-[#003A2E] border-[#003A2E] rounded focus:ring-[#003A2E]"
                                    checked={formData.newsletter}
                                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                                />
                                <span className="text-xs sm:text-sm merriweather-light text-gray-600">
                                    I want to subscribe for a Newsletter
                                </span>
                            </label>
                        </div>

                     
                        <motion.button className={`group mr-auto sm:mr-auto sm:mx-[unset] mt-6 whitespace-nowrap  relative flex 2xl:transform 2xl:scale-125 items-center justify-between px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#003A2E] transition-all duration-500 hover:shadow-slate-600`}
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            // onClick={onScrollToAboutContent}
                        >
                            <p className="group-focus:text-opacity-50 merriweather-light z-30 text-white">
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
                    </form>
                </motion.div>
                <div className='absolute inset-y-2 -inset-x-2 md:inset-y-5 md:-inset-x-5 border  border-[#BB914A] rounded-xl z-0'></div>
                <div className='absolute hidden md:block inset-y-10 -inset-x-10 border  border-[#BB914A] rounded-xl -z-10'></div>
            </div>

        </div>
    </section>
  );
})

export default ContactForm

