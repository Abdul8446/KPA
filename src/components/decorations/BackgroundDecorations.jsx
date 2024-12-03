import React from 'react';
import { motion } from 'framer-motion';

export const CircleDecoration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute left-2 top-2 md:left-4 md:top-4"
  >
    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#B68C49]/30" />
  </motion.div>
);

export const StarDecoration = () => (
  <motion.div
    initial={{ opacity: 0, rotate: -45 }}
    animate={{ opacity: 1, rotate: 0 }}
    className="absolute right-4 bottom-8 md:right-8 md:bottom-16"
  >
    <svg width="24" height="24" viewBox="0 0 32 32" className="text-[#003A2E] md:w-8 md:h-8">
      <path
        fill="currentColor"
        d="M16 0L19.2 12.8L32 16L19.2 19.2L16 32L12.8 19.2L0 16L12.8 12.8L16 0Z"
      />
    </svg>
  </motion.div>
);

export const SparkleDecoration = () => (
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