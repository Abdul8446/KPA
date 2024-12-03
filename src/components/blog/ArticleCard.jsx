import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useInView } from 'react-intersection-observer';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ArticleCard = ({ article }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-gradient-to-br ${article.gradient} rounded-3xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden w-full`}
    >
      <div className="relative z-10">
        <div className="relative aspect-[16/9] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[3/2] xl:aspect-[16/9] overflow-hidden rounded-2xl">
          <LazyLoadImage
            src={article.image}
            alt={article.title}
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
            placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E`}
          />
          {article.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              className="absolute top-2 left-2 sm:top-3 md:top-4 sm:left-3 md:left-4 bg-[#003A2E]/90 text-[#E9E3D4] px-2 py-1 sm:px-3 md:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Featured</span>
              <span className="sm:hidden">New</span>
            </motion.div>
          )}
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm flex-wrap">
            <span className="font-semibold text-[#003A2E] whitespace-nowrap">{article.author}</span>
            <span className="text-[#B68C49]">•</span>
            <span className="text-[#003A2E]/70 whitespace-nowrap overflow-hidden text-ellipsis">{article.category}</span>
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#003A2E] leading-snug line-clamp-2 sm:line-clamp-3">
            {article.title}
          </h3>

          <div className="hidden sm:block text-sm text-[#003A2E]/70 line-clamp-2">
            {article.excerpt}
          </div>

          <Link to={`/blog/${article.id}`} className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#003A2E] font-semibold relative inline-block group text-sm sm:text-base"
            >
              Read Article
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 sm:h-1 bg-[#B68C49] rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#003A2E]/10 to-transparent rounded-full -mr-3 -mt-3 sm:-mr-4 sm:-mt-4 md:-mr-8 md:-mt-8" />
      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-tr from-[#B68C49]/10 to-transparent rounded-full -ml-6 -mb-6 sm:-ml-8 sm:-mb-8 md:-ml-12 md:-mb-12" />
    </motion.div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    gradient: PropTypes.string.isRequired,
    date: PropTypes.string,
    readTime: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

export default ArticleCard;