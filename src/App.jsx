import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { AnimationProvider } from './contexts/AnimationContext';
import Loader from './components/Loader';
import { MobileProvider } from './contexts/MobileContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimationProvider>
      <MobileProvider>
        {/* <Loader/> */}
        <Router>
          {/* <Navbar />  */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Router>
      </MobileProvider>  
      </AnimationProvider>
    </>
  )
}

export default App
