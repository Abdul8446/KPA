import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import { CircleDecoration, SparkleDecoration, StarDecoration } from './decorations/BackgroundDecorations';
import ArticleHeader from './blog/ArticleHeader';

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003A2E] mb-4">Article not found</h1>
          <Link to="/blog" className="text-[#B68C49] hover:underline">
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-6 md:pt-10">
      <div className="relative w-[95%] rounded-2xl bg-white mx-auto px-4 py-10 md:py-16 overflow-hidden">
        <CircleDecoration />
        <StarDecoration />
        <SparkleDecoration />

        <div className="relative px-4 md:px-32 z-10">
          <Link to="/blog">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-[#003A2E] mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to articles</span>
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <ArticleHeader article={article} />

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-[#003A2E]/80 leading-relaxed">
                {article.content}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#003A2E]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#B68C49]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export default BlogPost;