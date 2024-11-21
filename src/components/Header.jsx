import kpaLogoHead from '../assets/svg/kpa-logo-head.svg'
import kpaLogoWTMobile from '../assets/svg/kpa-logo-w-t-mobile.svg'
import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Facebook, Instagram, Linkedin, Share2, Link2, Orbit, OrbitIcon, Link } from 'lucide-react';
import { useMobile } from '../contexts/MobileContext';
import ToggleMenu from './ToggleMenu';

const Header = () => {
  const {isMobile} = useMobile()  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`text-[#003A2E] z-40 ${isMobile?'py-2 relative':'py-4'}`}>
        {/* Fullscreen Sliding Menu */}
        <ToggleMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        {isMobile && 
            <motion.div 
                className={`absolute bg-white rounded-xl shadow-lg p-4 mt-12 z-10 inset-x-2 mx-auto aspect-square 
                ${dropdownOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                initial={{opacity:0,scale:0.85}}
                whileInView={{opacity:dropdownOpen?1:0,scale:dropdownOpen?1:0.85}}
                transition={{ duration: 0.5 }}
            >
            <div className="grid grid-cols-2 gap-4 mb-3 h-full">
                <div 
                    className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                >😊 General</div>
                <div 
                    className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                >👩‍🎓 Students</div>
                <div
                    className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                >🧒 Kids</div>
                <div 
                    className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                >👵 Seniors</div>
            </div>
            <button className="flex items-center justify-between w-full bg-[#BB914A] text-[#003A2E] px-4 py-2 rounded-lg">
                <span>All courses</span>
                <span className="bg-[#003A2E] text-white px-2 py-1 rounded-md text-xs">New</span>
            </button>
            </motion.div>
        }
        <div className="w-[90%] mx-auto flex justify-between items-center pr-12 lg:pr-[3.25rem] md:pr-16 sm:pr-[4.5rem]">
            <div className='flex items-center'>
                {/* logo section */}
                <img className={`${isMobile?'h-8 w-60':'h-16 w-auto'}`} src={kpaLogoWTMobile} alt="" />
                {/* Navigation Menu */}
                <div className={`${isMobile?'':"relative pb-2 ml-2 mt-2"}`} onMouseLeave={()=> setDropdownOpen(false)}>
                    <button 
                    onMouseEnter={() => setDropdownOpen(true)} 
                    className={`${isMobile?'scale-[75%]':'scale-100'} flex items-center gap-2 text-[#003A2E] px-4 py-2 border-[2px] border-transparent rounded-full hover:bg-[#B68C49] hover:bg-opacity-50 hover:border-[#B68C49] transition duration-500`}>
                        <span className={`text-lg ${isMobile?'leading-[0.4]':'leading-[0.5]'}`}>•••<br />•••<br />•••</span>
                        <span className="text-xl lato-regular">Courses</span>
                    </button>
                    {!isMobile &&
                        <motion.div 
                            className={`absolute bg-white rounded-xl shadow-lg p-4 mt-2 z-10 w-96 aspect-square 
                            ${dropdownOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                            initial={{opacity:0,scale:0.85}}
                            whileInView={{opacity:dropdownOpen?1:0,scale:dropdownOpen?1:0.85}}
                            transition={{ duration: 0.5 }}
                        >
                        <div className="grid grid-cols-2 gap-4 mb-3 h-full">
                            <div 
                                className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                                style={{backgroundImage:"url('https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                            >😊 General</div>
                            <div 
                                className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                                style={{backgroundImage:"url('https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                            >👩‍🎓 Students</div>
                            <div
                                className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                                style={{backgroundImage:"url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                            >🧒 Kids</div>
                            <div 
                                className="bg-[#F9F4F4] p-3 rounded-lg text-center text-[#003A2E] bg-cover"
                                style={{backgroundImage:"url('https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                            >👵 Seniors</div>
                        </div>
                        <button className="flex items-center justify-between w-full bg-[#BB914A] text-[#003A2E] px-4 py-2 rounded-lg">
                            <span>All courses</span>
                            <span className="bg-[#003A2E] text-white px-2 py-1 rounded-md text-xs">New</span>
                        </button>
                        </motion.div>
                    }
                </div>
            </div>
            {/* Search Bar */}
            {/* <div className="flex items-center border border-[#003A2E] rounded-full px-3 py-1 w-80">
            <input
                type="text"
                className="flex-grow focus:outline-none text-[#003A2E] placeholder-[#003A2E] bg-transparent"
                placeholder="Search courses, or instructors"
            />
            <button className="text-[#003A2E]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.708 1.14a5.5 5.5 0 1 1 7.778-7.778 5.5 5.5 0 0 1-7.778 7.778z"/>
                </svg>
            </button>
            </div> */}
            {/* Links and Icons */}
            <div className="flex items-center">
            <a href="#" className={`text-[#003A2E] lg:block md:block xl:block sm:hidden ${isMobile?'hidden':''} text-xl lato-regular rounded-full border-[2px] border-transparent hover:border-[#B68C49] hover:bg-[#B68C49] hover:bg-opacity-50 px-3 py-2 md transition duration-500`}>Home</a>
            <a href="#" className={`text-[#003A2E] lg:block md:block xl:block sm:hidden ${isMobile?'hidden':''} text-xl lato-regular rounded-full border-[2px] border-transparent hover:border-[#B68C49] hover:bg-[#B68C49] hover:bg-opacity-50 px-3 py-2 transition duration-500`}>About</a>
            <div className="max-w-xs py-4" onMouseLeave={() => setSocialOpen(false)}>
                <button onMouseEnter={() => setSocialOpen(true)}
                className={`${isMobile && 'hidden'} w-12 ml-2 h-12 border border-[#003A2E] rounded-2xl flex items-center justify-center cursor-pointer`}
            >
                <Link className='w-5 h-5'/>
                <motion.div 
                    className="absolute space-y-4 bg-white rounded-xl shadow-lg p-4 top-full -mt-6 -ml-4 z-10"
                    initial={{opacity:0,scale:0.85}}
                    whileInView={{opacity:socialOpen?1:0,scale:socialOpen?1:0.85}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Social media buttons */}
                    <div className="space-y-3">
                    <button
                        className="w-full p-3 flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                        // onClick={() => handleShare('facebook')}
                    >
                        <Facebook className="w-5 h-5" />
                    </button>
                    
                    <button
                        className="w-full p-3 flex items-center justify-center rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                        // onClick={() => handleShare('linkedin')}
                    >
                        <Linkedin className="w-5 h-5" />
                    </button>
                    
                    <button
                        className="w-full p-3 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors"
                        // onClick={() => handleShare('instagram')}
                    >
                        <Instagram className="w-5 h-5" />
                    </button>
                    </div>
                </motion.div>
                </button>
            </div>
            <div className="flex items-center">
                <motion.div 
                    onClick={() => setIsMenuOpen(true)}
                    className={`${isMobile?'scale-75 right-2':'right-9'} group fixed overflow-hidden w-16 z-50 h-14 border border-[#634c27] bg-[#B68C49] bg-opacity-50 hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-2xl flex items-center justify-center cursor-pointer`}
                >
                    <div className='absolute z-40 inset-0 bg-[#B68C49] rounded-2xl translate-y-1 group-hover:translate-y-0 transition duration-300'></div>
                    <span className={`z-50 ${isMobile?'translate-x-2':'translate-x-3'} group-hover:-translate-x-10 transition duration-300 ease-in`}>•</span><span className={`z-50 ${isMobile?'translate-x-2':'translate-x-3'} group-hover:-translate-x-10 transition duration-500 ease-in`}>•</span><span className={`z-50 ${isMobile?'translate-x-2':'translate-x-3'} group-hover:-translate-x-10 transition duration-[600ms] ease-in`}>•</span>
                    <span className='z-50 translate-x-16 group-hover:-translate-x-2 transition duration-[600ms] ease-in'>•</span><span className='z-50 translate-x-16 group-hover:-translate-x-2 transition duration-[800ms] ease-in'>•</span><span className='z-50 translate-x-16 group-hover:-translate-x-2 transition duration-[900ms] ease-in'>•</span>
                {/* ••• */}
                </motion.div>
            </div>
            </div>
            
        </div>
    </header>
  );
};

export default Header;
