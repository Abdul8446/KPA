import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle, ArrowDown, Cuboid, GraduationCap, Clock } from "lucide-react";

export const HeroCourseDetails = ({onScrollToAboutCourse}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Adds a delay between children animations
      },
    },
  };

  // Trigger animation only when the component comes into view
  const containerInViewRef = useRef(null);
  const inView = useInView(containerInViewRef, { once: true });

  return (
    <div ref={containerInViewRef} className="grid gap-12">
      {/* Hero Top */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col text-center lg:flex-row py-16 px-4 lg:justify-around w-[95%] mx-auto rounded-2xl 2xl:rounded-3xl bg-[#fff9] border border-white"
      >
        <motion.h3
          variants={fadeIn}
          className="self-center mb-8 text-xl lg:text-2xl 2xl:text-4xl lato-bold underline text-[#003A2E] decoration-wavy decoration-[#BB914A]"
        >
          Course
        </motion.h3>
        <motion.div variants={fadeIn}>
          <motion.h1
            variants={fadeIn}
            className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-[#003A2E] mb-6"
          >
            Mastering Time Management:
            <span className="block text-[#BB914A]">Strategies for Student Success</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-gray-600 mb-8 merriweather-light"
          >
            Time management strategies for academic and personal success.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="flex justify-center items-center"
        >
          <motion.button
            onClick={onScrollToAboutCourse}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#003A2E] merriweather-light text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 2xl:text-lg"
          >
            Details
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="w-[95%] flex flex-col lg:flex-row mx-auto gap-8"
      >
        <motion.div
          variants={fadeIn}
          className="relative aspect-[4/3] lg:w-2/5 lg:aspect-square rounded-2xl 2xl:rounded-3xl border overflow-hidden border-white"
        >
          <motion.div
            style={{
              y: imageY,
              backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80)`,
            }}
            alt="Students studying"
            className="absolute -inset-x-2 -inset-y-16 bg-cover bg-center transition duration-[1.5s] ease-in-out"
          />
        </motion.div>
        <motion.div className="lg:w-3/5 flex flex-col gap-8">
          <motion.div
            variants={fadeIn}
            className="lg:h-[70%] bg-[#fff9] flex flex-col md:flex-row justify-between gap-10 p-12 2xl:p-20 w-full rounded-2xl 2xl:rounded-3xl border border-white overflow-hidden"
          >
            <motion.div variants={fadeIn} className="md:w-1/2 flex flex-col justify-center">
              <Cuboid className="text-[#003A2E] w-10 h-10 mb-5 transform rotate-[30deg]" />
              <p className="merriweather-regular text-lg 2xl:text-2xl">
                Balance your studies and personal life with effective time management.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="md:w-1/2 flex flex-col justify-center 2xl:text-2xl merriweather-light"
            >
              {[
                "Study Schedules",
                "Prioritization Techniques",
                "Avoiding Procrastination",
                "Stress Management",
                "Goal Setting",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  variants={fadeIn}
                >
                  <CheckCircle className="text-[#003A2E] w-5 h-5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="flex gap-8 lg:h-[30%]" variants={fadeIn}>
            {[
              {
                Icon: GraduationCap,
                title: "Status",
                content: "Open",
              },
              {
                Icon: Clock,
                title: "Duration",
                content: "6 Months",
              },
            ].map(({ Icon, title, content }, index) => (
              <motion.div
                key={index}
                className="border border-white w-1/2 py-6 rounded-2xl 2xl:rounded-3xl flex flex-col justify-center items-center"
                variants={fadeIn}
              >
                <Icon className="w-6 2xl:w-10 h-6 2xl:h-10" />
                <h3 className="lato-bold text-xl 2xl:text-3xl">{title}</h3>
                <p className="merriweather-light text-lg 2xl:text-2xl">{content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
