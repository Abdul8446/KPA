import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';
import { CircleDecoration, SparkleDecoration, StarDecoration } from './decorations/BackgroundDecorations';
import ArticleCard from './Blog/ArticleCard';

const Blogs = () => {
  return (
    <section className="pt-6 md:pt-10">
      <div className="relative w-[95%] rounded-2xl border border-white bg-[#fff9] mx-auto px-4 py-10 md:py-16 overflow-hidden">
        <CircleDecoration />
        <StarDecoration />
        <SparkleDecoration />
        
        <div className="relative px-4 md:px-32 z-10">
          <div className="flex justify-between items-center mb-6 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-4xl font-bold text-[#003A2E] lato-regular"
            >
              Latest Reads
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* <div className="absolute top-1/2 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#003A2E]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#B68C49]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-[#003A2E]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" /> */}
      </div>
    </section>
  );
};

export default Blogs;