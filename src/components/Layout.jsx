// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#E9E3D4]">
        <div className="background-attachment"></div>
      <Header />
      {/* <main> */}
        {children}
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Layout;
