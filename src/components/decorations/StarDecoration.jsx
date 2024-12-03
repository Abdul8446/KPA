import React from 'react';
import { motion } from 'framer-motion';

const StarDecoration = () => (
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

export default StarDecoration;