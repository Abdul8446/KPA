// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollRestoration from '../hooks/useScrollRestoration';

const Layout = ({ children }) => {
  ScrollRestoration()

  return (
    <div className=''>
      <div className="background-attachment"></div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
