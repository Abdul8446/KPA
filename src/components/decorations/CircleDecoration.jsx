import React from 'react';
import { motion } from 'framer-motion';

const CircleDecoration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute left-2 top-2 md:left-4 md:top-4"
  >
    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#B68C49]/30" />
  </motion.div>
);

export default CircleDecoration;