import React,{ useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from '../assets/images/kpa-milestone-1.png'
import image2 from '../assets/images/kpa-milestone-2.png'
import image3 from '../assets/images/kpa-milestone-3.png'
// Import images dynamically that match the pattern
const milestoneImages = [image1,image2,image3]
console.log(milestoneImages)
gsap.registerPlugin(ScrollTrigger);

function Milestones() {
    const containerRef = useRef(null);
    const imageRefs = useRef([]); // Array of refs
    const [activeCard, setActiveCard] = useState(null); // Track the active card
    const cardRefs = useRef([]); // Refs to track all cards

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.indexOf(entry.target);

                    if (entry.isIntersecting) {
                        setActiveCard(index); // Mark the card as active when entering
                    } else if (!entry.isIntersecting && activeCard === index) {
                        setActiveCard(null); // Remove the card as active when fully out
                    }
                });
            },
            { threshold: 0.6 } // Trigger when 60% of the card is in view
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [activeCard]);

    useEffect(() => {
      const container = containerRef.current;
  
      // GSAP animations for each imageRef
      imageRefs.current.forEach((image, index) => {
        if (image) {
          gsap.to(image, {
            y: "10%",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
  
      // Clean-up (optional for single-page apps)
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);
    

  return (
    <section className=''>
        <div ref={containerRef} className='bg-[#fff9] border w-[95%] mx-auto pt-10 pb-32 2xl:pb-52 rounded-2xl border-white'>
            <h1 className='text-2xl md:text-4xl lato-black text-[#003A2E] w-[80%] mx-auto mb-10'>Milestones</h1>
          
            {/* Number Indicators */}
            <div className="mb-10 flex justify-center sticky top-10 w-full">
                {[1, 2, 3, 4, 5].map((mlsNum, index) => (
                    <span
                        key={index}
                        className={`text-2xl sm:mx-6 rounded-full scale-50 aspect-square sm:scale-100 w-14 h-14 flex items-center justify-center ${
                            activeCard === index
                                ? "bg-[#C1EBDF] border border-[#003A2E] text-[#003A2E]"
                                : "bg-gray-300 text-gray-600"
                        }`}
                    >
                        {mlsNum}
                    </span>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 w-[80%] mx-auto">
                {[
                    { bg: "white",delay: 0.2,text: "#003A2E",number:"#E0F5EF",heading: "Foundation and Beginnings",year: "2017",para1:"Kingpins Academy was established with a vision to provide quality education and empower students.",para2: "",},
                    { bg: "#D7C098", delay: 0.4,text:"",number:"#F4EDE2",heading:"Expanding Horizons",year:"2018",para1:"Affiliated with prestigious Indian and UK universities, offering students international exposure and opportunities." },
                    { bg: "#B1E7D7", delay: 0.4,text:"",number:"#E0F5EF",heading:"A New Chapter",year:"2022",para1:"Moved to a modern and independent facility, providing students with a conducive learning environment." },
                    { bg: "#D7C098", delay: 0.4,text:"",number:"#F4EDE2",heading:"Launching New Initiatives",year:"2023",para1:"Introduced the SkyBlue Kids Development Program, catering to the needs of young learners",para2:"Launched the Unleash Development program, focused on empowering students to reach their full potential." },
                    { bg: "white", delay: 0.4,text:"",number:"#E0F5EF",heading:"Soaring to New Heights",year:"2024",para1:"Scaled up operations with a clearer focus on objectives and inclusivity.",para2:"Expanded offerings to meet the evolving needs of students and the community.",para3:"Strengthened partnerships and collaborations." },
                ].map((card, index) => (     
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`${index === 0 ? "bg-white" : index === 1? "bg-[#D7C098]" : index === 2? "bg-[#B1E7D7]" : index === 3? "bg-[#D7C098]": index === 4? "bg-white" : "" } flex flex-col-reverse lg:grid lg:grid-cols-9 gap-8 lg:gap-10 items-center p-8 rounded-2xl md:rounded-[2rem] 2xl:rounded-[3rem] shadow-md h-[calc(100vh-14rem)] 2xl:h-[calc(100vh-24rem)] sticky top-28 2xl:top-48 overflow-hidden`}
                    >
                        {/* Background number */}
                        <motion.div
                            className={`absolute text-[calc((100vh-12rem)/2)] lg:text-[calc(100vh-12rem)] lato-bold tracking-tighter ${index%2===0?"text-[#E0F5EF]":"text-[#F4EDE2]"} -left-24 md:-left-32 2xl:-left-60 -bottom-16 lg:bottom-[unset]`}
                        >
                            0{index + 1}
                        </motion.div>

                        {/* Text content */}
                        <motion.div
                            className="my-auto items-center w-full lg:w-[unset] lg:col-span-5 z-10"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex justify-between sm:gap-16 items-center">
                                <h2 className="text-[#003A2E] text-xl sm:text-3xl 2xl:text-5xl lato-black">
                                    {card.heading}
                                </h2>
                                <h1 className="text-2xl sm:text-6xl 2xl:text-9xl text-[#003A2E] lato-black">
                                    {card.year}
                                </h1>
                            </div>
                            <p className="text-[#003A2E] 2xl:text-xl merriweather-light text-sm sm:text-[unset] sm:merriweather-regular mt-2 sm:w-[80%]">{card.para1}</p>
                            <p className="text-[#003A2E] 2xl:text-xl merriweather-light text-sm sm:text-[unset] sm:merriweather-regular mt-2 sm:w-[80%]">{card.para2}</p>
                            <p className="text-[#003A2E] 2xl:text-xl merriweather-light text-sm sm:text-[unset] sm:merriweather-regular mt-2 sm:w-[80%]">{card.para3}</p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            className="w-full lg:w-[unset] lg:col-span-4 relative h-1/2 lg:h-full overflow-hidden rounded-xl lg:rounded-3xl z-10"
                        >
                            <div
                                ref={(el) => (imageRefs.current[index] = el)}
                                alt="Person holding phone"
                                className="rounded-lg absolute bg-cover bg-center -inset-y-14 2xl:-inset-y-20 inset-x-0 transition duration-[1.5s] ease-in-out"
                                style={{backgroundImage: `url(${milestoneImages[index] || 'https://images.unsplash.com/photo-1536153592592-47242aa0fc8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce3d02858565966a3bab86db4ab40f4c&auto=format&fit=crop&w=2551&q=80'})`
                                }}
                            ></div>
                        </motion.div>
                    </div>
                ))}
        </div>
        </div>
    </section>
  )
}

export default Milestones

