import React from 'react';
import PropTypes from 'prop-types';
import { Clock, Calendar } from 'lucide-react';

const ArticleHeader = ({ article }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-4 text-sm text-[#003A2E]/70">
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        <span>{article.date}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{article.readTime}</span>
      </div>
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-[#003A2E] lato-regular">
      {article.title}
    </h1>

    <div className="flex items-center gap-2">
      <span className="text-[#003A2E] font-semibold">{article.author}</span>
      <span className="text-[#B68C49]">•</span>
      <span className="text-[#003A2E]/70">{article.category}</span>
    </div>
  </div>
);

ArticleHeader.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string,
    readTime: PropTypes.string
  }).isRequired
};

export default ArticleHeader;