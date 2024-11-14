import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Sparkles } from 'lucide-react';

// SVG Decorative Elements
const CircleDecoration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute left-4 top-4"
  >
    <div className="w-12 h-12 rounded-full bg-purple-200/50" />
  </motion.div>
);

const StarDecoration = () => (
  <motion.div
    initial={{ opacity: 0, rotate: -45 }}
    animate={{ opacity: 1, rotate: 0 }}
    className="absolute right-8 bottom-16"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" className="text-purple-600">
      <path
        fill="currentColor"
        d="M16 0L19.2 12.8L32 16L19.2 19.2L16 32L12.8 19.2L0 16L12.8 12.8L16 0Z"
      />
    </svg>
  </motion.div>
);

const SparkleDecoration = () => (
  <motion.div
    initial={{ opacity: 0, rotate: 45 }}
    animate={{ opacity: 1, rotate: 0 }}
    className="absolute left-1/4 bottom-8"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-400">
      <path
        fill="currentColor"
        d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z"
      />
    </svg>
  </motion.div>
);

const articles = [
  {
    id: 1,
    title: "Creative Coding for Kids: Introducing the Basics of Computer Science",
    author: "SOPHIA MARTINEZ",
    category: "DIGITAL EDUCATION",
    image: "https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b62b_pexels-artem-podrez-7242505.jpg",
    featured: true,
    gradient: "from-purple-100 to-pink-50"
  },
  {
    id: 2,
    title: "Lifelong Learning: Why You're Never Too Old to Learn Something New",
    author: "DAVID HUMPHRIES",
    category: "LEARNING TECHNIQUES",
    image: "https://cdn.prod.website-files.com/66cdea42c062fe4a0348b2c8/66cdea42c062fe4a0348b62b_pexels-artem-podrez-7242505.jpg",
    featured: true,
    gradient: "from-green-50 to-blue-50"
  }
];

const ArticleCard = ({ article }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className={`relative bg-gradient-to-br ${article.gradient} rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
  >
    <div className="relative z-10">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover rounded-2xl"
        />
        {article.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 left-4 bg-purple-900/90 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            Featured
          </motion.div>
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="font-semibold text-purple-900">{article.author}</span>
          <span className="text-purple-400">•</span>
          <span className="text-purple-600">{article.category}</span>
        </div>

        <h3 className="text-xl font-bold text-purple-900 mb-4 leading-snug">
          {article.title}
        </h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-purple-900 font-semibold relative inline-block group"
        >
          Read Articles
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.button>
      </div>
    </div>

    {/* Card-specific decorations */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full -mr-8 -mt-8" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-200/20 to-transparent rounded-full -ml-12 -mb-12" />
  </motion.div>
);

const LatestReads = () => {
  return (
    <section className='pt-10'>
        <div className="relative container rounded-2xl bg-white mx-auto px-4 py-16 overflow-hidden">
        {/* Background decorations */}
        <CircleDecoration />
        <StarDecoration />
        <SparkleDecoration />
        
        <div className="relative px-32 z-10">
            <div className="flex justify-between items-center mb-12">
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold text-purple-900"
            >
                Latest Reads
            </motion.h1>
         
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
            </div>
        </div>

        {/* Additional background decorations */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
    </section>
  );
};

// Add required keyframes for blob animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default LatestReads;