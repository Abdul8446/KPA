import React from 'react';
import { motion } from 'framer-motion';

const SparkleDecoration = () => (
  <motion.div
    initial={{ opacity: 0, rotate: 45 }}
    animate={{ opacity: 1, rotate: 0 }}
    className="absolute left-1/4 bottom-4 md:bottom-8"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#B68C49] md:w-6 md:h-6">
      <path
        fill="currentColor"
        d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z"
      />
    </svg>
  </motion.div>
);

export default SparkleDecoration;