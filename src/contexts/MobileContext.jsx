import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const MobileContext = createContext();

// Provider component
export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Check if the screen width is smaller than 640px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on component mount

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// Custom hook to use the MobileContext
export const useMobile = () => useContext(MobileContext);
