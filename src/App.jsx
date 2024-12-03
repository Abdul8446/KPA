import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { AnimationProvider } from './contexts/AnimationContext';
import Loader from './components/Loader';
import { MobileProvider } from './contexts/MobileContext';
import Layout from './components/Layout';
import CoursesPage from './pages/CoursesPage';
import { CategoryProvider } from './contexts/CategoryContext';
import AboutPage from './pages/AboutPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import useScrollRestoration from './hooks/useScrollRestoration';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';

function ScrollManager() {
  useScrollRestoration();
  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimationProvider>
      <MobileProvider>
      <CategoryProvider>
        {/* <Loader/> */}
        <Router>
          <Layout>
          <ScrollManager />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/course-details" element={<CourseDetailsPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/blog" element={<BlogsPage/>} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
            </Routes>
          </Layout>
        </Router>
      </CategoryProvider>  
      </MobileProvider>  
      </AnimationProvider>
    </>
  )
}

export default App
