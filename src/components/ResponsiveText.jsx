import React, { useState, useEffect } from 'react';

const ResponsiveText = () => {
  const [fontSize, setFontSize] = useState(calculateFontSize(window.innerWidth));

  // Function to calculate font size based on screen width
  function calculateFontSize(width) {
    // Adjust the formula based on your needs
    // Example: Make the font size scale between 12px and 100px based on screen width
    const minSize = 12; // Minimum font size in pixels
    const maxSize = 100; // Maximum font size in pixels
    const screenWidth = 1920; // Base screen width for max font size (adjust as needed)
    
    // Scale the font size based on the width of the window
    const calculatedSize = (width / screenWidth) * maxSize;

    // Clamp the font size between minSize and maxSize
    return Math.max(minSize, Math.min(calculatedSize, maxSize));
  }

  // Effect to handle window resize and update font size
  useEffect(() => {
    const handleResize = () => {
      setFontSize(calculateFontSize(window.innerWidth));
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="responsive-text-container" style={{ padding: '20px' }}>
      <h1 style={{ fontSize: `${fontSize}px`, fontWeight: 'bold', color: '#f59e0b' }}>
        Responsive Heading
      </h1>
      <p style={{ fontSize: `${fontSize * 0.5}px` }}>
        This paragraph text adjusts according to the screen size.
      </p>
    </div>
  );
};

export default ResponsiveText;
