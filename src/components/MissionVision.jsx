import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Users, Calendar, Building2, Sparkles, Users2, Slack,  } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = forwardRef((props, ref) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { threshold:0.1,once: true });
  const containerRef = useRef(null);
  const imageRefs = useRef([]); // To store references to all images
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"]
  // });

  // const imageY = useTransform(scrollYProgress, [0, 1], ['-10%' , '10%'])

  useEffect(() => {
    // Loop through each image reference and apply GSAP animation
    imageRefs.current.forEach((image) => {
      gsap.to(image, {
        y: "10%", // Final transform value
        scrollTrigger: {
          trigger: image,  // Use each image as the trigger
          start: "top bottom", // Equivalent to offset: ["start end"]
          end: "bottom top",   // Equivalent to offset: ["end start"]
          scrub: true,         // Smooth animation linked to scroll progress
        },
      });
    });

    // Clean-up (optional for single-page apps)
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    { id: 1, number: "5K", label: "Satisfied Students", icon: <Users className="w-6 h-6" />, rotation:-3 },
    { id: 2, number: "7", label: "Years of Experience", icon: <Calendar className="w-6 h-6" />, rotation:3 },
    { id: 3, number: "16", label: "Learning Programs", icon: <BookOpen className="w-6 h-6" />, rotation:-3 },
    { id: 4, number: "2017", label: "Company Since", icon: <Building2 className="w-6 h-6" />, rotation:-3 }
  ];

  const missions = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovate Learning",
      description: "We leverage technology to create immersive and interactive learning experiences."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Inspire Growth",
      description: "Encouraging personal and professional development for learners of all backgrounds."
    },
    {
      icon: <Slack className="w-6 h-6" />,
      title: "Connect Communities",
      description: "Building bridges between students, instructors, and industries."
    }
  ];


  return (
    <div ref={ref} className="py-16 px-4">
      <div ref={containerRef} className="w-[90%] lg:max-w-6xl 2xl:max-w-[80%] mx-auto">
          {/* Mission Content */}
          <div className="lg:space-x-12 lg:flex w-full max-w-full">
            <div className="relative w-full max-w-full lg:w-1/2 aspect-[4/3] sm:aspect-[4/2] lg:aspect-square overflow-hidden rounded-2xl 2xl:rounded-3xl" 
            >
              <motion.div
                ref={(el) => (imageRefs.current[0] = el)}
                alt="Student on phone"
                className="absolute -inset-y-16 -inset-x-2 rounded-2xl shadow-lg bg-cover bg-center transition duration-[1.5s] ease-in-out"
                style={{backgroundImage:'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80)'}}
              ></motion.div>
            </div>

            <div className="relative mt-12 h-fit lg:mt-0 lg:w-1/2 lg:aspect-square">
              <div className='absolute rounded-2xl 2xl:rounded-3xl border border-white rotate-2 inset-0 opacity-50 z-0'></div>
              <div className='h-fit lg:aspect-square p-8 md:p-12 bg-[#fff9] rounded-2xl 2xl:rounded-3xl border border-white'>
                <h1 className="text-2xl md:text-4xl lato-black text-[#003A2E] mb-4 underline decoration-wavy decoration-[#BB914A]">Mission</h1>
                
                <h2 className="lg:text-lg text-base merriweather-light lg:merriweather-regular text-[#003A2E] mb-6">
                  At Kingpins Education, our mission is to provide a{' '}
                  <span className="relative text-[#BB914A]">
                    nurturing
                  </span>{' '}
                  and{' '}
                  <span className="relative text-[#BB914A]">
                    inclusive
                  </span>{' '}
                  learning environment that prioritizes the individual needs and growth of each student.
                  We are dedicated to teaching with empathy, inspiring a love for learning, and empowering students to achieve their full potential both academically and personally.
                </h2>

                <div className="space-y-4">
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} className="flex items-center gap-3">
                    <motion.div initial={{scale:0}}whileInView={{scale:1}} transition={{duration:0.8}} viewport={{once:true}} className="w-6 h-6 bg-[#BB914A]/20 text-[#BB914A] rounded-full flex items-center justify-center">
                    ✓
                    </motion.div>
                    <span className="merriweather-light text-[#003A2E]">Courses that cater to individual needs</span>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}} className="flex items-center gap-3">
                    <motion.div initial={{scale:0}}whileInView={{scale:1}} transition={{duration:0.8,delay:0.2}} viewport={{once:true}} className="w-6 h-6 bg-[#BB914A]/20 text-[#BB914A] rounded-full flex items-center justify-center">
                    ✓
                    </motion.div>
                    <span className=" merriweather-light text-[#003A2E]">Empathy-driven teaching approach</span>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.4}} className="flex items-center gap-3">
                    <motion.div initial={{scale:0}}whileInView={{scale:1}} transition={{duration:0.8,delay:0.4}} viewport={{once:true}} className="w-6 h-6 bg-[#BB914A]/20 text-[#BB914A] rounded-full flex items-center justify-center">
                    ✓
                    </motion.div>
                    <span className="merriweather-light text-[#003A2E]">Encouraging a lifelong love for learning</span>
                  </motion.div>
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.6}} className="flex items-center gap-3">
                    <motion.div initial={{scale:0}}whileInView={{scale:1}} transition={{duration:0.8,delay:0.6}} viewport={{once:true}} className="w-6 h-6 bg-[#BB914A]/20 text-[#BB914A] rounded-full flex items-center justify-center">
                    ✓
                    </motion.div>
                    <span className="merriweather-light text-[#003A2E]">Empowering students to reach their full potential</span>
                  </motion.div>
                </div>
                </div>
            </div>
          </div>

          {/*  Stats Content */}
          <div className="lg:space-x-12 flex pt-12 flex-col-reverse lg:flex lg:flex-row">
            <div ref={statsRef} className="relative lg:w-1/2 lg:aspect-square h-fit grid grid-cols-2 gap-5 py-8 sm:p-8 sm:gap-10">
              {stats.map((stat) => (
                <motion.div
                  initial={{opacity:0, scale:0.8}}
                  whileInView={{opacity:isInView?1:0, scale:isInView?1:0.8}}
                  transition={{duration:0.7}}
                  className='border border-white rounded-2xl aspect-square'
                  viewport={{amount:0.1,once:true}}                      
                >    
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={isInView?{opacity:1, scale:1, rotate:stat.rotation}:{opacity:0, scale:0.8, rotate:0}}
                    transition={{ duration:0.5 }}
                    className="bg-white p-6 rounded-2xl transform shadow-lg flex flex-col text-center items-center justify-center w-full h-full" 
                    viewport={{amount:0.1,once:true}} 
                  >
                    <div className="text-[#BB914A] mb-2">
                      {stat.icon}
                    </div>
                    <motion.h3 
                      className="text-5xl lato-bold text-[#003A2E]"
                      initial={{ scale: 0.5 }}
                      animate={isInView?{ scale: 1 }:{scale:0.5}}
                      transition={{duration:0.5}}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-600 merriweather-regular">{stat.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="relative lg:w-1/2 aspect-[4/3] sm:aspect-[4/2] lg:aspect-square overflow-hidden rounded-2xl">
              <motion.div
                ref={(el) => (imageRefs.current[1] = el)}
                alt="Student on phone"
                className="absolute -inset-y-16 -inset-x-2 rounded-2xl shadow-lg bg-cover transition duration-[1.5s] ease-in-out"
                style={{backgroundImage:'url(https://www.darwill.com/sites/default/files/2024-01/Marketing%20Personalization.jpg)'}}
              ></motion.div>
            </div>
          </div>

           {/* Vision Content */}
           <div className="lg:space-x-12 lg:flex w-full max-w-full">
              <div className="relative w-full max-w-full lg:mt-12 lg:w-1/2 aspect-[4/3] sm:aspect-[4/2] lg:aspect-square overflow-hidden rounded-2xl 2xl:rounded-3xl" >
                <motion.div
                  ref={(el) => (imageRefs.current[2] = el)}
                  alt="Student on phone"
                  className="absolute -inset-y-10 -inset-x-0 rounded-2xl shadow-lg bg-cover bg-center transition duration-[1.5s] ease-in-out"
                  style={{backgroundImage:'url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
                ></motion.div>
              </div>    
              <div className="relative mt-12 h-fit lg:w-1/2 lg:aspect-square">
                <div className='absolute rounded-2xl 2xl:rounded-3xl border border-white rotate-2 inset-0 opacity-50 z-0'></div>
                <div className='h-fit lg:aspect-square p-8 md:p-12 bg-[#fff9] rounded-2xl 2xl:rounded-3xl border border-white'>
                  <h1 className="text-2xl md:text-4xl lato-black text-[#003A2E] mb-12 underline decoration-wavy decoration-[#BB914A]">
                    Vision
                  </h1>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-lg merriweather-regular text-[#003A2E]">
                        Empathy-Driven Learning:
                      </h2>
                      <p className="text-[#003A2E] merriweather-light mt-2">
                        We create an environment that places empathy, understanding, and care at the forefront of every lesson.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg merriweather-regular text-[#003A2E]">
                        Personal Growth:
                      </h2>
                      <p className="text-[#003A2E] merriweather-light mt-2">
                        Fostering a space where every student can develop as a compassionate and confident individual.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg merriweather-regular text-[#003A2E]">
                        Tailored Education:
                      </h2>
                      <p className="text-[#003A2E] merriweather-light mt-2">
                        Personalizing learning to suit each student's needs and encouraging a passion for knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>        
      </div>

    </div>
  );
});

export default MissionVision;


