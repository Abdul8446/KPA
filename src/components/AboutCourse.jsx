import { forwardRef } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Clock, FileBadge, GraduationCap } from "lucide-react";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutCourse = forwardRef(( {onScrollToContactForm}, ref ) => {
  return (
    <section ref={ref} className="pt-10">
      <div className="min-h-screen w-[95%] mx-auto rounded-2xl 2xl:rounded-3xl bg-[#fff9] border border-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          {/* Hero Section */}
          <motion.section
            className="text-center space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h1
              className="text-4xl lato-black text-[#003A2E]"
              variants={fadeIn}
            >
              About the course
            </motion.h1>
            <motion.p
              className="text-lg text-[#003A2E] max-w-2xl mx-auto merriweather-light"
              variants={fadeIn}
            >
              Learn the art of time management. Techniques to help students
              balance academics, personal life, and achieve their goals.
            </motion.p>
          </motion.section>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 px-5 sm:px-12 lg:px-[unset] gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-4"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Goal", content: "Improve academic performance", bg: "#D8C097", rotate:-3, icon:<FileBadge className='w-8 h-8 text-[#003A2E] my-3 mx-auto'/> },
              { title: "Status", content: "Open", bg: "#C7A56B", rotate:3, icon:<GraduationCap className='w-8 h-8 text-[#003A2E] my-3 mx-auto'/> },
              { title: "Duration", content: "6 Months", bg: "#BB914A", rotate:-3, icon:<Clock className='w-8 h-8 text-[#003A2E] my-3 mx-auto'/> },
            ].map((item, index) => (
              <motion.div key={index} className='border border-white rounded-2xl'>
                <motion.div
                  // key={index}
                  className={`flex flex-col justify-center aspect-[4/2] md:aspect-[4/3] lg:aspect-square p-6 rounded-2xl text-center`}
                  style={{ backgroundColor: item.bg, transform:`rotate(-3deg)` }}
                  variants={fadeIn}
                  initial={{rotate:0}}
                  whileInView={{rotate:item.rotate}}                  
                >
                  <h3 className="text-lg lato-black text-[#003A2E]">
                    {item.title}
                  </h3>
                  {item.icon}
                  <p className="text-sm merriweather-light text-[#003A2E] mt-2">
                    {item.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
            <motion.button
              onClick={onScrollToContactForm}
              className="bg-[#003A2E] aspect-[5/2] md:aspect-[4/3] lg:aspect-square p-6 rounded-2xl merriweather-light text-center text-white hover:bg-[#045f4d] transition-colors"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p>START</p><p>LEARNING</p><p>TODAY!</p>
            </motion.button>
          </motion.div>

          {/* Unlock Potential Section */}
          <motion.section
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="space-y-4" variants={fadeIn}>
              <h2 className="text-3xl lato-black text-[#003A2E]">
                Unlock Your Potential
              </h2>
              <p className="text-[#003A2E] merriweather-light">
                Discover the path to your future with our comprehensive courses
                designed to empower and inspire.
              </p>
            </motion.div>

            <motion.ul className="space-y-3" variants={staggerChildren}>
              {[
                "Comprehensive curriculum covering all essential aspects",
                "Hands-on projects for real-world experience",
                "Expert instructors with industry experience",
                "Flexible learning schedules to fit your life",
                "Supportive community and resources",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2 text-[#003A2E] merriweather-light"
                  variants={fadeIn}
                >
                  <CheckCircle className="h-5 w-5 text-[#BB914A]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Why Choose Section */}
          <motion.section
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl lato-black text-[#003A2E]"
              variants={fadeIn}
            >
              Why Choose This Course?
            </motion.h2>

            <motion.div className="space-y-6" variants={staggerChildren}>
              {[
                {
                  title: "Designed for Real-World Application",
                  description:
                    "Learn skills that you can apply immediately in your professional or personal life.",
                },
                {
                  title: "Expertly Led by Passionate Instructors",
                  description:
                    "Our instructors bring their passion and expertise into every lesson, making learning engaging and fun.",
                },
                {
                  title: "Flexible and Convenient",
                  description:
                    "With online access, you can learn at your own pace and on your own schedule, without sacrificing quality.",
                },
                {
                  title: "Community and Support",
                  description:
                    "Join a community of like-minded learners who support and motivate each other in reaching their goals.",
                },
              ].map((item, index) => (
                <motion.div key={index} className="space-y-2" variants={fadeIn}>
                  <h3 className="font-semibold text-[#003A2E] lato-regular">
                    {item.title}
                  </h3>
                  <p className="text-[#003A2E] merriweather-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Success Stories Section */}
          <motion.section
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl text-[#003A2E] lato-black"
              variants={fadeIn}
            >
              Success Stories
            </motion.h2>

            <motion.p
              className="text-[#003A2E] merriweather-light"
              variants={fadeIn}
            >
              Hear from our alumni about how this course has made a difference
              in their lives and careers. Their success stories are a testament
              to the transformative power of our courses.
            </motion.p>

            <motion.blockquote
              className="merriweather-light-italic text-[#003A2E] border-l-4 border-[#BB914A] pl-4"
              variants={fadeIn}
            >
              "Transforming my career seemed daunting until I enrolled in this
              course. The skills I learned have opened new doors for me, and
              I've never felt more equipped to tackle the challenges ahead.
              This course was a game-changer." - A satisfied learner
            </motion.blockquote>
          </motion.section>
        </div>
      </div>
    </section>
  );
})

export default AboutCourse;
