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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
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
