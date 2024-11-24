import React, { createContext, useState, useContext } from 'react';

// Create the context
const CategoryContext = createContext();

// Custom hook to use the context
export const useCategory = () => useContext(CategoryContext);

// Provider component
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
