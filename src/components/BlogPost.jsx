import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }


  return (
    <section className="">
      <div className="relative w-[95%] rounded-2xl 2xl:rounded-3xl bg-[#fff9] mx-auto px-4 md:px-32 py-10 md:py-16 overflow-hidden border border-white">
        <div className="relative h-64 md:h-96">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-sm font-semibold mb-2 merriweather-regular">{article.category}</p>
            <h1 className="text-3xl md:text-4xl lato-black mb-2">{article.title}</h1>
            <p className="text-sm opacity-75 merriweather-light">By {article.author}</p>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <Link to="/blog">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to articles</span>
              </motion.button>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="merriweather-light rounded-lg">
              <h2 className="leading-relaxed mb-3">{article.content.firstParagraph}</h2>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                {article.content.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="leading-relaxed">{article.content.secondParagraph}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;

