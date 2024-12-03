import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, GraduationCap } from 'lucide-react';
import { useCategory } from '../contexts/CategoryContext';
import { useMobile } from '../contexts/MobileContext';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate()
  const { isMobile } = useMobile()  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  return (
    <motion.div
      ref={containerRef}
      className={`border border-white hover:border-[#003A2E] mx-auto ${isMobile?'w-[95%] rounded-2xl p-6':'w-[85%] rounded-3xl p-5'} bg-[#bb924a67] h-fit `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col lg:flex-row ${isMobile?'gap-2':'gap-4'}`}>
        {/* Left side with image */}
        <motion.div className={`relative sm:rounded-xl md:rounded-2xl lg:rounded-3xl w-full ${isMobile?'min-h-[200px] rounded-xl':'sm:min-h-[250px] md:min-h-[250px] lg:min-h-[200px] lg:min-w-[30%] lg:max-w-[30%]'} overflow-hidden`}>
          <motion.div
            style={{ y: imageY }}
            className="absolute -inset-10 transition duration-[1.5s] ease-in-out"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover top-0 left-0"
            />
          </motion.div>
          {course.tags && course.tags.length > 0 && (
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-[#003A2E] text-[#E9E3D4] text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
        {/* Content and metadata wrapper */}
        <div className={`flex ${isMobile?'flex-col gap-2':'sm:flex-col md:flex-row lg:flex-row w-full gap-4'}`}>
            {/* Right side content */}
            <div className={`flex flex-col text-center justify-center p-4 sm:p-6 items-center bg-[#fff9] border border-white ${isMobile?'rounded-xl':'sm:rounded-xl md:rounded-2xl lg:rounded-3xl'} flex-1`}>
            <span className="text-[#BB914A] font-medium text-sm sm:text-base">{course.type}</span>
            <h2 className="text-2xl lato-regular text-[#003A2E] mt-2 line-clamp-2">{course.title}</h2>
            <motion.button
                onClick={()=>navigate('/course-details')}
                className="mt-4 px-4 sm:px-6 py-2 bg-[#003A2E] border border-[#BB914A] text-[#E9E3D4] rounded-full font-medium hover:bg-[#015343] hover:text-[#BB914A] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Course Details
            </motion.button>
            </div>

            {/* Right side metadata */}
            <div className={`flex flex-row md:flex-col lg:flex-col ${isMobile?'gap-2':'gap-4'} min-w-[14%] justify-center`}>
            <div className={`flex items-center justify-center flex-1 lg:w-full h-auto bg-[#fff9] border border-white ${isMobile?'rounded-xl':'sm:rounded-xl md:rounded-2xl lg:rounded-3xl'} gap-2 p-3 sm:p-4`}>
                <Clock size={15}/>
                <span className="merriweather-light h-auto text-[#003A2E] text-xs">{course.duration}</span>
            </div>

            <div className={`flex items-center justify-center flex-1 lg:w-full h-auto bg-[#fff9] border border-white ${isMobile?'rounded-xl':'sm:rounded-xl md:rounded-2xl lg:rounded-3xl'} gap-2 p-3 sm:p-4`}>
                <GraduationCap size={20}/>
                <span className="merriweather-light h-auto text-[#003A2E] text-xs">{course.type}</span>
            </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const CourseList = forwardRef((props, ref) => {
  const { selectedCategory, setSelectedCategory } = useCategory();  
//   const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [courses] = useState([
    // Academic Programs
    {
      id: 1,
      title: 'Conquering Public Speaking: Confidence, Clarity, and Charisma',
      duration: '2 WEEKS',
      type: 'Academic Programs',
      image: 'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b672_pexels-diva-plavalaguna-6149782-p-800.jpg',
      tags: ['Early Bird', 'Featured'],
    },
    {
      id: 2,
      title: 'Mastering Mathematics for Success',
      duration: '3 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['New'],
    },
    {
      id: 3,
      title: 'Advanced English Literature Studies',
      duration: '4 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 4,
      title: 'Introduction to Physics: Understanding the Universe',
      duration: '6 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Popular'],
    },
    {
      id: 5,
      title: 'History of Ancient Civilizations',
      duration: '5 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Best Seller'],
    },
    {
      id: 6,
      title: 'Biology 101: Exploring Life Sciences',
      duration: '7 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 7,
      title: 'Introduction to World Geography',
      duration: '3 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 8,
      title: 'Chemistry Basics: Understanding Reactions',
      duration: '4 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Featured'],
    },
    {
      id: 9,
      title: 'Developing Critical Thinking Skills',
      duration: '3 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 10,
      title: 'Economics for Beginners',
      duration: '4 WEEKS',
      type: 'Academic Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Early Bird'],
    },
  
    // Professional Programs
    {
      id: 11,
      title: 'Time Management Mastery for Students: Achieve More',
      duration: '3 WEEKS',
      type: 'Professional Programs',
      image: 'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b672_pexels-diva-plavalaguna-6149782-p-800.jpg',
      tags: [],
    },
    {
      id: 12,
      title: 'Project Management Essentials',
      duration: '5 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Featured'],
    },
    {
      id: 13,
      title: 'Effective Communication in the Workplace',
      duration: '2 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 14,
      title: 'Marketing Strategies for Modern Businesses',
      duration: '4 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Popular'],
    },
    {
      id: 15,
      title: 'Human Resource Management',
      duration: '6 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 16,
      title: 'Advanced Excel for Business Analytics',
      duration: '3 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['New'],
    },
    {
      id: 17,
      title: 'Digital Marketing 101',
      duration: '5 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Best Seller'],
    },
    {
      id: 18,
      title: 'Leadership and Team Building',
      duration: '4 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 19,
      title: 'Finance for Non-Financial Managers',
      duration: '3 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 20,
      title: 'Negotiation Skills for Professionals',
      duration: '3 WEEKS',
      type: 'Professional Programs',
      image: 'https://via.placeholder.com/500',
      tags: ['Early Bird'],
    },
  
    // Skill Development
    {
      id: 21,
      title: 'Learn Coding from Scratch',
      duration: '4 WEEKS',
      type: 'Skill Development',
      image: 'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b672_pexels-diva-plavalaguna-6149782-p-800.jpg',
      tags: ['Popular'],
    },
    {
      id: 22,
      title: 'Master Photoshop for Beginners',
      duration: '3 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: ['Featured'],
    },
    {
      id: 23,
      title: 'Introduction to Web Development',
      duration: '6 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 24,
      title: 'Photography Basics: Capturing Stunning Photos',
      duration: '5 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 25,
      title: 'Mobile App Development for Beginners',
      duration: '7 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: ['Best Seller'],
    },
    {
      id: 26,
      title: 'Creative Writing Workshop',
      duration: '4 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 27,
      title: 'Public Speaking and Presentation Skills',
      duration: '3 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: ['New'],
    },
    {
      id: 28,
      title: 'Basic Graphic Design with Canva',
      duration: '4 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 29,
      title: 'JavaScript Essentials for Beginners',
      duration: '5 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: ['Popular'],
    },
    {
      id: 30,
      title: 'SEO Basics for Digital Marketers',
      duration: '2 WEEKS',
      type: 'Skill Development',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
  
    // SkyBlue Kids
    {
      id: 31,
      title: 'Creative Arts for Kids',
      duration: '5 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b672_pexels-diva-plavalaguna-6149782-p-800.jpg',
      tags: [],
    },
    {
      id: 32,
      title: 'Kids Yoga and Mindfulness',
      duration: '3 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: ['Popular'],
    },
    {
      id: 33,
      title: 'STEM Adventures for Young Minds',
      duration: '4 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: ['Featured'],
    },
    {
      id: 34,
      title: 'Music and Movement for Toddlers',
      duration: '2 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 35,
      title: 'Basic Drawing for Kids',
      duration: '6 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 36,
      title: 'Introduction to Robotics for Children',
      duration: '5 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: ['New'],
    },
    {
      id: 37,
      title: 'Storytelling and Reading Club',
      duration: '3 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: ['Popular'],
    },
    {
      id: 38,
      title: 'Nature Explorers: Learning Outdoors',
      duration: '4 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
    {
      id: 39,
      title: 'Junior Science Experiments',
      duration: '4 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: ['Early Bird'],
    },
    {
      id: 40,
      title: 'Kids Baking and Cooking Class',
      duration: '2 WEEKS',
      type: 'SkyBlue Kids',
      image: 'https://via.placeholder.com/500',
      tags: [],
    },
  ]);
  
// State to manage pagination and visible courses
const [visibleCourses, setVisibleCourses] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const [isFirstLoad, setIsFirstLoad] = useState(true); // New state to track initial load

const COURSES_PER_PAGE = 3; // Number of courses to show per "page"

// Load courses based on selected category and page
const loadMoreCourses = () => {
  setLoading(true);

  // Simulate loading delay (e.g., 2 seconds)
  setTimeout(() => {
    // Filter courses based on selected category
    const filteredCourses = selectedCategory === 'All Courses'
      ? courses
      : courses.filter((course) => course.type === selectedCategory);

    // Calculate the new set of courses to display
    const newVisibleCourses = filteredCourses.slice(0, page * COURSES_PER_PAGE);

    setVisibleCourses(newVisibleCourses);
    setLoading(false);
    setIsFirstLoad(false); // No longer the first load after this point
  }, 1000); // Adjust the delay duration as needed
};

// Trigger loadMoreCourses when page changes
useEffect(() => {
  loadMoreCourses();
}, [page, selectedCategory]);

// Intersection Observer to handle infinite scroll
const observerRef = useRef();
const loadMoreRef = useRef();

useEffect(() => {
  observerRef.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  });

  if (loadMoreRef.current) {
    observerRef.current.observe(loadMoreRef.current);
  }

  return () => {
    if (loadMoreRef.current) {
      observerRef.current.unobserve(loadMoreRef.current);
    }
  };
}, [loading]);

const scrollToTop = () => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

// Condition to determine if there are more courses to load
const hasMoreCourses = selectedCategory === 'All Courses'
  ? courses.length > visibleCourses.length
  : courses.filter(course => course.type === selectedCategory).length > visibleCourses.length;

return (
    <div ref={ref} className="bg-[#fff9] mt-10 py-8 sm:py-12 lg:py-16 w-[95%] rounded-2xl border border-white mx-auto px-3 sm:px-4 lg:px-6 relative">
        {/* Navigation */}
        <div className="flex flex-col items-center sticky top-5 z-10">
            <div className="categories bg-white flex border border-[#BB914A] merriweather-light rounded-full p-1 shadow-sm mb-4 sm:mb-6 overflow-x-auto max-w-[95%]">
                {['All Courses', 'Academic Programs', 'Professional Programs', 'Skill Development', 'SkyBlue Kids'].map(
                (category) => (
                    <button
                    key={category}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap ${
                        selectedCategory === category
                        ? 'bg-[#BB914A] text-[#E9E3D4]'
                        : 'text-[#003A2E] hover:bg-[#E9E3D4]'
                    }`}
                    onClick={() => {
                        setSelectedCategory(category);
                        setPage(1); // Reset to first page when category changes
                        setIsFirstLoad(true); // Reset first load flag
                        scrollToTop(); // Scroll to top of the component
                    }}
                    >
                    {category}
                    </button>
                )
                )}
            </div>
        </div>
        <h1 className="text-xl sm:text-2xl mb-8 sm:mb-12 font-semibold text-[#003A2E] text-center px-4">
            Step Into the Classroom of Tomorrow
        </h1>

        {/* Course Cards */}
        <div className="space-y-4 sm:space-y-6">
        {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
        ))}
        </div>

        {/* Loader for infinite scroll */}
        {!isFirstLoad && loading && hasMoreCourses && (
        <div className="flex justify-center py-6">
            <div className="w-8 h-8 border-4 border-t-transparent border-[#BB914A] rounded-full animate-spin"></div>
        </div>
        )}

        {/* Invisible element to trigger loading more courses */}
        {hasMoreCourses && <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
    </div>
);
});

export default CourseList;
