import article1 from '../assets/images/article-1.avif'
import article2 from '../assets/images/article-2.avif'
import article3 from '../assets/images/article-3.avif'
import article4 from '../assets/images/article-4.avif'
import article5 from '../assets/images/article-5.avif'
import article6 from '../assets/images/article-6.avif'
import article7 from '../assets/images/article-7.avif'
import article8 from '../assets/images/article-8.avif'

export const articles = [
  {
    id: 1,
    title: "Creative Coding for Kids: Introducing the Basics of Computer Science",
    author: "SOPHIA MARTINEZ",
    category: "DIGITAL EDUCATION",
    image: article1,
    featured: true,
    gradient: "from-[#003A2E]/10 to-[#B68C49]/10",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    excerpt: "Discover how to introduce children to the fascinating world of computer science through creative and engaging coding activities.",
    content: {
      firstParagraph: "In today's digital age, introducing children to computer science has become more crucial than ever. Through creative coding, we can spark their interest in technology while developing essential problem-solving skills. Creative coding combines the logical thinking of computer science with artistic expression, making it an ideal entry point for young minds. By using visual programming languages and interactive projects, children can see immediate results of their code, making the learning process both engaging and rewarding.",
      points: [
        "Enhanced logical thinking and problem-solving abilities",
        "Development of creativity and innovation skills",
        "Better understanding of the digital world",
        "Preparation for future career opportunities"
      ],
      secondParagraph: "The key is to make learning fun and accessible, using age-appropriate tools and projects that capture their imagination while building fundamental programming concepts."
    }
  },
  {
    id: 2,
    title: "Lifelong Learning: Why You're Never Too Old to Learn Something New",
    author: "DAVID HUMPHRIES",
    category: "LEARNING TECHNIQUES",
    image: article2,
    featured: true,
    gradient: "from-[#B68C49]/10 to-[#003A2E]/10",
    date: "Feb 27, 2024",
    readTime: "4 min read",
    excerpt: "Explore the benefits of continuous learning and discover why age should never be a barrier to acquiring new knowledge and skills.",
    content: {
      firstParagraph: "The concept of lifelong learning has gained significant importance in our rapidly evolving world. As technology advances and industries transform, the ability to learn and adapt becomes increasingly valuable. Research shows that continuous learning not only enhances career prospects but also contributes to better mental health and cognitive function. The brain's plasticity allows it to form new neural connections throughout life, making learning possible at any age.",
      points: [
        "Improved cognitive function and memory",
        "Enhanced career opportunities",
        "Greater adaptability to change",
        "Increased self-confidence and personal satisfaction"
      ],
      secondParagraph: "Whether it's learning a new language, picking up a musical instrument, or mastering a technical skill, the journey of learning brings both personal and professional rewards."
    }
  },
  {
    id: 3,
    title: "The Future of Artificial Intelligence in Healthcare",
    author: "ELENA RODRIGUEZ",
    category: "TECHNOLOGY",
    image: article3,
    featured: false,
    gradient: "from-[#003A2E]/10 to-[#B68C49]/10",
    date: "Feb 26, 2024",
    readTime: "6 min read",
    excerpt: "An in-depth look at how AI is revolutionizing healthcare delivery and improving patient outcomes.",
    content: {
      firstParagraph: "Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic assistance to personalized treatment plans, AI technologies are enhancing medical capabilities and improving patient care. Machine learning algorithms can now analyze medical images with remarkable accuracy, helping doctors detect diseases earlier and make more precise diagnoses. AI-powered systems are also being used to predict patient outcomes and recommend optimal treatment strategies.",
      points: [
        "Medical imaging and diagnosis",
        "Drug discovery and development",
        "Personalized medicine",
        "Predictive healthcare analytics",
        "Administrative task automation"
      ],
      secondParagraph: "As these technologies continue to evolve, we can expect even more innovative applications that will reshape the future of healthcare delivery."
    }
  },
  {
    id: 4,
    title: "Sustainable Living: Small Changes, Big Impact",
    author: "MAYA PATEL",
    category: "LIFESTYLE",
    image: article4,
    featured: false,
    gradient: "from-[#B68C49]/10 to-[#003A2E]/10",
    date: "Feb 25, 2024",
    readTime: "5 min read",
    excerpt: "Practical tips and strategies for adopting a more sustainable lifestyle without overwhelming changes.",
    content: {
      firstParagraph: "Making the transition to a more sustainable lifestyle doesn't have to be overwhelming. Small, consistent changes in our daily habits can lead to significant positive impacts on the environment. From reducing single-use plastics to choosing energy-efficient appliances, every action counts. The key is to start with manageable changes and gradually build more sustainable habits over time.",
      points: [
        "Reducing plastic consumption",
        "Implementing energy-saving practices",
        "Supporting local and sustainable businesses",
        "Practicing mindful consumption",
        "Composting and recycling"
      ],
      secondParagraph: "Remember, sustainable living is a journey, not a destination. Every small step contributes to a larger positive impact on our planet."
    }
  },
  {
    id: 5,
    title: "The Psychology of Productivity: Understanding Your Work Habits",
    author: "JAMES WILSON",
    category: "PRODUCTIVITY",
    image: article5,
    featured: true,
    gradient: "from-[#003A2E]/10 to-[#B68C49]/10",
    date: "Feb 24, 2024",
    readTime: "7 min read",
    excerpt: "Dive deep into the psychological factors that influence productivity and learn how to optimize your work habits.",
    content: {
      firstParagraph: "Understanding the psychology behind productivity can help us work smarter, not harder. Our work habits are influenced by various psychological factors, from motivation and focus to decision-making patterns. Research in cognitive psychology has revealed important insights about how our brains process information and manage tasks. By understanding these patterns, we can design better work routines and environments.",
      points: [
        "The role of motivation and reward systems",
        "Impact of environment on focus",
        "Decision fatigue and mental energy management",
        "The importance of breaks and recovery",
        "Goal-setting and achievement psychology"
      ],
      secondParagraph: "By applying these psychological principles, we can create more effective work habits and achieve better results with less stress."
    }
  },
  {
    id: 6,
    title: "The Art of Digital Photography: Beyond Basic Techniques",
    author: "SARAH CHEN",
    category: "PHOTOGRAPHY",
    image: article6,
    featured: false,
    gradient: "from-[#B68C49]/10 to-[#003A2E]/10",
    date: "Feb 23, 2024",
    readTime: "6 min read",
    excerpt: "Advanced tips and creative techniques for taking your digital photography skills to the next level.",
    content: {
      firstParagraph: "Digital photography is more than just pointing and shooting. It's an art form that combines technical knowledge with creative vision. Understanding advanced techniques can help you capture truly remarkable images. From mastering manual settings to understanding composition principles, developing your photography skills requires both practice and knowledge.",
      points: [
        "Understanding light and exposure",
        "Composition techniques and rules",
        "Post-processing workflows",
        "Equipment selection and usage",
        "Storytelling through images"
      ],
      secondParagraph: "Whether you're an amateur enthusiast or aspiring professional, these advanced techniques will help you create more compelling and technically sound photographs."
    }
  },
  {
    id: 7,
    title: "Mindfulness in the Digital Age: Finding Balance",
    author: "ALEX THOMPSON",
    category: "WELLNESS",
    image: article7,
    featured: false,
    gradient: "from-[#003A2E]/10 to-[#B68C49]/10",
    date: "Feb 22, 2024",
    readTime: "5 min read",
    excerpt: "Practical strategies for maintaining mindfulness and mental well-being in our increasingly connected world.",
    content: {
      firstParagraph: "In our hyper-connected digital world, maintaining mindfulness and mental well-being has become both more challenging and more important than ever. The constant stream of information and notifications can overwhelm our mental space. Mindfulness practices can help us stay grounded and maintain perspective in the digital age. By developing awareness of our digital habits and implementing mindful practices, we can create a healthier relationship with technology.",
      points: [
        "Setting boundaries with technology",
        "Practicing digital detox periods",
        "Implementing mindful browsing habits",
        "Creating tech-free zones and times",
        "Developing present-moment awareness"
      ],
      secondParagraph: "The goal is not to eliminate technology but to use it more intentionally and maintain our mental well-being in the process."
    }
  },
  {
    id: 8,
    title: "Modern Web Development: Trends and Best Practices",
    author: "MICHAEL CHANG",
    category: "DEVELOPMENT",
    image: article8,
    featured: true,
    gradient: "from-[#B68C49]/10 to-[#003A2E]/10",
    date: "Feb 21, 2024",
    readTime: "8 min read",
    excerpt: "Stay up-to-date with the latest trends and best practices in modern web development.",
    content: {
      firstParagraph: "The landscape of web development is constantly evolving, with new technologies and approaches emerging regularly. Staying current with modern practices is essential for creating efficient, maintainable, and user-friendly web applications. From performance optimization to accessibility considerations, modern web development encompasses a wide range of important aspects.",
      points: [
        "Performance optimization techniques",
        "Progressive Web Apps (PWAs)",
        "Responsive and mobile-first design",
        "Modern JavaScript frameworks and tools",
        "Web accessibility standards",
        "Security best practices"
      ],
      secondParagraph: "Understanding and implementing these practices helps create better web experiences for all users while maintaining code quality and performance."
    }
  }
];